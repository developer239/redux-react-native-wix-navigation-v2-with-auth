[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://www.typescriptlang.org/)

## Example Wix App

Before running the application make sure that you have following dependencies running:

1. [react-native](https://facebook.github.io/react-native/docs/getting-started)
2. [detox](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md)

### Development

1. Start javascript bundler: `yarn start`
2. Run iOS: `yarn start:ios`
3. Run android: `yarn start:android`

### Development

1. `yarn test` runs jest
2. `yarn detox:ios:build` builds iOS project for detox
3. `yarn detox:ios` run detox on iOS
4. `yarn detox:android:build` builds Android project for detox
4. `yarn detox:android` run detox on Android

#### Useful Commands

- `yarn start` Start development server
- `yarn format` Prettify source code
- `yarn lint:ts` Show ts errors
- `yarn lint:css` Show css errors
- `yarn test` Run tests
