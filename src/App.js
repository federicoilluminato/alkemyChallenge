import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';
import {TeamProvider} from './contexts/TeamContext';


const App = () => {
  
  return (
        <TeamProvider>
          <Router>
            <Switch>
              <Layout>
              </Layout>
            </Switch>
          </Router>
        </TeamProvider>
  )
}

export default App

