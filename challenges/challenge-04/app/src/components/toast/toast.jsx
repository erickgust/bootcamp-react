import React, { useEffect } from 'react'
import './toast.css'

export function Toast ({ visible, toast, setVisible }) {
  const className = 'toast' + (toast.error ? ' -error' : '')

  useEffect(() => {
    let id

    if (visible) {
      id = setTimeout(() => {
        setVisible(!visible)
      }, 3000)
    }

    return () => {
      clearTimeout(id)
    }
  }, [visible, toast])

  return (
    <>
      {visible && (
        <div className={className}>
          {toast.message}
        </div>
      )}
    </>
  )
}
