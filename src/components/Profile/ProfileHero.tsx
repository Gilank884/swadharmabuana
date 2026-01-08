'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Image from 'next/image';
import logoPT from '../../../public/logo.png';
import Kantor from '../../../public/images/kantor.jpeg';

/* WRAPPER */
const HeroSection = styled.section`

  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 6rem;
  background: url(${Kantor.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  overflow: hidden;

  /* overlay biar teks tetap terbaca */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.15);
    z-index: 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    padding: 3rem 2rem;
    height: auto;
  }
`;

/* Aurora gradient lembut */
const Aurora = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
      to bottom,
      rgba(255,255,255,0.6) 0%,
      rgba(255,255,255,0.4) 35%,
      rgba(0, 200, 100, 0.12) 70%,
      rgba(0, 200, 100, 0.2) 100%
  );
  z-index: 1;
`;

/* Aurora bergerak */
const AuroraMotion = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;

  background: radial-gradient(
    circle at 20% 30%,
    rgba(0, 200, 100, 0.3),
    rgba(0, 200, 100, 0.08),
    transparent 70%
  );

  mix-blend-mode: screen;
  filter: blur(80px);
  animation: floatAurora 10s ease-in-out infinite alternate;

  @keyframes floatAurora {
    0%   { transform: translate(-10%, -5%) scale(1); opacity: .6; }
    50%  { transform: translate(10%, 5%) scale(1.15); opacity: .85; }
    100% { transform: translate(20%, 0%) scale(1); opacity: .7; }
  }
`;

const LeftSide = styled.div`
  flex: 1;
  z-index: 3;
`;

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  color: #ffffffff;
  line-height: 1.1;
  margin-bottom: 1.8rem;
  opacity: 0;
  transform: translateY(40px);

  span {
    background: linear-gradient(90deg, #ffffffff, #ffffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 550px;
  line-height: 1.65;
  opacity: 0;
  transform: translateY(40px);
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 100%;
  }
`;

const RightSide = styled.div`
  flex: 1;
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoGlow = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  background: radial-gradient(
    circle,
    rgba(0, 200, 100, 0.3),
    rgba(0, 200, 100, 0.07),
    transparent
  );
  filter: blur(50px);
  z-index: 2;
  animation: pulse 6s ease-in-out infinite;

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.55; }
    50% { transform: scale(1.15); opacity: 0.75; }
    100% { transform: scale(1); opacity: 0.55; }
  }
`;

const LogoWrap = styled.div`
  position: relative;
  z-index: 3;
  transition: 0.4s ease;

  &:hover {
    transform: scale(1.06);
    filter: drop-shadow(0 0 40px rgba(0, 200, 100, 0.45));
  }
`;

const ProfileHero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.3,
      ease: 'power4.out'
    });

    gsap.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      delay: 0.25,
      ease: 'power3.out'
    });

    gsap.to(logoRef.current, {
      y: -10,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'ease.inOut',
    });
  }, []);

  return (
    <HeroSection>
      <Aurora />
      <AuroraMotion />

      <LeftSide>
        <Title ref={titleRef}>
          <span>PT. Swadharma Sangga Buana</span>
        </Title>

        <Subtitle ref={subtitleRef}>
          PT. Swadharma Sanggah Buana hadir sebagai mitra terpercaya...
        </Subtitle>
      </LeftSide>

      <RightSide>
        <LogoGlow />
        <LogoWrap ref={logoRef}>
          <Image src={logoPT} alt="Logo PT" width={360} height={360} />
        </LogoWrap>
      </RightSide>
    </HeroSection>
  );
};

export default ProfileHero;
