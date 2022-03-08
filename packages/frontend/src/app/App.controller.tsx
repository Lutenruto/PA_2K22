import { Collection } from "pages/Collection/Collection.controller";
import { Gifs } from "pages/Gifs/Gifs.controller";
import { Landing } from "pages/Landing/Landing.controller";
import { Marketplace } from "pages/Marketplace/Marketplace.controller";
import { NftExtended } from "pages/NftExtended/NftExtended.controller";
import { Profile } from "pages/Profile/Profile.controller";
import React from "react";
//@ts-ignore
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Menu } from "./App.components/Menu/Menu.controller";
import { Modal } from "./App.components/Modal/Modal.controller";

import { ProgressBar } from "./App.components/ProgressBar/ProgressBar.controller";
import { Toaster } from "./App.components/Toaster/Toaster.controller";
import { configureStore } from "./App.store";
import { AppContainer } from "./App.style";

export const store = configureStore({});

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ProgressBar />
        <Modal />
        <AppContainer>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/marketplace">
              <Marketplace />
            </Route>
            <Route exact path="/gifs">
              <Gifs />
            </Route>
            <Route exact path="/collection/:id">
              <Collection />
            </Route>
            <Route exact path="/nft/:id">
              <NftExtended />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/profile/:id">
              <Profile />
            </Route>
          </Switch>
        </AppContainer>
        <Toaster />
      </Router>
    </Provider>
  );
};
