import React, {Component} from 'react'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            search: "",
            userposts: true
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            
            <div className='search-input-box'>
                <input
                    placeholder='Search by Title'
                    onChange={(e) => {
                        this.handleInput(e)
                    }}
                    />
            </div>
        )
    }
}

export default Dashboard