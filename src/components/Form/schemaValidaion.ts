import * as Yup from 'yup';

const nameValidation = Yup.string()
  .required('Обязательное для заполнения поле')
  .matches(/^(?:[^ ]|$)/, 'Первым символом не может быть пробел')
  .matches(/^(?:\s*[a-zа-яё]+(?:-[a-zа-яё]+)?(?:\s+[a-zа-яё]+(?:-[a-zа-яё]+)?)?)?$/iu, 'Некорректная запись')
  .max(30, 'Число символов должно быть не более 30');

const phoneValidation = Yup.string()
  .required('Обязательное для заполнения поле')
  .length(13, 'После +375 необходимо указать 9 символов.');

const emailValidation = Yup.string()
  .required('Обязательное для заполнения поле')
  .matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, 'Некорректный email')
  .matches(/^(?!\.)(?!.*\.\.)/, 'Некорректный email');

const messageValidation = Yup.string()
  .required('Обязательное для заполнения поле')
  .matches(/^[а-яА-Яa-zA-Z0-9\s.,!?()/\\+«»'"‘“’”:;&$#№<>-]*$/, 'Введен недопустимый символ')
  .matches(/^(?:[^ ]|$)/, 'Первым символом не может быть пробел')
  .max(250, 'Число символов должно быть не более 250');

// const fileValidation = Yup.mixed().test(
//   'file',
//   'Неверный формат файла. Пожалуйста загрузите JPEG, GIF или PNG формат.',
//   function checkFile(value) {
//     if (!value) return true;
//     const supportedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
//     return supportedFormats.includes(value.type);
//   },
// );

const supportedFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
const MAX_SOLUTION_FILE_SIZE_MB = 10;
const MAX_SOLUTION_FILE_SIZE_BYTES = MAX_SOLUTION_FILE_SIZE_MB * 1024 * 1024;

const fileValidation = Yup.mixed()
  .required('Обязательное для заполнения поле')
  .test('fileSize', function checkFileSize(value) {
    if (!value) return true;
    return value.size <= MAX_SOLUTION_FILE_SIZE_BYTES;
  })
  .test('fileFormat', function checkFile(value) {
    if (!value) return true;
    return supportedFormats.includes(value.type);
  });

const agreementValidation = Yup.boolean().oneOf([true], 'Обязательное для заполнения поле');

export const schema = Yup.object().shape({
  name: nameValidation,
  phone: phoneValidation,
  email: emailValidation,
  option: Yup.string(),
  text: messageValidation,
  // file: fileValidation,
  agreement: agreementValidation,
});
