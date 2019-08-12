import React,{lazy,Suspense,Fragment} from 'react';
import { HashRouter  as Router,Route,Redirect}  from 'react-router-dom'
import CacheRoute,{CacheSwitch} from 'react-router-cache-route';


// 公共部分
import Loading from './components/loading/index';
import NotFind from './components/notfind/index';

// // 根页面
const Home = lazy(()=>import("./pages/home/root/index"));
const BuyTicket = lazy(()=>import('./pages/buyticket/root/index'));
const Shopping = lazy(()=>import('./pages/shopping/root/index'));
const Find = lazy(()=>import('./pages/find/root/index'));
const Login = lazy(()=>import('./pages/common/login/index'));
const Regist = lazy(()=>import('./pages/common/register/index'));

// // 子页面
const Address = lazy(()=>import('./pages/common/address/index'));
const Serch = lazy(()=>import('./pages/common/serch/index'));
const MvPlay = lazy(()=>import('./pages/home/mvplay/index'));
const MvWillPlay = lazy(()=>import('./pages/home/mvwillplay/index'));
const MvDetial = lazy(()=>import('./pages/common/mvdetial/index'));
const MvStore = lazy(()=>import('./pages/buyticket/mvstroe/index'));
const TicketSale = lazy(()=>import('./pages/buyticket/ticketsale/index'));
const LinkStore = lazy(()=>import('./pages/buyticket/linkstore/index'));
function App() {
  return (
    <Router>
      <div id="app">
        
        {/* 头部 */}
        {/* <Route component={Header}/> */}

        <Suspense fallback={<Loading/>}>

            {/* 根路由 */}
            <CacheSwitch>
              <Route exact path="/" render={()=><Redirect to="/home" />}/>
              <CacheRoute exact path="/home" component={Home}/>
              <CacheRoute exact path="/buyticket" component={BuyTicket}/>
              <CacheRoute path='/shopping' component={Shopping}/>
              <CacheRoute path='/find' component={Find}/>
              <CacheRoute path='/login' component={Login}/>
              <CacheRoute path='/register' component={Regist}/>

              {/* 公共子页面 */}
              <Route path='/address' component={Address}/>
              <Route path='/serch' component={Serch}/>
              <Route path='/mvdetial' component={MvDetial}/>


              {/* 首页子路由 */}
            <Route path='/home/mvplay' component={MvPlay}/>
            <Route path='/home/mvwillplay' component={MvWillPlay}/>
          
            {/* 购买子路由 */}
            <Route path='/buyticket/mvstore' component={MvStore}/>
            <Route path='/buyticket/ticketsale' component={TicketSale}/>
            <Route path='/buyticket/linkstore' component={LinkStore}/>

            <Route path='/404' component={NotFind}/>
            <Route render={()=><Redirect to='/404'/>}/>
            </CacheSwitch>

            
        </Suspense>
      </div>
     </Router>
  );
}


export default App;
