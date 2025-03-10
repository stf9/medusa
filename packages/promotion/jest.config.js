module.exports = {
  moduleNameMapper: {
    "^@models": "<rootDir>/src/models",
    "^@services": "<rootDir>/src/services",
    "^@repositories": "<rootDir>/src/repositories",
    "^@utils": "<rootDir>/src/utils",
    "^@types": "<rootDir>/src/types",
  },
  transform: {
    "^.+\\.[jt]s?$": [
      "ts-jest",
      {
        tsConfig: "tsconfig.spec.json",
        isolatedModules: true,
      },
    ],
  },
  testEnvironment: `node`,
  moduleFileExtensions: [`js`, `ts`],
  modulePathIgnorePatterns: ["dist/"],
  setupFiles: ["<rootDir>/integration-tests/setup-env.js"],
  setupFilesAfterEnv: ["<rootDir>/integration-tests/setup.js"],
}
