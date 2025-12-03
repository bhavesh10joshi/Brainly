import { useState } from 'react'
import { BrowserRouter , Routes , Route , Link , useNavigate } from 'react-router-dom'
import { DashBoard } from './Pages/DashBoard'
import { LogIn } from './Pages/LogIn'
import { SignUp } from './Pages/SignUp'
import { SharePage } from './Pages/Sharepage'
import { TweetsDashBoard } from './Pages/Tweets'
import { VideosDashBoard } from './Pages/Videos'
import './App.css'

function App() {
  return<>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/brain/:shareLink" element={<SharePage/>}/>
        <Route path="/user/tweets" element={<TweetsDashBoard/>}/>
        <Route path="/user/videos" element={<VideosDashBoard/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
