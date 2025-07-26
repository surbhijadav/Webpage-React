export const  Practices = () =>{
    const students = [1,2,3] ;
    return(
         <> 
        // Not Valid condition
            <p>{students.length && "No Students Found"}</p>
            {/* Solution:1 */}
            <p>{students.length === 0 && "No Students Found"}</p>
            {/* Solution:2 */}
            <p>{!students.length && "No Students Found"}</p>
             {/* Solution:3*/}
             <p>{Boolean(!students.length) && "No Students Found"}</p>

            <p>Number of students:{students.length}</p>
        </>
    );
};