import { useEffect, useState } from "react"
import { Main } from './Main'
import { List } from './List'
import { FormChallange } from './FormChallange'
import { MultipleInputs } from './MultipleInputs'

export const App = () => {
    const baseUrl = 'https://api.github.com/users'

    const [data, setData] = useState([])

    // Extracted data using Browser fetch API
    const fetchData = async () => {
        try {
            const getUsers = await fetch(baseUrl)
            const usersData = await getUsers.json()
            setData(usersData)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const [toggleChallange, setToggleChallange] = useState({
        boolValue: false,
        userName: 'subbu'
    })

    const handleToggle = () => setToggleChallange({...toggleChallange,boolValue:true})

    const [authObj, setAuthObj] = useState(null)

    const handleLogin = () => setAuthObj({
        ...authObj,
        authName: 'subbu'
    })
    const handleLogOut = () => setAuthObj(null)
    return (
        <>
            <h2 className="text-center my-2 text-success">
                About Fetch - API
            </h2>
            {/* Conditional Rendering */}
            {
                toggleChallange.boolValue ? <h2>{toggleChallange.userName}</h2> : <h2>Hello change my name</h2> 
            }
            <button
                className="btn btn-sm btn-outline-warning text-dark"
                type="button"
                onClick={handleToggle}
            >
                Toggle Value 
            </button>
            {
                authObj ? 
                <h4> hello,there - {authObj.authName}<button onClick={handleLogOut}>LogOut</button></h4> :
                <h4>
                    please login <button onClick={handleLogin}>LogIn</button>
                </h4> 
            }
            <Main/>
            <List/>
            <FormChallange/>
            <MultipleInputs/>
        </>
    )
}