import { request } from "./request";

export function getAnime() {
    return request({
        url: '/anime'
    })
}
export function getGame() {
    return request({
        url: '/game'
    })
}
export function getMusic() {
    return request({
        url: '/music'
    })
}
export function setAnime(name, jpname, img, des) {
    return request({
        url: '/anime/set',
        params: {
            name,
            jpname,
            img,
            des,
        }
    })
}
export function setGame(name, jpname, img, des) {
    return request({
        url: '/game/set',
        params: {
            name,
            jpname,
            img,
            des,
        }
    })
}
export function setMusic(title,
    artist,
    url,
    pic) {
    return request({
        url: '/music/set',
        params: {
            title,
            artist,
            url,
            pic,
        }
    })
}