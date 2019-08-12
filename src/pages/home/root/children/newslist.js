import React, { Component } from 'react';

class NewsList extends Component {
    render() {
        let {data} = this.props;
        return (
            <div className="todaynews">
                <h2>今日热点</h2>
                
                    {
                        data.map((item,index)=>{
                            return(
                                <div className="newsitem" key={item.id}>
                                    <div className='text'>
                                    <h3 className="title">{item.title}</h3>
                                    <p className="decration">{item.desc}</p>
                                    </div>
                                    <ul className='imglist'>
                                        {  
                                           item.images? 
                                           item.images.map(
                                               (item,index)=>
                                               <li 
                                               key={item.gId}
                                               className="image"
                                               ><img src={item.url1} alt=""/></li>) : <img src={item.img} alt="" />

                                        }
                                    </ul>
                                    <p className="time">{item.publishTime}</p>
                                </div>
                            )
                        })
                    }
                
            </div>
        );
    }
}

export default NewsList;