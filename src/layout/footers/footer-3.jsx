/** @format */

import Link from 'next/link'
import React from 'react'
import SocialLinks from '../social-links'
import CopyrightArea from './component/copyright-area'

const footer_contents = {
    logo: '/assets/img/logo/logo-white.png',
    widget_desc:
        'Rain Whisper Media is a digital marketing agency that focuses on your goals, guides you in marketing strategy, apply all available digital mechanisms and take into account a desires of your customers.',
    footer_widgets: [
        {
            w_class: 'd-flex justify-content-lg-center',
            title: 'Useful Links',
            widget_lists: ['About us', 'Our Services']
        }
    ],
    subscribe_title: 'Subscribe Newslatter',
    subscribe_text: 'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo',
    copy_right_text: <>Copyright ©{new Date().getFullYear()} Rain Whisper Media LTD</>,
    conditions: ['Terms and conditions', 'Privacy policy', 'Login / Signup']
}

const { conditions, copy_right_text, footer_widgets, logo, widget_desc, subscribe_text, subscribe_title } = footer_contents

const FooterThree = ({ home_four = false }) => {
    return (
        <React.Fragment>
            <footer>
                <div className='tp-footer-area black-bg pt-70 pb-30'>
                    <div className='container'>
                        <div className='row wow tpfadeUp' data-wow-duration='.3s' data-wow-delay='.5s'>
                            <div className='col-xl-4 col-lg-4 col-md-4'>
                                <div className='tp-footer-widget'>
                                    {!home_four && (
                                        <div className='tp-footer-widget__logo mb-30'>
                                            <Link href='/'>
                                                <a>
                                                    <img src={logo} alt='' />
                                                </a>
                                            </Link>
                                        </div>
                                    )}
                                    {home_four && (
                                        <div className='tp-footer-widget__title mb-30'>
                                            <h3 className='footer-title'>About Us</h3>
                                        </div>
                                    )}
                                    <div className='tp-footer-widget__text mb-30'>
                                        <p>{widget_desc}</p>
                                    </div>
                                    {/* <div className="tp-footer-widget__social-link">
                    <SocialLinks />
                  </div> */}
                                </div>
                            </div>
                            {footer_widgets.map((w, i) => {
                                const { title, widget_lists, w_class, padd } = w
                                return (
                                    <div key={i} className={`col-xl-4 col-lg-4 col-md-4 ${w_class ? w_class : ''}`}>
                                        <div className={`tp-footer-widget ${padd ? padd : ''}`}>
                                            <div className='tp-footer-widget__title pb-15'>
                                                <h3 className='footer-title'>{title}</h3>
                                            </div>
                                            <div className='tp-footer-widget__list'>
                                                <ul>
                                                    <li>
                                                        <a href='#grow-business'>Grow your online business</a>
                                                    </li>
                                                    <li>
                                                        <a href='#digital-marketing-strategies'>Digital marketing strategies</a>
                                                    </li>
                                                    <li>
                                                        <a href='#maximize-potential'>Maximize your business' potential</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            {!home_four && (
                                <div className='col-xl-4 col-lg-4 col-md-4'>
                                    <div className='tp-footer-widget'>
                                        <div className='tp-footer-widget__title pb-15'>
                                            <h3 className='footer-title'>{subscribe_title}</h3>
                                        </div>
                                        <div className='tp-footer-widget__text mb-55'>
                                            <p>{subscribe_text}</p>
                                        </div>
                                        <div className='tp-footer-widget__input'>
                                            <form onSubmit={e => e.preventDefault()}>
                                                <input type='text' placeholder='Enter Mail' />
                                                <button type='submit'>
                                                    <i className='fas fa-paper-plane'></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {home_four && (
                                <div className='col-xl-4 col-lg-4 col-md-4 col-12'>
                                    <div className='tp-footer-widget'>
                                        <div className='tp-footer-widget__title pb-15'>
                                            <h3 className='footer-title'>Contact Us</h3>
                                        </div>
                                        <div className='tp-footer-widget__list footer-contact-us'>
                                            <ul>
                                                <li>
                                                    <i className='fas fa-star'></i>
                                                    <a href='mailto:rainwhispermedia@gmail.com'>rainwhispermedia@gmail.com</a>
                                                </li>
                                                <li>
                                                    <i className='fas fa-star'></i>
                                                    <a href='https://goo.gl/maps/dvN6DHKqEhidz4ME6' rel='noreferrer' target='_blank'>
                                                        7B, ONE CAPITAL PLACE, 18 LUARD ROAD, WAN CHAI, HONG KONG
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* CopyrightArea start */}
                    <CopyrightArea copy_right_text={copy_right_text} conditions={conditions} />
                    {/* CopyrightArea end */}
                </div>
            </footer>
        </React.Fragment>
    )
}

export default FooterThree

const InstagramItem = ({ img }) => {
    return (
        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4'>
            <div className='tp-footer-widget__tp-insta-img mb-15'>
                <img className='w-100' src={`/assets/img/footer/footer-${img}.jpg`} alt='' />
                <div className='tp-footer-widget__tp-insta-img-icon'>
                    <a href='#'>
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
