import React, { Component } from 'react';


function Error() {
    return(
        <div>
            <h1>
                出错了
            </h1>
        </div>
    )
}
class ErrorBoundary extends Component {

    state = {
        isError:false
    }

    componentDidCatch(error,info){
        this.setState({isError:true})
    }

    render() {
        return (
            <div>
                {
                    this.state.isError?<Error/>:this.props.children
                }
            </div>
        );
    }

}

export default ErrorBoundary;