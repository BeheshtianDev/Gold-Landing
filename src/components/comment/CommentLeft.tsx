import React from "react";
import CommentCard from "./CommentCard";

function CommentLeft() {
  return (
    <div className="w-full " dir="ltr">
      {/* Scrolling wrapper with reverse animation */}
      <div className="flex gap-5 animate-marquee-reverse hover:[animation-play-state:paused]">
        {/* Duplicate for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-5">
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
}

export default CommentLeft;
