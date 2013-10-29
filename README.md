# ness

Any value that is not `null`, `undefined` or `false` is true.

## Install

    npm install ness

## Examples

    var ness = require('ness');
    var val;

    val = ness(0);
    val.test();  //=> true

    val = ness('');
    val.test();  //=> true

    val = ness(NaN);
    val.test();  //=> true

    val = ness(false);
    val.test();  //=> false

    val = ness(null);
    val.test();  //=> false

    val = ness(undefined);
    val.test();  //=> false

