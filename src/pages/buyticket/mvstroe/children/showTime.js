import React, { Component } from 'react';
import BScroll from 'better-scroll';
class ShowTime extends Component {
    state = {list:[],status:0}
    scrollx = React.createRef();
    render() {
        let {showDate} = this.props;
        return (
            <div className='showtime'>
                <div className='scroll-width' ref={this.scrollx}>
                    <ul className='showtime-title'>
                        {
                            showDate.map((item,index)=>{
                                return (<li
                                    className={this.state.status===index?'active':''}
                                    key={index}
                                    onClick={()=>this.changeTime(item,index)}
                                    >{
                                        item.substr(item.length-5,2)+'月'+item.substr(item.length-2,2)+'日'
                                    }</li>)
                            })
                        }
                    </ul>
                </div>
                <div className='showtime-list'>
                    {
                        this.state.list.map((item)=>{
                            return(
                                <div className='showtime-item' key={item.sId}>
                                    <h2>{
                                        
                                        (new Date(item.startTime*1000).getHours()<10?'0'+new Date(item.startTime*1000).getHours():new Date(item.startTime*1000).getHours()) + ':'+(new Date(item.startTime*1000).getMinutes()<10?'0'+new Date(item.startTime*1000).getMinutes():new Date(item.startTime*1000).getMinutes())
                                    }</h2>
                                    <div className='show-version'>
                                        <p>
                                        {item.versionDesc}/
                                        {item.language}
                                        </p>
                                        <p>{item.hall}</p>
                                    </div>
                                    <p className='price'>￥
                                    {item.price}</p>
                                    {
                                        new Date().getTime()<=item.endTime*1000?<p 
                                        className='showtime-buy'
                                        onClick={()=>this.handleSelectSeat()}
                                        >购买</p>:''
                                    }
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
    componentDidMount(){
        let scroll = new BScroll(this.scrollx.current,{
            scrollX:true
        })
        scroll.on('beforeScrollStart',()=>{
            scroll.refresh();
        })
    }
    changeTime = (title,index)=>{
        //对应电影id的showtime
        let data = this.props.showtimes.filter((item)=>{
            return item.movieId === this.props.moviceId;
        });
        //找到对应时间的showtime
        let showTime = data.filter((item)=>{
            return item.moviekey === this.props.moviceId+'_'+title;
        })

        //获取对应时间下的list
        let list = showTime.length!==0?showTime[0].list:[];
        this.setState({list:list,status:index});
    }
    handleSelectSeat=()=>{
        this.props.history.push('/buyticket/ticketsale');
    }
}

export default ShowTime;