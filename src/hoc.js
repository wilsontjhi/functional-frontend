import React from 'react'

const HigherOrderComponent = (WrappedComponent) => (props) =>
    <div>
        <h1>Inside HOC</h1>
        <WrappedComponent {...props}/>
    </div>

export default HigherOrderComponent