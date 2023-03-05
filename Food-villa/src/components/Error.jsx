import {useRouteError} from "react-router-dom";

const ErrorComponent=() =>{
   const {status,statusText}=useRouteError();
    return (
      <>
         <h1>Oops</h1>
         <h2>Something went wrong</h2>
         <h2>{status +" : "+ statusText}</h2>
      </>
    )
}


export default ErrorComponent;