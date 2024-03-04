module.exports = {
    preset: 'js-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    "testEnvironment": "jsdom"
};