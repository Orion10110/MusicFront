import React, { useState } from 'react';

import { Button } from 'shared/components/button';
import { SignIn, SignUp } from 'modules/authentication';
import { Modal } from '../modal/modal';

export const AuthenticationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const close = () => setIsModalOpen(false);
  const setSign = () => setIsSignUp(!isSignUp);

  return (
    <div className="user-info__authentication-modal">
      <Button onClick={() => setIsModalOpen(true)}>Войти</Button>
      {
        isModalOpen
          ? <Modal onClose={close}>
            {
              isSignUp
                ? <>
                  <SignUp onClose={close}/>
                  <Button
                    className="registration-tab__submit-button"
                    color="primary"
                    buttonType="button"
                    onClick={setSign}
                  >Назад</Button>
                </>
                : <>
                  <SignIn onClose={close}/>
                  <Button
                    buttonStyle="primary"
                    buttonType="button"
                    onClick={setSign}
                  >Зарегестрироваться</Button>
                </>
            }
          </Modal>
          : null
      }
    </div>
  );
};
