import React, { Component } from 'react';


class Movicelist extends Component {
    render() {
        let {mvplaydata} = this.props;
        return (
     
            <div className="movicelist">
                {
                    mvplaydata.map((item,index)=>{
                        return(
                            <div 
                            className="moviceitem border-bottom"
                            key={item.id}
                            onClick={()=>this.gotoMvDetial(item.movieId)}>
                                <div className="movleft">
                                    <img src={item.img} alt=""/>
                                </div>
                                <div className="movright">
                                    <h3 className="movtitle">{item.t} <span>{item.r}</span></h3>
                                    <p className="movdec">{item.commonSpecial}</p>
                                    <div className="moversion">
                                        <div>
                                            {
                                                item.is3D&&<div className='version'>3D</div>
                                            }
                                        </div>
                                        <div >
                                            {
                                                item.isIMAX&&<div className="version">IMAX</div>
                                            }
                                        </div>
                                        <div>
                                            {
                                                item.isHasTrailer&&<div className="version">中国巨幕</div>
                                            }
                                        </div>
                                    </div>
                                    <p className="movnumber"><span>{item.NearestCinemaCount}</span>家影院上映<span>{item.NearestShowtimeCount}</span>场</p>
                                    <div className="salebtn">购买</div>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    gotoMvDetial = (mvid)=>{
        this.props.history.push('/mvdetial');
        this.props.getHomeMvDetial(mvid)
    }
}

export default Movicelist;