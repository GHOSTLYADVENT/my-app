import { Component } from "react";

export class Counter extends Component {

    state = {
        count: 0
    }

    onClickPlusText = () => {
        this.setState((prevState, prevProps) => {
            return {
                count: prevState.count + 1
            }
        })
    }
 
    onClickMinusText = () => {
        this.setState((prevState, prevProps) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        return (
            <div>
                <h3 style={{cursor: 'pointer'}} onClick={this.onClickPlusText}>plus</h3>
                <p>{this.state.count}</p>
                <h3 style={{cursor: 'pointer'}} onClick={this.onClickMinusText}>minus</h3>
            </div>
        )
    }
}