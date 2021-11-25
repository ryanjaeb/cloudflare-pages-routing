// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
export async function onRequestGet(context) {
    const res = new Response("/bar/[[path]].js")
    res.headers.set("Content-Type", "text/plain")
    return res;
}