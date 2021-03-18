module.exports = {
    env: {
        url: 'https://front-end-test-app.s3.amazonaws.com',
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }

        return config
    }
}