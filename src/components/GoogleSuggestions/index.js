// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangevalue = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const newSuggestionsList = suggestionsList

    const searchResult = newSuggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google-logo"
            className="google-img"
          />
        </div>
        <div className="google-search-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search-icon"
              className="search-icon"
            />
            <input
              type="search"
              value={searchInput}
              placeholder="Search Google"
              className="search"
              onChange={this.onChangeSearchInput}
            />
          </div>

          <ul className="suggestion-container">
            {searchResult.map(each => (
              <SuggestionItem
                details={each}
                key={each.id}
                onChangevalue={this.onChangevalue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
