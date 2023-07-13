// Write your code here
import './index.css' 

const SuggestionItem = (props)=> {

    return (
       <li className="suggestion-container">
           <div className="suggestion-item">
               <p className="para"> {} </p> 
               <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
                    alt="arrow-icon" className="arrow"/>
           </div>
       </li>
    )
}

export default SuggestionItem