import {FiArrowLeft} from "react-icons/fi";
import {Container, Content, NewTagContainer, ButtonsContainer} from "./styles";
import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import {LinkButton} from "../../components/LinkButton";
import {ScrollBar} from "../../components/Scrollbar";
import {NewTag} from "../../components/NewTag";
import {TextArea} from "../../components/TextArea";

export function NewMovie(){
  return (
    <Container>
      <Header/>
      <Content>
        <LinkButton title="Voltar" to="/home" icon={<FiArrowLeft />} />
        <h2>Novo filme</h2>
        <ScrollBar>
          <div className="input-wrapper">
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <TextArea placeholder="Observações"/>
        
          <h3>Marcadores</h3>
          <NewTagContainer>
            <NewTag title="React"  />
            <NewTag />
          </NewTagContainer>
          <ButtonsContainer>
            <Button title="Excluir filme" exclude />
            <Button title="Salvar alterações"/>
          </ButtonsContainer>
        </ScrollBar>
      </Content>
    </Container>
  )
}