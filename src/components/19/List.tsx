type listProps = {
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
