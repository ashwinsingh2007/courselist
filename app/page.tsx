"use client";
import CourseList from './components/CourseList';
import AddCourseModal from "./components/AddCourseModal";
import { CourseProvider } from './context/CourseContext';

export default function Home() {
  return (
    <CourseProvider>
      <main className="container mx-auto p-4">
        <AddCourseModal />
        <CourseList />
      </main>
    </CourseProvider>
  );
}

