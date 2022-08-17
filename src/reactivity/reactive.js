import { isObject } from '../utils'
import {effect} from './effect'
// target：目标对象（侦听的对象）；
// property：将被设置的属性key；
// value：新属性值；
// receiver：调用的代理对象
export function reactive(target) {
    if (!isObject(target)) {
        return target
    }
    const proxy = new proxy(target, {
        get(target, key, receiver) {
            const res = Reflect.get(target, key, receiver)
            return res
        },
        set(target, key, value, receiver) {
            const res = Reflect.set(target, key, value, receiver)
            return res
        }
    })

    return proxy;
}




