import React, { Component } from 'react';
import {connect} from 'react-redux';
import {requestMvDetial,requestMvComments,requestFriendCom} from '../../../store/module/mvdetial';
import Mvitem from './children/mvitem';
import Actors from './children/actors';
import Picture from './children/picture';
import Mvcomments from './children/mvcomment';
import FriendCom from './children/friendcom';

import AppScroll from '../../../components/app-scroll/index';
import Footer from '../../../components/footer/index';
import './style.scss';

class MvDetial extends Component {
    movieId = this.props.movieId;
    cityId = this.props.cityId;
    render() {
        return (
            <div className="page subpage" id="mvdetial">
                <AppScroll>
                  <Mvitem {...this.props} />
                  <Actors {...this.props}/>
                  <Picture {...this.props}/>
                  <Mvcomments {...this.props}/>
                  <img className='banner' src='https://static1.mtime.cn/feature/mobile/banner/2019/0304/naodong750-210.jpg' alt=''/>
                  <FriendCom {...this.props}/>
                  <Footer/>
                </AppScroll>
            </div>
        );
    }
    componentDidMount(){
        this.props.getMvDetial();
        this.props.getMvComments();
        this.props.getFriendCom();
    }
}


const mapStateToProps =(state,props)=>{
    return{
        movieId:state.home.movieId,
        cityId:state.address.cityid,
        mvitem:state.mvdetial.mvitem,
        actors:state.mvdetial.actors,
        director:state.mvdetial.director,
        images:state.mvdetial.images,
        comments:state.mvdetial.comments,
        friendcom:state.mvdetial.friendcom
    }
}

const mapDispatchToprops =(dispatch,props)=>{
    return{
        getMvDetial(){
           let action =  requestMvDetial(this.movieId,this.cityId);
           dispatch(action);
        },
        getMvComments(){
            let action = requestMvComments(this.movieId);
            dispatch(action);
        },
        getFriendCom(){
            let action = requestFriendCom(this.movieId);
            dispatch(action);
        }
    }
} 

export default connect(mapStateToProps,mapDispatchToprops)(MvDetial);