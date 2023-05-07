import {
  FaRegSmileBeam,
  FaRegGrinBeam,
  FaRegLaughSquint,
  FaRegMehBlank,
  FaRegMeh,
  FaRegGrimace,
  FaRegFrownOpen,
  FaRegFrown,
  FaRegSadTear,
} from 'react-icons/fa';
import { renderToString } from 'react-dom/server';
import styled from '@emotion/styled';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2em;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 25px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 44px;
  padding: 4px 10px 7px;
  display: inline-block;
  border: none;
  color: #fff;
  cursor: pointer;
  &:active {
    box-shadow: 0 0px 0 0 #5b1087, 0 3px 0 0 rgba(0, 0, 0, 0),
      0 4px 16px rgba(0, 0, 0, 0), 0 1px 2px 1px rgba(0, 0, 0, 0.5) inset,
      0 -18px 32px -2px rgba(255, 255, 255, 0.1) inset;
  }
  ${props => {
    if (props.className === 'good') {
      return `
      background-color: #10ac84;
      background-image: url('data:image/svg+xml,${encodeURIComponent(
        renderToString(<FaRegSmileBeam color="white" />)
      )}');
      &:hover {background-image: url('data:image/svg+xml,${encodeURIComponent(
        renderToString(<FaRegGrinBeam color="white" />)
      )}');};
      &:active {background-image: url('data:image/svg+xml,${encodeURIComponent(
        renderToString(<FaRegLaughSquint color="white" />)
      )}');};
      box-shadow: 0 3px 0 0 #1C9076, 0 4px 4px -1px rgba(0, 0, 0, 0.6),
      0 4px 6px 1px rgba(0, 0, 0, 0.3), 0 1px 2px 1px rgba(0, 0, 0, 0) inset,
      0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;`;
    } else if (props.className === 'bad') {
      return `
      background-color: #EE4444;
      background-image: url('data:image/svg+xml,${encodeURIComponent(
        renderToString(<FaRegFrownOpen color="white" />)
      )}');
      &:hover {background-image: url('data:image/svg+xml,${encodeURIComponent(
        renderToString(<FaRegFrown color="white" />)
      )}');};
      &:active {background-image: url('data:image/svg+xml,${encodeURIComponent(
        renderToString(<FaRegSadTear color="white" />)
      )}');};
      box-shadow: 0 3px 0 0 #ac453f, 0 4px 4px -1px rgba(0, 0, 0, 0.6),
      0 4px 6px 1px rgba(0, 0, 0, 0.3), 0 1px 2px 1px rgba(0, 0, 0, 0) inset,
      0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;`;
    } else {
      return `
      background-color: #1199EE;
      background-image: url('data:image/svg+xml,${encodeURIComponent(
        renderToString(<FaRegMehBlank color="white" />)
      )}');
      &:hover {background-image: url('data:image/svg+xml,${encodeURIComponent(
        renderToString(<FaRegMeh color="white" />)
      )}');};
      &:active {background-image: url('data:image/svg+xml,${encodeURIComponent(
        renderToString(<FaRegGrimace color="white" />)
      )}');};
      box-shadow: 0 3px 0 0 #2B74A3, 0 4px 4px -1px rgba(0, 0, 0, 0.6),
      0 4px 6px 1px rgba(0, 0, 0, 0.3), 0 1px 2px 1px rgba(0, 0, 0, 0) inset,
      0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;`;
    }
  }};
`;
