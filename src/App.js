import React from 'react';
import './App.css';
import KeySummaryView from "./something";
import HigherOrderComponent from "./hoc";

const KeySummary = HigherOrderComponent(KeySummaryView)
const App = () => (<KeySummary content="Hello"/>)

export default App;
