"use client";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { courseValidation } from '../utils/validations';
import { useContext } from 'react';
import CourseContext from '../context/CourseContext';
import { addCourse } from '../services/api';

const AddCourseForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(courseValidation),
  });

  const { dispatch } = useContext(CourseContext);

  const submitForm = data => {
    dispatch({ type: 'ADD_COURSE', payload: { ...data, enrolled: false } });
    addCourse(data).then(() => {
      reset();
    });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="mb-6 space-y-3">
      <input
        {...register('title')}
        placeholder="Course Title"
        className="border p-2 rounded w-full"
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

      <input
        {...register('description')}
        placeholder="Course Description"
        className="border p-2 rounded w-full"
      />
      {errors.description && (
        <p className="text-red-500 text-sm">{errors.description.message}</p>
      )}

      <input
        {...register('image')}
        placeholder="Image URL"
        className="border p-2 rounded w-full"
      />
      {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Course
      </button>
    </form>
  );
};

export default AddCourseForm
