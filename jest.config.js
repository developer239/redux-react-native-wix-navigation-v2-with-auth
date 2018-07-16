module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  verbose: true,
}
