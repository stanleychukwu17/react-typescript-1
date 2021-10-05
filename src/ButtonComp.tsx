import React from 'react'

type ButtonProps = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>) => number | void
}

export default function ButtonComp(props: ButtonProps) {
    return (
        <div>
            <button onClick={props.handleClick}>Say Hi to</button>
        </div>
    )
}
