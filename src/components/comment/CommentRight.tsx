import React from "react";
import CommentCard from "./CommentCard";

const CommentRight = () => {
  return (
    <div className="w-full  " dir="ltr">
      {/* Scrolling wrapper */}
      <div className="flex justify-center items-center gap-5 animate-marquee hover:[animation-play-state:paused]">
        {/* Duplicate the set of cards */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex justify-center items-center gap-5">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentRight;
