"use client";
import React from "react";
import CommentRight from "./CommentRight";
import CommentLeft from "./CommentLeft";

const Comments = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-5 justify-end items-center overflow-hidden relative pb-10">
      <div className="h-2/3 w-1/12 bg-gradient-to-l from-[#F8F8F8]  to-transparent absolute right-0 bottom-0 z-10"></div>
      <div className="h-2/3 w-1/12 bg-gradient-to-r from-[#F8F8F8]  to-transparent absolute left-0 bottom-0 z-10"></div>
      <CommentRight />
      <CommentLeft />
    </div>
  );
};

export default Comments;
