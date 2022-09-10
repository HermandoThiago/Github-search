import { StyledInput } from "./styled";

interface IPropsInput {
    placeholder: string;
    type: string;
}

export default function Input({ placeholder, type }: IPropsInput){
    return(
        <StyledInput 
            placeholder={placeholder}
            type={type}
        />
    )
}