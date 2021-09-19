import { request } from "./request";

export function admin(account,password) {
    return request({
        url: '/login',
        params: {
          account,
          password,
        }
    })
}