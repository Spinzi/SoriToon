export const cache = {};

export async function get_cache(url) {
    console.log(`Getting item with cache method - ${url}`);
    if (cache[url]) {
        console.log("Cache already existent - skipping fetch");
        return cache[url];
    }
    console.log("Cache non existent - fetching");
    const resp = await fetch(url);

    if (!resp.ok) {
        throw new Error(`Failed to fetch "${url}" (${resp.status})`);
    }

    const data = await resp.json();
    cache[url] = data;

    return data;
}