import React from "react";

const PortfolioCard = ({
  title,
  imageSrc,
  description,
  previewLink,
  githubLink,
}) => {
  return (
    <div className="col-4">
      <div className="card p-2 shadow rounded-5 border border-0 h-100">
        <div className="card-img-top">
          <a href={githubLink} className="text-decoration-none">
            <img
              src={imageSrc}
              alt={title}
              className="rounded-5"
              width={"100%"}
              height={"100%"}
            />
          </a>
        </div>
        <div className="card-body">
          {description}
          <br />
          <a href={previewLink}>Preview Link</a>
          <br />
          <a href={githubLink}>Github Link</a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
