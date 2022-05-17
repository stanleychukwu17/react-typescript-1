// this component is used to explain some advanced use cases for Advanced types when using them in props
import React from 'react'

// so the property of message cannot be any other sting value except ('loading' | 'success' | 'failed')
type statusProps = {
    msg: 'loading' | 'success' | 'failed'
}

export default function Status(props: statusProps) {
    let display: string = ''

    if (props.msg === 'loading') {
        display = 'Loading...'
    } else if (props.msg === 'success') {
        display = 'Data has been fetched'
    } else if (props.msg === 'failed') {
        display = 'Error fetching data'
    }
  return (
    <div>
        <h2>{display}.</h2>
    </div>
  )
}
