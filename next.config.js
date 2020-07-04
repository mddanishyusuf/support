// next.config.js
const withSass = require('@zeit/next-sass');
module.exports = withSass({
    /* config options here */
    env: {
        // GUMROAD_ACCESS_TOKEN: '',
        GUMROAD_ACCESS_TOKEN: 'a39500df4b6c5fee43e95fc9cca5742ba546efefa7ce14bbbf1ff5ff150c68db',
    },
});
