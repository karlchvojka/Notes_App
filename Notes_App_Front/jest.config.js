module.exports = {
  preset: '@shelf/jest-mongodb',
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "<rootDir>/CSSStub.js"
  },
  "collectCoverageFrom": [
    "**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/"
  ],
  "collectCoverage": true,
  testEnvironment: 'node'
};
