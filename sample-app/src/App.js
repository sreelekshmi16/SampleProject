import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Layout from './App/components/Layout/index.layout'
import Routes from './Routes'
class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <div>
     <Layout>
     <Routes/>
     </Layout>
     </div>
     </BrowserRouter>
    );
  }
}

export default App;
