import './App.css'

import Protected from './components/Protected'
import Public from './components/Public'

import useOauth2 from './hooks/useOauth2'

function App() {
  const [isLogin, token] = useOauth2();
  return isLogin ? <Protected token={token}/> : <Public />
}

export default App
