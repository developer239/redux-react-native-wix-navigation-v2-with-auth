rm -rf ~/Library/Developer/Xcode/DerivedData
watchman watch-del-all
rm -rf node_modules
yarn cache clean --force
rm -fr $TMPDIR/react-*
yarn install
react-native link
cd ios
pod install
