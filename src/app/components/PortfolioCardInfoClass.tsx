import Tags from "./TagsClass"

class PortfolioCardInfo {
  title: string
  description: string
  linkPath: string
  imagePath: string
  imageAlt: string
  tags: Tags[]

  constructor(title: string, description: string, linkPath: string, imagePath: string, imageAlt: string, tags: Tags[]) {
    this.title = title
    this.description = description
    this.linkPath = linkPath
    this.imagePath = imagePath
    this.imageAlt = imageAlt
    this.tags = tags
  }
}

export default PortfolioCardInfo