import { Container, Star } from "./styles";
import { useState } from "react";
import { theme } from "../../styles/theme";

export function Rating({tagRating}){
  const [rating, setRating] = useState(tagRating);
  const [hover, setHover] = useState(null);
  return(
    <Container>
      
      {[...Array(5)].map((star, index)=>{
        const currentRating = index + 1;
        return (
          <Star 
          key={index}
              onClick={()=> setRating(currentRating)}
              fill={currentRating <=(rating || hover) ? theme.pink._500 : theme.pink._400}
              onMouseEnter={()=> setHover(currentRating)}
              onMouseLeave={()=> setHover(null)}
              />
          )
        }
      )}
    </Container>
  )
}