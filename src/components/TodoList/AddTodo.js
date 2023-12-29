import React, { useState } from 'react'
import { v4 } from 'uuid'
import stylePopup from './TodoList.module.css'
export default function AddTodo({ todo, setTodo }) {
    const [valueName, setValueName] = useState('');
    const [valueLastName, setValueLastName] = useState('');
    function saveTodo(e) {
        e.preventDefault()
        if (valueName === '' || valueLastName === '') {
            alert('Inputlar bosdur')
        } else {
            setTodo(
                [
                    ...todo, {
                        id: v4(),
                        name: valueName,
                        lname: valueLastName
                    }
                ]
            )
            setValueName('')
            setValueLastName('')
        }

    }
    return (
        <div className={stylePopup.overFormDiv}>
            <div className={stylePopup.textAddUser}>Please add user</div>
            <form>
                <input type="text" placeholder='Name' onChange={(e) => setValueName(e.target.value)} value={valueName} />
                <input type="text" placeholder='LastName' onChange={(e) => setValueLastName(e.target.value)} value={valueLastName} />
                <button onClick={saveTodo} className={stylePopup.addButton}>Add User</button>
            </form>
        </div>
    )
}
