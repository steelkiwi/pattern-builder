import typescript from "rollup-plugin-typescript2";
import resolve from 'rollup-plugin-node-resolve';
import pkg from "./package.json";

export default [
    {
        input: "src/index.ts",
        external: Object.keys(pkg.peerDependencies || {}),
        plugins: [
            resolve({ browser: true }),
            typescript({
                typescript: require("typescript")
            })
        ],
        output: [
            {
                file: "index.js",
                format: "es",
                banner: "/* eslint-disable */"
            }
        ]
    }
];
