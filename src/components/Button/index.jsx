import { Container } from "./styles";

export function Button({title, icon, to, exclude }){
  return(
    <Container to={to ?? to} className={exclude ? "exclude": "" }>
      
        {icon ?? icon}
        {title}
      
    </Container>
  )
}