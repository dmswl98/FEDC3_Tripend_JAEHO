import styled from '@emotion/styled';

const SideBlcok = styled.div`
  background: #f8f9fa;
`;

const Side = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  color: #cccbc7;
  cursor: pointer;
  position: fixed;
  left: 10%;
  top: 30%;
  bottom: 0;
  width: 200px;
  height: 20%;
  z-index: 10;
  padding: 10px;
`;

const Menu = styled.div`
  background: #f8f9fa;
  width: 200px;
  display: flex;
  border-radius: 50px;
  flex-direction: column;
`;

export { SideBlcok, Side, Menu };
