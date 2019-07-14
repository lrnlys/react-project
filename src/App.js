import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Editor from './modules/editor'

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>  
          <div>
            <Header />
            <Route path='/' exact component={Editor}></Route>
          </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
