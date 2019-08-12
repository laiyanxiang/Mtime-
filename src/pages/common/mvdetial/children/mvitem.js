import React, { Component } from 'react';

class Mvitem extends Component {
    render() {
        let mvitem = this.props.mvitem;
        return (
            <div className="mvdetial-wrap">
                    <div className="bgcover">
                        <img className='cover' src={mvitem.image} alt=''/>
                        <div className='mask'></div>
                        <div className="heade">
                            <p 
                            className="goback"
                            onClick={this.handleBack}></p>
                            <div className='header-right'>
                            <p className="star"></p>
                            <p className="arrow"></p>
                            </div>
                        </div>
                    </div>
                    <div className="mvcontent">
                        <div className="left">
                            <img src={mvitem.image} alt=''/>
                            <div className="version">
                              {mvitem.is3D&&<p></p>}
                              {mvitem.isIMAX3D&&<p></p>} 
                              {mvitem.isTicket&&<p></p>} 
                            </div>
                            <div className='video'></div>
                        </div>
                        <div className="right">
                            <h2 className="title">{mvitem.titleCn}</h2>
                            <p className='titleEn'>{mvitem.titleEn}</p>
                            <div className='color'>
                            <p className='runtime'><span>有彩蛋</span>-<span>{mvitem.runTime}</span></p>
                            <p className='type'>{mvitem.type}</p>
                            <p className='play'></p>
                            <div className='doin-wrap'>
                                <div className='wantview'>我想看</div>
                                <div className='comment'>我要评分</div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="serch-r">
                        <p>{mvitem.commonSpecial}</p>
                        <div 
                        className='buy'
                        onClick={this.gotoBuyTicket}>查影讯/购票</div>
                    </div>
                    <div className='artical'>
                        <p>{mvitem.content}</p>
                    </div>
                </div>
        );
    }
    handleBack = ()=>{
        this.props.history.goBack();
    }
    gotoBuyTicket = ()=>{
        this.props.history.push('/buyticket/linkstore');
    }
}

export default Mvitem;