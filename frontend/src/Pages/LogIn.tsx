import '../App';
import { Logo } from '../components/Image/Logo';
import { InputBox } from '../components/ui/InputsBox';
import { Button } from '../components/ui/Button';
import { Load } from '../components/ui/LoadElement';
export function LogIn()
{
    return <>
        <div className=' flex justify-center items-center h-screen bg-slate-200'>
            <div className=' w-[30rem] h-[35rem] bg-white rounded-lg border border-black'>
                <div className='w-full flex justify-center items-center ml-[-2rem] mt-[2rem]'>
                    <Logo/>
                </div>
                <div className='flex justify-center items-center text-[1.8rem] mt-[1rem]'>
                    Login
                </div>
                <div className='mt-[2rem]'>
                    <InputBox Size='lg' Placeholder='Username'/>
                    <InputBox Size='lg' Placeholder='Password'/>
                </div>
                <div className='flex justify-center items-center'>
                    <Button Variant='primary' Size='ul' Text='Submit' Loading={false} Load={<Load/>}/>
                </div>
                <div className='flex justify-center items-center mt-[2rem]'>
                    <div className='text-[0.9rem] text-slate-800 font-'>Don't Have An Account ?</div>
                    <div><a href="" className='text-[0.9rem] font-bold'>Sign up</a></div>
                </div>
            </div>
        </div>
    </>   
}
