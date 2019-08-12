import React, { Component } from 'react';
import SerchList from '../children/SerchList';


class Ctcerch extends Component {
    state = {
        serchList:[]
    }
    serchcity = React.createRef();
    render() {
        return (
            <div>
            <div className="ctserch">
                <div className="ctserch-con">
                    <input type="text" placeholder="请输入关键字" ref={this.serchcity} onChange={this.showSerchList}/>
                    {
                        <i 
                        className="text-remove"
                        onClick={this.handleRemText}
                        >X</i>
                    }
                </div>
            </div>
            {
                this.state.serchList.length?<SerchList list={this.state.serchList} {...this.props}/>: ''
            }
            </div>
        );
    }

    // 匹配查找的地址
    showSerchList = ()=>{
        
        let value = this.serchcity.current.value;
       let list2 = this.props.addressData.length!==0?this.props.addressData.filter((item)=>{
                return value!==''?item.pinyinFull.toLowerCase().startsWith(value):'';
       }):[]
       this.setState({serchList:list2});
    }
  
    // 删除输入框的值
    handleRemText =()=>{
        this.serchcity.current.value = '';
        this.setState({serchList:[]})
    }
}


export default Ctcerch;