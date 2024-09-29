import './App.css'
import Initial from './components/Initial.jsx'
import Workarea from './components/Workarea.jsx'
import * as smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();


function App() {

  return (
    <div className='app'>
      <Initial />
      <Workarea />
    </div>
  )
}

export default App
