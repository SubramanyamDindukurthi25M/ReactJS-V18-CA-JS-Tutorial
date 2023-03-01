import { useState } from "react"

export const App = () => {
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
            const{id} = user;
            if (id !== userId) {
                return true;
            }
        })
        setPeople(removePerson)
    }

    // Logic to remove all users
    const handleRemoveAll = () => {
        setPeople([])
    }

    // Automatic Batching - V18
    const[userDetails,setUserDetails] = useState({name:'avika',age:24,city:'kadapa'})

    // One setState method to update values.
    const handleChangeValues = () => setUserDetails({name:'subbu',age:27,city:'tirupathi'})
    
    // To update only name
    // const handleChangeName = () => setUserDetails({...userDetails,name:'subbu'})

    // To print updated state value - pass a function in setState function
    const[value,setValue] = useState(0)
    const handleIncrement = () => {
        setValue((currentValue) => {
            const newValue = currentValue + 1;
            console.log(newValue);
            return newValue;
        });
    }
    
    const{name,age,city} = userDetails;
    return (
        <section className="m-2">
            <h2 className="text-center my-2 text-primary">
                Challange - One
            </h2>
            <p className="lead">
                Listing People - {people.length}
            </p>
            <ul className="list-group">
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
            <button className="btn btn-block btn-outline-warning my-2" type="button" onClick={handleRemoveAll}>
                Remove All 
            </button>
            <article>
                <h3>
                    Name : {name}
                </h3>
                
                <h3>
                    Age : {age}
                </h3>
                <h3>
                    Place : {city}
                </h3>
                <button className="btn btn-success btn-sm my-2" type="button" onClick={handleChangeValues}>
                    Change Values 
                </button>

            </article>
            <h3>
                Value : {value}
            </h3>
            <button onClick={handleIncrement} className='btn'>
                Click Me 
            </button>
        </section>
    )
}