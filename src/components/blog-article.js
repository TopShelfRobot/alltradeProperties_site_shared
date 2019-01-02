import React from 'react'
import format from 'date-fns/format'

import './blog-article.scss'

const BlogPublishDate = ({ date }) => <div>{format(date, 'MMM D, YYYY')}</div>
const BlogAuthor = ({ author }) => <div>{author.name}</div>

const BlogArticle = ({ article, ...props }) => (
  <article className="blog-article">
    <h4>{article.title}</h4>
    <div className="blog-meta">
      <BlogPublishDate date={article.publishedAt} />
      <BlogAuthor author={article.author} />
    </div>
    <div className="blog-content" dangerouslySetInnerHTML={{ __html: article.content }} />
  </article>
)

export default BlogArticle
