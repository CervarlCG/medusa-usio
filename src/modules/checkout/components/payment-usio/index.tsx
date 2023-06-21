export default function PaymentUSIO() {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <input placeholder="Credit card" id="usio-cc" />
      <input placeholder="Exp Date" id="usio-date" />
      <input placeholder="CVV" id="usio-cvv" />
    </div>
  )
}
