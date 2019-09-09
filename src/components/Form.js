import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Form extends Component {
    state = {
        searchTerm: ""
    };

    onSearchUpdate = e => {
        this.setState({ searchTerm: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        e.currentTarget.reset();
        let searchWord = this.state.searchTerm;
        let path = `${searchWord}`;
        this.props.history.push(path);
    };

    render() {
        return (
            <form className="searchForm" onSubmit={this.handleSubmit}>
                <input
                    type="search"
                    onChange={this.onSearchUpdate}
                    name="search"
                    placeholder="Search for your favorite Gif here.."
                    required
                />
                <button type="submit" className="fas fa-search">
                
                </button>
            </form>
        );
    }
}

export default withRouter(Form);
