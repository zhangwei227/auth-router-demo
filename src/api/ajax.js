/**
 * 能发送异步ajax请求的函数模块
 * 封装asios
 * 函数返回值是Promise对象
 * @author z06389
 * @date 2020/4/6
 */
import axios from 'axios';
import {message} from 'antd'


// const BASE = 'localhost:8080';

export default function ajax(url, data = {}, type = 'GET') {

    return new Promise((resolve, reject) => {
        let promise;
        if (type === 'GET') {
            promise = axios.get(url, {
                params: data
            });
        } else {
            promise = axios.post(url, data);
        }
        promise.then(response => {
            resolve(response.data);
        }).catch(err => {
            // reject(err);
            message.error('请求出错了:' + err.message);
        })
    });

}