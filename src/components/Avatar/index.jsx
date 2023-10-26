import { Container } from "./styles";
import {Link} from "react-router-dom";

export function Avatar(){
  return (
    <Container>
      <div className="profile-info">
        <strong>Wanderson Alves</strong>
        <a href="#">sair</a>
      </div>
      <Link to="/profile">
        <img src="https://github.com/wander-bob.png"/>
      </Link>
    </Container>
  );
}