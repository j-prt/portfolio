import { useState } from 'react'
import { postMessage } from '../utils/supabase'
import { FieldValues } from 'react-hook-form'

export function useSendMessage() {
  const [isSending, setIsSending] = useState<boolean>(false)

  async function sendMessage(data: FieldValues) {
    setIsSending(true)
    return postMessage(data)
      .then(() => setIsSending(false))
      .catch(err => {
        setIsSending(false)
        throw err
      })
  }

  return { sendMessage, isSending }
}
