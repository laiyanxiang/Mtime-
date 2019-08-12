import React, { Component } from 'react';
import Bscroll from 'better-scroll';
import './style.scss';

class AppScroll extends Component {
    appscroll = React.createRef();
    render() {
        return (
            <div className="scroll-wrap" ref={this.appscroll}>
                <div className='scroll-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }

    componentDidMount(){
        let scroll = new Bscroll(this.appscroll.current);
        scroll.on('beforeScrollStart',()=>{
            scroll.refresh();
        })
    }
}

export default AppScroll;