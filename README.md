# cloudflare-pages-routing

A Cloudflare Pages project used to test the wildcard behavior of [functions routing](https://developers.cloudflare.com/pages/platform/functions#functions-routing).

## Route Layout

There are two different types of wildcard routes.

```
functions
├── bar
│   └── [[path]].js
└── foo
    └── [path].js
```

## HTML Layout

There is an index page and a 404 page.

```
public
├── 404.html
├── foo
│   └── index.html
└── index.html
```

## Run Locally

Run this project locally with `wrangler`.

```shell
npm install # if needed
npx wrangler pages dev ./public
```

## Testing

The below table shows URLs and responses when testing.

| URL                                                       | Response           |
|-----------------------------------------------------------|--------------------|
| http://localhost:8788/foo/                                | `/foo/index.html`  |
| http://localhost:8788/foo/index.html                      | `/foo/[pages].js`  |
| http://localhost:8788/bar/                                | `/bar/[[path]].js` |
| http://localhost:8788/bar/index.html                      | `/bar/[[path]].js` |
| https://cloudflare-pages-routing.pages.dev/foo/           | `/foo/index.html`  |
| https://cloudflare-pages-routing.pages.dev/foo/index.html | `/foo/[pages].js`  |
| https://cloudflare-pages-routing.pages.dev/bar/           | `/bar/[[path]].js` |
| https://cloudflare-pages-routing.pages.dev/bar/index.html | `/bar/[[path]].js` |
