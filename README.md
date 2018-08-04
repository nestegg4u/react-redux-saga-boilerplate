# react-redux-saga-boilerplate [![Build Status](https://travis-ci.org/zanytycoon/react-redux-saga-boilerplate.svg?branch=master)](https://travis-ci.org/zanytycoon/react-redux-saga-boilerplate)
This boilerplate was created by [create-react-app](https://github.com/facebook/create-react-app) and it has the basic configurations such as redux, redux-saga, react-router, styled-components, antdesign, etc.


## Available Scripts

In the project directory, you can run:

### `npm build-css`

Runs the chokidar to build css file for antd.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## *Project structure*
```
my-app
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .env
├── .gitignore
├── .eslintrc
├── .prettierrc
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    ├── components
    ├── containers
    ├── redux
    ├── setup
        ├── AuthRoute.js
        └── registerServiceWorker.js
        └── router.js
        └── theme.js
    ├── index.js
    ├── styles.css
    ├── styles.css.map
    └── styles.less
```