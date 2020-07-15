import React, {useEffect, useState, useRef} from "react";

import './Form.scss'


const Form = props => {
    const [name, setName] = useState({
        name: ''
    })

    const [email, setEmail] = useState({
        email: ''
    })

    const nameInput = useRef(null);

    const handleSubmit = e => {
        e.preventDefault()
        const newMonster = {name, email}
        props.handleAdd(newMonster)
        setName('')
        setEmail('')

    }


    useEffect(() => {
        nameInput.current.focus();
    })

    return (

        <form className="frm" onSubmit={handleSubmit}>

            <div><label htmlFor="name">Name: </label>
                <input
                    ref={nameInput}
                    type="text"
                    name="name"
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <button>Submit</button>

        </form>
    )
}


export default Form