import {FiPlus} from "react-icons/fi";
import { Container, Content, Title } from "./styles";
import {Header} from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import {MovieNote} from "../../components/MovieNote";
import {notesList} from "../../noteslist"

export function Home(){
  const noteList = notesList;
  return (
    <Container>
      <Header />
      <Title>
        <h1>Meus filmes</h1>
        <Button title="Adicionar filme" icon={<FiPlus/>} to="/new-movie"/>
      </Title>
      <Content>
        <Section >
        {
          notesList.map((item, index) => 
            <MovieNote 
              key={index} 
              title={item.title} 
              content={item.content}
              rating={item.rating}
              tags={item.tags}
              createdAt={item.createdAt}
              createdBy={item.createdBy}
              creatorAvatar={item.creatorAvatar}
            />
          )
        }
        </Section>    
      </Content>
    </Container>
  )
}