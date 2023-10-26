import {FiArrowLeft,FiLock, FiMail, FiUser} from "react-icons/fi";
import {Container, Form, Background} from "./styles";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {LinkButton} from "../../components/LinkButton";

export function Signup(){
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <small>Aplicação para acompanhar tudo que assistir.</small>
        <fieldset>
          <legend>Crie sua conta</legend>
          <Input icon={<FiUser />} placeholder="Nome" />
          <Input icon={<FiMail />} placeholder="E-mail" />
          <Input icon={<FiLock />} placeholder="Senha" />
          <Button title="Cadastrar" />
        </fieldset>
      <LinkButton title="Voltar para o login" to="/" icon={<FiArrowLeft/>} />
      </Form>
      <Background />
    </Container>
  )
}