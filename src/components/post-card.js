import React from "react"
import { Link } from "gatsby"

const PostCard = ({ data }) => (
  <article className="post-card">
    <div class="post-content">
      <h2 className="title"><Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link></h2>
      <p className="meta"><time>{data.frontmatter.date}</time></p>
      <p className="tags">{data.frontmatter.tags}</p>

    </div>
  </article>
)

export default PostCard