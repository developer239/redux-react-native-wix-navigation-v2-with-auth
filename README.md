## Redux React Native Wix Navigation v2 with Auth

### Authorization

Auth is as minimal as possible. All I wanted to show is how to navigate between public and secured application and how to keep user logged in.

### Data Flow

I only included redux. Most projects will be fine with [redux-thunk](https://github.com/gaearon/redux-thunk) If you are more advanced developer then you probably want to install either [redux-observables](https://github.com/redux-observable/redux-observable) or [redux-sagas](https://github.com/redux-saga/redux-saga). redux-observables are the cool thing to use but working with redux-sagas is much easier.

## Installation

Official installation guide is [here](https://facebook.github.io/react-native/docs/getting-started.html).

The rest of the process is straightforward.

 1) Install node_modules: `yarn install`
 2) Link native libraries: `react-native link`
 
If you have any problems with building your application, please, look at FAQ section of this README or create an issue on github.
 
## Development

- `yarn start` starts react native server with js bundle
- `yarn ios` builds project for IOS
- `yarn android` builds project for Android
 
## Main Dependencies

* [React](https://github.com/facebook/react)
* [React Native](https://github.com/facebook/react-native)
* [Styled Components](https://github.com/styled-components/styled-components)
* [Wix React Native Navigation](https://github.com/wix/react-native-navigation)
* [Recompose](https://github.com/acdlite/recompose)
* [Formik](https://github.com/jaredpalmer/formik)
* [Yup](https://github.com/jquense/yup)
* [Redux](http://redux.js.org)

## Code Quality Tools

* [eslint](https://github.com/eslint/eslint)
* [stylelint](https://github.com/stylelint/stylelint)
* [.editorconfig](http://editorconfig.org/)

## FAQ

##### IOS Build Issues

`native-base` is beautiful UI library, but sometimes it fails to link correctly:

1) `react-native unlink native-base`
2) `yarn remove native-base`
3) Delete fonts in app resources in xCode (left panel)
4) `yarn install native-base`
5) `react-native link`
