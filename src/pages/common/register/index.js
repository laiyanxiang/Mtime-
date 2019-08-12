import React, { Component } from 'react';
import ComHeader from '../../../components/commenHeader/index';

class index extends Component {
    render() {
        let imgtitle = <i className='login-logo'></i>
        return (
            <div className='page subpage' id='register'>
                <ComHeader title={imgtitle} history={this.props.history}/>
                <div className='register-form'>
                    <div className='register-user'>
                        <input type='text' placeholder='手机号:请输入手机号'/>
                        <p>获取验证码</p>
                    </div>
                    <div className='register-password'>
                        <input type='text' placeholder='验证码：'/>
                    </div>
                    <div className='register-password'>
                        <input type='text' placeholder='密码'/>
                    </div>
                    <div className='register-go'>注册</div>
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
            </div>
        );
    }
}

export default index;