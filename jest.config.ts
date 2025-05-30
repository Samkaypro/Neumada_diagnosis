export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/tests/**/*.test.ts?(x)"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/client/src/$1",
    "^@db/(.*)$": "<rootDir>/db/$1",
    "^@db": "<rootDir>/db/index.ts"
  },
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      tsconfig: "tsconfig.json"
    }]
  }
};
