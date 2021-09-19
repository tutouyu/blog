import { request } from "./request";

export function getComment() {
    return request({
        url: '/comment'
    })
}
export function setComment(name, mail, content, time, parent) {
    return request({
        url: '/comment/set',
        params: {
            mail,
            content,
            name,
            time,
            parent,
        }
    })
}