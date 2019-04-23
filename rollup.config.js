import ascii from "rollup-plugin-ascii";
import node from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import {terser} from "rollup-plugin-terser";
import * as meta from "./package.json";

const copyright = `// ${meta.homepage} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}`;

export default [
  {
    input: "src/boundary.js",
    plugins: [
      node({
        jsxnext: true,
        main: true,
        browser: true
      }),
      ascii()
    ],
    external: [
      // "d3"
    ],
    output: {
      extend: true,
      banner: copyright,
      file: "dist/d3-force-boundary.js",
      format: "umd",
      indent: false,
      name: "forceBoundary",
      globals: {
        // d3:"d3",
      }
    }
  },
  {
    input: "src/boundary.js",
    plugins: [
      node({
        jsxnext: true
      }),
      ascii(),
      commonjs()
    ],
    external: [
      // "d3"
    ],
    output: {
      extend: true,
      banner: copyright,
      file: meta.module,
      format: "esm",
      indent: false,
      name: "forceBoundary",
      globals: {
        // d3:"d3"
      }
    }
  },
  {
    input: "src/boundary",
    plugins: [
      node({
        jsxnext: true,
        main: true,
        browser: true
      }),
      ascii(),
      terser({output: {preamble: copyright}})
    ],
    external: [
      // "d3"
    ],
    output: {
      extend: true,
      file: "dist/d3-force-boundary.min.js",
      format: "umd",
      indent: false,
      name: "forceBoundary",
      globals: {
        // d3:"d3"
      }
    }
  }
];

// import {terser} from "rollup-plugin-terser";
// import * as meta from "./package.json";

// const config = {
//   input: "src/index.js",
//   external: Object.keys(meta.dependencies || {}).filter(key => /^d3-/.test(key)),
//   output: {
//     file: `dist/${meta.name}.js`,
//     name: "forceBoundary",
//     format: "umd",
//     indent: false,
//     extend: true,
//     banner: `// ${meta.homepage} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}`,
//     globals: Object.assign({}, ...Object.keys(meta.dependencies || {}).filter(key => /^d3-/.test(key)).map(key => ({[key]: "d3"})))
//   },
//   plugins: []
// };

// export default [
//   config,
//   {
//     ...config,
//     output: {
//       ...config.output,
//       file: `dist/${meta.name}.min.js`
//     },
//     plugins: [
//       ...config.plugins,
//       terser({
//         output: {
//           preamble: config.output.banner
//         }
//       })
//     ]
//   }
// ];
