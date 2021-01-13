import React from 'react'
import UserCard from "./Components/UserCard"
import List from "./Components/List"
import axios from "axios"

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      userData: {},
      followers: [],
      followerData: []
    }
  }

  componentDidMount(){
    
    axios.get(`https://api.github.com/users/Mark-DeLong`)
      .then(res => {
        this.setState({
          userData: res
        })
      })
    }
    
  componentDidUpdate(prevProps, prevState){
    
    if (this.state.mainUserData !== prevState.mainUserData) {  
      axios.get(`https://api.github.com/users/Mark-DeLong/followers`)
        .then(res => {
          console.log(res)
        this.setState({
          followers: res
        })
      })
    }

    if (this.state.followerData !== prevState.followerData) {
      this.state.followerData.map(follower => {
        return(
        axios.get(`https://api.github.com/users/${followers}}`)
          .then(res => {
            console.log(res)
          this.setState({
            followerData: [...this.state.followerData, res]
          })
        })
      )})
    }
  }
    

  render() {
    return (
      <div className="container">
        <div 
          className="title"
        >
          <h1>
            Github Follower Profiles
          </h1>
        </div>
        <div 
          className="followers"
        >
          <h2>
            Your followers: 
          </h2>
          <List state={this.state} />
        </div>
      </div>
    )
  }
}


export default App