"use client";

import { useContext } from "react";
import CourseContext from "../context/CourseContext";
import CourseCard from "./CourseCard";

const CourseList = () => {
    const { state } = useContext(CourseContext);
    return (
        <div className="flex flex-row flex-wrap gap-2">
            {state.courses.map(course => (
                <div className="" key={course.id}>
                    <CourseCard key={course.id} course={course} />
                </div>
            ))}
        </div>
    );
};

export default CourseList;