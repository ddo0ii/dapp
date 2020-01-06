import colors from 'vuetify/es5/util/colors'

export default {
    mode: 'spa',
    /*
  ** Headers of the page
  */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            {
                charset: 'utf-8'
            }, {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }, {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },
    /*
  ** Customize the progress-bar color
  */
    loading: {
        color: '#fff'
    },
    /*
  ** Global CSS
  */
    css: [],
    /*
  ** Plugins to load before mounting the App
  */
    plugins: [],
    /*
  ** Nuxt.js dev-modules
  */
    buildModules: ['@nuxtjs/vuetify'],
    /*
  ** Nuxt.js modules
  */
    modules: [],
    /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            light: {
                primary: colors.white,
                secondary: colors.white,
                accent: '#2D9527',
                error: colors.red.accent3
            }
        }
    },
    /*
  ** Build configuration
  */
    build: {
        vendor: [
            'axios', 'vuetify'
        ],
        /*
    ** You can extend webpack config here
    */
        extend(config, ctx) {}
    }
}

module.exports = {
    modules: ['@nuxtjs/axios'],

    axios: {
        // proxyHeaders: false
    }
}