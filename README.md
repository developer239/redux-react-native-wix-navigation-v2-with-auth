## React Native Redux Wix Navigation Boilerplate

* [React-Native](https://github.com/facebook/react-native)
* [Redux](http://redux.js.org/)
* [Wix Navigation](https://github.com/wix/react-native-navigation) (this is the best native navigation that javascript has to offer)

#### Code Quality Tools

* eslint
* eslint-config-airbnb
* babel
* .editorconfig

#### Styles
I did not include styled components because I did not want to add any unnecessary boilerplate. I highly encourage you to install and use [styled components](https://github.com/styled-components/styled-components) though. They have a great [documentation](https://www.styled-components.com/docs/basics#react-native).

#### Data Flow

I also did not include anything except for redux. Most projects will be fine with [redux-thunk](https://github.com/gaearon/redux-thunk) If you are more advanced programmer then you will probably use either [Redux-Observables](https://github.com/redux-observable/redux-observable) or [Redux-Sagas](https://github.com/redux-saga/redux-saga). Redux-Observables are the cool thing to use but working with Redux-Sagas is just easier.

#### Testing

I intentionally did not include any testing framework so that I would reduce unnecessary boilerplate.
