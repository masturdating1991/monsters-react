import React, {Component} from 'react'
import MonsterCard from '../MonsterCard/MonsterCard'
import './MonsterContainer.scss'
import Form from "../Form/Form";

class MonsterContainer extends Component {
    state = {
        monsters: [],
        search: ''
    }

    async componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({monsters: data})
        //     })
        //     .catch(e => console.log(e))
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()
        this.setState({monsters: data})
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleDelete = id => {
        const {monsters} = this.state
        this.setState({monsters: monsters.filter(monster => monster.id !== id)})
    }

    handleAdd = (obj) => {
        this.setState({
            monsters: [...this.state.monsters, obj]
        })
    }

    render() {
        const {monsters, search} = this.state
        const filteredMonster = monsters.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        return (
            <>
                <input
                    name={'search'}
                    onChange={this.handleChange}
                    value={this.state.search}
                    placeholder="Search Monsters"
                />

                <Form handleAdd={this.handleAdd}/>

                <div className="grid-container">
                    {
                        filteredMonster.map(monster =>
                            <MonsterCard
                                deleteCard={this.handleDelete}
                                key={monster.id}
                                monster={monster}/>
                        )
                    }
                </div>
            </>
        )
    }
}

export default MonsterContainer