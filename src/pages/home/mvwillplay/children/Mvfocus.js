import React, { Component } from 'react';
import Bscroll from 'better-scroll';

class Mvfocus extends Component {
    ScrollX = React.createRef();
    render() {
        let {attention} = this.props;
        return (
            <div className="mvfocus border-bottom">
                <h2 className="title">最受关注<span>({attention.length}部)</span></h2>
                <div className="mv-container" ref={this.ScrollX} >
                <div className="mvfocuslist">
                    
                    { 
                       attention.map((item)=>{
                            return(

                                <div 
                                className="mvfocusitem" 
                                key={item.id}
                                onClick={()=>this.handleGotoDetial(item.id)}>
                                    <div className="item-left">
                                        <p className="time"><span>{item.rMonth}</span>月<span>{item.rDay}</span>日</p>
                                        <img src={item.image} alt=''/>
                                    </div>
                                    <div className="item-right">
                                        <p className="mvtitle">{item.title}</p>
                                        <p className="people-type"><span>{item.wantedCount}</span> 人想看-<span>{item.type}</span></p>
                                        <p className="director">{item.director}</p>
                                        <p className="actress">{item.actor1+','+item.actor2}</p>
                                        <div className="action-type">
                                            <div className=" advance">超前预售</div>
                                            <div className="previewed">预告片</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                   
                </div> 
                </div>
                
            </div>
        );
    }
    handleGotoDetial = (mvId)=>{
        this.props.history.push('/mvdetial');
        this.props.getFocusDetial(mvId);
    }
    componentDidMount(){
        let scroll = new Bscroll(this.ScrollX.current,{
            scrollX:true
        });
        scroll.on('beforeScrollStart',()=>{
            scroll.refresh();
        })
    }
}

export default Mvfocus;