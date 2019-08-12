import React, { Component } from 'react';

class Mvcomment extends Component {
    render() {
        let {comments} = this.props;
        return (
            <div className='comments'>
                <div className='Ctitle'>
                    <h1>精选影评(<span>{comments.length}</span>)</h1>
                    <span className='iconfont icon-jiantouyou'></span>
                </div>
                {
                    comments.map((item)=>{
                        return(
                            <div className='c-text' key={item.id}>
                                <h2>{item.title}</h2>
                                <p className='content'>{item.content}</p>
                                <div className='c-user'>
                                    <img src={item.headurl} alt=''/>
                                    <div className='user-text'>
                                        <p>{item.nickname}</p>
                                        <p>
                                            2019-07-19 13:48:00 看过 - 评分
                                            <span>{item.rating}</span></p>
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

export default Mvcomment;