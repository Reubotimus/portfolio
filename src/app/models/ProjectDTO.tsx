import CardDTO from "./CardDTO";
import MediaDTO from "./MediaDTO";
import NameLinkDTO from "./NameLinkDTO";

export default interface ProjectDTO {
  name: string;
  type: string;
  date: string;
  members: string[];
  links: NameLinkDTO[];
  description: string;
  stages: { title: string; detail: string }[];
  skills: string[];
  architecture: string;
  media: MediaDTO;
  challenges: string[];
  futureImprovements: string[];
  keyTakeaways: string[];
  card: CardDTO;
}
