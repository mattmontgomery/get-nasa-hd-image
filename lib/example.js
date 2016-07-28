import { getHdUrl } from './index.js';


async function main() {
    const url = await getHdUrl();
    console.log(url);
    return url;
}

main();
