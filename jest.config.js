module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(ts|tsx|jsx)?$': 'ts-jest',
    '^.+\\.(js)?$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: [
    // '**/test/**/*.js',
    '<rootDir>/src/**/**/*.spec.js',
    '<rootDir>/src/**/**/*.spec.ts',
    '!**/utils/**'
  ]
  // preset: 'ts-jest'
  // coverageProvider: 'v8'
  // 'testURL': 'http://localhost',
  // 'collectCoverage': true,
  // 'collectCoverageFrom': ['src/**/**/*.{js,jsx,ts,tsx,vue}', '!**/src/**', '!**/style/**'],
  // 'coverageReporters': ['html', 'lcov', 'text-summary'],
  // 'coverageDirectory': './test/coverage'
}
