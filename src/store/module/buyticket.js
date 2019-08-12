import {storeList,storeDetila} from '../../request/api';
import {get} from '../../request/index';

const GET_STORELIST = 'buyticket/get_storelist';
const GET_CIMEMADETIAL = 'buyticket/get_cinemadetial';
const GET_CINEMAMVID = 'buyticket/get_cinemamvid';

const initialState = {
    cinemaList:[],
    noticeNotOwn:'',
    feature:[],
    cinema:{},
    movies:[],
    showtimes:[],
    moviceId:261999,
    showDate:["2019-08-02"]
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case GET_STORELIST:
            let feature = action.value.cinemaList.filter((item,index)=>{
                return index <=30;
            }).map((item)=>{
                return item.feature;
            })
            return{
                ...state,
                cinemaList:action.value.cinemaList,
                noticeNotOwn:action.value.noticeNotOwn,
                feature:feature
            }
        case GET_CIMEMADETIAL:
            return{
                ...state,
                cinema:action.value.cinema,
                movies:action.value.movies,
                showtimes:action.value.showtimes
            }
        case GET_CINEMAMVID:
            let showDate = state.movies.filter((item)=>{
                return item.movieId === action.value;
            })[0].showDates
            return{
                ...state,
                moviceId:action.value,
                showDate:showDate
            }
        default:
            return state;
    }
}

// 同步action
const StoreListData = (prams)=>{
    return{
        type:GET_STORELIST,
        value:prams
    }
}

const CinemaDetialData = (prams)=>{
    return{
        type:GET_CIMEMADETIAL,
        value:prams
    }
}
//影院中电影的id
export const cinemaMvId =(prams)=>{
    return{
        type:GET_CINEMAMVID,
        value:prams
    }
}
//异步action

export const requestStoreListData = (cityid)=>{
    return async (dispatch)=>{
        let locationId = cityid;
        let date = new Date();
        let _ = date.getTime();
        let value = storeList({locationId,_});
        let data = await get(value.url,value.prams);
        let action = StoreListData(data.data);
        dispatch(action);
    }
}

export const requestCinemaId = (cinemaid)=>{
    return async (dispatch)=>{
        let cinemaId = cinemaid;
        let date = new Date();
        let t = ''+date.getFullYear() + ''+ date.getMonth() +''+date.getDay()+''+date.getTime()
        let value = storeDetila({t,cinemaId});
        let data = await get(value.url,value.prams);
        let action = CinemaDetialData(data.data);
        dispatch(action);
    }
}