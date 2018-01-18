![1](https://github.com/developer239/react-native-redux-wix-navigation-boilerplate/blob/master/preview.gif?raw=true)


## React Native Redux Wix Navigation Boilerplate

* [Redux](http://redux.js.org/)
* [Wix Navigation](https://github.com/wix/react-native-navigation) (this is the best native navigation that javascript has to offer)
* [Styled Components](https://github.com/styled-components/styled-components)
* [Recompose](https://github.com/acdlite/recompose)

#### Code Quality Tools

* [eslint](https://github.com/eslint/eslint)
* [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* [babel](https://github.com/babel/babel)
* [.editorconfig](http://editorconfig.org/)

#### Data Flow

I included only redux. Most projects will be fine with [redux-thunk](https://github.com/gaearon/redux-thunk) If you are more advanced programmer then you will probably want to install either [Redux-Observables](https://github.com/redux-observable/redux-observable) or [Redux-Sagas](https://github.com/redux-saga/redux-saga). Redux-Observables are the cool thing to use but working with Redux-Sagas is much easier.

#### Testing

I intentionally did not include any testing framework so that I would reduce unnecessary boilerplate.

## Install

You have to have `watchman` installed globally:

```
$ brew update
$ brew install watchman
```

Then simply install `node_modules`:

```
$ yarn install
```

And link native libraries:

```bash
$ react-native link
```


## Development

Run react native server:

```bash
$ npm start
```

Compile mobile application for ios:

```bash
yarn ios
```
