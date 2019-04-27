import React, {Component} from "react";

class C extends Component{


    render() {

        console.log(this.props.id);

        return(
            <div>
                <h1 className="page C">This is C</h1>
                <h2 className="id">{this.props.id}</h2>
            </div>

        )
    }
}

export default C;
