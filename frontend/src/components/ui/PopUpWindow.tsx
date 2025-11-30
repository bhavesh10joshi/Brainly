import { CloseIcon } from "../Icons/CloseIcon"
import { InputBox } from "./InputsBox"
import { Button } from "./Button"
interface PopUpProps {
  open: boolean;
  Closeit: () => void;
}
export function PopUp({open , Closeit} : PopUpProps)
{
    return<>
        {open && <div className="h-screen w-screen bg-slate-500/60 absolute flex justify-center items-center ">
            <div className="bg-white pb-5 ">
                <div className="w-[24rem] place-items-end mt-2 mb-4">
                    <CloseIcon Sizes="lg" onClick={Closeit}/>
                </div>
                <InputBox Size="lg" Placeholder="Type"/>
                <InputBox Size="lg" Placeholder="Content"/>
                <div className="flex justify-center items-center mt-5">
                    <Button Variant="primary" Size="lg" Text="Submit"/>
                </div>
            </div>
        </div>}
    </>   
}