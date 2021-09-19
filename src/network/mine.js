import {request} from "./request";

export function getMine(){
    return request({
        url:'/mine'
    })
}