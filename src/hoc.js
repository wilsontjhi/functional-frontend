import React from 'react'

const HigherOrderComponent = (WrappedComponent) => {
    return class HOC extends React.Component {

        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    };
}

export default HigherOrderComponent