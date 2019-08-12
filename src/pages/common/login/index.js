import React, { Component } from 'react';
import ComHeader from '../../../components/commenHeader/index';
import Footer from '../../../components/footer/index';

import './style.scss';
class Login extends Component {
    render() {
        let imgtitle = <i className='login-logo'></i>
        return (
            <div className='page subpage' id='login'>
                <ComHeader title={imgtitle} history={this.props.history} />
                <div className='login-form'>
                    <div className='login-user'>
                        <input type='text' placeholder='登录邮箱/手机号码'/>
                    </div>
                    <div className='login-password'>
                        <input type='password' placeholder='密码'/>
                        <p>显示密码</p>
                    </div>
                    <div className='login-go'>登录</div>
                    <div className='login-regist'>
                        <p onClick={this.gotoRegister}>免费注册</p>
                        <p>找回密码</p>
                    </div>
                    <div className='other-login'>
                        <span></span>
                        <span>使用第三方登录</span>
                        <span></span>
                    </div>
                    <div className='other-login-link'>
                        <p className='bo'></p>
                        <p className='qq'></p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
    gotoRegister=()=>{   
        this.props.history.push('/register');
    }
}

export default Login;