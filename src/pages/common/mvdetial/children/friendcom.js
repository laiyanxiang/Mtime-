import React, { Component } from 'react';

class friendcom extends Component {
    render() {
        let {friendcom} = this.props;
        return (
            <div className='friendcom'>
                <h1 className='Ftitle'>网友短评(1456)</h1>
                {
                    friendcom.map((item)=>{
                        return(
                            <div className='container' key={item.tweetId}>
                                <img className='headeurl' src={item.caimg} alt=''/>
                                <div className='fir-text'>
                                    <p className='userid'>
                                        <span>{item.ca}</span>
                                        <i>1小时前-评</i>
                                        <span>{item.cr}</span></p>
                                    <p className='saying'>{item.ce}</p>
                                    <div className='doing'>
                                        <div className='call-back'>
                                            <i></i>
                                            <span>回复</span>
                                        </div>
                                        <div className='good'>
                                            <i></i>
                                            <span>赞</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default friendcom;