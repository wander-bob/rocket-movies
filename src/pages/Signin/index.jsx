import {FiMail, FiLock} from "react-icons/fi";
import {Container, Form, Background} from "./styles";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {LinkButton} from "../../components/LinkButton";

export function Signin(){
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <small>Aplicação para acompanhar tudo que assistir.</small>
        <fieldset>
          <legend>Faça seu login</legend>
          <Input icon={<FiMail />} placeholder="E-mail" />
          <Input icon={<FiLock />} placeholder="Senha" />
          <Button title="Entrar" />
        </fieldset>
      <LinkButton title="Criar conta" to="/signup"  />
      </Form>
      <Background />
    </Container>
  )
}