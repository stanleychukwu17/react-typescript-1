export type u2Props = {
    name: string
    age: number
}

export default function U2({name, age}: u2Props) {
    return (
        <div>This is the user page, My name is {name} and i'm {age} years old!</div>
    )
}