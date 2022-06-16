import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleCHange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setInput('');
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input 
                type='text' 
                placeholder='Update your item' 
                value={input} 
                name='text' 
                className='todo-input edit'
                onChange={handleCHange}
                ref={inputRef}
                />
                <button className='todo-button edit'>Update</button>
            </>
            ) : (
                <>
                <input 
                type='text' 
                placeholder='Add a todo' 
                value={input} 
                name='text' 
                className='todo-input'
                onChange={handleCHange}
                ref={inputRef}
                />
                <button className='todo-button'>Add Todo</button>
                </>
            )
        }

        
    </form>
  )
}

export default TodoForm
