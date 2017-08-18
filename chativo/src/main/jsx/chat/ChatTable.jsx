import React from 'react'

const ChatTable = React.createClass({
    
    render: function() {
       
        return (
                <div className="row">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Hola {this.props.mensage}</th>
                                        <th>
                                            <form name="formLogout" action="/chativo/logout" className="form-inline pull-right">
                                                <div className="form-group">
                                                    <button id="disconnect" className="btn btn-default" type="submit" >Log out</button>
                                                </div>
                                            </form>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <div>                
                                <table>
                                    <tbody id="conversations">
    
                                    </tbody>
                                </table>
                            </div> 
                        </div>
                        <div className="col-md-10">
                             <div id="charla">                
                                <table>
                                    <tbody id="conversation">
                                        <tr>
                                            <td id="left"></td>
                                            <td id="right"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div>                
                                <table>
                                    <tbody id="users">
    
                                    </tbody>
                                </table>
                            </div>                   
                        </div>
                    </div>
               </div>
        )
    }
})


export default ChatTable