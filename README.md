# bick
bick is a light-weight pretty print wrapper around console.log that currently
implements pretty printing for functions, numbers, and objects. If you have
idea for other pretty printing formats that might be useful for you during
debugging, please submit an issue.

## Installation
```
npm install --save bick
```

## Usage
```
> const bick = require('./src');
undefined
> bick.log(bick.log);
log(item)
undefined
> bick.log({a: 'b', c: 'd', e: 'f', g: 'h'})
{
        "a": "b",
        "c": "d",
        "e": "f",
        "g": "h"
}
undefined
> bick.log(43424124141.12414124123)
43,424,124,141.12414
undefined
```

![bick Demo](https://cloud.githubusercontent.com/assets/1857993/24139637/db9a844c-0dea-11e7-80d6-3b4b673cf439.gif)
