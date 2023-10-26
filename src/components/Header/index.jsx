import { Container } from "./styles";
import { Input } from "../Input";
import {Avatar} from "../Avatar"
export function Header(){
  return(
    <Container>
      <h2>RocketMovies</h2>
      <Input placeholder="Pesquisar pelo título"/>
      <Avatar/>
    </Container>
  )
}