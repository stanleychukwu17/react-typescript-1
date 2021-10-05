import React from 'react'

type GreetProps = {
    info : {
        firstName: string
        lastName: string
        age: number
    }
}

export default function GreetComp({info}: GreetProps) {
    return (
        <div>
            my firstname is {info.firstName} and my last name is {info.lastName}, i'm {info.age} old
        </div>
    )
}
