<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reshape

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Reshape a nested array into another nested array having a desired shape.



<section class="usage">

## Usage

```javascript
import reshape from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-reshape@esm/index.mjs';
```

#### reshape( x, fromShape, toShape, colexicographic )

Reshapes a nested array into another nested array having a desired shape.

```javascript
var x = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];

var out = reshape( x, [ 2, 3 ], [ 3, 2 ], false );
// returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
```

-   **x**: input array.
-   **fromShape**: input array shape.
-   **toShape**: output array shape.
-   **colexicographic**: boolean indicating whether to reshape the array in colexicographic order.

To reshape in colexicographic order, set the `colexicographic` argument to `true`.

```javascript
var x = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];

var out = reshape( x, [ 2, 3 ], [ 3, 2 ], true );
// [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes that `fromShape` and `toShape` describe arrays having the same number of elements.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import reshape from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-reshape@esm/index.mjs';

var x = [
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ]
];

var out = reshape( x, [ 3, 4 ], [ 4, 3 ], false );
// returns [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ]

out = reshape( x, [ 3, 4 ], [ 6, 2 ], false );
// returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]

out = reshape( x, [ 3, 4 ], [ 1, 12 ], false );
// returns [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] ]

out = reshape( x, [ 3, 4 ], [ 12, 1 ], false );
// returns [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ], [ 11 ], [ 12 ] ]

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-reshape.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-reshape

[test-image]: https://github.com/stdlib-js/array-base-reshape/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-reshape/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-reshape/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-reshape?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-reshape.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-reshape/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-reshape/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-reshape/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-reshape/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-reshape/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-reshape/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-reshape/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-reshape/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-reshape/main/LICENSE

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
