import { BrowserRouter , Routes , Route, Navigate } from 'react-router-dom'
import { DashBoard } from './Pages/DashBoard'
import { LogIn } from './Pages/LogIn'
import { SignUp } from './Pages/SignUp'
import { SharePage } from './Pages/Sharepage'
import { TweetsDashBoard } from './Pages/Tweets'
import { VideosDashBoard } from './Pages/Videos'
import './App.css'

function App() {
  const token = localStorage.getItem("token");

  return<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/dashboard"/> : <Navigate to="/login"/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/brain/:shareLink" element={<SharePage/>}/>
        <Route path="/user/tweets" element={<TweetsDashBoard/>}/>
        <Route path="/user/videos" element={<VideosDashBoard/>}/>
        <Route path="*" element={<Navigate to="/login"/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
