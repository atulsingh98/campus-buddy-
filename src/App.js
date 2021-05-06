import React from 'react'
import StartingScreen from './Pages/StartingPage'
import {createStore,applyMiddleware,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import authReducer from './Store/reducers/Auth'
import thunk from 'redux-thunk'
import BottomNav from './components/BottomNav'

export default function App() {
  const rootReducer= combineReducers({
    authReducer:authReducer
  });

  const store=createStore(rootReducer, applyMiddleware(thunk))
  return (
  <Provider store={store}>
    
    
    <StartingScreen></StartingScreen>
    
  </Provider>
  )
}
