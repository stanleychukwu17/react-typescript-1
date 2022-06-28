type loginProps = {
    clickHandler : () => boolean
}


export default function Login({clickHandler} : loginProps) {
  return (
    <div>
        <div>Please login to continue</div>
        <div>
          <button onClick={()=>{clickHandler()}}>Click here to Sign-in</button>
        </div>
    </div>
  )
}