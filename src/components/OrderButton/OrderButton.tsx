import { useState } from 'react';
import { Form } from '../Form/Form';

export function OrderButton() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  const onClickBtnOrderForm = () => {
    setIsOrderFormOpen((prevState) => !prevState);
  };

  return (
    <div className="order-button">
      <div className="main__button button" onClick={onClickBtnOrderForm}>
        Заказать
      </div>
      {isOrderFormOpen && <Form onClickBtnCloseOrderForm={onClickBtnOrderForm} />}
    </div>
  );
}
