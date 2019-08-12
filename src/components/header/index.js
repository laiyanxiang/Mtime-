import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

class index extends Component {
    constructor(){
        super();
        this.state = {}
    }
    render() {
        let navs = [
           
            {id:1,title:'首页',autopath:'/home',path:'/home'},
            {id:2,title:'购票',autopath:'/buyticket',path:'/buyticket'},
            {id:3,title:'商城',autopath:'/shopping',path:'/shopping'},
            {id:4,title:'发现',autopath:'/find',path:'/find'},
        ]
        let selectIndex = navs.findIndex((item)=>{
            return this.state.selectPath.startsWith(item.autopath);
        })
        return (
            <div>
                <header className="header">
                        <ul className="nav">
                            <Link className="logo" to='/logo'>
                                <span><img src="https://static1.mtime.cn/html5/20190531185056/images/2014/logo_mtime.png" alt=''/></span>
                            </Link>
                        
                           
                            {
                                navs.map((item,index)=>{
                                    return( <li  
                                        className = {selectIndex === index?'nav-list':''}
                                        key={item.id} 
                                        onClick={()=>this.changeNav(item.autopath)}><span >{item.title}</span></li>)
                                })
                            }
                        

                        <Link className="login-icon" to='/login'>
                            <span ><img src="https://static1.mtime.cn/html5/20190531185056/images/2014/ico_my.png" alt=''/></span>
                        </Link>
                        </ul>
                </header>
            </div>
        );
    }
    changeNav =(path)=>{
        this.props.history.push(path);
    }
    static getDerivedStateFromProps(props,state){
        return{
            selectPath:props.location.pathname
        }
    }
}

export default index;