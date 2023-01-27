import Link from 'next/link';
import React from 'react';

const cta_contents = {
  shapes: [
    { class: 'creative-shape-img-2', img: '/assets/img/creative/creative-circle-img.png' },
    { class: 'project-shape-img', img: '/assets/img/project/project-zoom-img.png' },
  ],
  subtitle: 'What We Do?',
  title: 'Hi,👋 I am experts in every aspect lifecycle',
  cta_img: '/assets/img/cta/cta-1.png',
  social_info: [
    { img: 'cta/1.png', title: '8k Followers' },
    { img: 'cta/2.png', title: '12k Followers' },
    { img: 'cta/3.png', title: '65k Followers' },
    { img: 'cta/4.png', title: '1.5M Followers' },
  ]
}
const { cta_img, shapes, social_info, subtitle, title } = cta_contents;

const CtaArea = () => {
  return (
    <div className="tp-cta-area black-bg p-relative fix" id="grow-business">
      {shapes.map((s, i) => (
        <div key={i} className={s.class}>
          <img src={s.img} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="tp-cta-section-title-box pl-60 pt-100 pb-80 z-index wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
              
              <h2 className="tp-title tp-white-text pb-10">Grow your online business</h2>
              <h5 className="tp-subtitle">Your investment return is the only one thing that is important to us in our digital marketing agency.</h5>
<h5 className="tp-subtitle">
Which digital mechanisms allow you to earn more while spending less? What do giants like Booking, AirBnB or Amazon do have such a huge visibility online?</h5>
<h5 className="tp-subtitle">We’ve created digital marketing strategies and defined those that allow you specifically to increase your revenue, selecting the best tactics and refining them to perfection.</h5>
              {/* <Link href="/contact"> */}
                <a href="mailto:rainwhispermedia@gmail.com" className="tp-btn-border">Let’s have a chat to find out what works for you!</a>
              {/* </Link> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".8s">
            <div className="tp-cta-img-item z-index-1 pt-115 pl-10">
              <img src={cta_img} alt="" />
            </div>
          </div>
          {/* <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-newsletter-left-img pt-60 p-relative wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="z-index"> <img src='/assets/img/news/news-2.png' alt="" /></div>
                <div className="news-shape-img">
                  <img src="/assets/img/creative/creative-circle-img.png" alt="" />
                </div>
              </div>
            </div> */}
        </div>
        {/* <div className="row">
          <div className="col-xl-12">
            <div className="tp-cta-bottom-wrapper">
              <div className="row justify-content-center">
                {social_info.map((s, i) => (
                  <div key={i} className="col-xl-3 col-lg-6 col-md-6 col-10">
                    <div className="tp-cta-social-info">
                      <a className="tp-btn-white-lg" href="#">
                        <img className="mr-15" src={`/assets/img/${s.img}`} alt="" /> 8k
                        Followers</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CtaArea;