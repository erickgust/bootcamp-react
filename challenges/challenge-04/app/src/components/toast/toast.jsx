import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledToast = styled.div`
  text-align: center;
  position: fixed;
  inset-block-end: 30px;
  inset-inline-start: 50%;
  transform: translateX(-50%);

  background-color: ${({ error }) => error ? '#dc143c' : '#10A81F'};
  color: var(--white-color);
  font-size: var(--font-size-normal);
  font-weight: var(--font-medium);
  padding: 10px 20px;
  border-radius: var(--border-radius);
`

export function Toast ({ visible, toast, setVisible }) {
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
        <StyledToast error={toast.error}>
          {toast.message}
        </StyledToast>
      )}
    </>
  )
}
