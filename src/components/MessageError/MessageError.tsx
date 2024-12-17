import error from '../icons/error.svg';

export function MessageError({ closeForm }: { closeForm: () => void }) {
  const onClickCloseMessage = () => {
    const message = document.querySelector('.message');
    if (message) {
      message.remove();
      closeForm();
    }
  };
  return (
    <div className="message">
      <div className="message__body">
        <div className="message__icon message__icon_error">
          <img src={error} alt="success" />
        </div>
        <h2 className="message__text message__text_error">
          УПС!!!
          <br />
          что-то пошло не так
        </h2>
        <div className="message__button button" onClick={onClickCloseMessage}>
          Закрыть
        </div>
      </div>
    </div>
  );
}
