import React, { Component } from 'react';

class MvwillList extends Component {
    render() {
        let {moviecomings} = this.props;
        let month = [7,8]
        return (

            <div className='mvwilllist'>
                <h2 className="mvwilllist-title">
                    即将上映<span>({moviecomings.length}部)</span>
                </h2>
                
                {
                   month.map((item,index)=>{
                        return(
                            <div key={index}
                            className="mvwill-item"
                            >
                                <p className="month">{item}月</p>
                                {
                                    moviecomings.filter((ite)=>{
                                        return ite.rMonth === item;
                                    }).map((miv)=>{
                                        return(
                                            <div 
                                            className="month-movice" 
                                            key={miv.id}
                                            onClick={()=>this.handleGotoDetial(miv.id)}>
                                                <p className="day">{miv.rDay}日</p>
                                                <img src={miv.image} alt=''/>
                                                <div className="text">
                                                    <p className='movice-name'>{miv.title}</p>
                                                    <p className='movice-want'><span>{miv.wantedCount}</span> 人想看-<span>{miv.type}</span></p>
                                                    <p className='direction'>导演：{miv.director}</p>
                                                </div>
                                            </div>
                                        )
                                    })    
                                }
                            </div>
                        )
                    })
                }
                
            </div>

        );
    }
    handleGotoDetial=(mvId)=>{
        this.props.history.push('/mvdetial');
        this.props.getWillDetial(mvId);
    }
}

export default MvwillList;