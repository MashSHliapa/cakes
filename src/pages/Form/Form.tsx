import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Title } from '../../components/Title/Title';
import { UserModalDataType } from '../../types/interfaces';
import mail from '../../components/icons/mail.png';
import './Form.scss';

export function Form() {
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

  const agreementValidation = Yup.boolean().oneOf([true], 'Обязательное для заполнения поле');

  const scheme = Yup.object().shape({
    name: nameValidation,
    phone: phoneValidation,
    email: emailValidation,
    text: messageValidation,
    agreement: agreementValidation,
  });

  const {
    // handleSubmit,
    register,
    // reset,
    formState: { errors, isValid, isDirty },
  } = useForm<UserModalDataType>({
    mode: 'onChange',
    resolver: yupResolver(scheme),
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const [phone, setPhone] = useState('+375');

  const handleInputPhoneFrom5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const cursorPosition = event.target.selectionStart;

    // Если поле пустое, устанавливаем '+375'
    if (inputValue.length === 0 || inputValue.length <= 4) {
      setPhone('+375');
    } else if (cursorPosition as number <= 4) {
      event.preventDefault();
    } else {
      const newValue = inputValue.slice(0, 4) + inputValue.slice(4).replace(/[^0-9]/g, '');
      setPhone(newValue);
      console.log(newValue);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputPhoneFrom5(event);
    register('phone').onChange(event);
  };

  return (
    <div className="form">
      <div className="form__container _container">
        <div className="form__box">
          <div className="form__image-mail">
            <img src={mail} alt="mail" />
          </div>
          <div className="form__main-title">
            <Title>Оставьте заявку</Title>
          </div>
          <h2 className="form__title">Заполните форму заявки и я свяжусь с Вами в ближайшее время</h2>
          <div className="form__form">
            <form
              action="#"
              method="POST"
              id="form"
              // autoComplete="off"
              className="form__body"
              onSubmit={() => ({})}
            >
              <div className="form__row">
                <div className="form__column">
                  <div className="form__item">
                    <label htmlFor="name" className="form__label">
                      Ваше имя*
                    </label>
                    <input type="text" id="name" className="form__input" required {...register('name')} />
                    {errors.name && <div className="form__error">{errors.name.message}</div>}
                  </div>

                  <div className="form__item">
                    <label htmlFor="phone" className="form__label">
                      Номер телефона*
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      className="form__input"
                      required
                      value={phone}
                      {...register('phone')}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="form__error">{errors.phone.message}</div>}
                  </div>

                  <div className="form__item">
                    <label htmlFor="email" className="form__label">
                      Электронная почта*
                    </label>
                    <input type="email" id="email" className="form__input" required {...register('email')} />
                    {errors.email && <div className="form__error">{errors.email.message}</div>}
                    <div className="form__hint">Пример формата эл.почты: 1264hfkm@gmail.com</div>
                  </div>

                  <div className="form__item">
                    <div className="form__label">Выберите желаемый способ доставки</div>
                    <div className="form__options options">
                      <div className="options__item">
                        <label htmlFor="optionPickup" className="options__label">
                          <input
                            id="optionPickup"
                            defaultChecked
                            type="radio"
                            value="pickup"
                            className="options__default-button"
                            {...register('option')}
                          />
                          <span className="options__new-button"></span>
                          Самовывоз
                        </label>
                      </div>
                      <div className="options__item">
                        <label htmlFor="optionDelivery" className="options__label">
                          <input
                            id="optionDelivery"
                            type="radio"
                            value="delivery"
                            className="options__default-button"
                            {...register('option')}
                          />
                          <span className="options__new-button"></span>
                          Доставка
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__column">
                  <div className="form__item">
                    <label htmlFor="text" className="form__label">
                      Сообщение*
                    </label>
                    <textarea id="text" className="form__input" {...register('text')} required></textarea>
                    {errors.text && <div className="form__error">{errors.text.message}</div>}
                    <div className="form__hint">
                      В данном поле необходимо указать вид желаемого угощения, кому, в честь какого праздника. А также
                      пожелания по декору, весу торта и начинке.
                    </div>
                  </div>

                  <div className="form__item">
                    <div className="form__label">Прикрепите изображения желаемого торта</div>
                    <div className="form__file file">
                      <div className="file__item">
                        <input
                          accept=".jpg, .jpeg, .png, .gif, webp"
                          type="file"
                          id="image"
                          className="file__input"
                          onChange={handleFileChange}
                        />
                        {errors.file && <div className="form__error">{errors.file.message}</div>}
                        {previewUrl && <img className="file__preview" src={previewUrl} alt="Preview" />}

                        <div className="form__hint">
                          Загружаемое изображение должно быть в формате jpg; png; gif. И весом не более 5 мб
                        </div>
                        <div className="file__button">Загрузить файл</div>
                        <div className="file__preview" id="filePreview"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form__item">
                <div className="agreement">
                  <label htmlFor="agreement" className="agreement__label">
                    <input
                      type="checkbox"
                      id="agreement"
                      className="agreement__default-button"
                      required
                      {...register('agreement')}
                    />
                    <span className="agreement__new-button"></span>
                    <span>
                      Я даю согласие на обработку персональных данных в соответствии с{' '}
                      <a href="#">политикой конфиденциальности</a>
                    </span>
                  </label>
                </div>
              </div>

              {isValid && isDirty ? (
                <div className="form__button-wrapper">
                  <button type="submit" className="form__button">
                    Отправить
                  </button>
                </div>
              ) : (
                <div className="form__button-wrapper">
                  <button type="submit" className="form__button disabled" disabled>
                    Отправить
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
