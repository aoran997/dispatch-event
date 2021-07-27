/**
 * 事件监听工具
 */
 interface Option {
  /**创建监听时使用该参数可以单独移除监听 */
  dispatchKey?: string;
}

type Handler<T = any> = (event?: T) => void;
type Events = {
  [key: string]: {
    [key: string]: Handler;
  };
};

const events: Events = {}

export const eventEmitter = {
  /**
   * 发送事件
   * @param eventName: 事件名
   * @param data: 携带参数
   * */
  emit: function<T> (eventName: string, data?: T) {
    const callbackArr = events[eventName]
    if (callbackArr && Object.keys(events[eventName]).length > 0) {
      for (const i in callbackArr) {
        Object.hasOwnProperty.call(callbackArr, i) ? callbackArr[i](data) : {}
      }
    }
  }
}

export const eventListener = {
  /**
   * 启用监听事件
   * @param eventName: 事件名
   * @param callback: 回调方法
   * */
  on: function<T> (eventName: string, callback: Handler<T>, option: Option = {}) {
    if (!events[eventName]) {
      events[eventName] = {}
    }
    let objKey = Object.keys(events[eventName]).length - 1
    if (!option.dispatchKey) {
      while (events[eventName][objKey]) {
        objKey++
      }
    }
    events[eventName][option.dispatchKey || objKey] = callback
  },
  /**
   * 移除监听
   * @param eventName: 事件名
   * @param option: 额外参数
   * */
  remove: function<T> (eventName: string, option: Option = {}) {
    const callbackArr = events[eventName]
    if (option.dispatchKey) {
      delete callbackArr[option.dispatchKey]
    } else {
      delete events[eventName]
    }
  }
}
