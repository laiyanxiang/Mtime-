import React, { Component } from 'react';

class Picture extends Component {
    render() {
        let {images} = this.props;
        return (
            <div className='picture'>
                <div className='Ptitle'>
                    <h1>51张图片</h1>
                    <span className='iconfont icon-jiantouyou'></span>
                </div>
                <ul className='pic-img'>
                    {
                        images.map((item,index)=>(<li key={index}><img src={item} alt=''/></li>))
                    }
                </ul>
            </div>
        );
    }
}

export default Picture;