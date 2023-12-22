import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    hidden = true

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.loginUser(this.state.email, this.state.password)
        this.setState({
            email: '',
            password: ''
        })
        this.hidden = false;
    }


    render() {
        const {email, password} = this.state
        return (
            <div>
                <div className="loginStyle">
                    <h3>Добро пожаловать</h3>
                    <h5>Войдите чтобы продолжить</h5>
                    <form onSubmit={this.onFormSubmit}>
                        <input className="newInput"
                            placeholder="Почта" 
                            type="text" 
                            name="email" 
                            id="email"
                            value={email} 
                            onChange={this.handleChange}/>
                        <input className="newInput"
                            placeholder="Пароль"
                            type='password'
                            name='password'
                            id='password'
                            value={password}
                            onChange={this.handleChange}/>
                            {!this.hidden ? (<div className="loginStyle">
                                <h5>Пароль или почта не верны.</h5>
                            </div>)
                            : <div></div>}
                        <button type="submit" className="loginStyle">
                            Войти
                        </button>
                    </form>
                </div>
                <footer>
                    <p>
                        Впервые на сайте? <Link to='/form'>Зарегистрируйтесь сейчас!</Link>
                    </p>
                </footer>
            </div>
        )
    }
}

export default Login