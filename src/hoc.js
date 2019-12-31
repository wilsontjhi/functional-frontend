import React from 'react'
import Axios from "axios";

const withDataLoading = (location, WrappedComponent) => {
    return class HOC extends React.Component {

        state = {
            content: {},
            isError: false,
            isLoading: true
        };

        componentDidMount() {
            Axios.get(`https://localhost:5001/api/${location}`)
                .then(response => this.setState({ content: response.data, isLoading: false }))
                .catch(reason => this.setState({ isError: true, isLoading: false, content: reason }))
        }

        render() {
            if(!this.state.isLoading && this.state.isError){
                return (<p>{this.state.content.toString()}</p>)
            }

            return (
                <div>
                    <WrappedComponent content={this.state.content} {...this.props}/>
                </div>
            )
        }
    };
}

export default withDataLoading