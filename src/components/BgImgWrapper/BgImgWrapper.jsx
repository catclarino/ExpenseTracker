import React, { useState, useRef, useEffect } from 'react';
import {
  ContainerImg,
  ContainerText,
  ContainerSvg,
  Text,
  Balance,
  ContainerBalance,
  ContainerPercent,
  Percent,
} from './BgImgWrapperStyled';
import { Icon } from '../Icon/Icon';
import { randomNumber, randomPercentage } from '../../helpers/getRandomNumber';

export const BgImageWrapper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [animationDuration] = useState(15);
  const [randomSum, setRandomSum] = useState(0);
  const [randomPercent, setRandomPercent] = useState(0);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const viewportWidthRef = useRef(window.innerWidth);

  useEffect(() => {
    setRandomSum(randomNumber());
    setRandomPercent(randomPercentage());
  }, [currentStep]);

  const handleAnimationStart = () => {
    const viewportWidth = window.innerWidth;
    viewportWidthRef.current = viewportWidth;

    if (viewportWidth < 768) {
      return;
    }

    startTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(updateAnimationProgress);
  };

  const updateAnimationProgress = () => {
    const elapsedTime = performance.now() - startTimeRef.current;
    const percentage = (elapsedTime / (animationDuration * 1000)) * 100;

    if (
      viewportWidthRef.current !== window.innerWidth &&
      window.innerWidth < 768
    ) {
      return;
    }

    updateCurrentStep(percentage);

    animationRef.current = requestAnimationFrame(updateAnimationProgress);
  };

  const updateCurrentStep = percentage => {
    setCurrentStep(prevStep => {
      const newStep = Math.ceil(percentage / 12.5);
      return newStep !== prevStep ? newStep : prevStep;
    });
  };

  return (
    <ContainerImg>
      <ContainerText onAnimationStart={handleAnimationStart}>
        <ContainerSvg>
          <Icon name="arrow-up" size="18" className={Icon} />
        </ContainerSvg>
        <ContainerBalance>
          <Text>Your balance</Text>
          <Balance>{`$${randomSum}`}</Balance>
        </ContainerBalance>
        <ContainerPercent>
          <Percent>{`+${randomPercent.toFixed(2)}%`}</Percent>
        </ContainerPercent>
        <p className="dynamicText"></p>
      </ContainerText>
    </ContainerImg>
  );
};
