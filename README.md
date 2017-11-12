## React Native Redux Wix Navigation Boilerplate

* [React-Native](https://github.com/facebook/react-native)
* [Redux](http://redux.js.org/)
* [Wix Navigation](https://github.com/wix/react-native-navigation) (this is the best native navigation that javascript has to offer)
* [Styled Components](https://github.com/styled-components/styled-components)
* [Recompose](https://github.com/acdlite/recompose)

#### Code Quality Tools

* eslint
* eslint-config-airbnb
* babel
* .editorconfig

#### Data Flow

I also did not include anything except for redux. Most projects will be fine with [redux-thunk](https://github.com/gaearon/redux-thunk) If you are more advanced programmer then you will probably use either [Redux-Observables](https://github.com/redux-observable/redux-observable) or [Redux-Sagas](https://github.com/redux-saga/redux-saga). Redux-Observables are the cool thing to use but working with Redux-Sagas is just easier.

#### Testing

I intentionally did not include any testing framework so that I would reduce unnecessary boilerplate.

#### Commands

I recommend using yarn for installing project dependencies.
```bash
yarn install
```

This is same for every `react-native` project.
```bash
yarn start
```

Yarn also lets you call commands from `package.json` more easily. This will start build for IOS.
```bash
yarn ios
```

This will build the application on android device.
```bash
yarn android
```
