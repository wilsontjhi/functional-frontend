import React from 'react'

const HigherOrderComponent = (WrappedComponent) => {
    return class HOC extends React.Component {

        state = {
            content: "loading"
        };

        componentDidMount() {
            fetch("https://localhost:5001/api/values/")
                .then(res => res.json())
                .then(res => this.setState({ content: res }))
        }

        render() {
            return (
                <div>
                    <WrappedComponent content={JSON.stringify(this.state.content)} {...this.props}/>
                </div>
            )
        }
    };
}

export default HigherOrderComponent