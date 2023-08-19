require("dotenv").config();

const path = require("path");
const fs = require("fs");
const ogs = require("open-graph-scraper");
const axios = require("axios").default;
const BASE_PATH = path.resolve(`${__dirname}/..`);
const exclude = require(BASE_PATH + "/data/exclude.json");
// Configure your username in .env
const REPOS_URL = `https://api.github.com/users/${process.env.GH_USERNAME}/repos?sort=pushed&per_page=100`;
const REPOS_CACHE_FILE = path.resolve(BASE_PATH + "/data/repos-cache.json");
const INCLUDE_FORKS = process.env.INCLUDE_FORKS === "true";

// Fetch the repos from the github API
axios.get(REPOS_URL).then(async res => {
    console.log("-> Username : " + process.env.GH_USERNAME);
    console.log("-> Include Forks : " + INCLUDE_FORKS);
    console.log(`-> Found ${res.data.length} repos!`);
    let repos = [];
    for (let repo of res.data) {
        // Ignore the repo if it is a fork or if it is excluded by /data/exclude.json
        if ((repo.fork && !INCLUDE_FORKS) || exclude.includes(repo.name))
            continue;

        // Fetch OpenGraph data of the repo to get the preview image
        let og_data = await ogs({ url: repo.html_url });
        let image = og_data.result.ogImage[0].url;

        console.log("Fetched preview image of " + repo.name);
        repos.push({
            name: repo.name,
            stars: repo.stargazers_count,
            description: repo.description,
            url: repo.html_url,
            fork: repo.fork,
            image: image
        });
    }

    // Save the repos to the cache file
    fs.writeFileSync(REPOS_CACHE_FILE, JSON.stringify(repos), {
        flag: "w+",
        overwrite: true
    });
    console.log("-> Saved to cache file.");
});
