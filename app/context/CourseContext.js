"use client";

import { createContext, useReducer, useEffect } from 'react';
import { getCourses } from '../services/api';
const CourseContext = createContext();

const reducer = (state, action) => {
    console.log("::::action.type::::", action.payload)
    switch (action.type) {
        case 'SET_COURSES':
            return { ...state, courses: action.payload };
        case 'TOGGLE_ENROLLMENT':
            return { ...state, courses: state.courses.map(course => {
                if (course.id === action.payload) {
                    return { ...course, enrolled: !course.enrolled };
                }
                return course;
            }
        )};
        case 'ADD_COURSES':
            debugger
            return { ...state, courses: [action.payload, ...state.courses] };
        default:
            return state;
    }
}

export const CourseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { courses: [] });

    useEffect(() => {
        getCourses()
            .then(res => {
                const courseWithEnrollment = res.data.map(course => ({
                    ...course,
                    enrolled: false
                }));
                dispatch({ type: 'SET_COURSES', payload: courseWithEnrollment});
            })
    }, []);

    return (
        <CourseContext.Provider value={{ state, dispatch }}>
            {children}
        </CourseContext.Provider>
    );
}

export default CourseContext;