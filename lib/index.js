const request = require("request");

const endpoint = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;

function getResponse() {
    return new Promise((resolve, reject) => {
        request(endpoint, (err, resp, body) => {
            resolve(body);
        });
    });
}

async function getHdUrl() {
    try {
        const resp = await getResponse();
        return JSON.parse(resp).hdurl;
    } catch(e) {
        return null;
    }
}

async function getUrl() {
    try {
        const resp = await getResponse();
        return JSON.parse(resp).url;
    } catch(e) {
        return null;
    }
}

module.exports = {
    getHdUrl, getUrl
};
