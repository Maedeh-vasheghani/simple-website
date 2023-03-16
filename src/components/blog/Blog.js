import React from 'react'
import './Blog.css'
import BlogItem from './BlogItem'
import blog1Image from '../../assets/images/post-1.jpg'
import blog2Image from '../../assets/images/post-2.jpg'
import blog3Image from '../../assets/images/post-3.jpg'

export default function blog() {
  let blogs = [
    {blogImage : blog1Image,
    blogTitle: 'Post Number 1',
    blogDesc: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
    blogAuthor: ' Maedeh Farahani',
    blogTime : '5 mins'
  },
  {blogImage : blog2Image,
  blogTitle: 'Post Number 2',
  blogDesc: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
  blogAuthor: ' Ali Farahani',
  blogTime : '5 mins'
},
{blogImage : blog3Image,
    blogTitle: 'Post Number 3',
    blogDesc: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
    blogAuthor: 'Mahdi Farahani ',
    blogTime : '12 mins'
  }]
  return (
    <section id="blog">
    <div className="container">
      <div className="section-info">
        <h2 className="section-title">BLOG</h2>
        <p className="section-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="row">
        <BlogItem {...blogs[0]} />
        <BlogItem {...blogs[1]} />
        <BlogItem {...blogs[2]}/>
      </div>
    </div>
  </section>
  )
}
