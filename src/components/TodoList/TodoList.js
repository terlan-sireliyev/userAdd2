import React, { useState } from 'react'
import stylePopup from './TodoList.module.css'
export default function TodoList({
    todo,
    editTodo,
    deletTodo,
    saveTodo,
    edit,
    valueBase,
    value2Base,
    setValueBase,
    setValue2Base,
    show,
    setShow
}) {
    const closePopup = () => {
        setShow(false)
    }

    return (
        <div>
            <div className={stylePopup.baseCard}>
                {
                    show ? <div className={stylePopup.wallDesktop} onClick={closePopup}></div> : ""
                }
                {
                    todo.map(item => (
                        <div key={item.id}>
                            {
                                edit == item.id && show ?
                                    <form>
                                        <div className={stylePopup.cardBase}>
                                            <div className={stylePopup.textInformation}>Please change your information</div>
                                            <div className={stylePopup.inputsBaseDiv}>
                                                <div className={stylePopup.inputBaseDiv}>
                                                    <label>Your`s name</label><br />
                                                    <input onChange={(e) => setValueBase(e.target.value)} value={valueBase} type="text" />
                                                </div>
                                                <div className={`${stylePopup.inputBaseDiv} ${stylePopup.inputBaseDiv2}`}>
                                                    <label>Your`s LastName</label><br />
                                                    <input onChange={(e) => setValue2Base(e.target.value)} value={value2Base} type="text" />
                                                </div>
                                            </div>
                                            <div><button onClick={() => saveTodo(item.id)} className={stylePopup.btnSave}>Save</button></div>
                                        </div>
                                    </form> : ""
                            }
                            <div className={stylePopup.desktopInfrom}>
                                <div className={stylePopup.desktopInfromOne}>
                                    <div>{item.name}</div>
                                    <div>{item.lname}</div>
                                </div>
                                <div className={stylePopup.desktopInfromOneBtn}>
                                    <button onClick={() => deletTodo(item.id)}>Remove</button>
                                    <button onClick={() => editTodo(item.id, item.name, item.lname)}>Edit</button>
                                </div>

                            </div>


                        </div>

                    ))
                }
            </div>
            <div className={stylePopup.skolka}><span>Your`s item list count: {todo.length}</span></div>
        </div>
    )
}
