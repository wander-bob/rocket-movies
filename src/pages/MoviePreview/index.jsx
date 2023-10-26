import {useLocation} from "react-router-dom";
import {FiClock, FiArrowLeft} from "react-icons/fi";
import { Container, Content, TagsContainer } from "./styles";
import {Header} from "../../components/Header";
import {LinkButton} from "../../components/LinkButton";
import { Rating } from "../../components/Rating";
import {ScrollBar} from "../../components/Scrollbar";
import {Tag} from "../../components/Tag";

export function MoviePreview(){
  const location = useLocation();
  const {title, rating,content, tags, createdBy, creatorAvatar, createdAt} = location.state;
  return(
    <Container>
      <Header/>
      <Content>
        <LinkButton title="Voltar" to="/home" icon={<FiArrowLeft />}/>
        <div className="title-content">
          <h1>{title}</h1>
          <Rating tagRating={rating}/>
        </div>
        <ScrollBar>
          <div className="posted-by">
            <img src={creatorAvatar} alt={createdBy} />
            {createdBy}
            <FiClock/>
            {createdAt}
          </div>
          <TagsContainer>
            {tags.map((tag)=><Tag key={tag.id} title={tag.name}/>)}
          </TagsContainer>
          <p>{content}</p>
        </ScrollBar>
      </Content>
    </Container>
  )
}