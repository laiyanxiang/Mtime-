import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import ComHeader from '../../../components/commenHeader/index';
import Serch from '../common/serch/serch';
import {requestMvplayData,MvplayDetial} from '../../../store/module/home';
import MvplayList from './children/movicelist';
import Footer from '../../../components/footer/index';
import AppScroll from '../../../components/app-scroll/index';
import './style.scss';

class Mvplay extends Component {
    render() {
        let mvstatus = (<div className="select-mvplay">
                    <NavLink to="/home/mvplay">
                        <span>正在热映</span>
                    </NavLink>
                    <NavLink to="/home/mvwillplay">
                        <span>即将上映</span>
                    </NavLink>
                </div>)
        return (
            <div className="page subpage" id="mvplay">
                <ComHeader status = {mvstatus}  history={this.props.history}/>
                <Serch cityname={this.props.cityname}/>
                <AppScroll>
                    <MvplayList {...this.props} getHomeMvDetial={this.props.getHomeMvDetial}/>
                    <Footer/>
                </AppScroll>
            </div>
        );

    }
    componentDidMount(){
        this.props.getMvplayData();
    }
}

const mapStateToProps = (state,props)=>{
    return{
        cityname:state.address.cityname,
        mvplaydata:state.home.mvplaydata
    }
} 

const mapDispatchToProps = (dispatch,props)=>{
    return {
        getMvplayData(){
            let action = requestMvplayData();
            dispatch(action);
        },
        getHomeMvDetial(mvid){
            let action = MvplayDetial(mvid);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mvplay);