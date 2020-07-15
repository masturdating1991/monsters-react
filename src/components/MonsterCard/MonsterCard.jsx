import React, {Component} from 'react'
import './MonsterCard.scss'

class MonsterCard extends Component {
    render() {
        const {monster, deleteCard} = this.props
        return (
            <div className="grid-item">
                <img className='grid-item-img'
                     src={`https://api.adorable.io/avatars/256/Ali@adorable.png${this.props.monster.id}`}/>
                <h1>{monster.name}</h1>
                <p>{monster.email}</p>
                <button onClick={() => deleteCard(monster.id)}>Delete Me</button>
            </div>
        )
    }
}

export default MonsterCard;