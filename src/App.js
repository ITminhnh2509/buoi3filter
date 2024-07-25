
import Bai1 from './Bai1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from './components1/Student';
import "./style.css";
import Hook7 from './hookexample/Hook7';
import { useState } from 'react';
import LearnAPI from './hookexample/LearnAPI';
import Hook11 from './hookexample/Hook11';
import Weatherapi from './component-buoi5/Weatherapi';
function App() {
  const [show, setShow] = useState(false);
  return (
    // <Bai1 />
    // <Student />
    // <div>
    //   {
    //     show ? <Hook7 /> : "Not show hoo7"
    //   }
    //   <button onClick={() => setShow(!show)}>show</button>

    // </div >
    // <LearnAPI />
    // <Hook11 />
    // <Student />
    <Weatherapi />
  );
}

export default App;
