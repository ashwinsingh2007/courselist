import React from "react"
import Image from 'next/image'
import CourseContext from "../context/CourseContext";
export default function CourseCard({ course }) {
    const { dispatch } = React.useContext(CourseContext);
    const FALLBACK_IMAGE_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrbNd39rV_QS6XJeKM-pdk8VNFmiL_G-L0dg&s';
    const isValidUrl = (url) => {
        try {
          new URL(url);
          return true;
        } catch {
          return false;
        }
      };
    const initialImage = isValidUrl(course.image) ? course.image : FALLBACK_IMAGE_URL;
    return (
        <div className="card">
        <div className="card-body">
            <Image
            src={initialImage}
            alt={course.title}
            width={300}
            height={200}
            />
            <h5 className="card-title">{course.title}</h5>        
            <p className="card-text">{course.description}</p>
            <div className="flex">
                <button
                    className={`btn mr-20 ${course.enrolled ? 'bg-red-500': 'bg-blue-500'} text-white px-4 py-2 rounded`}
                    onClick={() => dispatch({ type: 'TOGGLE_ENROLLMENT', payload: course.id })}
                >
                    {course.enrolled ? 'Unenroll' : 'Enroll'}
                </button>
                <div className="ml-2 p-2">
                {course.enrolled && (<span className="badge bg-green-400">Enrolled</span>)}
                </div>
            </div>
        </div>
        </div>
    );
}