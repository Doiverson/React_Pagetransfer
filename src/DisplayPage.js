import React, {Component} from "react";
import A from './A';
import B from './B';
import C from './C';

class DisplayPage extends Component{

    state = {
        currentPage : '',
        id: ''
    }

    childChange = (id, target) => {
        this.setState({currentPage: target})
        this.setState({id: id})
    }

    onClick = (e) => {
        this.setState({currentPage: e.target.value})
    }


    render() {

        const {currentPage} =  this.state;
        let Content = null;

        switch (currentPage) {
            case "A":
                Content = <A/>;
                break;

            case "B":
                Content = <B passValue={this.childChange} />;
                break;

            case "C":
                Content = <C id={this.state.id}/>;
                break;
        }

        return(
            <div className="display">
                <div>
                    <button type="button" value="A" onClick={this.onClick}>
                        A
                    </button>
                    <button type="button" value="B" onClick={this.onClick}>
                        B
                    </button>
                </div>
                {Content}
            </div>
        )
    }
}

export default DisplayPage;
