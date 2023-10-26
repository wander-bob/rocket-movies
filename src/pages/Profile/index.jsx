import { FiUser, FiLock, FiMail } from "react-icons/fi";
import { Container, ProfileSettings , Header } from "./styles";
import { Button } from "../../components/Button";
import { LinkButton } from "../../components/LinkButton";
import { Input } from "../../components/Input";
export function Profile() {
  return (
    <Container>
      <Header>
        <LinkButton title="Voltar" to="/home"/>
      </Header>
      <ProfileSettings>
        <img src="https://github.com/wander-bob.png" alt="User profile"/>
        <Input icon={<FiUser/>} placeholder="Wanderson Alves"/>
        <Input icon={<FiMail/>} placeholder="wanderson.alves@domain.com"/>
        <Input icon={<FiLock/>} placeholder="Senha atual" type="password"/>
        <Input icon={<FiLock/>} placeholder="Nova senha" type="password"/>
        <Button title="Salvar"/>
      </ProfileSettings>
    </Container>
  )
}