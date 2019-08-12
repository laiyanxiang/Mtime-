import {address} from '../../request/api';
import {get} from '../../request/index';

const GET_ADDRESS_DATA = '/address/get_address_data';
const GET_CITYNAME = '/address/get_cityname';
const GET_CITYID = '/address/get_cityid';

const initialState = {
    addressDate:[],
    cityname:null,
    cityid:366,
}

export default (state=initialState,action)=>{
    switch (action.type) {

        case GET_ADDRESS_DATA:
            return{
                ...state,
                addressDate: action.value,

            }
        case GET_CITYNAME:
            return{
                ...state,
                cityname:action.value
            }
        case GET_CITYID:
            return{
                ...state,
                cityid:action.value
            }
        default:
            return state
    }
}


// 同步action

const AddressData = (prams)=>{
    return{
        type:GET_ADDRESS_DATA,
        value:prams
    }
}

export const CityName = (prams)=>{
    return{
        type:GET_CITYNAME,
        value:prams
    }
}

export const CityId = (prams)=>{
    return{
        type:GET_CITYID,
        value:prams
    }
}

// 异步action
export const requestAddressData = ()=>{
    return async(dispatch)=>{
        let result = await get(address.url,address.prams);
        let data = AddressData(result.p);
        dispatch(data);
    }
}