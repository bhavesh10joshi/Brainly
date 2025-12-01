import { useState } from 'react'
import '../App'
import { Button } from '../components/ui/Button'
import { PlusIcon } from '../components/Icons/PlusIcon'
import { ShareIcon } from '../components/Icons/ShareIcon'
import { Card } from '../components/ui/Cards'
import { PopUp } from '../components/ui/PopUpWindow'
import { SideBar } from '../components/ui/SideBar'
import { LogOutIcon } from '../components/Icons/LogoutIcon'
export function DashBoard() {
  const [open , SetClose] = useState(false);
  function Closeit()
  {
    SetClose(function(open)
    {
      return !open
    });
  }
  return<>
    <div className='flex'>
    <PopUp open={open} Closeit={Closeit}/>
    <SideBar/>
    <div className='bg-slate-50 w-screen h-screen'>
        <div className='w-screen flex mb-6'>
            <div className='flex justify-center items-center ml-[23rem] text-[1.7rem] mt-[5rem] font-bold'>
                All Notes
            </div>
            <div className = 'mt-[4rem] ml-[34rem]'>
                <Button onClick={Closeit} Variant='primary' FrontIcon={<PlusIcon Sizes='md'/>} Size='lg' Text='Add Content'></Button>
            </div>
            <div className='mt-[4rem] ml-4'>
                <Button Variant='secondary' FrontIcon={<ShareIcon Sizes='md'/>} Size='lg' Text='Share Brain'></Button>
            </div>
            <div className='mt-[4rem] ml-[1rem]'>
                <Button Variant='primary' FrontIcon={<LogOutIcon Sizes='md'/>} Size='lg' Text='LogOut'></Button>
            </div>
        </div>
        <div className='flex pl-[22rem] pt-6'>
            <Card TopHead='How to build Second Brain' Type="Youtube" Date="12/23/25" Link="https://youtu.be/YUAbYe6e5Hc?si=Rn145bUrBxKBqy6U"></Card>
            <Card TopHead='My First Tweet' Type="Twitter" Date="12/23/25" Link="https://x.com/cbajpai7/status/1994414296793792525?s=20"></Card>
        </div>
    </div>
    </div>
  </>
}
