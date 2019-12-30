import React from 'react'
import KeySummaryView from "./keysummary";
import ChartView from "./chart";

const ReportView = ({content}) => (
    <div>
        <KeySummaryView content={content}/>
        <ChartView content={content}/>
    </div>
)

export default ReportView