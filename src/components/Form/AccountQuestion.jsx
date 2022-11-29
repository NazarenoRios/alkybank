import { Link } from "react-router-dom"

export default function AccountQuestion({ question, href, hrefText }) {
  return (
    <div>
      <p>{question}</p>
      {/* <Link to={href}>{hrefText}</Link> */}
      {/* Uncomment when routing has been added */}
    </div>
  )
}
