import {BrowserRouter, Navigate} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Table from '../../conteiners/Table';
import Form from '../../conteiners/Form';
import Login from '../../conteiners/Login';
import { Component } from 'react';


class App extends Component {

    render() {
        const {isLogined} = this.props
        return(
            <BrowserRouter>
                    {
                       isLogined ?  
                       <Routes>
                        <Route path='/users' element={<Table/>}/>
                        <Route path='*' element={<Navigate to='/users'/>}/>
                       </Routes>
                       :
                       <Routes>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/form' element={<Form/>}/>
                            <Route path='*' element={<Navigate to='/login'/>}/>
                       </Routes>
                    }
            </BrowserRouter>
        );
    }
}

export default App;
