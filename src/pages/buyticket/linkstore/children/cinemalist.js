import React, { Component } from 'react';

class Cinemalist extends Component {
    render() {
        let {cinemaList,feature} = this.props;
        return (
            <div className='buytic-stors'>
                    {
                        
                        cinemaList.filter((item,index)=>{
                            return index <= 30;
                        }).map((item,i)=>{
                            return(
                                <div className='buytic-storeitem'
                                key={item.cinemaId}
                                onClick={()=>this.gotoCinemaDetial(item.cinemaId)}>
                                    <div className='buytic-storename'><span>{item.cinameName}
                                    </span><span>{item.minPrice/100}元起</span></div>
                                    <p></p>
                                    <div className='buytic-version'>
                                        <p>{item.address}</p>
                                        <div className='buytic-type'>
                                            {feature[i].has3D?<span>3D</span>:''}
                                            {feature[i].hasVIP?<span>VIP</span>:''}
                                            {feature[i].hasLoveseat?<span>情侣座</span>:''}
                                            {feature[i].hasIMAX?<span>IMAX</span>:''}
                                            {feature[i].hasFeature4D?<span>4D</span>:''}
                                            {feature[i].hasPark?<span>巨幕</span>:''}
                                            {feature[i].hasFeatureDolby?<span>杜比</span>:''}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        );
    }
    gotoCinemaDetial=(cinemaId)=>{
        this.props.history.push('/buyticket/mvstore');
        this.props.getCinemaId(cinemaId);
    }
}

export default Cinemalist;