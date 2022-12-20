import { Component } from "react";

export class ArrayComp extends Component {
    peopleInfo = [
    {
        id: 1,
        name: 'John Smith',
        profession: 'Event Planner',
        hobbies: ['Singing at the karokee', 'Swimming', 'Bowling']
    },

    {
        id: 2,
        name: 'Mary Theodore',
        profession: 'Biogenetics Engineer',
        hobbies: ['Singing', 'Scuba Diving', 'Horse Riding']
    },

    {
        id: 3,
        name: 'Nicole Hitman',
        profession: 'Cybersecurity Engineer',
        hobbies: ['Hiking', 'Playing Chess', 'Bowling']
    },

    {
        id: 4,
        name: 'Chris Turner',
        profession: 'Gym Instructor',
        hobbies: ['Adventures', 'Scuba Diving', 'Reading']
    }
    ]

    showItem = true

    onPreviousClick = () => {
        this.setState((prevState, prevProps) => {
            return {showItem: !prevState.showItem}
        })
    }
    
    personInfo = this.peopleInfo.map((item, pos) => {
        return (
            <h5 key={item.id}>{item.name}</h5>
        )
    })

    render() {
        console.log(this.state)
        return (
            <div>
                <small onClick={this.onPreviousClick}>prev</small>
                 <div>
                    { this.peopleInfo !== null ? this.personInfo : []
                }
                </div>
                <small>next</small>
            </div>
        )
    }
}