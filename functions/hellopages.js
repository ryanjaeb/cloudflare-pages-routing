// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
export async function onRequestGet(context) {
    const res = new Response("Hello Pages!")
    res.headers.set("Content-Type", "text/plain")
    return res;
}