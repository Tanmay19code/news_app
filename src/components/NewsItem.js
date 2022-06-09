import React from "react";

const NewsItem = (props) => {
  let {
    title,
    description,
    imageUrl,
    newsUrl,
    author,
    date,
    source,
    styleObj,
  } = props;
  // console.log(styleObj);
  return (
    <div className="my-3">
      <div
        className="card"
        style={{ backgroundColor: `${styleObj.cardHolder}` }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="ImageNotFound" />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ color: `${styleObj.cardTextHolder}` }}
          >
            {title.slice(0, 30) + "..."}
          </h5>
          <p
            className="card-text"
            style={{ color: `${styleObj.cardTextDesc}` }}
          >
            {description}
          </p>
          <p className="card-text">
            <small style={{ color: `${styleObj.authorTextColor}` }}>
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
