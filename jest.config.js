module.exports = {
  preset: 'react-native',
  verbose: true,
  coverageReporters: ['json', 'lcov', 'text'],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|native-base-shoutem-theme|@shoutem/animation|@shoutem/ui|tcomb-form-native)',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
}
