import { useId } from "react"

export const UserId = () =>{
    // const usernameId = useId();
    // const emailId = useId();
    // return (
    //     <form>
    //         <div>
    //             <label htmlFor={usernameId}>UserName:</label>
    //             <input  
    //              type="text"
    //              id={usernameId}
    //              name="name"  />
    //         </div>
    //         <div>
    //             <label htmlFor={emailId}>Email</label>
    //             <input type="email" id={emailId} name="email" />
    //         </div>
    //         <button type="submit">Submit</button>
    //     </form>

    //pro use if there is so many field you have to make so many useId so there is a shortCut.
    const id = useId();
    
    return (
        <form>
            <div>
                <label htmlFor={id + "usernameId"}>UserName:</label>
                <input  
                 type="text"
                 id={id + "usernameId"}
                 name="name"  />
            </div>
            <div>
                <label htmlFor={id + "emailId"}>Email</label>
                <input type="email" id={id + "emailId"} name="email" />
            </div>
            <button type="submit">Submit</button>
        </form> 
    )
}