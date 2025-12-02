import '../App';
import { Logo } from '../components/Image/Logo';
import { InputBox } from '../components/ui/InputsBox';
import { Button } from '../components/ui/Button';
import { Load } from '../components/ui/LoadElement';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { API_URL } from '../components/Util';
import axios from 'axios';

export function SignUp()
{
    const [Loading ,SetLoading] = useState(false);
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    async function Submit()
    {
        SetLoading(true);
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const user = await axios.post(`${API_URL}/signup` , {
            username : username , 
            password : password
        });
        if(user)
        {
            SetLoading(false);
            alert("Successfully Signed Up !");
            navigate("/login");
        }
        else
        {
            alert("Error Occurred ! Try Again Later");
            SetLoading(false);
        }
        
    }
    function redirect()
    {
        navigate("/signup");
    }
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
                    <InputBox Size='lg' Placeholder='Username' reference={usernameRef}/>
                    <InputBox Size='lg' Placeholder='Password'reference={passwordRef}/>
                </div>
                <div className='flex justify-center items-center'>
                    <Button Variant='primary' Size='ul' Text='SignUp' Loading={Loading} Load={<Load/>} onClick={Submit}/>
                </div>
                <div className='flex justify-center items-center mt-[2rem]'>
                    <div className='text-[0.9rem] text-slate-800 font-'>Already have an Account ?</div>
                    <div><a onClick={redirect} className='text-[0.9rem] font-bold'>Sign In</a></div>
                </div>
            </div>
        </div>
    </>   
}
