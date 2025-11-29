import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button';
import { Plusicon } from './components/icons/plusicon';

function App() {
  return<>
    <Button starticon={<Plusicon/>} variant="primary" size="sm" text="Share" ></Button>
    <Button variant="secondry" size="lg" text="Add content"></Button>
    <Button variant="secondry" size="lg" text="Add content"></Button>
  </>
  
}

export default App
