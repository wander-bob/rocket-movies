import { Container } from "./styles";

export function Input({type, placeholder, icon}){
  return (
    <Container>
        {icon ?? icon}
        <input type={type ??"text"} placeholder={placeholder ?? "Input example"}/>
    </Container> 
  )
}