import React, { useEffect } from 'react';
import { Footer, FooterThree, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import CtaArea from '../home-2/cta-area';
import NewsLetter from '../home-4/news-letter';
import NewsLetter1 from './news-letter';
import TestimonialArea from '../home-4/testimonial-area';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import CreativeArea from './creative-area';
import HeroArea from './hero-area';
import ProjectArea from './project-area';
import ServicesArea from './services-area';
import Testimonial from './testimonial';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, [])
  return (
    <Wrapper>
      <Header />
      <HeroArea />
      <NewsLetter/>
      <CtaArea/>
      {/* <CreativeArea/> */}
      {/* <BrandArea/> */}
      <ServicesArea/>
      {/* <ProjectArea/>
      <Testimonial/>
      <BlogArea/> */}
      <NewsLetter1/>
      {/* <Footer/> */}
      <FooterThree home_four={true} />
    </Wrapper>
  );
};

export default Home;