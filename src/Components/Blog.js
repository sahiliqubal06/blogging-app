import React from "react";

export default function Blog() {
  return (
    <>
      <h1>Write a Blog!!</h1>
      <div className="section">
        <form>
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of Blog here.."
            />
          </Row>
          <Row label="Content">
            <input
              className="input content"
              placeholder="Enter the Content of Blog here.."
            />
          </Row>
          <button className="btn">ADD</button>
        </form>
      </div>

      <hr/>

      <h2>Blogs</h2>
      {/* {blogs.map((blog,i)=>(
        <div className="blog" key={i}>
            <h3></h3>
            <hr/>
            <p></p>
            
            <div className="blog-btn">
                <button className="btn remove">
                    Delete
                </button>
            </div>
        </div>
      ))} */}
    </>
  );
}


  function Row(props){
    const{label}=props;
    return(
        <>
        <label>
            {label} <br/>
        </label>
        {props.children}
        <hr/>
        </>
    )
  }

