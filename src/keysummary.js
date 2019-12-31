import React from 'react'

const KeySummaryView = ({content = {keySummary: "No Summary"}}) => (
    <div>
        <h1>Key Summary</h1>
        <p>{content.keySummary}</p>
    </div>
)

export default KeySummaryView