import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

/* Material-UI */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideNav from './components/SideNav.js';

import Home from './views/Home.js';
import Tools from './views/Tools.js';
import Media from './views/Media.js';
import Website from './views/Website.js';

injectTapEventPlugin()
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <MuiThemeProvider>
        <div>
          <SideNav />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/tools' component={Tools} />
            <Route path='/media' component={Media} />
            <Route path='/website' component={Website} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>

    );
  }
}

export default App;
