import React, { useState } from "react"
import axios from "axios"

class UserCard extends React.Component {
  render() {
    
    return (
      <div 
        className="userCard"
      >
        <img
          href={this.props.user.avatar_url}
        >
        </img>
        <div 
          className="card-info"
        >
          <h3 
            className="name"
          >
            {this.props.user.name}
          </h3>
          <p 
            className="username"
          >
            {this.props.user.login}
          </p>
          <p 
            className="location"
          >
            {this.props.user.location}
          </p>
          <p>
            Profile: 
            <a 
              href={this.props.user.html_url}
            >
              {this.props.user.html_url}
            </a>
          </p>
          <p>
            Followers: {this.props.user.followers}
          </p>
          <p>
            Following: {this.props.user.following}
          </p>
          <p>
            Bio: {this.props.user.bio}
          </p>
        </div>
      </div>
    )
   }
}


export default UserCard