import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './components/Icons/PlusIcon'
import { ShareIcon } from './components/Icons/ShareIcon'
import { Card } from './components/ui/Cards'
import { PopUp } from './components/ui/PopUpWindow'
function App() {
  const [open , SetClose] = useState(false);
  function Closeit()
  {
    SetClose(function(open)
    {
      return !open
    });
  }
  return<>
    <PopUp open={open} Closeit={Closeit}/>
    <div className='w-screen flex mb-6'>
      <div className = 'mt-9 ml-[73rem]'>
        <Button onClick={Closeit} Variant='primary' FrontIcon={<PlusIcon Sizes='md'/>} Size='lg' Text='Add Content'></Button>
      </div>
      <div className='mt-9 ml-4'>
        <Button Variant='secondary' FrontIcon={<ShareIcon Sizes='md'/>} Size='lg' Text='Share Brain'></Button>
      </div>
    </div>
    <div className='flex pl-12'>
      <Card TopHead='How to build Second Brain' Type="Youtube" Date="12/23/25" Link="https://youtu.be/YUAbYe6e5Hc?si=Rn145bUrBxKBqy6U"></Card>
      <Card TopHead='My First Tweet' Type="Twitter" Date="12/23/25" Link="https://x.com/cbajpai7/status/1994414296793792525?s=20"></Card>
    </div>
  </>
}

export default App
