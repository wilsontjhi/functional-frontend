import React from 'react'

const KeySummaryView = ({content = {keySummary: "No Summary"}}) => (
    <div>
        <h1>Key Summary</h1>
        <text>{content.keySummary}</text>
    </div>
)

export default KeySummaryView