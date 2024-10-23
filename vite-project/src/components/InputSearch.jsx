import { useState } from "react";
import PropTypes from "prop-types";

const InputSearch = ({findCharacters}) => {
    const [inputValue, setInputValue] = useState("")
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyUp={(event)=>{
                    if(event.code === "Enter"){
                        findCharacters(inputValue)
                    }
                }}
                style={{
                    padding: "10px",
                    marginBottom: "20px"
                }}
            />
        </>
    )
}

InputSearch.propTypes = {
    findCharacters:PropTypes.func
}

export default InputSearch;