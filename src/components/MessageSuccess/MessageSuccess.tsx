import success from '../icons/success.svg';
import './Message.scss';

export function MessageSuccess({ closeForm }: { closeForm: () => void }) {
  const onClickCloseMessage = () => {
    const message = document.querySelector('.message');
    if (message) {
      message.remove();
      // message.parentNode?.removeChild(message);
      closeForm();
    }
  };

  return (
    <div className="message">
      <div className="message__body">
        <div className="message__icon">
          <img src={success} alt="success" />
        </div>
        <h2 className="message__text">
          СПАСИБО!
          <br />
          ВАША ЗАЯВКА ОТПРАВЛЕНА!
        </h2>
        <div className="message__button button" onClick={onClickCloseMessage}>
          ок
        </div>
      </div>
    </div>
  );
}
