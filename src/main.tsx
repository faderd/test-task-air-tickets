import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app/App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
// для работы на GitHub Pages используем HashRouter
import { HashRouter as Router } from 'react-router-dom'
import './styles/index.less'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
)
