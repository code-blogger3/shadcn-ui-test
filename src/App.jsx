import { useReducer, useState } from 'react'
import './App.css'
import { Select,  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, } from './components/ui/select'
import { initialState, todoCategoryOptions, todoReducer } from './helpers/newTodo';

function App() {
  const [state, dispatcher] = useReducer(todoReducer, initialState);
  const [value,setValue] = useState('')
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  console.log(value)

  return (
    <>
      <Select
            name="todoCategory"
            id=""
            value={value}
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
