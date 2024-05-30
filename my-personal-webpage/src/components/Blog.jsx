import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = ({ limit }) => {
    const allBlogs = [
        { id: 1, title: 'Blog Post 1', content: 'Content of blog post 1...' },
        { id: 2, title: 'Blog Post 2', content: 'Content of blog post 2...' },
        { id: 3, title: 'Blog Post 3', content: 'Content of blog post 3...' },
        // Add more blog posts here
    ];

    const blogsToShow = limit ? allBlogs.slice(0, limit) : allBlogs;

    return (
        <div className="blog">
            <div className="name">
                <h2>Blogs</h2>
            </div>
            <div className="blog-list">
                {blogsToShow.map(blog => (
                    <Link key={blog.id} to={`/blog/${blog.id}`} className="blog-post">
                        <h3>{blog.title}</h3>
                        <p>{blog.content.substring(0, 100)}...</p> {/* Show preview content */}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;





