// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
export async function onRequestGet(context) {
    const res = new Response("/foo/[path].js")
    res.headers.set("Content-Type", "text/plain")
    return res;
}