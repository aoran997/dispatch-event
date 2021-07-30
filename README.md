# emiter-js js事件监听工具

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
