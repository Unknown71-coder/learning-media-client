import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, img, name, views } = course;
  return (
    <div className="border-slate-400 rounded-md border-2 px-4 pb-9">
       
      <img className="mt-3 h-3/5" src={img} alt="" />
      <p className="text-xl text-green-800 font-bold mt-2">{name}</p>
      <p className="text-orange-800 font-semibold">Views: {views}</p>
      <button className="block w-9/12 rounded-md bg-red-500 mx-auto  mt-2 h-10 text-white font-bold text-xl">
        <Link to={`/course/${id}`}>Course Details</Link>
      </button>
    </div>
  );
};

export default Course;
