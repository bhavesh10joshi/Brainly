import { useState } from 'react'
import '../App'
import { Button } from '../components/ui/Button'
import { PlusIcon } from '../components/Icons/PlusIcon'
import { ShareIcon } from '../components/Icons/ShareIcon'
import { Card } from '../components/ui/Cards'
import { PopUp } from '../components/ui/PopUpWindow'
import { SideBar } from '../components/ui/SideBar'
import { LogOutIcon } from '../components/Icons/LogoutIcon'
import { useNavigate } from 'react-router-dom'
import { SharePopUp } from '../components/ui/sharepopup'
import { UseContent } from '../components/Hooks/UseContent'

export function DashBoard() {
  const Content = UseContent();
  const Navigate = useNavigate();
  const [open , SetClose] = useState(false);
  const [Share , SetShare] = useState(true);
  function CloseShareit()
  {
    SetShare(function(open)
    {
      return !Share
    });
  }
  function Closeit()
  {
    SetClose(function(open)
    {
      return !open
    });
  }
  function logmeout()
  {
    localStorage.clear();
    Navigate("/login");
  }
  return<>
    <div className='flex'>
    <SharePopUp Share={Share} CloseShareit={CloseShareit}/>
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
                <Button Variant='primary' FrontIcon={<LogOutIcon Sizes='md'/>} Size='lg' Text='LogOut' onClick={logmeout}></Button>
            </div>
        </div>
        <div className='flex pl-[22rem] pt-6 flex-wrap'>
          {Content.map(({links , type , title , _id}) => <Card TopHead={title} Type={type} Link={links} Id={_id}/>)}
        </div>
    </div>
    </div>
  </>
}
