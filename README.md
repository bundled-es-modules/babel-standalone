# babel-standalone

This is a mirror of [babel-standalone](https://www.npmjs.com/package/babel-standalone) for bower, bundled and exposed as ES module.

## Install

```
bower install bundled-es-modules/babel-standalone
```

## Use

```html
<script type="module">
  // from main file
  import { Babel } from './bower_components/babel-standalone/index.js';
  // or directly
  import Babel from './bower_components/babel-standalone/Babel.js';
  console.log(Babel);
</script>
```
