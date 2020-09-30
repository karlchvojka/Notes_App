module.exports = {
  preset: '@shelf/jest-mongodb',
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "<rootDir>/CSSStub.js"
  },
  "collectCoverageFrom": [
    "**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/"
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/jest.config.js",
    "<rootDir>/jest.mongodb-config.js",
    "<rootDir>/webpack.config.js",
    "<rootDir>/coverage/",
    "<rootDir>/public/"
  ],
  "collectCoverage": true,
  testEnvironment: 'node'
};
