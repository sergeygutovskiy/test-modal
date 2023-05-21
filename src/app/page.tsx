"use client";

import "src/app/global.css";

import { MouseEvent, useState } from "react";
import styled from "styled-components";
import Head from "next/head";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);

  cursor: pointer;
`;

const Modal = styled.form`
  position: relative;
  max-width: 400px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 32px 32px 64px 32px;
  background-color: white;

  cursor: default;

  @media (max-width: 600px) {
    margin-top: auto;
    padding: 20px 20px 40px 20px;
    border-radius: 16px 16px 0 0;
  }
`;

const Title = styled.span`
  margin-bottom: 12px;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
`;

const Description = styled.p`
  margin-bottom: 28px;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
`;

const Input = styled.input`
  margin-bottom: 28px;
  padding: 12px 20px;
  font-size: 14px;
  border: solid 1px #E0E0E0;

  &::placeholder {
    color: #BEBEBE;
  }
`;

const SubmitButton = styled.button`
  color: white;
  text-align: center;
  text-transform: uppercase;
  padding: 16px;
  background-color: black;

  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 16px;
  height: 16px;

  cursor: pointer;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 1px;
    width: 100%;
    background-color: black;
  }

  &::before {
    transform: translate(-50%, -50%) rotateZ(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotateZ(-45deg);
  }
`;

const Page = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onModalWrapperClicked = (e: MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  };

  return (
    <>
      <Head key={"font"}>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>  
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"/>
      </Head>

      <button onClick={openModal}>Открыть</button>

      {
        isModalOpen &&
        <ModalWrapper onClick={onModalWrapperClicked}>
          <Modal>
            <CloseButton type="button" onClick={closeModal}/>

            <Title>Подписка на новости</Title>
            <Description>
              Подпишитесь на новостную рассылку IRNBY и получите скидку 10% на первый заказ
            </Description>
            
            <Input placeholder="Введите свой e-mail"/>
            
            <SubmitButton>ПОДПИСАТЬСЯ</SubmitButton>
          </Modal>
        </ModalWrapper>
      }
    </>
  );
};

export default Page;
