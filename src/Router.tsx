import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { App } from './App';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact children={<App />} />
        <Route path="/page1" children={<Page1 />} />
        <Route path="/page2" children={<Page2 />} />
      </Switch>
    </BrowserRouter>
  );
};
