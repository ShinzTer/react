import React, {Component} from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'

class Form extends Component {

    state = {
        id: this.props.characterLastId,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
    }

    hidden = false
    isNewUser = false


    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        if(!Object.values(this.state).includes('')){
            this.props.addUser(this.state);
            this.setState({
                id: this.props.characterLastId,
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            });
            this.hidden = false;
            this.isNewUser = true;
        }
        else{
            this.setState(this.state);
            this.hidden = true;
        }
    }

    render() {
        const { firstName, lastName, email, password } = this.state; 
        return (
            <div class='loginStyle'>
                {this.isNewUser && (<Navigate to="/login" replace={true} />)}
                <h3>Добавить пользователя</h3>
            <form onSubmit={this.onFormSubmit}>
                <label for="firstName">Имя</label>
                <input className='newInput'
                    type="text" 
                    name="firstName" 
                    id="firstName"
                    value={firstName} 
                    onChange={this.handleChange} />
                <label for="lastName">Фамилия</label>
                <input className='newInput'
                    type="text" 
                    name="lastName" 
                    id="lastName"
                    value={lastName} 
                    onChange={this.handleChange} />
                <label for="email">Почта</label>
                <input className='newInput'
                    type="text" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />
                <label for="password">Пароль</label>
                <input className='newInput'
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={this.handleChange}>
                </input>
                {this.hidden ? (<footer>
                    Не все поля заполнены. Пожалуйста заполните все поля.
                </footer>)
                : (<div></div>)}
                    <button type="add user">
                        Добавить пользователя
                    </button>  
            </form>
            </div>
        );
    }
}

export default Form;