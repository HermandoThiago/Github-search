import { ChangeEvent } from "react";
import { StyledInput } from "./styled";

interface IPropsInput {
    placeholder: string;
    type: string;
    change: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: string;
}

export default function Input({ 
    placeholder, 
    type, 
    change, 
    value
}: IPropsInput){
    return(
        <StyledInput 
            placeholder={placeholder}
            type={type}
            onChange={change}
            value={value}
        />
    )
}