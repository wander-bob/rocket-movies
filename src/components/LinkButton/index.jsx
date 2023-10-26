import { Container } from "./styles";
import {FiArrowLeft} from "react-icons/fi";

export function LinkButton ({icon, title, to}){
  return (
    <Container to={to ?? to}>
        { icon ?? icon }
        { title }
    </Container> 
  )
}