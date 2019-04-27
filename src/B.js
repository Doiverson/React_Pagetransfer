import React, {Component} from "react";

class B extends Component{

    state = {
        id: "abc"
    }

    handleChange=(e)=>{
        let {id} = this.state;
        let target = e.target.value;
        this.props.passValue(id, target);
    }
    render() {
        return(
            <div>
            <h1 className="page B">This is B</h1>
            <button
                className="B-btn"
                type="button"
                value="C"
                onClick={this.handleChange}>
                Button
            </button>
            </div>
        )
    }
}

export default B;
