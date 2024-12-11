import { Title } from '../../components/Title/Title';
import mail from '../../components/icons/mail.png';
import './Form.scss';

export function Form() {
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
            <form action="#" method="POST" id="form" autoComplete="off" className="form__body" onSubmit={() => ({})}>
              <div className="form__row">
                <div className="form__column">
                  <div className="form__item">
                    <label htmlFor="name" className="form__label">
                      Ваше имя*
                    </label>
                    <input type="text" name="name" id="name" className="form__input" required />
                  </div>

                  <div className="form__item">
                    <label htmlFor="phone" className="form__label">
                      Номер телефона*
                    </label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      placeholder="+375 (__) ___ __ __"
                      className="form__input"
                      required
                    />
                    <div className="form__hint">После +375 необходимо указать 9 символов.</div>
                  </div>

                  <div className="form__item">
                    <label htmlFor="email" className="form__label">
                      Электронная почта*
                    </label>
                    <input type="email" name="email" id="email" className="form__input" required />
                    <div className="form__hint">Пример формата эл.почты: 1264hfkm@gmail.com</div>
                  </div>
                  <div className="form__item">
                    <div className="form__label">Выберите желаемый способ доставки</div>
                    <div className="form__options options">
                      <div className="options__item">
                        <input
                          id="optionPickup"
                          defaultChecked
                          type="radio"
                          name="option"
                          value="pickup"
                          className="options__input"
                        />
                        <label htmlFor="optionPickup" className="options__label">
                          <span>Самовывоз</span>
                        </label>
                      </div>
                      <div className="options__item">
                        <input
                          id="optionDelivery"
                          type="radio"
                          name="option"
                          value="delivery"
                          className="options__input"
                        />
                        <label htmlFor="optionDelivery" className="options__label">
                          <span>Доставка</span>
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
                    <textarea name="text" id="text" className="form__input" required></textarea>
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
                          name="image"
                          id="fileImage"
                          className="file__input"
                        />
                        <div className="form__hint">
                          Загружаемое изображение должно быть в формате jpg; png; gif. И весом не более 5 мб
                        </div>
                        <div className="file__button">Загрузить файл</div>
                      </div>
                      <div className="file__preview" id="filePreview"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form__item">
                <div className="agreement">
                  <input type="checkbox" name="agreement" id="agreement" className="agreement__input" required />
                  <label htmlFor="agreement" className="agreement__label">
                    <span>
                      Я даю согласие на обработку персональных данных в соответствии с{' '}
                      <a href="#">политикой конфиденциальности</a>
                    </span>
                  </label>
                </div>
              </div>
              <div className="form__button-wrapper">
                <button type="submit" className="form__button button">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
