import React from "react";

type PostCardProps = {
  className: string;
  variant: string;
};

export const PostCard = ({ className, variant }: PostCardProps) => {
  return (
    <div className={`post-card ${className} post-card--${variant}`}>
      <div className="post-card__main">
        <div className="post-card__info">
          <p className="post-card__date">April 20, 2021</p>
          <h2 className="post-card__title">
            Astronauts prepare for new solar arrays
          </h2>
          <p className="post-card__discription">
            Astronauts Kayla Barron and Raja Chari floated out of the
            International Space Station airlock for a spacewalk Tuesday.
          </p>
        </div>
        <div className="post-card__image-wrapper">
          <img
            className="post-card__image"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tutu.ru%2Fgeo%2Fisrael%2Farticle%2Fphoto%2F&psig=AOvVaw3Y5lzUWwFQFzKItq5uZ6w-&ust=1667322143535000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCJjHw5P5ivsCFQAAAAAdAAAAABAE"
            alt=""
          />
        </div>
      </div>
      <div className="post-card__footer">
        <button>Like</button>
        <button>dislake</button>
        <button>bookmark</button>
        <button>more</button>
      </div>
    </div>
  );
};
