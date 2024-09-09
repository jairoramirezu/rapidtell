import copyClipboard from "../../utils/copy-clipboard"

const CopyClipboard = () => (
  <img
    src="/images/copy-16.svg"
    className="copy-icon"
    onClick={(e) => {
      copyClipboard(e.target.parentElement.firstChild.innerText)
    }}
  />
)

export default CopyClipboard
