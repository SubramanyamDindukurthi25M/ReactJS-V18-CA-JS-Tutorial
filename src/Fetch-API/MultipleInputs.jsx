import { useState } from "react"

export const MultipleInputs = () => {
    // State
    const [userInputs, setUserInputs] = useState({
        name: '',
        email: '',
        password: ''
    })

    // Make controlled inputs
    const handleInputs = (e) => {
        setUserInputs({
            ...userInputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userInputs)
        // To reset input fields
        setUserInputs({
            name: '',
            email: '',
            password: ''
        })
    }
    return (
        <section className="py-2 mx-2 bg-muted">
            <form autoComplete="off">
                {/* 1 */}
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="form-control form-control-md" 
                        placeholder="please enter name..."
                        value={userInputs.name}
                        onChange={handleInputs}
                    />
                </div>
                {/* 2 */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="form-control form-control-md"
                        placeholder="Enter Email"
                        value={userInputs.email}
                        onChange={handleInputs}
                    />
                </div>
                {/* 3 */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="form-control form-control-md" 
                        placeholder="Password"
                        value={userInputs.password}
                        onChange={handleInputs}
                    />
                </div>
                <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    )
}