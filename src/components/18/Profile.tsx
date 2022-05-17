type profileProps = {
    clickHandler: () => boolean
}

export default function Profile({clickHandler}: profileProps) {
    return (
        <>
            <div>Private profile component</div>
            <div><button onClick={()=>{
                clickHandler()
            }}>commot for here</button></div>
        </>
    )
}