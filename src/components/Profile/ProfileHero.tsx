'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 0 2rem;
  overflow: hidden;
  position: relative;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: var(--white);
  text-align: center;
  line-height: 1.1;
  overflow: hidden;
  position: relative;
  z-index: 1;
  
  span {
    display: inline-block;
    transform: translateY(100%);
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
  color: var(--link-color);
  opacity: 0;
  transform: translateY(20px);
  position: relative;
  z-index: 1;
`;

const ProfileHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (title && subtitle) {
      // Simple split text effect simulation if we can't use SplitText plugin (paid)
      // We will animate the whole line or characters if manually split.
      // For simplicity, we animate the block up.

      gsap.to(title.querySelectorAll('span'), {
        y: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.to(subtitle, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <HeroSection>
      <Title ref={titleRef}>
        <span>Build</span> <br /> <span>The Future</span>
      </Title>
      <Subtitle ref={subtitleRef}>Innovation. Integrity. Impact.</Subtitle>
    </HeroSection>
  );
};

export default ProfileHero;
