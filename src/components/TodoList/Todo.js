import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo"
import {v4} from 'uuid'
export default function TodoWrapper() {
  const [show,setShow] = useState(false)
    const [edit, setEdit] = useState(null);
    const [valueBase, setValueBase] = useState('');
    const [value2Base, setValue2Base] = useState('');
    const [todo, setTodo] = useState([
      {
        id: v4(),
        name: "Gabrielle",
        lname: "Adamson"
      },
      {
        id: v4(),
        name: "Arnold",
        lname: "Beckham"
      },
      {
        id: v4(),
        name: "Albert",
        lname: "Klinton"
      }
    ]);
  
    
  
    function deletTodo(id) {
      let newTodo = [...todo].filter(item => item.id !== id);
      setTodo(newTodo)
      console.log(id)
    }
  
    function editTodo(id,name,lname) {
      setEdit(id)
      setValueBase(name)
      setValue2Base(lname)
      setShow(true)
 
    }
    function saveTodo(id) {
      const newTodo = [...todo].map(item => {
        if (item.id == id) {
          item.name = valueBase
          item.lname = value2Base
        }
        return item
      })
      setTodo(newTodo)
      setEdit('')
      setShow(false)
    }
  return (
    <div>
      <AddTodo todo={todo} setTodo={setTodo}  />
      <TodoList
        todo={todo}
        setTodo={setTodo}
        editTodo={editTodo}
        deletTodo={deletTodo}
        saveTodo={saveTodo}
        edit={edit}
        valueBase={valueBase}
        setValueBase={setValueBase}
        value2Base={value2Base}
        setValue2Base={setValue2Base}
        show={show}
        setShow={setShow}
      />

    </div>
  )
}
