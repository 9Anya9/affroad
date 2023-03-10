const news_letter_contents = {
  bg_img:'/assets/img/news/news-shape.png',
  subtitle:'Contact us for free consultation',
  title:'Act today and together we will work tirelessly to make your business the king in a digital world ',
  btn_text:'Contact Us',
  news_l_img:'/assets/img/news/news-1.png',
  shape_img:'/assets/img/news/news-shape-2.png'
}

const {bg_img,btn_text,news_l_img,shape_img,subtitle,title} = news_letter_contents;

const NewsLetter = () => {
  return (
    <div className="tp-news-letter-area pb-140 pt-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".4s" id="contact-us">
      <div className="container">
        <div className="tp-news-letter-box p-relative" style={{backgroundImage:`url(${bg_img})`,backgroundRepeat:'no-repeat',backgroundPosition:'right',backgroundSize:'contain'}} >
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8 col-12  ">
              <div className="tp-news-wrapper pl-90 z-index-1">
                <div className="tp-news-letter-section-box">
                  <h5 className="tp-subtitle subtitle-secondary-color">{subtitle}</h5>
                  <h2 className="tp-title-sm tp-white-text">{title}</h2>
                </div>
                <div className="tp-news-button p-relative">
                  <form>
                    {/* <input type="text" placeholder="Enter your mail" /> */}
                    <a href="mailto:rainwhispermedia@gmail.com" className="tp-submit-button tp-btn-yellow-semilar">{btn_text} <i
                      className="far fa-arrow-right"></i></a>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-lg-end col-md-4  ">
              <div className="tp-news-letter-img">
                <img src={news_l_img} alt="" />
              </div>
            </div>
          </div>
          <div className="tp-news-shape-img">
            <img src={shape_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;