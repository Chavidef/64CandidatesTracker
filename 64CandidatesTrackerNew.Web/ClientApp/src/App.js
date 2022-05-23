import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import ViewTable from './Pages/ViewTable';
import ViewDetails from './Pages/ViewDetails';
import { CountsContextComponents } from './CountsContext';





const App = () => {
    return (
        <CountsContextComponents>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/addcandidate' component={AddCandidate} />
                <Route exact path='/pending' component={Pending} />
                <Route exact path='/viewtable/:status' component={ViewTable} />
                <Route exact path='/viewcandidatedetails/:id' component={ViewDetails} />
            </Layout>
        </CountsContextComponents>
    )
}

export default App;