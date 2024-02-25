import { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const config: Config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  collectCoverage: true,
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'json-summary'],
  collectCoverageFrom: ['src/components/**/*.ts(x)?', 'src/utils/**/*.ts(x)?', '!src/**/*.d.ts'],
  coveragePathIgnorePatterns: [
    'src/app.tsx',
    'src/axiosInterceptors.tsx',
    'src/bootstrap.tsx',
    'src/index.ts'
  ],
  // coverageThreshold: {
  //   global: {
  //     functions: 80,
  //     statements: 80,
  //     branches: 80
  //   }
  // },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    '^@jobandtalent/auth-api-client/v3': '<rootDir>/node_modules/@jobandtalent/auth-api-client'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  }
};

export default config;
