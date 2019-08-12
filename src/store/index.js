import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import home from './module/home';
import address from './module/address';
import mvdetial from './module/mvdetial';
import buyticket from './module/buyticket';
const reducer = combineReducers({
    home,
    address,
    mvdetial,
    buyticket
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(

    applyMiddleware(thunk)
  ));

export default store;