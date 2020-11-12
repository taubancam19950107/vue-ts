# Vue Typescript

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Project Structure

```bash
├── public                        # public static assets (directly copied)
│   │── /img                      # Image, icons 
│   │── favicon.ico               # favicon
│   └── index.html                # index.html template
├── src                           # main source code
│   ├── api                       # api service
│   ├── assets                    # module assets like fonts, images (processed by webpack)
│   ├── components                # global components
│   ├── directives                # global directives
│   ├── filterss                  # global filter
│   ├── i18n                      # i18n language
│   ├── layout                    # global layout
│   ├── router                    # router
│   ├── store                     # store
│   ├── styles                    # global css, custom theme
│   ├── utils                     # global utils
│   ├── views                     # views
│   ├── App.vue                   # main app component
│   ├── main.ts                   # app entry file
│   ├── registerServiceWorker.ts  # Register service worker
│   ├── service-worker.ts         # service worker
│   └── shims-tsx.d.ts            # The file allows you to use .tsx files while enabling jsx syntaxsupport in your IDE to write JSX-style typescript code
│   └── shims-vue.d.ts            # The first file helps your IDE to understand what a file ending in .vue is
├── tests/                        # tests
├── .browserslistrc               # browserslist config file (to support Autoprefixer)
├── .editorconfig                 # editor code format consistency config
├── .env.example                  # env variables example
├── .eslintrc.js                  # eslint config
├── babel.config.js               # babel config
├── cypress.json                  # e2e test config
├── jest.config.js                # jest unit test config
├── package.json                  # package.json
├── tsconfig.json                 # typescript config
└── vue.config.js                 # vue-cli config