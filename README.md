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

| URL                                             | Response         |
|-------------------------------------------------|------------------|
| http://localhost:8788/foo/                      | 404 - Not Found  |
| http://localhost:8788/bar/                      | /bar/[[path]].js |
| https://cloudflare-pages-routing.pages.dev/foo/ | 404 - Not Found  |
| https://cloudflare-pages-routing.pages.dev/bar/ | /bar/[[path]].js |
