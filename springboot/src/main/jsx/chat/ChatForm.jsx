import React from 'react'

const ChatForm = React.createClass({
    
    render: function() {
       
        return (
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="form-inline">
                            <input type="text" id="message" className="form-control" placeholder="Comience a escribir.." autoComplete="off" />
                            <button id="send" className="btn btn-default" type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
        )
    }
})


export default ChatForm