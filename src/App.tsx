import React from 'react';
import Layout from './components/Layouts/Layouts';
import Sidedrawer from './components/Sidedrawer/Sidedrawer';
import Main from './containers/Main/Main';
import { BrowserRouter } from 'react-router-dom';

/** EchartLine representing Line Graph */
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Sidedrawer />
        <Main />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
