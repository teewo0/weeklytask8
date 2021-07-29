import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Peoples() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then((response) => {
            setPeople(response.data.results)
        })
    })

        if(people){
            return (
                people.map((people) => (
            <section>
                <div className="bg-color">

                    <ul>
                        <img src = "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt = ""/>
                    <li key = {people}>
                        <h1>{people.name}</h1>
                        <p>{people.gender}</p>
                        <p>{people.height}</p>

                    </li>

                    </ul>

                </div>
            </section>
                ))
            )
        }

    return (
        <div>
            <p>{people}</p>
            
        </div>
    )
}

export default Peoples
