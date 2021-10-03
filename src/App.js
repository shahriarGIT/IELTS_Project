import Main from './component/Main'
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <div>

      <BrowserRouter>
        <Main />
      </BrowserRouter>



    </div>

  );
}

export default App;
