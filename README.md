[![Maintainability](https://api.codeclimate.com/v1/badges/1300f5103979d206a12b/maintainability)](https://codeclimate.com/github/developer239/redux-react-native-wix-navigation-v2-with-auth/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1300f5103979d206a12b/test_coverage)](https://codeclimate.com/github/developer239/redux-react-native-wix-navigation-v2-with-auth/test_coverage)
[![Greenkeeper badge](https://badges.greenkeeper.io/developer239/redux-react-native-wix-navigation-v2-with-auth.svg)](https://greenkeeper.io/)

## Redux React Native Wix Navigation v2 with Auth

### Authorization

Auth is as minimal as possible. All I wanted to show, is how to navigate between public and secure application and how to keep a user logged in.

### Preview

![1](https://github.com/developer239/redux-react-native-wix-navigation-v2-with-auth/blob/master/preview.gif?raw=true)

### Data Flow

I only included redux. Most projects will be fine with [redux-thunk](https://github.com/gaearon/redux-thunk). If you are more advanced developer, then you probably want to install either [redux-observables](https://github.com/redux-observable/redux-observable) or [redux-sagas](https://github.com/redux-saga/redux-saga). redux-observables are the cool thing to use but working with redux-sagas is much easier.

## Installation

Official installation guide is [here](https://facebook.github.io/react-native/docs/getting-started.html).

The rest of the process is straightforward.

1.  Install node_modules: `yarn install`
2.  Link native libraries: `react-native link`
3.  If you have MacOS Mojave or newer then you have to set legacy build system in `File -> Project Settings -> Build System`

If you have any problems with building your application, please, look at FAQ section of this README or create an issue on GitHub.

## Development

- `yarn start` starts react native server with js bundle
- `yarn ios` builds project for IOS
- `yarn android` builds project for Android
- `yarn lint:js` runs eslint
- `yarn lint:js:fix` fixes errors found by eslint
- `yarn lint:css` runs stylelint

## Main Dependencies

- [React](https://github.com/facebook/react)
- [React Native](https://github.com/facebook/react-native)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Wix React Native Navigation](https://github.com/wix/react-native-navigation)
- [Recompose](https://github.com/acdlite/recompose)
- [Formik](https://github.com/jaredpalmer/formik)
- [Yup](https://github.com/jquense/yup)
- [Redux](http://redux.js.org)

## Code Quality Tools

- [eslint](https://github.com/eslint/eslint)
- [stylelint](https://github.com/stylelint/stylelint)
- [prettier](https://github.com/prettier/prettier)
- [.editorconfig](http://editorconfig.org/)

## FAQ

### Possible Build Issues

`native-base` is beautiful UI library, but sometimes it fails to link correctly:

1. `react-native unlink native-base`
2. Open XCode and remove `Resources` in `Left Panel -> Generated -> Resources`
3. `react-native link`
