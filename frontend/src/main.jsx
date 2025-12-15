import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Pizzaprovider from './components/context/Pizzaprovider.jsx'
import { store } from './components/store/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Pizzaprovider>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </Pizzaprovider>
)
