import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  issue: yup.string().required(),
  reported_at: yup.date().nullable(),
  resolved: yup.boolean().nullable(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
