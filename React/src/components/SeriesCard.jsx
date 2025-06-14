import "./Netflix.css"
export const SeriesCard = ({data}) =>{
    if (!data) return null;
    const {img_url,name,rating,description,cast,genre,watch_url} = data;  
    const btn_style={
        padding : "1.2rem 2.4rem",
        border:"none",
        fontSize:"1.6rem",
        backgroundColor:"var(--bnt-hover-bg-color)",
        color:"var(--bg-color)",
    }  
        return(  
            <li className="card">
                <div>
                <img
               src={img_url} alt={name}  width="40%" height="40%" className="img" />
                </div>
                <div className="card-content">
                <h3 >Name:{name} </h3>
                <h4 >Rating:{rating}</h4>
                <p>Summary:{description}</p>
                <p>Genre:{genre.join(",")}</p>
                <p>Cast:{cast.join(",")}</p>
                <a href={watch_url} target="_blank">
                <button style={btn_style}>Watch Now</button>
                </a>
                </div>
                {/* Solution:2 */}
                {/* <button> {age>= 18 ? "Watch Now" : "Not Available"}</button> */}
                {/* Solution:3 */}
                {/* <button>{canWatch}</button> */}
        
                </li>
        );
                };