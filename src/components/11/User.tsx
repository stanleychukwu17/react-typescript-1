import {useState} from 'react'

type userType = {
    name: string
    email: string
}

export default function UserDts() {
    let [user, setUser] = useState<userType>({} as userType)

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
