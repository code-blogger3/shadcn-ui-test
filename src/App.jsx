import { useReducer, useState } from 'react'
import './App.css'
import { Select,  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, } from './components/ui/select'
import { initialState, todoCategoryOptions, todoReducer } from './helpers/newTodo';

function App() {
  const [state, dispatcher] = useReducer(todoReducer, initialState);

  const handleChange = (value) => {
    dispatcher({
      type: "CHANGE_INPUT",
      payload: { name: 'todoCategory', value }, // Hardcode the name or pass it from the component
    });
  };
  console.log(state)

  return (
    <>
      <Select
            name="todoCategory"
            id=""
            value={state.todoCategory}
           onValueChange={handleChange}
          >
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              {todoCategoryOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
    </>
  )
}

export default App
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };