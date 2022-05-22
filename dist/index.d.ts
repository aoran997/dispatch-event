/**
 * 事件监听工具
 */
interface Option {
    /**创建监听时使用该参数可以单独移除监听 */
    dispatchKey?: string;
}
declare type Handler<T = any> = (event?: T) => void;
export declare const eventEmitter: {
    /**
     * 发送事件
     * @param eventName: 事件名
     * @param data: 携带参数
     * */
    emit: <T>(eventName: string, data?: T) => void;
};
export declare const eventListener: {
    /**
     * 启用监听事件
     * @param eventName: 事件名
     * @param callback: 回调方法
     * */
    on: <T>(eventName: string, callback: Handler<T>, option?: Option) => void;
    /**
     * 移除监听
     * @param eventName: 事件名
     * @param option: 额外参数
     * */
    remove: <T_1>(eventName: string, option?: Option) => void;
};
declare const _default: {
    eventEmitter: {
        /**
         * 发送事件
         * @param eventName: 事件名
         * @param data: 携带参数
         * */
        emit: <T>(eventName: string, data?: T) => void;
    };
    eventListener: {
        /**
         * 启用监听事件
         * @param eventName: 事件名
         * @param callback: 回调方法
         * */
        on: <T_1>(eventName: string, callback: Handler<T_1>, option?: Option) => void;
        /**
         * 移除监听
         * @param eventName: 事件名
         * @param option: 额外参数
         * */
        remove: <T_2>(eventName: string, option?: Option) => void;
    };
};
export default _default;
