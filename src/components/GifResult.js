
import React, { Component } from "react";
import axios from "axios";

import GifBox from "./GifBox";

class GifResult extends Component {
    state = {
        gifs: [],
        searchTerm: "",
        loading: true
    };

    componentDidMount() {
        this.doSearch(this.props.term);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.term !== nextProps.term) {
            this.doSearch(nextProps.term);
        }
    }

    doSearch = term => {
        axios
            .get(
                `https://api.giphy.com/v1/gifs/search?q=${term}&limit=20&api_key=54cdNcsWipTRqcDqrDlpXTcEDP4Ycul5`
            )
            .then(response => {
                this.setState({
                    gifs: response.data.data,
                    searchTerm: term,
                    loading: false
                });
            })
            .catch(error => {
                console.log("Error Happening!", error);
            });
    };

    render() {
        return this.state.loading ? (
            <p>Your choice of Gifs are on their way...</p>
        ) : (
                <GifBox data={this.state.gifs} term={this.state.searchTerm} />
            );
    }
}

export default GifResult;
