import React from 'react'

import LoginField from './LoginField.jsx'

const LoginForm = React.createClass({
   
    render: function() {
        return (
                <form id="formLogin" name="formLogin" className="form-inline" action="/chativo/login" method="post">
                    <div className="form-group has-error">
                        {this.props.fields.map(field => (
                                <LoginField idField={field.idField} label={field.label} name={field.name} />
                        ))}
                    </div>
                    <button id="access" className="btn btn-default" type="submit">Acceder</button>
                </form>
        )
    }
})

export default LoginForm