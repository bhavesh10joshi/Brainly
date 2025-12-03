import { useState } from 'react'
import '../App'
import { Button } from '../components/ui/Button'
import { PlusIcon } from '../components/Icons/PlusIcon'
import { ShareIcon } from '../components/Icons/ShareIcon'
import { Card } from '../components/ui/Cards'
import { PopUp } from '../components/ui/PopUpWindow'
import { SideBar } from '../components/ui/SideBar'
import { useParams } from 'react-router-dom'
import { UseShareContent } from '../components/Hooks/UseShareContent'

export function SharePage() {
  const {shareLink} = useParams();
  const ShareContents = UseShareContent(shareLink ?? "");
  console.log(ShareContents);
  return<>
    <div className='flex'>
    <SideBar/>
    <div className='bg-slate-50 w-screen h-screen'>
        <div className='w-screen flex mb-6'>
        </div>
        <div className='flex pl-[22rem] pt-6 flex-wrap'>
          {Array.isArray(ShareContents) &&
            ShareContents.map(({ links, type, title, _id }) => (
              <Card  
                CardType = {"share"}
                TopHead={title}
                Type={type}
                Link={links}
                Id={_id}
                key={_id}
        />
  ))}        
    </div>
    </div>
    </div>
  </>
}
