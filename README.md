# Index of content

- [Introduction](#introduction)
    - [Learn more about create-react-app](#learn-more-about-create-react-app)
- [Available scripts](#available-scripts)
- [Dependencies and imposed libraries](#dependencies-and-imposed-libraries)
- [Folders structure](#folders-structure)
- [Global folder structure](#global-folder-structure)

## Introduction
A simple full stack application using React, Python and
PostgresQL

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

| Command | Description | 
|---|---|
| `npm run start` | Runs the app in the development mode at [http://localhost:3000](http://localhost:3000). |
| `npm run build` | Builds the app for production. [See doc](https://facebook.github.io/create-react-app/docs/deployment). |
| `npm run eject` | **one way operation** for extending create react app functionalities [See doc](https://create-react-app.dev/docs/available-scripts/#npm-run-eject). |
| `npm run prettier` | Fix every js, json or scss file accordingly to the linter using prettier |
| `npm run prettier:js` | Fix only js files accordingly to the linter using prettier |
| `npm run prettier:css` | Fix only css/scss files accordingly into the linter using prettier | 
| `npm run lint:js` | Output on the console problems found into js files |
| `npm run lint:css` | Output on the console problems found into css files |


## Dependencies and imposed libraries
| Area of interest      | Library code-name                   | Brief description                                                                         | Reference         | 
| ---                   | ---                                 | ---                                                                                       | ---               |
| Core                  | `prop-types`                        | Most famous React way to define components property shape                                 | [GitHub](https://github.com/facebook/prop-types) - [React Doc](https://reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper)
| Core                  | `framer-motion`                     | Strong library for building UI animation                                                  | [WebSite](https://www.framer.com/api/motion/)
| Linting               | `prettier`                          | Code formatter that can be used with linters                                              | [Website](https://prettier.io/) |
| Linting               | `eslint-plugin-react`               | ESLint plugin for enabling standard ReactJS linting rules                                 | [GitHub](https://github.com/yannickcr/eslint-plugin-react)
| Linting               | `eslint`                            | Standard JS and TS linter                                                                 | [Website](https://eslint.org/docs/user-guide/configuring/) |
| Linting               | `eslint-plugin-prettier`            | ESLint plugin for making prettier interacts with ESLint                                   | [GitHub](https://github.com/prettier/eslint-plugin-prettier)
| Linting               | `eslint-config-prettier`            | ESLint plugin for disabling conflicting rules between prettier and ESLint                 | [GitHub](https://github.com/prettier/eslint-config-prettier) |
| Linting               | `eslint-plugin-jest-dom`            | ESLint plugin for linting test written for Jest DOM                                       | [GitHub](https://github.github.com/testing-library/eslint-plugin-testing-library) |
| Linting               | `eslint-plugin-json`                | ESLint plugin for writing good JSON files                                                 | [GitHub](https://github.com/azeemba/eslint-plugin-json#readme)
| Linting               | `stylelint`                         | The most famous CSS linter                                                                | [Website](https://stylelint.io/) |
| Linting               | `stylelint-a11y`                    | Stylelint plugin for avoiding accessibility errors                                        | [GitHub](https://github.com/YozhikM/stylelint-a11y) |
| Linting               | `stylelint-config-prettier`         | Stylelint plugin for disabling conflicting rules between prettier and Stylelint           | [GitHub](https://github.com/prettier/stylelint-config-prettier#readme) |
| Linting               | `stylelint-config-recommended-scss` | Stylelint plugin that enables common SCSS linting rules                                   | [GitHub](https://github.com/kristerkari/stylelint-config-recommended-scss) |
| Linting               | `stylelint-config-standard`        | Stylelint plugin that enables common CSS linting rules                                    | [GitHub](        

## Folders structure
The following application is built following the atomic design principle 

## Global folder structure
The global folder structure should appear as the follow:

| Folder path                                                         | Description                   |
| ---                                                                 | ---                   |
| `public/`                                                           | It must contain index.html and public files like which don't need to be processed                 | 
| `src/molecules/CardDrag`                                                          | Section composed by a draggable card and a grid                |
`                                                        | It must contain page components according to [component structure](#component-folder-structure), eg: `src/pages/Homepage`, `src/pages/Dashboard` | 
| `src/pages/[MyPageComponent]/`                                      | It must contain components used only into `[MyPageComponent]`, according to [component structure](#component-folder-structure), eg:  `src/pages/Homepage/Headline`,  `src/pages/Homepage/IntroSection` |  
| `src/test-utils/`                                                   | It must contain test utils according to [react-testing-library](https://testing-library.com/docs/react-native-testing-library/setup/#custom-render) recommendations |
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
