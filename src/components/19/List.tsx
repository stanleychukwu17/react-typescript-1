// TODO: example 1 - ['stanley', 'chino', 'daniel', 'pamela']
type listProps = {
    // items: string[] | number[] | {}[]
    items: string[]
    clickHandler: (something: string) => void
}

export const List = ({items, clickHandler} : listProps) => {
    return (
        <div>
            {items.map((ech, ind) => {
                return <div key={ech} onClick={() => {clickHandler(ech)} }>{ech}</div>
            })}
        </div>
    )
}



// TODO: example 2 - [1, 2] or ['daniel', 'stanley'] or [{name:'pamela'}, {name:'jane'}] or anything
type listProps2<T> = {
    items: T[]
    clickHandler: (something: T) => void
}

// when you extend T as {}, you're saying it has to be an object. this object can contain (number, strings, booleans, objects, functions).. so it will be an object of arrays
// but in the example 3, we limit this T to be only an array of (numbers and strings)
// but here us example 2, T can be anything
export const List2 = <T extends {}>({items, clickHandler} : listProps2<T>) => {
    return (
        <div>
            {items.map((ech, ind) => {
                return <div onClick={() => {clickHandler(ech)} }>{ech}</div>
            })}
        </div>
    )
}



// TODO: example 3 - [1, 2] or ['daniel', 'stanley'] -- only string[] or numbers[] or (String | Numbers)[]
type listProps3<T> = {
    items: T[]
    clickHandler: (something: T) => void
}

// In this example, T can only be strings and numbers
export const List3 = <myGuy extends string | number>({items, clickHandler} : listProps3<myGuy>) => {
    return (
        <div>
            {items.map((ech, ind) => {
                return <div onClick={() => {clickHandler(ech)} }>{ech}</div>
            })}
        </div>
    )
}





// TODO: example 4 - [{id:1, name:'alex', age:55, gender: male}, {id:2, name:'jane', age:33, gender: female}] or anything
type listProps4<T> = {
    items: T[]
    clickHandler: (something: T) => void
}

/**
    In this example, we want to make sure that each of the objects in the array has an id and name key&value, the object might
    contain other parameters but, the duo of id and name must be present
*/
export const List4 = <T extends {id:number, name: string}>({items, clickHandler} : listProps4<T>) => {
    return (
        <div>
            {items.map((ech, ind) => {
                return <div key={ech.id} onClick={() => {clickHandler(ech)} }>{ech}</div>
            })}
        </div>
    )
}