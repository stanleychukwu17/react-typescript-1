type containerProps = {
    style: React.CSSProperties
}
export default function Container(props: containerProps) {
    return (
        <div style={props.style}>
            This is from stanley the man
        </div>
    )
}


interface container2Props {
    caller?: 'stanley' | 'chukwu'
}
export function Container2 ({caller, ...style}: container2Props & React.CSSProperties) {
    return (
        <div style={style}>
            This is from {caller} the man 2 second container
        </div>
    )
}