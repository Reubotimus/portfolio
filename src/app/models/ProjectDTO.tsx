import CardDTO from "./CardDTO";
import NameLinkDTO from "./NameLinkDTO";

export default interface ProjectDTO {
  card: CardDTO;
  name: string;
  type: string;
  date: string;
  members: string[];
  links: NameLinkDTO[];
  description: string;
  rows: Row[];
  skills: string[];
  challenges: string[];
  keyTakeaways: string[];
  stages: { title: string; detail: string }[];
}

export interface Row {
  cells: Cell[];
}

export interface Cell {
  paragraph?: ParagraphType;
  image?: ImageType;
}

export interface ParagraphType {
  title?: string;
  body: string;
}

export interface ImageType {
  url: string;
  width: number;
  height: number;
}
