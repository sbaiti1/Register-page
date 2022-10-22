import React from "react"
import Form from "./form"
import Show_info from "./show_info"
export default function Home(){
    const [isShown ,  setShow] = React.useState(true)
    let result = {}
    if(!isShown){
        result = JSON.parse(sessionStorage.getItem("form"))
        console.log(result.first_name);
    }
    
    function HandleSubmit(event){
        event.preventDefault()
        setShow(false)
        

        
    
    }
    
    return(
        <>
            {isShown ? <Form submit = {HandleSubmit} /> : <Show_info {...result} /> }
          
        </>
    )
}