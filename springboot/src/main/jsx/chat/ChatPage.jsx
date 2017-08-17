import React from 'react'

import ChatTable from './ChatTable.jsx'
import ChatForm from './ChatForm.jsx'

const ChatPage = React.createClass({
    
    getInitialState() {
        return {currentUser: ""}
    },
    
    componentWillMount(){
        fetch('/springboot/currentuser', {
            credentials: 'same-origin'})  
        .then((response) => {
            return response.text()
        })
        .then((recurso) => {
            this.setState({currentUser: recurso});
        })
    },

    render: function() {

        return (
                <div id="main-content" className="container-fluid mainContainer">
                    <ChatTable mensage={this.state.currentUser}/>
                    <ChatForm />
                </div>
        )
    }
})


export default ChatPage