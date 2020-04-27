import React, {Component} from 'react'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            search: "",
            userposts: true,
            checkbox: true
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSearch = () => {}

    handleReset = () => {}

    render() {
        const mappedPosts = this.state.posts.map(post => {
            console.log(post)
            return (
            <div>
                {post.title, post.username}
                <img src={post.profile_pic}/>
            </div>
            )
        })
 

        
        return (
            
            <div className='search-input-box'>
                <input 
                    style={{
                        width: '700px',
                        }}                   
                    placeholder='Search by Title'
                    onChange={(e) => {
                        this.handleInput(e)
                    }}
                    
                    />
                    <button
                        style={{
                            backgroundImage: 'https://cdn.clipart.email/943e7ae55656ba7fb7a4a63b4b61c3eb_magnifying-glass-icon-transparent-magnifying-glass-png-download-_1622-1745.png', 
                            height: '35px', 
                            width: '35px',
                            backgroundColor: '#FF9770',
                        }}
                        className='search-button'
                        onClick={() => {
                            this.handleSearch()
                    }}>
                    </button>
                    <button
                        style={{
                            backgroundColor: '#403D39',
                            height: '35px',
                            width: '65px'
                        }}
                        className='Reset'
                        onClick={() => {
                            this.handleReset()
                        }}>Reset
                        </button>
                    <div
                        style={{
                            display: 'inline-flex',
                            marginLeft: '15%'
                        }}>
                    <label>My Posts</label>
                    <input
                    value={this.state.checkbox}
                    onClick={() => {
                        this.setState({
                            checkbox: 
                            !this.state.checkbox
                        })
                    }}
                    className='checkbox'
                    type='checkbox'
                    />
                    </div>
                    {mappedPosts}
            </div>
        )
    }
}

export default Dashboard