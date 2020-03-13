import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';

import { BookStoreAppBar } from './features/layout';
import { WishListPage } from './features/wishList';
import { ShoppingContainer } from './features/shoppingCart';
import { BookStoreContainer } from './features/booksStore';

class App extends Component {
  render() {
    return (
      
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <header>
              <BookStoreAppBar />
            </header>
            <div className="content">
              <Switch>
                <Route exact path="/" component={BookStoreContainer} />
                <Route exact path="/shopping-cart" component={ShoppingContainer} />
                <Route exact path="/wishlist" component={WishListPage} />
                <Route path="/(\w+)" component={BookStoreContainer} />
              </Switch>
            </div>
          </div>
          <notificationContainer />
        </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;