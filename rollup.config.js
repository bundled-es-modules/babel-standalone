import commonjs from 'rollup-plugin-commonjs';

function createRegExpFromString(string, ...args) {
  const escapedString = string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  return new RegExp(escapedString, ...args);
};

export default [
  {
    input: './node_modules/babel-standalone/babel.js',
    output: {
      file: './Babel.js',
      format: 'es',
    },
    plugins: [
      commonjs(),
      {
        transform: (code) => {
          return code.replace(
            createRegExpFromString('(function() { return this; }())', 'g'),
            '(function() { return window; }())'
          );
        },
      },
    ],
  },
];
