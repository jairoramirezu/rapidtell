import { CI, NO_CONCEPTO, CONCEPTO } from "../../config/contants"
import CopyClipboard from "../copy-clipboard/copy-clipboard"

const NavbarCheckoutPaymentData = ({
  paymentMethod,
  accounts,
  dollar_payment_methods,
  name
}) => {
  const selectedAccount = accounts.find(
    ({ method }) => method === paymentMethod
  )
  if (!paymentMethod || !selectedAccount) {
    return null
  }

  const { method, account, id } = selectedAccount
  const showId = !dollar_payment_methods.includes(paymentMethod)

  return (
    <>
      <hr className="my-0 with-pers" />
      <div className="info-notes-container p-3 my-0">
        <p className="mt-0 capitalize">{method}</p>
        <div className="d-flex align-items-center">
          <p>{account}</p>
          <CopyClipboard />
        </div>
        {showId && (
          <div className="d-flex align-items-center">
            <p>{`${CI} ${id}`}</p>
            <CopyClipboard />
          </div>
        )}
        <div className="d-flex align-items-center">
          <p>{method === "zelle" ? NO_CONCEPTO : `${CONCEPTO} ${name}`}</p>
          {method !== "zelle" && <CopyClipboard />}
        </div>
      </div>
    </>
  )
}

export default NavbarCheckoutPaymentData
