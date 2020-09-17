import styled from 'styled-components';
import { colors } from '../../source/data';

export const Outdoor = styled.section`
  min-height: 100vh;
  height: 100vh;
  margin-left: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #fff;
  font-weight: bold;
  z-index: -1;

  h1 {
    white-space: nowrap;
    max-width: fit-content;
    font-weight: bold;
  }

  span {
    background: linear-gradient(
      -45deg,
      ${colors.second},
      ${colors.third},
      ${colors.fourth}
    );
    background-size: 400% 400%;
    animation: gradient 2.5s ease infinite;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }

  .text-typing {
    overflow: hidden;
    font-size: 1.3em;
    white-space: nowrap;
    max-width: fit-content;
    border-right: 0.5em solid black;
    animation: typing 2.5s steps(40, end), blink 1s step-end infinite !important;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${colors.first};
    }
  }
`;
