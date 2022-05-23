type listProps<T> = {
    items: T[]
    clickHandler: (something: T) => void
}

export const List = <T extends {}>({items, clickHandler} : listProps<T>) => {

    return (
        <div>
            {items.map((ech, ind) => {
                return <div onClick={() => {clickHandler(ech)} }>{ech}</div>
            })}
        </div>
    )
}