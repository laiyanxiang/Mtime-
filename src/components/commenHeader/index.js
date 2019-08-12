import React, { Component } from 'react';
import './style.scss';

class selectHeader extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="header-container">
                        <p className="goback" onClick={this.handleBack}></p>
                        <div className="header-title">                      
                           
                              <p>{this.props.title}</p>
                              {this.props.status}
                        </div>
                    </div>
                </header>
            </div>
        );
    }
    handleBack = ()=>{
        this.props.history.goBack();
    }
}

export default selectHeader;