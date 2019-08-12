import React, { Component } from 'react';
import {connect} from 'react-redux'
import {requestHomeMoviceData,requestHomeNewsData,HomeMvDetial} from '../../../store/module/home';
import Serch from '../common/serch/serch';
import MoviceList from './children/movicelist';
import NewsList from './children/newslist';
import Footer from '../../../components/footer/index';
import AppScroll from '../../../components/app-scroll/index';
import Header from '../../../components/header/index';
import './style.scss';

class Home extends Component {
    render() {
        let {homemovicedata,homenewsdata} = this.props;
        let ImgBanner = <div className="banner"><img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F31%2F143906.61810640.jpg&width=640&height=320&clipType=4" alt=''/></div>
        
        return (
            <div className="page" id="home">
                <Header {...this.props}/>
                <AppScroll>
                    <Serch cityname={this.props.cityname}/>
                    <MoviceList data={homemovicedata} {...this.props} getHomeMvDetial={this.props.getHomeMvDetial}/>
                    {ImgBanner}
                    <NewsList data={homenewsdata}/>
                    <Footer/>
                </AppScroll>
            </div>
        );
    }
    componentDidMount(){
        this.props.getHomeMvData();
        this.props.getHomeNewsData();
    }
    
}

const mapStateToProps = (state,props)=>{
    return{
        homemovicedata:state.home.homemovicedata,
        homenewsdata:state.home.homenewsdata,
        cityname:state.address.cityname, //定位城市名
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        getHomeMvData(){
           let action = requestHomeMoviceData();
           dispatch(action);
        },
        getHomeNewsData(){
            let action = requestHomeNewsData();
            dispatch(action);
        },
        getHomeMvDetial(mvid){
            let action = HomeMvDetial(mvid);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);