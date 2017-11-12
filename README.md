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

#### Commands

I recommend using yarn for installing project dependencies.
```bash
yarn install
```

This is the same for every `react-native` project.
```bash
yarn start
```

Yarn also lets you call commands from `package.json` more easily. This command starts build for IOS.
```bash
yarn ios
```

This command builds the application on android device.
```bash
yarn android
```
