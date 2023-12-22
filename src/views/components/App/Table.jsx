import React from 'react';
import PropTypes from 'prop-types'

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Почта</th>
                <th>Удалить</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter} = props;
    console.log(props)
        return (
            <div class='container'>
                <table>
                    <TableHeader />
                    <TableBody characterData={characterData} removeCharacter={removeCharacter} />
                </table>
                <button className='newInput' onClick={props.logOut}>Выйти</button>
            </div>
        );
}

export default Table;