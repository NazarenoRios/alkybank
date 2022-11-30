import { Link } from "react-router-dom"

export default function AccountQuestion({ question, href, hrefText }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <p className="text-text2">{question}</p>
      <Link className="font-medium" to={href}>
        {hrefText}
      </Link>
    </div>
  )
}
