import 'whatwg-fetch';

export function get(url,prams={}) {
    return new Promise((resolve,rejects)=>{
        let pramsStr = '';
        Object.entries(prams).forEach(([key,value],index)=>{
            pramsStr += index === 0?'':'&'
            let val = encodeURIComponent(value);
            pramsStr += `${key}=${val}`;
        })
        fetch(`${url}?${pramsStr}`,{
            'method':'GET'
        })
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            return resolve(data);
        })
        .catch((error)=>console.log(error))
        })
}

export function post(url,prams={}){
    return new Promise((resolve,rejects)=>{
        fetch(url,{
            'method':'POST',
            'body':prams
        })
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            return resolve(data);
        })
        .catch((error)=>console.log(error))
    })
}

export default {
    get,
    post
}