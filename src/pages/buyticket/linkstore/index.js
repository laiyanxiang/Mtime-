import React, { Component } from 'react';
import ComHeader from '../../../components/commenHeader/index';
import {connect} from 'react-redux';
import {requestStoreListData,requestCinemaId} from '../../../store/module/buyticket';
import CinemaList from './children/cinemalist';
import AppScroll from '../../../components/app-scroll/index';
import Footer from '../../../components/footer/index';
import './style.scss';

class LinkStore extends Component {
    cityid = this.props.cityid
    render() {
        let {noticeNotOwn} = this.props;
        return (
            <div className='page subpage' id='buyticket'>
                <ComHeader title={this.props.mvitem.titleCn} history={this.props.history}/>
                <div className='buytic-mvserch'>
                </div>
                <div className='buytic-select'>
                </div>
                <AppScroll>
                    <p>{noticeNotOwn}</p>
                    <CinemaList {...this.props} getCinemaId={this.props.getCinemaId}/>
                    <Footer/>
                </AppScroll>
            </div>
        );
    }
    componentDidMount(){
        this.props.getStoreListData();
    }
    
}

const mapStateToProps = (state,props)=>{
    return{
        cityid:state.address.cityid,
        cinemaList:state.buyticket.cinemaList,
        noticeNotOwn:state.buyticket.noticeNotOwn,
        feature:state.buyticket.feature,
        mvitem:state.mvdetial.mvitem,
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        getStoreListData(){
            let action = requestStoreListData(this.cityid);
            dispatch(action); 
        },
        getCinemaId(cinemaId){
            let action = requestCinemaId(cinemaId)
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LinkStore);