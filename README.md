<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# zwxsy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Subtract elements of a double-precision complex floating-point strided array `y` from the corresponding elements of a double-precision complex floating-point strided array `x` and assign the results to elements in a double-precision complex floating-point strided array `w`.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:wxsy" align="center" raw="\mathbf{w} = \mathbf{x} - \mathbf{y}" alt="Equation for wxsy operation."> -->

```math
\mathbf{w} = \mathbf{x} - \mathbf{y}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-zwxsy
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zwxsy = require( '@stdlib/blas-ext-base-zwxsy' );
```

#### zwxsy( N, x, strideX, y, strideY, w, strideW )

Subtracts elements of a double-precision complex floating-point strided array `y` from the corresponding elements of a double-precision complex floating-point strided array `x` and assigns the results to elements in a double-precision complex floating-point strided array `w`.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 1.0, 3.0, -2.0, 1.0, 3.0, 4.0 ] );
var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zwxsy( x.length, x, 1, y, 1, w, 1 );
// w => <Complex128Array>[ 0.0, -1.0, 5.0, 3.0, 2.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length for `x`.
-   **y**: second input [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: stride length for `y`.
-   **w**: output [`Complex128Array`][@stdlib/array/complex128].
-   **strideW**: stride length for `w`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to subtract every other element of `y` from every other element of `x`:

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 3.0, 1.0, 9.0, 10.0, -1.0, 2.0, 13.0, 14.0 ] );
var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zwxsy( 2, x, 2, y, 2, w, 2 );
// w => <Complex128Array>[ -2.0, 1.0, 0.0, 0.0, 6.0, 4.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

// Initial arrays...
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var y0 = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 6.0, 1.0, -2.0, 3.0, 10.0, 5.0 ] );
var w0 = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex128Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element
var w1 = new Complex128Array( w0.buffer, w0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

zwxsy( 3, x1, 1, y1, 1, w1, 1 );
// w0 => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, -3.0, 3.0, 7.0, 3.0, -3.0, 3.0 ]
```

<!-- lint disable maximum-heading-length -->

#### zwxsy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, w, strideW, offsetW )

<!-- lint enable maximum-heading-length -->

Subtracts elements of a double-precision complex floating-point strided array `y` from the corresponding elements of a double-precision complex floating-point strided array `x` and assigns the results to elements in a double-precision complex floating-point strided array `w` using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 1.0, 3.0, -2.0, 1.0, 3.0, 4.0 ] );
var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zwxsy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
// w => <Complex128Array>[ 0.0, -1.0, 5.0, 3.0, 2.0, 2.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.
-   **offsetW**: starting index for `w`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to subtract the last three elements of `y` from the last three elements of `x`:

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var y = new Complex128Array( [ 11.0, 12.0, 13.0, 14.0, 8.0, 3.0, -1.0, 2.0, 12.0, 7.0 ] );
var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zwxsy.ndarray( 3, x, 1, x.length-3, y, 1, y.length-3, w, 1, w.length-3 );
// w => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, -3.0, 3.0, 8.0, 6.0, -3.0, 3.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `w` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var Complex128Array = require( '@stdlib/array-complex128' );
var logEach = require( '@stdlib/console-log-each' );
var zwxsy = require( '@stdlib/blas-ext-base-zwxsy' );

var opts = {
    'dtype': 'float64'
};
var xbuf = discreteUniform( 20, -100, 100, opts );
var ybuf = discreteUniform( 20, -100, 100, opts );
var wbuf = discreteUniform( 20, -100, 100, opts );
var x = new Complex128Array( xbuf.buffer );
var y = new Complex128Array( ybuf.buffer );
var w = new Complex128Array( wbuf.buffer );

zwxsy( x.length, x, 1, y, 1, w, 1 );
logEach( '(%s) - (%s) = %s', x, y, w );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/zwxsy.h"
```

#### stdlib_strided_zwxsy( N, \*X, strideX, \*Y, strideY, \*W, strideW )

Subtracts elements of a double-precision complex floating-point strided array `Y` from the corresponding elements of a double-precision complex floating-point strided array `X` and assigns the results to elements in a double-precision complex floating-point strided array `W`.

```c
#include "stdlib/complex/float64/ctor.h"

const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
const double y[] = { 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 };
double w[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_zwxsy( 4, (const stdlib_complex128_t *)x, 1, (const stdlib_complex128_t *)y, 1, (stdlib_complex128_t *)w, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] stdlib_complex128_t*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[in] stdlib_complex128_t*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **W**: `[out] stdlib_complex128_t*` output array.
-   **strideW**: `[in] CBLAS_INT` stride length for `W`.

```c
void stdlib_strided_zwxsy( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX, const stdlib_complex128_t *Y, const CBLAS_INT strideY, stdlib_complex128_t *W, const CBLAS_INT strideW );
```

<!--lint disable maximum-heading-length-->

#### stdlib_strided_zwxsy_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY, \*W, strideW, offsetW )

<!--lint enable maximum-heading-length-->

Subtracts elements of a double-precision complex floating-point strided array `Y` from the corresponding elements of a double-precision complex floating-point strided array `X` and assigns the results to elements in a double-precision complex floating-point strided array `W` using alternative indexing semantics.

```c
#include "stdlib/complex/float64/ctor.h"

const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
const double y[] = { 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 };
double w[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_zwxsy_ndarray( 4, (const stdlib_complex128_t *)x, 1, 0, (const stdlib_complex128_t *)y, 1, 0, (stdlib_complex128_t *)w, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] stdlib_complex128_t*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[in] stdlib_complex128_t*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.
-   **W**: `[out] stdlib_complex128_t*` output array.
-   **strideW**: `[in] CBLAS_INT` stride length for `W`.
-   **offsetW**: `[in] CBLAS_INT` starting index for `W`.

```c
void stdlib_strided_zwxsy_ndarray( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const stdlib_complex128_t *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, stdlib_complex128_t *W, const CBLAS_INT strideW, const CBLAS_INT offsetW );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/zwxsy.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 1.0, 2.0 ),
        stdlib_complex128( 3.0, 4.0 ),
        stdlib_complex128( 5.0, 6.0 ),
        stdlib_complex128( 7.0, 8.0 )
    };
    const stdlib_complex128_t y[] = {
        stdlib_complex128( 2.0, 3.0 ),
        stdlib_complex128( 4.0, 5.0 ),
        stdlib_complex128( 6.0, 7.0 ),
        stdlib_complex128( 8.0, 9.0 )
    };
    stdlib_complex128_t w[] = {
        stdlib_complex128( 0.0, 0.0 ),
        stdlib_complex128( 0.0, 0.0 ),
        stdlib_complex128( 0.0, 0.0 ),
        stdlib_complex128( 0.0, 0.0 )
    };

    // Specify the number of indexed elements:
    const int N = 4;

    // Specify strides:
    const int strideX = 1;
    const int strideY = 1;
    const int strideW = 1;

    // Subtract elements of `y` from the corresponding elements of `x` and assign the results to elements in `w`:
    stdlib_strided_zwxsy( N, x, strideX, y, strideY, w, strideW );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "w[ %i ] = %lf + %lfi\n", i, stdlib_complex128_real( w[ i ] ), stdlib_complex128_imag( w[ i ] ) );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-zwxsy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-zwxsy

[test-image]: https://github.com/stdlib-js/blas-ext-base-zwxsy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-zwxsy/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-zwxsy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-zwxsy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-zwxsy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-zwxsy/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-zwxsy/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-zwxsy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-zwxsy/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-zwxsy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-zwxsy/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-zwxsy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-zwxsy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-zwxsy/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
