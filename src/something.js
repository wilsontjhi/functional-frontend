import React from 'react'

const KeySummaryView = ({content = "No Summary"}) => (
    <div>
        <h1>Key Summary</h1>
        <text>{content}</text>
    </div>
)

export default KeySummaryView