import {useState} from 'react'

type userType = {
    name: string
    email: string
}

export default function UserDts() {
    let [user, setUser] = useState<userType>({} as userType)

    /**
        what the teacher has done is wrong.. because the value of user is not updated immediately, it is only updated when the user clicks on the button.
        But this will be correct if we immediately used a useEffect to fetch the userData and inserts it before we display it to the dom
    */
    const handleLogin = () => {
        setUser({
            name: 'Stanley', 'email':'stanley4Christ@yahoo.com'
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Click here to Sign in</button>
            <div>Username: &nbsp; {user.name}</div>
            <div>Email: &nbsp; {user.email}</div>
        </div>
    )
}
