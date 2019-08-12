import React, { Component } from 'react';
import ComHeader from '../../../components/commenHeader/index';
import {connect} from 'react-redux';
import './style.scss';
class TicketSale extends Component {
    render() {
        
        return (
            <div className="page subpage" id='ticketsale'>
                <ComHeader title='电影名称' history={this.props.history} />
                <div className='ticketsale-next'>
                    <div className='ticketsale-price'>
                        <p>总价：<span></span>含服务费￥4/张</p>
                        <p>￥X</p>
                    </div>
                    <div 
                    className='ticketsale-nextdo'
                    onClick={()=>this.nextDoing()}>下一步</div>
                </div>
            </div>
        );
    }
    nextDoing = ()=>{
        //判断是否登录

        // 如果没有登录
        this.props.history.push('/login');
    }
}

const mapStateToProps = (state,props)=>{
    return {
        
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TicketSale);