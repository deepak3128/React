import React from "react";
import UserContext from "./UserContext";
import { User } from "lucide-react";

const Contexprovider = ({children}) => {

    const [user , setuser ] = React.useState(null)
    return(
        <Contexprovider value={{user,setuser}}>
       {children}
        </Contexprovider>

    )

}

export default Contexprovider;