import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Container } from "./styles";

export function ScrollBar({children}){
  return (
    <Container>
      <ScrollArea.Root className="ScrollAreaRoot">
        <ScrollArea.Viewport className="ScrollAreaViewport">
          {children}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
          <ScrollArea.Thumb className="ScrollAreaThumb"/>
        </ScrollArea.Scrollbar>
        
      </ScrollArea.Root>
    </Container>
  )
}