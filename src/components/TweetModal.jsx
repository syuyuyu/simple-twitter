import React from 'react'
import styled from "styled-components";

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

const Content = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`;

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
`;

const TweetModal = ({ modal, toggleModal }) => {
  return (
    <>
      {modal && (
        <Modal>
          <Overlay onClick={toggleModal}></Overlay>
          <Content>
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nulla repellat amet quidem pariatur
              laudantium necessitatibus saepe consectetur repellendus ad! Ipsam possimus praesentium iusto, eos sapiente
              quibusdam itaque fuga repudiandae eveniet nobis sit commodi quidem architecto quis laboriosam rerum
              assumenda asperiores. Nihil harum in sed? Sit error aspernatur blanditiis nobis.
            </p>
            <Close onClick={toggleModal}>X</Close>
          </Content>
        </Modal>
      )}
    </>
  );
};

export default TweetModal