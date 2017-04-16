import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'

export default class SearchBox extends Component {
    
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleSearchResponse = (json) => {
        this.setState({
            isLoading: false,
            results: json.results,
        })
    }

    handleResultSelect = (e, result) => window.location.href = result.url

    handleSearchChange = (e, value) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            if (this.state.value.length >= 3) {
                let query = encodeURI(this.state.value.replace(/\s/gi, '+'))
                fetch(`http://localhost:5000/search/public?q=${query}`, {
                    method: 'GET'
                }).then(function(response) {
                    if (response.ok) {
                        return response.json()
                    }
                    throw Error(response.status.toString())
                }).then((json) => this.handleSearchResponse(json))
            }
        }, 500)
    }

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Search 
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={results}
                value={value}
                {...this.props}
            />
        )
    }
}