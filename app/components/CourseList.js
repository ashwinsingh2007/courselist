"use client";

import { useContext } from "react";
import CourseContext from "../context/CourseContext";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const { state } = useContext(CourseContext);

  return (
    <div className="flex flex-wrap justify-center gap-6 py-6">
      {state.courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
