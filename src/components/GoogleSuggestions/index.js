// Write your code here
import './index.css'
import {Component} from 'react' 
import SuggestionItem from "../SuggestionItem"

class GoogleSuggestions extends Component{
    state = {newSuggestionsList:suggestionsList}
    render() {
        const {newSuggestionsList}=this.state
        
        return(
            <div className="bg-container">
                <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png" 
                alt="google-logo" className="google-img"/>
                <div className="google-search-container">
                     <div className="search-container">
                         <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                         alt="search-icon" className="search-icon" /> 
                         <input type="search" placeholder="Search Google"/>
                     </div>
                     <ul className="suggestion-container">
                         {
                           newSuggestionsList.map((each) => (
                            each.suggestion
                           ))
                         }
                     </ul>
                </div>
            </div>
        )
    }
}

export default GoogleSuggestions