// If you change this file, you will need to rebuild the frontend.
// If you change the excluded repos or the show_banner setting, you will need to run 'npm run fetch-repos' again.

const settings = {
    // Username of the github account
    username: "SkwalExe",
    // The port to run the server on
    port: 8008,
    // Repos to hide from the portfolio
    exclude: ["SkwalExe", "graph"],
    // The title of the portfolio (instead of 'My Projects')
    title: "My Projects",
    // Whether or not to show the banner of github repos.
    // The banner of your repo can be changed in your repo's settings > social preview image.
    show_banner: true,
    // Whether or not to show the stars of the repos
    show_stars: true,
    // The size of the gap between the different tiles/cards
    gap_size: "30px",
    // Whether or not to show to show the mouse aura effect
    mouse_aura: true,
    // Whether or not to show the forked repos
    show_forks: false
};

export default settings;
