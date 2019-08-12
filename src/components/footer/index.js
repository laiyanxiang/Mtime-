import React, { Component } from 'react';
import './style.scss'

class Footer extends Component {
    render() {
        return (
            
                <div className="footer">
                   
                        <ul className="link">
                            <li><span>首页</span></li>
                            <li><span>购票</span></li>
                            <li><span >商城</span></li>
                            <li><span>发现</span></li>
                            <li><span >我的</span></li>
    
                        </ul>
                
                    <ul className="footer-nav">
                        <li><b >PC版</b></li>
                        <span></span>
                        <li><b>客户端下载</b></li>
                        <span></span>
                        <li><b>意见反馈</b></li>
                        <span></span>
                        <li><b>帮助</b></li>
                    </ul>
                    <div className="footer-logo">
                        <i></i>
                        <p >营业执照</p>
                    </div>
                    <p className="copyright">2006-2019 2006-2019  Mtime.com Inc. All rights reserved.</p>

                </div>
            
        );
    }
}

export default Footer;