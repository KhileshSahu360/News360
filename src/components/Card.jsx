import React, { useEffect } from "react";

const Card = ({ author,title, image, des, url }) => {
  return (
    <div className="card position-relative" style={{ width: "18rem" }}>
      <span className="position-absolute top-0 translate-middle badge  bg-danger" style={{left:'86%'}}>
        {author}
        <span className="visually-hidden">unread messages</span>
      </span>
      <img
        src={
          image
            ? image
            : "https://cdn.vox-cdn.com/thumbor/uuUWNSE7qofoQibzgDCM-s4fDoU=/0x0:4652x3102/1200x628/filters:focal(2326x1551:2327x1552)/cdn.vox-cdn.com/uploads/chorus_asset/file/25270885/1252220497.jpg"
        }
        className="card-img-top"
        alt="Image Unavalaible"
        style={{ height: "150px" }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {title?title.length > 50 ? title.slice(0, 50) + "..." : title:'No title'}
        </h5>
        <p className="card-text">
          {des?des.length > 80 ? des.slice(0, 80) + "..." : des:'No Description'}
          <span className="badge bg-secondary mx-4">New</span>
        </p>
        <a href={url} target="_blank" className="btn btn-sm btn-primary ">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
