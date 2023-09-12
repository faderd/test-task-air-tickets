import { Route, Routes } from 'react-router-dom'
import { AppRoute } from '../../const'
import MainScreen from '../../pages/main-screen/main-screen'

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainScreen />}
      />
    </Routes>
  )
}

export default App
