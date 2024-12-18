import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Title } from '../Title/Title';
import { schema } from './schemaValidaion';
import { Loading } from '../Loading/Loading';
import { MessageSuccess } from '../MessageSuccess/MessageSuccess';
import { MessageError } from '../MessageError/MessageError';
import { FormDataType } from '../../types/interfaces';
import mail from '../../components/icons/mail.png';
import close from '../../components/icons/close.svg';
import './Form.scss';

export function Form({ onClickBtnCloseOrderForm }: { onClickBtnCloseOrderForm: () => void }) {
  const [phone, setPhone] = useState('+375');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<FormDataType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: FormDataType) => {
    try {
      setLoading(true);
      const formData = new FormData(document.getElementById('form') as HTMLFormElement);

      formData.append('file', previewUrl as string);
      formData.forEach((value, key) => {
        console.log(key, value);
      });

      const response = await fetch('http://localhost:8099/uploads', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        //   Accept: 'application/json',
        // },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          option: data.option as string,
          text: data.text,
          file: formData.get('file'),
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        reset();
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputPhoneFrom5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const cursorPosition = event.target.selectionStart;

    if (inputValue.length === 0 || inputValue.length <= 4) {
      setPhone('+375');
    } else if ((cursorPosition as number) <= 4) {
      event.preventDefault();
    } else {
      const newValue = inputValue.slice(0, 4) + inputValue.slice(4).replace(/[^0-9]/g, '');
      setPhone(newValue);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputPhoneFrom5(event);
    register('phone').onChange(event);
  };

  const filePickerRef = useRef<HTMLInputElement>(null);
  const handleFilePick = () => {
    filePickerRef.current?.click();
  };

  const handleCloseForm = () => {
    onClickBtnCloseOrderForm();
  };

  return (
    <div>
      <div className="form">
        {loading ? (
          <Loading />
        ) : success ? (
          <MessageSuccess closeForm={onClickBtnCloseOrderForm} />
        ) : error ? (
          <MessageError closeForm={onClickBtnCloseOrderForm} />
        ) : (
          <div className="form__container _container">
            <div className="form__box">
              <div className="form__image-mail">
                <img src={mail} alt="mail" />
              </div>
              <div className="form__close-form" onClick={handleCloseForm}>
                <img src={close} alt="close" />
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
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form__row">
                    <div className="form__column">
                      <div className="form__item">
                        <label htmlFor="name" className="form__label">
                          Ваше имя*
                        </label>
                        <input
                          type="text"
                          id="name"
                          className={errors.name ? 'form__input form__input_error' : 'form__input'}
                          required
                          {...register('name')}
                        />
                        {errors.name && <div className="form__error">{errors.name.message}</div>}
                      </div>

                      <div className="form__item">
                        <label htmlFor="phone" className="form__label">
                          Номер телефона*
                        </label>
                        <input
                          type="phone"
                          id="phone"
                          className={errors.phone ? 'form__input form__input_error' : 'form__input'}
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
                        <input
                          type="email"
                          id="email"
                          className={errors.email ? 'form__input form__input_error' : 'form__input'}
                          required
                          {...register('email')}
                        />
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
                        <textarea
                          id="text"
                          className={errors.text ? 'form__input form__input_error' : 'form__input'}
                          {...register('text')}
                          required
                        ></textarea>
                        {errors.text && <div className="form__error">{errors.text.message}</div>}
                        <div className="form__hint">
                          В данном поле необходимо указать вид желаемого угощения, кому, в честь какого праздника. А
                          также пожелания по декору, весу торта и начинке.
                        </div>
                      </div>

                      <div className="form__item">
                        <div className="form__label">Прикрепите изображения желаемого торта</div>
                        <div className="form__file file">
                          <div className="file__item">
                            <div className="form__hint hint">
                              Загружаемое изображение должно быть в формате jpg; png; gif. И весом не более 5 мб
                            </div>
                            <div className="file__button" onClick={handleFilePick}>
                              Загрузить файл
                            </div>
                            <input
                              accept="image/*, .jpg, .jpeg, .png, .gif, webp"
                              type="file"
                              id="file"
                              name="file"
                              className="file__input"
                              onChange={handleFileChange}
                              ref={filePickerRef}
                            />
                            {errors.file && <div className="form__error">{errors.file.message}</div>}
                          </div>
                          {previewUrl && <img className="file__preview" src={previewUrl} alt="Preview" />}
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
                <h6 className="form__attention">
                  <span>ВНИМАНИЕ!</span>
                  Отправленная заявка не является оформленным заказом!
                  <br />
                  Для подтверждения заказа я свяжусь с Вами для уточнения деталей.{' '}
                </h6>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
