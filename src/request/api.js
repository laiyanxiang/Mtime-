// 功能：首页正在热映电影列表
// 路径：/api/home/mvplay
// 请求方式：GET
// 参数:locationId=290&t=20197271563269938
// 返回值：{id:电影的id，name：电影名称，img：电影图片路径}

export const mvplayData = {
    url:'/ser/Service/callback.mi/Showtime/LocationMovies.api',
    prams:{
        locationId:290,
        t:201972919141074894
    }
}
// 功能：首页今日热点列表
// 路径：/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api
// 请求方式：GET
// 参数:t=20197298182064242
// 返回值：{id:电影的id，name：电影名称，img：电影图片路径}

export const todayNews = {
    url:'/ser/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api',
    prams:{
        t:20197298182064242
    }
}

// 功能：城市列表
// 路径：/api/proxy/ticket/Showtime/HotCitiesByCinema.api
// 请求方式：GET
// 参数:_=1564388939572
// 返回值：json

export const address = {
    url:'/tic/api/proxy/ticket/Showtime/HotCitiesByCinema.api',
    prams:{
        _:1564388939572
    }
}


// 功能：正在热映电影列表
// 路径：/ser/Service/callback.mi/Showtime/LocationMovies.api
// 请求方式：GET
// 参数:{
//     locationId:291,
//     t:201973010414069827
// }
// 返回值：json

export const mvplay = {
    url:'/ser/Service/callback.mi/Showtime/LocationMovies.api',
    prams:{
        locationId:291,
        t:201973010414069827
    }
}

// 功能：即将上映电影列表
// 路径：/ser/Service/callback.mi/Movie/MovieComingNew.api
// 请求方式：GET
// 参数:{
//     locationId:291,
//     t:201973015385852828
// }
// 返回值：json

export const mvwillplay = {
    url:'/ser/Service/callback.mi/Movie/MovieComingNew.api',
    prams:{
        locationId:291,
        t:201973015385852828
    }
}

// 功能：电影详情
// 路径：/ser/Service/callback.mi/movie/Detail.api
// 请求方式：GET
// 参数:{
//    movieId,
//    locationId,
//    t
// }
// 返回值：json

export const mvDetial=(value)=>{
    return{
        url:'/ser/Service/callback.mi/movie/Detail.api',
        prams:{
            movieId:value.movieId,
            locationId:value.locationId,
            t:value.t
        }
    }
}


// 功能：电影详情影评
// 路径：/ser/Service/callback.mi/Movie/HotLongComments.api
// 请求方式：GET
// 参数:{
//    movieId,
//    pageIndex,
//    t
// }
// 返回值：json
export const mvComments =(value)=>{
    return{
        url:'/ser/Service/callback.mi/Movie/HotLongComments.api',
        prams:{
            movieId:value.movieId,
            pageIndex:value.pageIndex,
            t:value.t
        }
    }
}

// 功能：电影详情网友评论
// 路径：/ser/Service/callback.mi/Showtime/MovieComments.api
// 请求方式：GET
// 参数:{
//    movieId,
//    pageIndex,
//    t
// }
// 返回值：json

export const friendCom =(value)=>{
    return{
        url:'/ser/Service/callback.mi/Showtime/MovieComments.api',
        prams:{
            movieId:value.movieId,
            pageIndex:value.pageIndex,
            t:value.t
        }
    }
}


// 功能：购票页的影院列表
// 路径：/abc/api/proxy/ticket/onlineCinemasByCity.api
// 请求方式：GET
// 参数:{
//   locationId,
//   _
// }
// 返回值：json

export const storeList = (value)=>{
    return{
        url:'/tic/api/proxy/ticket/onlineCinemasByCity.api',
        prams:{
            locationId:value.locationId,
            _:value._
        }
    }
}


// 功能：购票页的影院列表
// 路径：/cin/cinema/showtime.api
// 请求方式：GET
// 参数:{
//   t,
//   cinemaId
// }
// 返回值：json

export const storeDetila = (value)=>{
    return{
        url:'/cin/cinema/showtime.api',
        prams:{
            t:value.t,
            cinemaId:value.cinemaId
        }
    }
}