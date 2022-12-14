import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import { LandingPage, SearchPage } from './components';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import Protected from './components/Protected';
const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}>
        </Route>
          <Route path='/cars' element={<Protected><SearchPage/></Protected>}>
        </Route>
      </Routes>
    </BrowserRouter>
        </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
