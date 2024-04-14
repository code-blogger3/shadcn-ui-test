import { useReducer, useState } from 'react'
import './App.css'
import { Select,  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, } from './components/ui/select'
import { initialState, todoCategoryOptions, todoReducer } from './helpers/newTodo';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

function App() {
  const [state, dispatcher] = useReducer(todoReducer, initialState);

  const handleChangeSelect = (value) => {
    dispatcher({
      type: "CHANGE_INPUT",
      payload: { name: 'todoCategory', value }, // Hardcode the name or pass it from the component
    });
  };
  const handleChange = (e) => {
    dispatcher({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  console.log(state)

  return (
    <>
     <Input
              type="text"
              placeholder="Enter Category"
              name="todoCategory"
              id=""
              value={state.todoCategory}
              onChange={handleChange}
              // defaultValue={state.todoCategory}
            />
            
      <Select
            name="todoCategory"
            id=""
            value={state.todoCategory}
           onValueChange={handleChangeSelect}
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