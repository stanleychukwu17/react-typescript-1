import React from 'react'

type GreetProps = { name: string, age?: number}

export default function GreetComp(props: GreetProps) {
    return (
        <div>
            Hello my guy {props.name} and my age is {props.age}
        </div>
    )
}
