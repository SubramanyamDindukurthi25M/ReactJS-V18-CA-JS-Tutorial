import { useState } from "react"

export const FormChallange = () => {
    const data = [{
            id: 1,
            name: 'john'
        },
        {
            id: 2,
            name: 'peter'
        },
        {
            id: 3,
            name: 'susan'
        },
        {
            id: 4,
            name: 'anna'
        },
    ]
    const [people, setPeople] = useState(data)

    // Logic to remove single user
    const handleRemovePerson = (userId) => {
        const removePerson = people.filter((user) => {
            const {
                id
            } = user;
            if (id !== userId) {
                return true;
            }
        })
        setPeople(removePerson)
    }

    const [name, setName] = useState('')

    // For checkbox
    const [boolValue, setBoolValue] = useState(false)
    const handleCheckBox = (e) => setBoolValue(e.target.checked)

    // For select option
    const cityNames = ['kadapa', 'bombay', 'madras', 'kochin']
    const [selectOption, setSelectOption] = useState('kochin')
    const handleDropDown = (e) => setSelectOption(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        // We can add new objects to people array dynamically
        const newuser = [...people, {
            id: Date.now(),
            name
        }]
        setPeople(newuser)
        setName('')
    }
    return (
        <>
            <p className="lead">
                Listing People - {people.length}
            </p>
            <form autoComplete="off">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className="form-control form-control-md"
                    />
                </div>
                <div className="form-check">
                    <input 
                        type="checkbox" 
                        checked={boolValue} 
                        onChange={handleCheckBox} 
                        className="form-check-input" 
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="form-group">
                    <label htmlFor="dropdown">Select City</label>
                    <select name="city" id="dropdown" value={selectOption} onChange={handleDropDown} className="form-control">
                        {
                            cityNames.map((city,i) => {
                                return (
                                    <option value={city} key={i}>{city}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>
                    submit
                </button>
            </form>
            <ul className="list-group mt-3">
                {
                    people.map((ele) => {
                        const{id,name} = ele;
                        return (
                            <li key={id} className='list-group-item'>
                                {name} - <button 
                                    className="btn btn-outline-secondary btn-sm" 
                                    type="button"
                                    onClick={() => handleRemovePerson(id)}
                                >remove user</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}