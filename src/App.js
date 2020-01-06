import React from 'react';
import './App.css';
import withDataLoading from "./hoc";
import KeySummaryView from "./keysummary";
import ChartView from "./chart";
import ReportView from "./report";
import { BrowserRouter as Router, Route } from 'react-router-dom'

const KeySummary = withDataLoading('estimate', KeySummaryView)
const Chart = withDataLoading('historical', ChartView)
const Report = withDataLoading('report/product5', ReportView)

// Commented Out for demo purpose
// const App = () => (<KeySummaryView content={{keySummary:"HelloThere"}}/>)
// const App = () => (<ChartView/>)

const App = () => (
    <Router>
        <Route exact path="/estimate" component={KeySummary} />
        <Route exact path="/historical" component={Chart} />
        <Route exact path="/report" component={Report} />
    </Router>
)


export default App;
