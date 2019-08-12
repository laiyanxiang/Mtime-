import React, { Component } from 'react';
import ComHeader from '../../../components/commenHeader/index';
import Ctserch from './children/Ctserch';
import {connect} from 'react-redux';
import {requestAddressData,CityName,CityId} from '../../../store/module/address';
import CityList from './children/CityList';
import AppScroll from '../../../components/app-scroll/index';
import './style.scss';


class Address extends Component {
    render() {
        return (
            <div className="page subpage" id="address">
                <ComHeader title='选择城市' history={this.props.history}/>
                <Ctserch  {...this.props} />
                <AppScroll>
                <CityList {...this.props} getCityId={this.props.getCityId} />
                </AppScroll>
            </div>
        );
    }
    componentDidMount(){
        this.props.getAddressData();
    }
}


const mapStateToProps = (state,props)=>{
    return{
        addressData:state.address.addressDate,
        cityid:state.address.cityid,
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return{
        getAddressData(){
            let action = requestAddressData();
            dispatch(action);
        },
        handleCity(cityname){
            let action = CityName(cityname);
            dispatch(action);
        },
        getCityId(cityid){
            let action = CityId(cityid);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Address);