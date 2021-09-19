import { request } from "./request";

export function getArticles(num) {
    return request({
        url: '/articles',
        params: {
            num
        }
    })
}
export function getTimeLine() {
    return request({
        url: '/timeline'
    })
}
export function addRead(id) {
    return request({
        url: '/articles/read',
        params: {
            id,
        }
    })
}
export function addArticles(title,content,time,type,tag,des,readTimes,star,img) {
    return request({
        url: '/articles/set',
        params: {
            title,
            content,
            time,
            type,
            tag,
            des,
            readTimes,
            star,
            img,
        }
    })
}