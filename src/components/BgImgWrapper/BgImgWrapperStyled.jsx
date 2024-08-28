import styled from 'styled-components';
import { Icon } from '../Icon/Icon';
import heroMobile1x from '../../assets/images/hero/hero_mobile_@1x.jpg';
import heroMobile2x from '../../assets/images/hero/hero_mobile_@2x.jpg';
import heroTablet1x from '../../assets/images/hero/hero_tablet_@1x.jpg';
import heroTablet2x from '../../assets/images/hero/hero_tablet_@2x.jpg';
import heroDesktop1x from '../../assets/images/hero/hero_desktop_@1x.jpg';
import heroDesktop2x from '../../assets/images/hero/hero_desktop_@2x.jpg';

export const ContainerImg = styled.div`
  position: relative;
  display: flex;
  background-image: url(${heroMobile1x});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  width: 335px;
  height: 381px;
  margin-bottom: 20px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroMobile2x});
  }

  @media (min-width: 768px) {
    width: 704px;
    height: 482px;
    margin-bottom: 32px;
    background-image: url(${heroTablet1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${heroTablet2x}););
    }
  }

  @media (min-width: 1440px) {
    width: 611px;
    height: 568px;
    margin-right: 54px;
    margin-bottom: 0;
    background-image: url(${heroDesktop1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${heroDesktop2x});
    }
  }

  @media (max-width: 374.99px) {
    width: 280px;
    background-image: url(${heroMobile1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${heroMobile2x});
    }
  }
`;

export const ContainerText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 248px;
  height: 81px;
  background-color: var(--main-text-color);
  border-radius: 20px;

  @media only screen and (max-width: 767px) {
    top: 240px;
    left: -10px;
  }

  @media only screen and (min-width: 768px) {
    animation: moveBox 15s linear infinite;
    width: 303px;
    height: 121px;
  }

  @keyframes moveBox {
    0% {
      transform: translate(200px, 0);
    }
    12.5% {
      transform: translate(400px, 159px);
    }
    25% {
      transform: translate(200px, 361px);
    }
    37.5% {
      transform: translate(0, 168px);
    }
    50% {
      transform: translate(280px, 0);
    }
    62.5% {
      transform: translate(400px, 180px);
    }
    75% {
      transform: translate(200px, 361px);
    }
    87.5% {
      transform: translate(0, 120px);
    }
    100% {
      transform: translate(200px, 0);
    }
  }

  @media (min-width: 1440px) {
    @keyframes moveBox {
      0% {
        transform: translate(150px, 0);
      }
      12.5% {
        transform: translate(308px, 200px);
      }
      25% {
        transform: translate(150px, 447px);
      }
      37.5% {
        transform: translate(0, 300px);
      }
      50% {
        transform: translate(200px, 0);
      }
      62.5% {
        transform: translate(308px, 250px);
      }
      75% {
        transform: translate(150px, 447px);
      }
      87.5% {
        transform: translate(0, 200px);
      }
      100% {
        transform: translate(150px, 0);
      }
    }
  }
`;

export const ContainerSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 36px;
  height: 36px;
  background-color: var(--button-color);
  margin-right: 12px;

  @media only screen and (min-width: 768px) {
    width: 43px;
    height: 43px;
    border-radius: 13px;
    margin-right: 22px;
  }
`;

export const ContainerBalance = styled.div`
  margin-right: 12px;

  @media only screen and (min-width: 768px) {
    margin-right: 14px;
  }
`;

export const ContainerPercent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  width: 58px;
  height: 22px;
  background-color: var(--bg-container-percent);
`;

export const IconStyled = styled(Icon)`
  fill: var(--background-color);
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: var(--font-size-mini);
  color: var(--text-dark-blue-color);
  margin-bottom: 4px;

  @media only screen and (min-width: 768px) {
    font-size: var(--font-size-smaller);
    margin-bottom: 7px;
  }
`;

export const Balance = styled.p`
  font-weight: 700;
  font-size: var(--font-size-mediumSm);
  color: var(--text-black-color);

  @media only screen and (min-width: 768px) {
    font-size: var(--font-size-large);
  }
`;

export const Percent = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: var(--font-size-mini);
  color: var(--text-color);
`;
