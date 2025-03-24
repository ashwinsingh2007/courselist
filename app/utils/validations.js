import * as Yup from 'yup';

export const courseValidation = Yup.object({
  title: Yup.string().required('Title required'),
  description: Yup.string().required('Description required'),
  image: Yup.string().required('Image is required'),
});
