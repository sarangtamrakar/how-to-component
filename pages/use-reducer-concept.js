import React, { useReducer } from 'react'

export const ACTIONS = {
    ADDITEM: "ADDITEM",
    INPUTFORM: "INPUTFORM",
    DELETEITEM: "DELETEITEM",
    EDITITEM: "EDITITEM",
    RESETINPUTFORM: "RESETINPUTFORM",
    PINITEM : "PINITEM"
}

const UseReducerConcept = () => {

    // 1. initial state
    // 2. reducer fn
    // 3. useReducer as redux which is having => reducer function & initial states
    // 4. ACTIONS to perform => ADDITEM , DELETEITEM , EDITITEM

    const INITIAL_STATES = {
        todoList: [],
        inputForm: {
            item: "",
            date: new Date()
        }
    }

    const reducer = (state, action) => {

        switch (action.type) {

            case ACTIONS.INPUTFORM:
                return {
                    ...state,
                    inputForm: {
                        ...state.inputForm,
                        [action.payload.name]: action.payload.value
                    }
                }

            case ACTIONS.RESETINPUTFORM:
                return {
                    ...state,
                    inputForm: {
                        item: "",
                        date: new Date()
                    }
                }

            case ACTIONS.ADDITEM:
                if (action.payload.item === "") return state;
                return {
                    ...state,
                    todoList: [...state.todoList, action.payload]
                }

            case ACTIONS.DELETEITEM:
                return {
                    ...state,
                    todoList: state.todoList.filter((todoItem, index) => {
                        if (index !== action.payload) {
                            return todoItem;
                        }
                    })
                }
            
            case ACTIONS.EDITITEM:
                return {
                    ...state,
                    todoList: state.todoList.map((todoItem, index) => {
                        if (index === action.payload.idx) {
                            return {
                                item: action.payload.value,
                                date: new Date()
                            }
                        } else {
                            return todoItem;
                        }
                    })
                }
            
            case ACTIONS.PINITEM:
                return {
                    ...state, 
                    todoList: [action.payload.data, ...state.todoList.filter((todoItem, index) => {
                        if (index !== action.payload.idx){
                        return todoItem;
                        }
                    })]
                }
            
            default:
                return state

        }
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATES);


    const handleform = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADDITEM, payload: state.inputForm });

        // // reset the form
        dispatch({ type: ACTIONS.RESETINPUTFORM });
    }

    const handleDelete = (idx) => {
        dispatch({ type: ACTIONS.DELETEITEM, payload: idx });
    }


    const handlePIN = ({ item, date,idx}) => {
        dispatch({ type: ACTIONS.PINITEM, payload: { data: {item , date} , idx :idx } })
    }


    return (
        <div>
            
            <h2 className='text-lg font-bold'>Todo List Features with useReducer Implementation</h2>
            <ul>
                <li>ADDITEM</li>
                <li>DELETEITEM</li>
                <li>EDITITEM</li>
                <li>PINITEM</li>
                <li>HANDLE INPUTFORM FOR ADDING TODO</li>
                <li>RESET INPUTFORM AFTER ADDING ITEM</li>

            </ul>

            <form className='mt-10'>
                <input className='text-black' type="text" name="item" value={state.inputForm.item} onChange={(e) => {
                    dispatch({ type: ACTIONS.INPUTFORM, payload: { name: e.target.name, value: e.target.value } })
                }} />

                <input type="date" name="date" value={state.inputForm.date}
                    onChange={(e) => { dispatch({ type: ACTIONS.INPUTFORM, payload: { name: e.target.name, value: e.target.value } }) }}
                />

                <button onClick={(e) => handleform(e)} className='bg-blue-500 p-2 rounded-md cursor-pointer'>Submit</button>
            </form>


            <div>
                {state.todoList?.map(({ item, date }, idx) => {
                    return (<div key={idx} className='flex justify-start items-center gap-4'>
                        <input value={item} onChange={(e) => {
                            dispatch({ type: ACTIONS.EDITITEM, payload: { idx: idx, value: e.target.value } })
                        }}>

                        </input>

                        <button onClick={(e) => {
                            handleDelete(idx);
                        }}>Delete</button>

                        <button onClick={(e) => {
                            handlePIN({ item, date ,idx});
                        }}>PIN</button>

                    </div>)
                })}
            </div>



        </div>
    )
}

export default UseReducerConcept
