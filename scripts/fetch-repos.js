import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_PATH = path.resolve(`${__dirname}/..`);

import fs from "fs";
import ogs from "open-graph-scraper";
import axios from "axios";
import settings from "../data/settings.js";
// Configure your username in settings.js
const REPOS_URL = `https://api.github.com/users/${settings.username}/repos?sort=pushed&per_page=100`;
const REPOS_CACHE_FILE = path.join(BASE_PATH, "data", "repos-cache.json");

// Fetch the repos from the github API
axios.get(REPOS_URL).then(async res => {
    console.log("-> Username : " + settings.username);
    console.log("-> Include Forks : " + settings.show_forks);
    console.log(`-> Found ${res.data.length} repos!`);
    let repos = [];
    for (let repo of res.data) {
        // Ignore the repo if it is a fork or if it is excluded by /data/settings.js
        if (
            (repo.fork && !settings.show_forks) ||
            settings.exclude.includes(repo.name)
        )
            continue;

        // Fetch OpenGraph data of the repo to get the preview image
        // only if show_banner is true in /data/settings.js
        let image = null;

        if (settings.show_banner) {
            let og_data = await ogs({ url: repo.html_url });
            image = og_data.result.ogImage[0].url;

            console.log("Fetched preview image of " + repo.name);
        }

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
