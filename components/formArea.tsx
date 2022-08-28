// WIP component

import React, { FC } from 'react'

type Props = {
  type: 'text' | 'textArea'
}

export const formArea: FC<Props> = ({ type }) => {
  if (type === 'text') {
    return (
      <div>
        <label htmlFor="name">名前</label>
        <input />
      </div>
    )
  } else if (type === 'textArea') {
    return (
      <>
        <textarea id="profile" name="profile" />
      </>
    )
  } else {
    return <></>
  }
}
