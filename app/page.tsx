"use client";
import CourseList from './components/CourseList';
import AddCourseForm from './components/AddCourseForm';
import { CourseProvider } from './context/CourseContext';

export default function Home() {
  return (
    <CourseProvider>
      <main className="container mx-auto p-4">
        <AddCourseForm />
        <CourseList />
      </main>
    </CourseProvider>
  );
}
