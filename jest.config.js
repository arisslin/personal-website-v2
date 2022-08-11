module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  setupFiles: [`<rootDir>/config/jest/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup-test-env.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/config/jest/jest-preprocess.js',
  },
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby)/)`,
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
  ],
  verbose: true,
};
