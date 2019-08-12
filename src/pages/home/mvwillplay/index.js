import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import ComHeader from '../../../components/commenHeader/index';
import Serch from '../common/serch/serch';
import Footer from '../../../components/footer/index';
import {requestMvwillplayData,MvwillFocusDetial,MvwillListDetial} from '../../../store/module/home';
import Mvfocus from './children/Mvfocus';
import MvwillList from './children/MvwillList';
import AppScroll from '../../../components/app-scroll/index';
import './style.scss';
class Mvwillplay extends Component {
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
            <div className="page subpage" id="mvwillplay">
                <ComHeader status = {mvstatus}  history={this.props.history}/>
                <Serch cityname={this.props.cityname}/>
                <AppScroll>
                <Mvfocus {...this.props} getFocusDetial={this.props.getFocusDetial}/>
                <MvwillList {...this.props} getWillDetial={this.props.getWillDetial}/>
                <Footer/>
                </AppScroll>

            </div>
        );
    }
    componentDidMount(){
        this.props.getMvwillplayData();
    }
}

const mapStateToProps =(state,props)=>{
    return{
        cityname:state.address.cityname,
        attention:state.home.attention,
        moviecomings:state.home.moviecomings
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        getMvwillplayData(){
            let action =  requestMvwillplayData();
            dispatch(action);
        },
        getFocusDetial(mvId){
            let action = MvwillFocusDetial(mvId)
            dispatch(action);
        },
        getWillDetial(mvId){
            let action = MvwillListDetial(mvId);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mvwillplay);