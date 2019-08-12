import React, { Component } from 'react';
import {connect} from 'react-redux';
import ComHeader from '../../../components/commenHeader/index';
import Footer from '../../../components/footer/index';
import AppScroll from '../../../components/app-scroll/index';
import CinemaDetial from './children/cinemaDetial';
import ShowTimes from './children/showTime';
import {cinemaMvId} from '../../../store/module/buyticket';
import './style.scss';


class MvStore extends Component {
   
    render() {
        return (
            <div className='page subpage' id="mvstore">    
                <ComHeader history={this.props.history}/>
                <AppScroll>
                    <CinemaDetial {...this.props} getMvid={this.props.getMvid}/>
                    <ShowTimes {...this.props}  />
                    <Footer/>
                </AppScroll>
            </div>
        );
    }
    
}

const mapStateToProps = (state,props)=>{
    return{
        cinema:state.buyticket.cinema,
        movies:state.buyticket.movies,
        showtimes:state.buyticket.showtimes,
        moviceId:state.buyticket.moviceId,
        showDate:state.buyticket.showDate
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        getMvid(mvid){
            let action = cinemaMvId(mvid);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MvStore);