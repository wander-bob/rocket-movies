
import { Container, TagsContainer } from "./styles";
import { Rating } from "../Rating";
import { Tag } from "../Tag";

export function MovieNote({title, rating,content, tags, createdBy, creatorAvatar, createdAt}){
  const data = {title, rating,content, tags, createdBy, creatorAvatar, createdAt};
  return(
    <Container to="/movie-preview" state={data} >
      <h2>{title}</h2>
      <Rating tagRating={rating}/>
      <span>
        {content}
      </span>
      <TagsContainer>
      {
        tags.map((tag)=> <Tag key={tag.id} title={tag.name} />)
      }
      </TagsContainer>
    </Container>
  )
}