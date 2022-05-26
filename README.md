# emiter-js js事件监听工具

[![npm](https://img.shields.io/npm/v/emiter-js.svg)](https://www.npmjs.com/package/emiter-js) ![license](https://img.shields.io/npm/l/emiter-js.svg) ![github-issues](https://img.shields.io/github/issues/aoran997/emiter-js.svg) ![npm-downloads](https://img.shields.io/npm/dt/emiter-js.svg)


*webpack 导入 npm install emiter-js*

*  emample
```
import { eventEmitter, eventListener } from 'emiter-js'

/*开启监听*/
eventListener.on('abc', (e) => {})

/*发送事件*/
eventEmitter.emit('abc', 'abc')

/*移除监听*/
eventListener.remove('abc')
```

*html用法看 demo/index.html*
