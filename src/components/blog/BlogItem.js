import React from 'react'

export default function BlogItem({blogImage,blogTitle,blogDesc,blogAuthor,blogTime}) {
  return (
    <div className="col-4">
    <div className="blog-box">
      <div className="blog-img">
        <img src={blogImage} className="img-fluid" alt='blogImage'/>
      </div>
      <div className="blog-content">
        <h3 className="blog-title">{blogTitle}</h3>
        <p className="blog-desc">
        {blogDesc}
        </p>
      </div>
      <div className="blog-footer">
        <div className="post-author">
          <p className="author">{blogAuthor}</p>
        </div>
        <div className="post-date">
          <span className="bi bi-clock">{blogTime}</span> 
        </div>
      </div>
    </div>
  </div>
  )
}
