import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  showOrHide = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {details} = this.props
    const {questionText, answerText} = details
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imgAlt = isActive ? 'minus' : 'plus'

    return (
      <>
        <li className="responsive">
          <div className="question">
            <h1 className="ques-font">{questionText}</h1>
            <button
              className="showOrHide"
              onClick={this.showOrHide}
              type="button"
            >
              <img alt={imgAlt} src={imgUrl} className="btn-size" />
            </button>
          </div>
          {isActive && (
            <>
              <hr />
              <p>{answerText}</p>
            </>
          )}
        </li>
      </>
    )
  }
}

export default FaqItem
