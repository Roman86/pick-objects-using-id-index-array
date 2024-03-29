/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
  ],
  // collectCoverageFrom: ['src/**/*.ts'],
  testTimeout: 5000,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['e2e/*'],
};
