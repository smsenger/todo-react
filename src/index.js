import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store'

// import rootReducer from './reducers'
// import { connect } from 'react-redux'
// import { increment, decrement, reset } from './actionCreators'


// const mapStateToProps = (state /*, ownProps*/) => {
//     return {
//       counter: state.counter
//     }
//   }
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Counter)

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
