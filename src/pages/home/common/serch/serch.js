import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';

const Serch = (props)=>{
    return(
       
        <div className="serch">
            
            <Link to="/address">
            <div className="address" >  
            
                <span>{props.cityname ===null?'深圳':props.cityname}</span>
            </div>
            </Link>
            <Link to="/serch">
            <div className="serchgo ">
                <span>影片/影院/影人，任你搜</span>   
            </div>
            </Link>
            
        </div>
  
    )
}

export default Serch