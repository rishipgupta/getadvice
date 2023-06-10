import React from 'react'

const Message = (props) => {
  return (
    <div>
      <p>
        Number of times you asked for an advice: {props.count}
      </p>
    </div>
  )
}

export default Message
