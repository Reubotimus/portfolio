import CardDTO from "./CardDTO";
import NameLinkDTO from "./NameLinkDTO";

export default interface ProjectDTO {
  card: CardDTO;
  name: string;
  type: string;
  date: string;
  members: string[];
  links: NameLinkDTO[];
  headLineImage: ImageType;
  contentHtml: string;
}

export interface ImageType {
  url: string;
  width: number;
  height: number;
}
