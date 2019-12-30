import React from 'react';
import './App.css';
import HigherOrderComponent from "./hoc";
import KeySummaryView from "./keysummary";
import ChartView from "./chart";
import ReportView from "./report";
import { BrowserRouter as Router, Route } from 'react-router-dom'

const KeySummary = HigherOrderComponent('estimate', KeySummaryView)
const Chart = HigherOrderComponent('historical', ChartView)
const Report = HigherOrderComponent('report', ReportView)

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
