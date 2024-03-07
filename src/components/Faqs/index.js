import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faq-container">
        <h1 className="heading">FAQs</h1>
        <ul>
          {faqsList.map(eachFaq => (
            <FaqItem details={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
