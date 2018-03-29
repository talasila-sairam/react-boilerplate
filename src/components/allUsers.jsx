import React from 'react';
import User from "./user.jsx";
import BackButton from "./backButton.jsx";

class AllUsers extends React.Component{
    constructor(props){
        super(props);
        this.users = [
            {
            name:"vijay",
            location:"Hyderabad"
            },
            {
            name:"Ajay",
            location:"Banglore"
            },
            {
            name:"Murthy",
            location:"Narsapur"
            },
            {
            name:"Mahesh",
            location:"Hyderabad"
            },
        ]
    }

    render(){
      let  listOfUsers = this.users.map((user,index)=>{
            return (
                <User user={user} key={index} />
            )
        })
        return (
            <div>
                <div>
                    <div className="title">All User Details</div>
                    <BackButton/>
                </div>
                <div>
                    {listOfUsers}
                </div>
            </div>
        )
    }
}

export default AllUsers;

