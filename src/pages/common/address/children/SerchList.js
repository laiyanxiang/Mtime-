import React, { Component } from 'react';
import AppScroll from '../../../../components/app-scroll/index';

class SerchList extends Component {
    render() {
        return (

            <ul className="serchlist">
                <AppScroll>
                {
                    this.props.list.map((item,index)=>{
                        return(<li 
                            key={item.id}
                            className="serchitem border-bottom"
                            onClick={()=>this.hendleClick(item.n)}
                            >{item.n}</li>)
                    })
                }
                </AppScroll>
            </ul>
        );
    }
    hendleClick= (cityname)=>{
        // 点击选中城市并返回页面
        this.props.handleCity(cityname);
        this.props.history.goBack();

    }
}

export default SerchList;