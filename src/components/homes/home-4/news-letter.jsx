import React from 'react';

const news_letter_contents = {
  bg_img: '/assets/img/news/news-bg.jpg',
  subtitle: 'Is it your story to recognize?',
  title: "Maximize your business' potential",
  btn_text: 'Subscribe',
  img: '/assets/img/news/news-3.png',
}

const { bg_img, btn_text, img, subtitle, title } = news_letter_contents;

const NewsLetter = () => {
  return (
    <div className="tp-news-letter-area tp-news-letter-bg pt-100 pb-100 " id="maximize-potential"
    style={{backgroundImage:`url(${bg_img})`}} >
      <div className="container">
        <div className="row align-items-center wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
        <div className="col-xl-5 col-lg-5 col-md-12">
            <div className="tp-news-letter-img text-md-start text-lg-start pl-45">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12 ">
            <div className="tp-news-sub-wrapper pr-50">
              <div className="tp-news-letter-section-box">
                <h2 className="tp-title-sm tp-title-sm tp-white-text pb-25">{title}</h2>
                <p className="subtitle-color">Your website costs you a fortune but none is visiting… No contacts, no sales… nothing.
Your products are presented yet properly: you have pages with explanation of what you do with visuals and maybe even video tutorials, a proper contact form, an “about us” page, a blog. But still nothing…</p>
                <h5 className="tp-subtitle subtitle-secondary-color">{subtitle}</h5>
                <p className="subtitle-color"> You are not alone in your situation. 
The truth is that having a website is not enough to make it visible in the web. Randomly no one is about to come across your site. Today it is impossible for users to find your website unless they type the domain name in the search bar on purpose and those who do they already know you, right? </p>
              <p className="subtitle-color">In order for your website to be visible, you must work on your digital marketing strategies. These strategies can be executed in a different ways and vary from one company to another.
That’s why, at Rain Whisper Media, we are here to help you selecting the right way forward and implementing the best digital marketing strategies for your business.
              </p></div>
             
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;