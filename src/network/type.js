import {request} from "./request";

export function getType(){
    return request({
        url:'/type'
    })
}
export function setType(type,tag){
    return request({
        url:'/type/set',
        params: {
           type,
           tag
        }
    })
}