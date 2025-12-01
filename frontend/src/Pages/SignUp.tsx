import '../App';
import { Logo } from '../components/Image/Logo';
import { InputBox } from '../components/ui/InputsBox';
import { Button } from '../components/ui/Button';
import { Load } from '../components/ui/LoadElement';
export function SignUp()
{
    return <>
        <div className=' flex justify-center items-center h-screen bg-slate-200'>
            <div className=' w-[30rem] h-[35rem] bg-white rounded-lg border border-black'>
                <div className='w-full flex justify-center items-center ml-[-2rem] mt-[2rem]'>
                    <Logo/>
                </div>
                <div className='flex justify-center items-center text-[1.8rem] mt-[1rem]'>
                    Create An Account
                </div>
                <div className='mt-[4rem]'>
                    <InputBox Size='lg' Placeholder='Username'/>
                    <InputBox Size='lg' Placeholder='Password'/>
                </div>
                <div className='flex justify-center items-center'>
                    <Button Variant='primary' Size='ul' Text='SignUp' Loading={false} Load={<Load/>}/>
                </div>
                <div className='flex justify-center items-center mt-[2rem]'>
                    <div className='text-[0.9rem] text-slate-800 font-'>Already have an Account ?</div>
                    <div><a href="" className='text-[0.9rem] font-bold'>Sign In</a></div>
                </div>
            </div>
        </div>
    </>   
}
