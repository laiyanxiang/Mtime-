import React, { Component } from 'react';

class CityList extends Component {
    constructor(){
        super();
        this.state={
        }
    }
    render() {
        let{addressData} = this.props;
        let tag = [
            {id:3,title:'A',flag:'A'},
            {id:4,title:'B',flag:'B'},
            {id:5,title:'C',flag:'C'},
            {id:6,title:'D',flag:'D'},
            {id:7,title:'E',flag:'E'},
            {id:8,title:'F',flag:'F'},
            {id:9,title:'G',flag:'G'},
            {id:10,title:'H',flag:'H'},
            {id:11,title:'J',flag:'J'},
            {id:12,title:'K',flag:'K'},
            {id:13,title:'L',flag:'L'},
            {id:14,title:'M',flag:'M'},
            {id:15,title:'N',flag:'N'},
            {id:16,title:'P',flag:'P'},
            {id:17,title:'Q',flag:'Q'},
            {id:18,title:'R',flag:'R'},
            {id:19,title:'S',flag:'S'},
            {id:20,title:'T',flag:'T'},
            {id:21,title:'W',flag:'W'},
            {id:22,title:'X',flag:'X'},
            {id:23,title:'Y',flag:'Y'},
            {id:24,title:'Z',flag:'Z'},

        ]
        return (

            <div className='citylist'>
                <div className="cityitem">
                    <p>当前城市:</p>
                    <div className='citys'></div>
                </div>
                <div className="cityitem">
                    <p>热门城市:</p>
                    <ul className="citys">
                        {
                            addressData.filter((item,index)=>index <=8).map((item,index)=>{
                                return(
                                    <li 
                                    className="city"
                                     key={item.id}
                                     onClick={()=>this.changCity(item.n,item.id)}>{item.n}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                {
                    tag.map((item)=>{
                        return(
                            <div className="cityitem" key={item.id}>
                                <p>{item.title}</p>
                                <ul className='citys'>
                                    {
                                    addressData.filter((ite)=>{
                                        return ite.pinyinFull.startsWith(item.flag);
                                    }).map((item,index)=>{
                                            return (
                                                <li 
                                                className="city"
                                                key={item.id}
                                                onClick={()=>this.changCity(item.n,item.id)}>{item.n}</li>
                                            )
                                    }) 
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
                
            </div>
        );
    }

    changCity = (cityname,cityid)=>{
        this.props.history.goBack();
        this.props.handleCity(cityname);
        this.props.getCityId(cityid);
    }
}

export default CityList;