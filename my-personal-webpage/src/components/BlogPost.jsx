import React from 'react';
import './BlogPost.css';
import { useParams } from 'react-router-dom';
import WebDevImg from './images/WebDev.jpg';

const allBlogs = [
    { 
      id: 1, 
      title: 'Web Dev Capstone Presentation', 
      img: WebDevImg,
      content: `On the memorable date of April 19th, 2024, a pivotal moment arrived for myself and my fellow classmates as we stood on the threshold of our web development journey, ready to present our final projects. It was a day marked by a blend of excitement, nerves, and a palpable sense of achievement as we prepared to showcase our hard work to an esteemed audience comprising not only our teachers and peers but also notable industry figures. 
      
      As the day unfolded, I found myself grappling with a mixture of emotions, from the thrill of sharing our creations to the apprehension of speaking in front of such a diverse audience. Yet, despite the nerves, we rose to the occasion, each presentation a testament to our dedication and passion for our craft. 
      
      As I reflect on that day, I am filled with immense pride for my classmates and myself. Together, we navigated the challenges of web development, supporting and inspiring one another along the way. Looking ahead, I am filled with anticipation for the opportunities that lie ahead in our professional endeavors as developers. This experience has not only strengthened my skills but also fueled my determination to continue growing and evolving in this dynamic field.`
    },
    { id: 2, 
      title: 'Blog Post 2', 
      img: WebDevImg, 
      content: 'Content of blog post 2...' 
    },
    { id: 3, 
      title: 'Blog Post 3', 
      img: WebDevImg, 
      content: 'Content of blog post 3...' 
    },
    // Add more blog posts here
];

const BlogPost = () => {
    const { id } = useParams();
    const blog = allBlogs.find(blog => blog.id === parseInt(id));

    if (!blog) {
        return <div>Blog post not found.</div>;
    }

    const contentParts = blog.content.split('\n\n');

    return (
        <div className="blog-post-detail">
            <h2 className="blog-post-title">{blog.title}</h2>
            <div className="blog-post-header">
                <img src={blog.img} alt={blog.title} className="blog-post-image" />
                <p className="blog-post-content">{contentParts[0]}</p>
            </div>
            <div className="blog-post-body">
                {contentParts.slice(1).map((part, index) => (
                    <p key={index}>{part}</p>
                ))}
            </div>
        </div>
    );
};

export default BlogPost;

