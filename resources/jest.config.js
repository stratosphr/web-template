module.exports = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^~/(.*)$': '<rootDir>/$1',
        '^vue$': 'vue/dist/vue.common.js'
    },
    moduleFileExtensions: [
        'ts',
        'js',
        'vue',
        'json'
    ],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest'
    },
    testMatch: [
        '**/tests/**/*.test.[jt]s'
    ],
    collectCoverage: true,
    setupFiles: [
        '<rootDir>/tests/jest.setup.js'
    ],
    collectCoverageFrom: [
        '<rootDir>/components/**/*.vue',
        '<rootDir>/pages/**/*.vue',
        '<rootDir>/api/**/*.{ts,js}'
    ]
}
