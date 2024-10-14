import React, { useEffect, useState, useRef } from "react";

export default function Blog() {
  const [formData, setformData] = useState({ title: "", content: "" });
  const [blogs, setBlogs] = useState([]);
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    titleRef.current.focus();

    setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
    setformData({ title: "", content: "" });
  }

  async function removeBlog(i) {
    setBlogs(blogs.filter((blog, index) => index !== i));
  }

  return (
    <>
      <h1>Write a Blog!!</h1>
      <div className="section">
        <form onSubmit={handleSubmit}>
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of Blog here.."
              ref={titleRef}
              value={formData.title}
              onChange={(e) =>
                setformData({
                  title: e.target.value,
                  content: formData.content,
                })
              }
            />
          </Row>
          <Row label="Content">
            <input
              className="input content"
              placeholder="Enter the Content of Blog here.."
              required
              value={formData.content}
              onChange={(e) =>
                setformData({ title: formData.title, content: e.target.value })
              }
            />
          </Row>
          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      <h2>Blogs</h2>
      {blogs.map((blog, i) => (
        <div className="blog" key={i}>
          <h3>{blog.title}</h3>
          <hr />
          <p>{blog.content}</p>

          <div className="blog-btn">
            <button
              onClick={() => {
                removeBlog(i);
              }}
              className="btn remove"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label} <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
