import axios from 'axios';
export default function request(config:object) {
    return new Promise((resolve, reject) => {
        //创建axios实例
        const instance = axios.create({
            timeout: 50000
        })
        //发送真正的网络请求
        return  instance(config)
    })
}
