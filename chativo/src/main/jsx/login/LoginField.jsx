import React from 'react'


const LoginField = React.createClass({
    render: function() {
        return (
                <div className="row">
                    <div className="col-md-3">
                        <label className="lbField" htmlFor={this.props.idField}>{this.props.label}</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text" id={this.props.idField} name={this.props.name} className="form-control"  />
                    </div>
                </div>
        )
    }
})

export default LoginField