## IOS Build issues

`native-base` may be linked incorrectly:

1) `react-native unlink native-base`
2) `yarn remove native-base`
3) Delete fonts in app resources in xCode (left panel)
4) `yarn install native-base`
5) `react-native link`
