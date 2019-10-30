import typescript from "rollup-plugin-typescript2";
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import pkg from "./package.json";

export default [
    {
        input: "src/module.ts",
        external: Object.keys(pkg.peerDependencies || {}),
        plugins: [
            resolve({browser: true}),
            sass({
                output: 'bundle.css',
                processor: css => postcss([autoprefixer])
                    .process(css)
                    .then(result => result.css)
            }),
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
