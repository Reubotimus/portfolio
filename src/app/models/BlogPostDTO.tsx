export interface BlogPostDTO {
  id: number;
  title: string;
  author: string;
  publicationDate: string;
  tags: string[];
  coverImage?: string;
  tableOfContents?: TableOfContents;
  sections: Section[];
}

export interface TableOfContents {
  items: TOCItem[];
}

export interface TOCItem {
  sectionId: number;
  title: string;
}

export interface Section {
  id: number;
  title: string;
  content: (Paragraph | Video | Image | Quote | List)[];
  sectionStyles?: string;
}

export interface Paragraph {
  id: number;
  title: string;
  titleStyles?: string;
  text: string;
  textStyles?: string;
}

export interface Video {
  id: number;
  title: string;
  videoPath: string;
  caption?: string;
  autoplay?: boolean;
}

export interface Image {
  id: number;
  title: string;
  imagePath: string;
  altText: string;
  caption?: string;
  styles?: string;
}

export interface Quote {
  id: number;
  text: string;
  author?: string;
  styles?: string;
}

export interface List {
  id: number;
  type: "ordered" | "unordered";
  items: string[];
  styles?: string;
}
