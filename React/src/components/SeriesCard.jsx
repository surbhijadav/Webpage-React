import styles from "./Netflix.module.css";
import styled from "styled-components";
export const SeriesCard = ({data}) =>{
    if (!data) return null;
    const {img_url,name,rating,description,cast,genre,watch_url} = data;  
    // const btn_style={}
//style component using object
    // const ButtonStyle = styled.button({
    //     padding : "1.2rem 2.4rem",
    //     border:"none",
    //     fontSize:"1.6rem",
    //     backgroundColor:`${rating > 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    //     color:"var(--btn-color)",
    //     fontWeight : "bold",
    //     cursor : "pointer",
    // }); 

//styled components using template litrerals
const ButtonStyle = styled.button`
        padding : 1.2rem 2.4rem;
        border : none;
        font-size : 1.6rem;
        background-color: ${(props) => props.rating > 8.5 ? "#7dcea0" : "#f7dc6f"};
        color:var(--btn-color);
        font-weight : bold;
        cursor :pointer;
`;

const Rating = styled.h3`
     fontS-size:1.6rem;
     color : #7dea0;
     text-transform : capitalize;
`;


const ratingClass = rating > 8.5 ? styles.super_hit : styles.average;
        return(  
            <li className={styles.card}>
                <div>
                <img
               src={img_url} alt={name}  width="40%" height="40%" className="img" />
                </div>
                <div className={styles["card-content"]}>
                <h2>Name:{name} </h2>
                <Rating>Rating:
                    <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></Rating>
                <p>Summary:{description}</p>
                <p>Genre:{genre.join(",")}</p>
                <p>Cast:{cast.join(",")}</p>
                <a href={watch_url} target="_blank">
                {/* <button style={btn_style}>Watch Now</button> */}
                <ButtonStyle rating={rating}>Watch Now</ButtonStyle>
                </a>
                </div>
                {/* Solution:2 */}
                {/* <button> {age>= 18 ? "Watch Now" : "Not Available"}</button> */}
                {/* Solution:3 */}
                {/* <button>{canWatch}</button> */}
        
                </li>
        );
                };