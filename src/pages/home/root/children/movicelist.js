import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MoviceList extends Component {
    render() {
        let {data} = this.props
        return (
            <div className="movice">
                <div className="movicetitle ">
                    <h2>正在热映(<span>{data.length}</span>部)</h2>
                    <Link to="/home/mvplay"><span className="iconfont icon-jiantouyou"></span></Link>
                </div>
                <ul className="movicelist">
                    {
                        data.map((item,index)=>{
                            return(
                                <li 
                                className="moviceitem"
                                key={item.id}
                                onClick={()=>this.gotoMvDetial(item.movieId)}>
                                    <img src={item.img} alt=""/>
                                    <p>{item.tCn}</p>
                                    <span>{item.r}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="movicetitle">
                    <h2>即将上映(<span></span>部)</h2>
                    <Link to="/home/mvwillplay"><span className="iconfont icon-jiantouyou"></span></Link>
                </div>
            </div>
        );
    }
    gotoMvDetial = (mvid)=>{
        this.props.history.push('/mvdetial');
        this.props.getHomeMvDetial(mvid)
    }
}

export default MoviceList;