
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Lobby} from "./page/Lobby.jsx";
import {Chat} from "./page/Chat.jsx";

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Lobby className="lobby" />} />
         <Route path="/chat" element={<Chat className="chat" />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
