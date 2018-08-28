# babel-standalone

This is a mirror of [babel-standalone](https://www.npmjs.com/package/babel-standalone), bundled and exposed as ES module.

## Install

```
npm install @bundled-es-modules/babel-standalone
bower install bundled-es-modules/babel-standalone
```

## Use

```html
<script type="module">
  // from main file
  import { Babel } from 'babel-standalone';
  // or directly
  import Babel from 'babel-standalone/Babel.js';
  console.log(Babel);
</script>
```

Make sure you added `@bundled-es-modules` scope to the path if used via npm.
