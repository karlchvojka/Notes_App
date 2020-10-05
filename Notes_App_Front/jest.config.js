module.exports = {
  verbose: true,
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "<rootDir>/CSSStub.js"
  },
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/*.{js,jsx}"
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/jest.config.js",
    "<rootDir>/webpack.config.js",
    "<rootDir>/coverage/",
    "<rootDir>/public/",
    "<rootDir>/src/setupTests.js",
    "<rootDir>/src/serviceWorker.js",
    "<rootDir>/node_modules",
    "<rootDir>/src/index.js"
  ],
  testEnvironment: 'jsdom',
};
