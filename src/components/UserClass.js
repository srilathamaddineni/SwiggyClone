import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Default",
                location:"Default",
            }
        };
    }
   async componentDidMount(){
        const data=await fetch("https://api.github.com/users/srilathamaddineni");
        const json=await data.json();
       console.log(json);
       this.setState({
        userInfo:json,
       })
    }

    render(){
        const {name,location}=this.state.userInfo;
        const {count}=this.state;
        return (
           <div className='user-card'>
            <h1>{name}</h1>
            <h2>{location}</h2>
           </div>
        );
    }
}
export default UserClass;