# 📘 Course Enrollment Platform

A responsive and maintainable course enrollment platform built with **Next.js App Router**, leveraging **Context API with useReducer**, **React Hook Form**, and **Yup** for schema validation. Designed to be scalable and developer-friendly.

---

## 🧠 Project Overview

This app allows users to:
- Fetch and display a list of courses from a mock API.
- Enroll/Unenroll in courses using global state (Context + Reducer).
- Add a new course using a modal form with form validation.
- Display proper fallback images on broken URLs.
- Maintain clean, modern UI using Tailwind CSS.

---

## ⚙️ Tech Stack

| Technology         | Description                                          |
|--------------------|------------------------------------------------------|
| **Next.js (App Router)** | React framework for routing, SSR, structure   |
| **React Context + useReducer** | Global state management                |
| **React Hook Form** | Lightweight form management                        |
| **Yup**             | Schema-based form validation                       |
| **Tailwind CSS**    | Utility-first modern CSS framework                 |

---

## 🧾 State Management (Context + Reducer)

All enrollment and course list state is managed globally using:

- `context/CourseContext.js`:
  - Initializes state with courses from the API.
  - Handles course enrollment toggle and new course addition.

### Reducer Actions:
```js
{
  type: 'SET_COURSES',     // On initial load
  type: 'TOGGLE_ENROLLMENT', // Enroll/Unenroll course
  type: 'ADD_COURSE',       // Add new course to state
}


/app
  └── page.js               # Renders modal + course list

/components
  ├── AddCourseForm.js      # Controlled form with react-hook-form + yup
  ├── AddCourseModal.js     # Wrapper modal component for AddCourseForm
  ├── CourseList.js         # Responsive list of course cards
  └── CourseCard.js         # Single course card with enroll/unenroll button

/context
  └── CourseContext.js      # Context + reducer for managing global course state

/services
  └── api.js                # Axios/fetch-based API service methods

/utils
  └── validations.js        # Yup schema for AddCourseForm

/styles
  └── globals.css           # Tailwind base config

```


## Component Details

- CourseCard.js

    - Displays image, title, description, and Enroll/Unenroll button.

    - Uses Image from next/image with onError fallback.

    - Highlights "Enrolled" badge conditionally.

- CourseList.js
    - Renders all courses in a responsive flexbox grid.

    - Uses useContext to get courses from global state.

- AddCourseForm.js
    - Built with react-hook-form and yup schema validation.

    - Includes title, description, and image fields.

    - Calls addCourse API and updates global state.

- AddCourseModal.js
    - Renders AddCourseForm inside a modal popup.

    - Controls modal visibility via local state.

    - Passes onSuccess to close modal on form submission.

## Form Validation (Yup)
- Validation Schema (utils/validations.js):
```js
Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  image: Yup.string().url('Invalid image URL').required('Image URL is required'),
})
```

## Running Locally
- Clone & Install
```bash
git clone https://github.com/your-username/course-enroll-app.git
cd course-enroll-app
npm install
```
- Start Dev Server
```bash
npm run dev
```
App will be running at http://localhost:3000.


