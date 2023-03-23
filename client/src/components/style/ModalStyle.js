import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

export const ModalWrap = styled.div`
  max-width: 600px;
  width: 100%;
  max-height: 500px;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: normal;
`;

export const TopWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  position: relative;
  i {
    position: absolute;
    top: 15px;
    right: 20px;
    height: 24px;
    width: 24px;
    font-weight: 700;
    color: #a7aeb5;
    cursor: pointer;
  }
`;

export const Title = styled.span`
  color: #1b1e21;
  font-weight: 700;
  font-size: 16px;
  overflow: hidden;
`;

export const Contents = styled.div`
  margin: 50px 30px;
  h1 {
    font-size: 30px;
    font-weight: 600;
  }
`;

export const ModalForm = styled.div`
  overflow-y: auto;
  margin-bottom: 30px;
  width: 100%;
  max-height: 300px;
  padding-top: 15px;
`;

export const ModalList = styled.div`
  font-size: 16px;
  color: #343a40;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 24px;
  padding-right: 24px;
  cursor: pointer;
`;

export const ConfirmContainer = styled.div`
  width: 320px;
  height: 250px;
  border-radius: 0.5rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: normal;
`;

export const ConfirmContent = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  i {
    position: absolute;
    top: 15px;
    right: 20px;
    height: 24px;
    width: 24px;
    font-weight: 700;
    color: #a7aeb5;
    cursor: pointer;
  }
`;

export const ConfirmText = styled.div`
  color: #212529;
  line-height: 22px;
  font-size: 20px;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 44px;
  margin-bottom: 44px;
`;

export const ButtonBox = styled.div`
  gap: 4px;
  display: flex;
`;

export const ConfirmButton = styled.button`
  color: ${(props) => props.color || '#1b1e21'};
  background-color: ${(props) => props.bgcolor || '#6495ed'};
  line-height: 22px;
  font-weight: 500;
  font-size: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  border: ${(props) => props.border || '1px solid #c2c8cf'};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  display: flex;
  &:hover {
    background-color: ${(props) => props.hover || '#f4f7fa'};
  }
`;

export const ReviewWrap = styled.div`
  color: #212529;
  line-height: 22px;
  font-size: 20px;
  font-weight: 600;
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 44px;
  margin-bottom: 44px;

  textarea {
    resize: none;
  }

  .count {
    display: flex;
    justify-content: end;
    font-size: 16px;
    font-weight: 400;
  }
`;
export const ReviewImg = styled.div`
  text-align: center;
  input {
    display: none;
  }
  label {
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }
  .preview {
    width: 150px;
    height: 150px;
    background-color: #ddd;
    border-radius: 10px;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
  .dog {
    height: 150px;
    width: 50px;
    color: white;
  }
`;
export const ReviewText = styled.div``;
