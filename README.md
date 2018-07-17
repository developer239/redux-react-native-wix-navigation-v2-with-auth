## React Native Redux Wix Navigation

#### Main Dependencies

* [React](https://github.com/facebook/react) 16.4.1
* [React Native](https://github.com/facebook/react-native) 0.56.0
* [Redux](http://redux.js.org) 4.0.0
* [Styled Components](https://github.com/styled-components/styled-components) 3.3.3
* [Wix React Native Navigation](https://github.com/wix/react-native-navigation) 1.1.476
* [Recompose](https://github.com/acdlite/recompose) 0.27.1

#### Code Quality Tools

* [eslint](https://github.com/eslint/eslint) 5.1.0
* [stylelint](https://github.com/stylelint/stylelint) 9.3.0
* [jest](https://github.com/facebook/jest) 23.4.1
* [enzyme](https://github.com/airbnb/enzyme) 3.3.0
* [.editorconfig](http://editorconfig.org/)

#### Data Flow

I only included redux. Most projects will be fine with [redux-thunk](https://github.com/gaearon/redux-thunk) If you are more advanced developer then you probably want to install either [redux-observables](https://github.com/redux-observable/redux-observable) or [redux-sagas](https://github.com/redux-saga/redux-saga). redux-observables are the cool thing to use but working with redux-sagas is much easier.

## Installation

Official installation guide is [here](https://facebook.github.io/react-native/docs/getting-started.html).

The rest of the process is straightforward.

 1) Install node_modules: `yarn install`
 2) Link native libraries: `react-native link`

## Development

Run dev server:

```
$ yarn start
```

Run virtual device:

```
$ yarn ios
```

## Testing

Run jest:

```
$ yarn test
```

## Preview

![1](https://github.com/developer239/react-native-redux-wix-navigation-boilerplate/blob/master/preview.gif?raw=true)

## Troubleshooting

If you run into any problems try one or more of these points:

* Clean up project in Xcode: `Xcode -> Product -> Clean`
* Run `./repair.sh` in root folder
* Start development server yourself from command line using `yarn start`. (because of cache)
* Make sure that your device has access to internet.
