module.exports = {
    rootDir: ".",
    roots: ["./src"],
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    moduleNameMapper: {
        "~/*": "<rootDir>/",
        "@/": "<rootDir>/",
    }
}
