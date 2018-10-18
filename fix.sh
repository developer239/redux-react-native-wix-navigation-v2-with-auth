rm -rf ~/Library/Developer/Xcode/DerivedData
rm -rf android/build
rm -rf android/app/build
watchman watch-del-all
rm -rf node_modules
yarn cache clean --force
rm -fr $TMPDIR/react-*
yarn install
react-native link
cd ios
pod install
