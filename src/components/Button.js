export default function Button({ variant, action, text, children }) {
  return (
    <button className={`button ${variant}`} onClick={() => action()}>
      {text ? text : children}
    </button>
  )
}
