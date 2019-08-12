import {mvDetial,mvComments,friendCom} from '../../request/api';
import {get} from '../../request/index';

const GET_MVITEM_DATA = '/mvdetial/get_mvitem_data';
const GET_COMMENTS_DATA = '/mvdetial/get_comments_data';
const GET_FRIENDCOM_DATA = '/mvdetial/get_friendcom_data';

const initialState = {
    mvitem:{},
    actors:[],
    director:{},
    images:[],
    comments:[],
    friendcom:[]
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case GET_MVITEM_DATA:
            
            return{
                ...state,
                mvitem:action.value,
                actors:action.value.actorList,
                director:action.value.director,
                images:action.value.images
            }
        case GET_COMMENTS_DATA:
            return{
                ...state,
                comments:action.value
            }
        case GET_FRIENDCOM_DATA:
            return{
                ...state,
                friendcom:action.value
            }
        default:
            return state;
    }
}


// 同步action


// 异步action
//电影详情
const mvItemData = (prams)=>{
    return{
        type:GET_MVITEM_DATA,
        value:prams
    }
}
// 影评
const mvCommentsData = (prams)=>{
    return{
        type:GET_COMMENTS_DATA,
        value:prams
    }
}
// 网友评论
const friendComData = (prams)=>{
    return{
        type:GET_FRIENDCOM_DATA,
        value:prams
    }
}
//电影详情 
export const requestMvDetial =(mvId,cityid)=>{
    return async (dispatch)=>{
        let movieId= mvId;
        let locationId = cityid;
        let date = new Date();
        let t = ''+date.getFullYear() + ''+ date.getMonth() +''+date.getDay()+''+date.getTime()
        
        let value = mvDetial({movieId,locationId,t})

        let data = await get(value.url,value.prams);
        let action = mvItemData(data);
        dispatch(action);
    }
}

// 影评
export const requestMvComments =(mvId)=>{
    return async (dispatch)=>{
        let movieId = mvId;
        let pageIndex = 1;
        let date = new Date();
        let t = ''+date.getFullYear() + ''+ date.getMonth() +''+date.getDay()+''+date.getTime()

        let value = mvComments({movieId,pageIndex,t});

        let data = await get(value.url,value.prams);
        let action = mvCommentsData(data.comments);
        dispatch(action);
    }
}

//网友评论
export const requestFriendCom = (mvId)=>{
    return async (dispatch)=>{
        let movieId = mvId;
        let pageIndex = 1;
        let date = new Date();
        let t = ''+date.getFullYear() + ''+ date.getMonth() +''+date.getDay()+''+date.getTime()

        let value = friendCom({movieId,pageIndex,t});

        let data = await get(value.url,value.prams);
        let action = friendComData(data.cts);
        dispatch(action);
    }
}