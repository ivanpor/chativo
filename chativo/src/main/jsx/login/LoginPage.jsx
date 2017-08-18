import React from 'react'

import LoginForm from './LoginForm.jsx'

const LoginPage = React.createClass({
    
    render: function() {
        var fields = [
          {idField:'user',label:'Usuario: ',name:'username'},
          {idField:'pass',label:'Constrase\u00F1a: ',name:'password' }
        ]; 
        
        return (
                <div id="main-content" className="container mainConstainer">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-4">
                            <LoginForm fields={fields}/>
                        </div>
                    </div>
                </div>
        )
    }
})


export default LoginPage