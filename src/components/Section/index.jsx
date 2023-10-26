import { Container} from "./styles";
import { ScrollBar } from "../Scrollbar";

export function Section({children}){    
  return (
    <Container>
      <ScrollBar>
        {children}
      </ScrollBar>
    </Container>
  )
}