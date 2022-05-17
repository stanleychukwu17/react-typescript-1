type inputProps = {
    value: string
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>, id?: number) => void
}

export default function Input(props: inputProps) {

    return (
    <div>
        <input type="text" value={props.value} onChange={(event) => { props.changeHandler(event) }}/>
    </div>
    )
}