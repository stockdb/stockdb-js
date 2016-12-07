[![npm](https://img.shields.io/npm/v/stockdb.svg?style=flat)](https://www.npmjs.com/package/stockdb)
[![npm](https://img.shields.io/npm/l/stockdb.svg?style=flat)](https://www.npmjs.com/package/stockdb)
[![npm](https://img.shields.io/npm/dt/stockdb.svg?style=flat)](https://www.npmjs.com/package/stockdb)

JavaScript client library for StockDB

# Example

[simple](https://github.com/stockdb/stockdb-js/blob/master/example/simple)

# Instllation

## Browser globals

> The **dist** folder contains `stockdb.js` with the component exported in the `window.StockDB` object.

```html
<script src="path/to/hprose-html5.js"></script>
<script src="path/to/stockdb.js"></script>
<script>
    var client = StockDB.New("http://localhost:8765", "username:password");
</script>
```

## NPM

```shell
$ npm install --save stockdb
```

### CommonJS

```js
var StockDB = require('stockdb');
var client = StockDB.New("http://localhost:8765", "username:password");
```

### ES6

```js
import StockDB from 'stockdb';

const client = StockDB.New('http://localhost:8765', 'username:password');
```

# Reference

[Official Repos](https://github.com/miaolz123/stockdb)

[Document](http://docs.stockdb.org/)
