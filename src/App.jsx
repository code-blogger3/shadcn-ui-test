import { useState } from 'react'
import './App.css'

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
      <div className=" bg-white h-screen w-screen flex flex-col items-center justify-center">
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="w-full max-w-xs font-bold hover:opacity-70 relative text-white bg-[#635fc7] py-2 rounded-full"
        >
          Open Modal
        </button>
   {/*<-------------------------- Modal ------------------------------> */}
        {isModalOpen &&
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
          onClick={(e) => {
            if (e.target !== e.currentTarget) {
              return;
            }
            setIsModalOpen(false);
          }}
          >
          <div className="max-w-sm relative bg-white rounded-lg p-6">
            <h3>Modal</h3>
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={(e)=> setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4">Modal Content</h2>
        <p>This is a sample modal. Click the &times; to close it. Or Click anywhere outside of the modal </p>
          </div>
        </div>
          }
      </div>
    );
  }
export default App
 