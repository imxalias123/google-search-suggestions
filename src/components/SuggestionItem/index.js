// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, onChangevalue} = props
  const {suggestion} = details

  const onChangesearch = () => {
    onChangevalue(suggestion)
  }

  return (
    <li className="suggestion-item-container">
      <p className="para"> {suggestion} </p>
      <button type="button" className="button" onClick={onChangesearch}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
