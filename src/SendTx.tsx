import { useCallback } from "react"
import tx from './tx.json'
import message from './message.json'

export default function SendTx() {
  const signMessage = useCallback(() => {
    window.open(`neuron-protocol://${encodeURIComponent(JSON.stringify(message))}`)
  }, [])
  const signTx = useCallback(() => {
    console.log(encodeURIComponent(JSON.stringify(tx)).length)
    window.open(`neuron-protocol://${encodeURIComponent(JSON.stringify({
      requestId: Date.now(),
      appName: 'dapp-sign-test',
      type: 'transaction',
      params: tx.transaction,
      callback: 'http://localhost:3001/result'
    }))}`)
  }, [])
  return (
    <div>
      <br />
      <button onClick={signMessage}>sign message</button>
      <br />
      <br />
      <button onClick={signTx}>sign transaction</button>
    </div>
  )
}