import {mvplayData,todayNews,mvplay,mvwillplay} from '../../request/api';
import {get} from '../../request/index';

// 首页
const GET_HOME_MOVICE = '/home/movicedata'
const GET_HOME_NEWS = '/home/newsdata'

// 子页
const GET_MVPLAY_DATA = '/home/mvplay/mvdata'
const GET_MVWILLPLAY_DATA = '/home/mvwillplay/mvdata'
const GET_HOME_MVDETIAL ='/home/mvdetial/mvId'
const GET_MVPLAY_MVDETIAL = '/home/mvplay/mvId'
const GET_MVWILL_FOCUS_MVDETIAL = '/home/mvwillplay/mvfocus/mvId'
const GET_MVWILL_PLAY_MVDETIAL = '/home/mvwillplay/mvlist/mvId'

const initialState = {
    homemovicedata:[],
    homenewsdata:[],
    mvplaydata:[],
    attention:[],
    moviecomings:[],
    movieId:251525
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case GET_HOME_MOVICE:
            
            return{
                ...state,
                homemovicedata:action.value
            }
        case GET_HOME_NEWS:
            return{
                ...state,
                homenewsdata:action.value
            }
        case GET_MVPLAY_DATA:
            return{
                ...state,
                mvplaydata:action.value
            }
        case GET_MVWILLPLAY_DATA:
            return{
                ...state,
                attention:action.value.attention,
                moviecomings:action.value.moviecomings
            }
        case GET_HOME_MVDETIAL:
            return{
                ...state,
                movieId:action.value
            }
        case GET_MVPLAY_MVDETIAL:
            return{
                ...state,
                movieId:action.value
            }
        case GET_MVWILL_FOCUS_MVDETIAL:
            return{
                ...state,
                movieId:action.value
            }
        case GET_MVWILL_PLAY_MVDETIAL:
            return{
                ...state,
                movieId:action.value
            }
        default:
            return state
    }
}


//同步action

const HomeMoviceData = (prams)=>{
    return{
        type:GET_HOME_MOVICE,
        value:prams
    }
}

const HomeNewsData = (prams)=>{
    return{
        type:GET_HOME_NEWS,
        value:prams
    }
}

const MvplayData = (prams)=>{
    return{
        type:GET_MVPLAY_DATA,
        value:prams
    }
}

const MvwillplayData = (prams)=>{
    return{
        type:GET_MVWILLPLAY_DATA,
        value:prams
    }
}

//首页单个电影
export const HomeMvDetial = (prams)=>{
    return{
        type:GET_HOME_MVDETIAL,
        value:prams  //每个电影项的电影id
    }
}
//正在热映单个电影
export const MvplayDetial = (prams)=>{
    return{
        type:GET_MVPLAY_MVDETIAL,
        value:prams
    }
}
//即将上映关注单个
export const MvwillFocusDetial = (prams)=>{
    return{
        type:GET_MVWILL_FOCUS_MVDETIAL,
        value:prams
    }
}

//即将上映列表单个
export const MvwillListDetial = (prams)=>{
    return{
        type:GET_MVWILL_PLAY_MVDETIAL,
        value:prams
    }
}
//异步action

// 首页电影数据
export const requestHomeMoviceData =()=>{
    return async (dispatch)=>{
       
        let data = await get(mvplayData.url,mvplayData.prams);
        let action = HomeMoviceData(data.ms);
        dispatch(action);
    }
}

//首页热点数据
export const requestHomeNewsData =()=>{
    return async (dispatch)=>{
        let data = await get(todayNews.url,todayNews.prams);
        let action = HomeNewsData(data.hotPoints);
        dispatch(action);
    }
}


//子页电影数据
export const requestMvplayData =()=>{
    return async (dispatch)=>{
        let data = await get(mvplay.url,mvplay.prams);
        let action = MvplayData(data.ms);
        dispatch(action);
    }
}

export const requestMvwillplayData =()=>{
    return async (dispatch)=>{
        let data = await get(mvwillplay.url,mvwillplay.prams);
        let action = MvwillplayData(data);
        dispatch(action);
    }
}

