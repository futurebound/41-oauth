import React from 'react';
import Google from './google/google';
import {Provider} from 'react-redux';
import createStore from '../lib/store';
import Dashboard from './dashboard/dashboard';
import {BrowserRouter, Route} from 'react-router-dom';

const store = createStore();

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => console.log('__STATE__:', store.getState()));
  }

  render() {
    return(
      <main className='main-content'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path='/' component={Dashboard}/>
              <Route exact path='/oauth/google/code' component={Google}/>
            </section>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
};

export default App;