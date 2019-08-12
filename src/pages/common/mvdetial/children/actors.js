import React, { Component } from 'react';

class Actors extends Component {
    render() {
        let {actors,director} = this.props;
        return (
            <div className='actors'>
                <div className='title'>
                    <h1>8位演员</h1>
                    <span className='iconfont icon-jiantouyou'></span>
                </div>
                <div className='images'>
                    <div className='direactor'>
                        <p>导演</p>
                        <img src={director.directorImg} alt=''/>
                        <p>{director.directorName}</p>
                        <p>{director.directorNameEn}</p>
                    </div>
                    <div className='mine-actors'>
                        <p className='actor-title'>主要演员</p>
                        <div className='all-actors'>
                            {
                                actors.map((item)=>{
                                    return(
                                        <div 
                                        className='mine-actor'
                                        key={item.actorId}>
                                            <img src={item.actorImg} alt=''/>
                                            <p>{item.actor}</p>
                                            <p>{item.actorEn}</p>
                                            <p>饰:{item.roleName}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Actors;