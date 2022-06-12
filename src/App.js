import React from 'react'
import { Provider } from 'react-redux'
import Page from './Page'
import './Style/App.scss'
import store from './redux/Store'

// const store = createStore(allReducers, )




function App() {

  
  return (
    <Provider store={store}>  
      <div>
        <Page/>
      </div>
    </Provider>
  )
}

export default App
