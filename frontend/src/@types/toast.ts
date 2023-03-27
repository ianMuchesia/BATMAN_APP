import { TypeOptions } from "react-toastify";

export interface Toast{
    render:string;
    type:TypeOptions | null | undefined;
    isLoading:boolean;
    autoClose:number;

}

export interface toastProps{
    toastDetails:Toast

}