"use client";

import React, { useState } from "react";
import Image from "next/image";
import CourseContext from "../context/CourseContext";

export default function CourseCard({ course }) {
  const { dispatch } = React.useContext(CourseContext);
  const FALLBACK_IMAGE_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrbNd39rV_QS6XJeKM-pdk8VNFmiL_G-L0dg&s";

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const initialImage = isValidUrl(course.image)
    ? course.image
    : FALLBACK_IMAGE_URL;

  const [imgSrc, setImgSrc] = useState(initialImage);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-[300px] md:w-[340px]">
      <Image
        src={imgSrc}
        alt={course.title}
        width={340}
        height={200}
        className="object-cover w-full h-[200px]"
        onError={() => setImgSrc(FALLBACK_IMAGE_URL)}
        unoptimized
      />

      <div className="p-4 flex flex-col justify-between gap-3">
        <div>
          <h5 className="text-lg font-semibold text-gray-800 truncate">
            {course.title}
          </h5>
          <p className="text-sm text-gray-600 line-clamp-3">
            {course.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <button
            className={`text-sm px-4 py-2 rounded font-medium text-white ${
              course.enrolled
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={() =>
              dispatch({ type: "TOGGLE_ENROLLMENT", payload: course.id })
            }
          >
            {course.enrolled ? "Unenroll" : "Enroll"}
          </button>

          {course.enrolled && (
            <span className="text-green-700 bg-green-100 px-2 py-1 text-xs rounded-full">
              Enrolled
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
