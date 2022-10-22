import "./infos.css"
import eth from "./assets/eth.png"
export default function Show_info(props){
    return(
        <div className="infos">
         <h1>welcome {props.first_name} {props.last_name} </h1>
         <br />
          <p>here's your email : {props.email} </p>

          <p className="img"></p>

          <p className="footer"> <i>more styling & features will be added !</i> </p>
        </div>
    )
}