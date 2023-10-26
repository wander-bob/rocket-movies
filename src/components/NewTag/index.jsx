import { FiX, FiPlus } from "react-icons/fi";
import { Container } from "./styles";

export function NewTag({title}){
  return(
    <Container className={ !title ? "new" : "" }>
      { title ?? "Novo marcador" }
      {!title ? <FiPlus /> : <FiX  /> }
    </Container>
  )
}