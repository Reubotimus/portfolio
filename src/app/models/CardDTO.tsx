import { ImageType } from "./ProjectDTO";

export default interface CardDTO {
  title: string;
  date: string;
  slug: string;
  image: ImageType;
  tags: string[];
}
