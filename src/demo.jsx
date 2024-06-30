import React from 'react'

export default function demo() {

const [isModalOpen, setIsModalOpen]
       = useState(false)
  return (
    <div>
        <button onClick={() => {setIsModalOpen(true)}}
        > Open Modal </button>
 {  /  CSS is not displayed as it is not our focus /}
        {isModalOpen &&
        <div onClick={(e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          setIsModalOpen(false);
        }}>
          <div>
            <h3>Modal</h3>
        <button onClick={(e)=> setIsModalOpen(false)}
            > &times; </button>
                 {/* Modal Content here */}
          </div>
        </div>
          }
     </div>
  )
}
