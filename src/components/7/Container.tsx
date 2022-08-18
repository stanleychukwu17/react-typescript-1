type containerProps = {
    style: React.CSSProperties
}

interface container2Props {
    caller?: 'stanley' | 'daniel'
}

export default function Container(props: containerProps) {
    return (
        <div style={props.style}>
            This is from stanley the man
        </div>
    )
}


export function Container2 ({caller, ...attr}: container2Props & React.CSSProperties) {
    return (
        <div style={attr}>
            This is from stanley the man
        </div>
    )
}