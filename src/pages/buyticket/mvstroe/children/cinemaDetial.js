import React, { Component } from 'react';
import Bscroll from 'better-scroll';
class CinemaDetial extends Component {
    state = {movieId:258588}
    cinemaMv = React.createRef();
    render() {
        let {cinema,movies} = this.props;
        let movice = movies.filter((item)=>{
            return item.movieId === this.state.movieId;
        })
       
        return (
            <div className='cinemaDetial'>
                <div className='cinema-title'>
                    <div className='cinema-title-left'>
                        <h1>{cinema.name}</h1>
                        <div 
                        className='cinema-title-left-version'>
                            <img src='https://static1.mtime.cn/html5/20190531185056/images/2014/i_cine_01.png' alt=''/></div>
                    </div>
                    <div className='cinema-title-right'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className='cinema-movice' ref={this.cinemaMv}>
                    <ul className='movice-list'>
                        {
                            movies.map((item)=>{
                                return(
                                    <li 
                                    key={item.movieId}
                                    onClick={()=>this.selectMovice(item.movieId)}>
                                        <img 
                                         className={this.state.movieId===item.movieId?'selected':''}
                                        src={item.img} alt=''/>
                                        <p>{item.title}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='cinema-movice-title'>
                    {
                        movice.map((item)=>(
                        <div key={item.movieId}>
                            <h2>{item.title}</h2>
                            <p><span>{item.length}</span>-{item.type}</p>
                        </div>))
                    }
                    <span></span>
                </div>
            </div>
        );
    }
    selectMovice = (mvid)=>{
        this.setState({movieId:mvid});
        this.props.getMvid(mvid);
    }
    componentDidMount(){
        let scroll = new Bscroll(this.cinemaMv.current,{
            scrollX:true
        })
        scroll.on('beforeScrollStart',()=>{
            scroll.refresh();
        })
    }
}

export default CinemaDetial;