import { manufacturers } from './../constans/index';
import { MouseEventHandler } from "react";

export interface CustomBottonProps {
    title:string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
}

export interface SearchManufacturerProps {
    manufacturer:string;
    setManufacturer:(manufacturer:string) => void
}