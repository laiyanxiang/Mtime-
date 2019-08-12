import React, { Component } from 'react';
import Header from '../../../components/header/index';

class BuyTicket extends Component {
    render() {
        return (
            <div className='page' id='buyticket'>
                <Header {...this.props}/>
                <div className='buytic-mvserch'>
                </div>
                <div className='buytic-select'>
                </div>
                <p>以下影院均非时光网自营</p>
                <div className='buytic-stors'>
                    <div className='buytic-storeitem'>
                        <div className='buytic-storename'><span></span><span></span></div>
                        <p></p>
                        <div className='buytic-version'>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyTicket;