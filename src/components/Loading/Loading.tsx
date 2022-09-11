import { StyledLoader } from "./styled"

import { FallingLines } from "react-loader-spinner"

export default function Loading(){
    return (
        <StyledLoader>
            <FallingLines
                color="#fff"
                width="100"
                visible={true}
            />
        </StyledLoader>
    )
}