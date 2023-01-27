/** @format */

import React from 'react'
import Link from 'next/link'
import useSticky from '../../hooks/use-sticky'
import Sidebar from '../../components/common/off-canvas'
import NavMenus from './nav-menus'
import MobileMenu from './mobile-menu'

const Header = () => {
    const { headerSticky } = useSticky()
    const [sidebarOpen, setSidebarOpen] = React.useState(false)
    return (
        <React.Fragment>
            <header className='d-none d-lg-block'>
                <div id='header-sticky' className={`tp-header-area header-transparent pl-165 pr-165 pt-35 header-sticky`}>
                    <div className='container-fluid'>
                        <div className='row align-items-center'>
                            <div className='col-xl-3 col-lg-3'>
                                <div className='tp-logo'>
                                    <Link href='/'>
                                        <a>
                                            <img src='/assets/img/logo/logo_new2.svg' alt='' />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-xl-9 col-lg-9' style={{ textAlign: 'right' }}>
                                <div className='tp-main-menu'>
                                    <nav id='mobile-menu'>
                                        {/* nav menus start */}
                                        <NavMenus />
                                        {/* nav menus end */}
                                    </nav>
                                </div>
                            </div>
                            {/* <div className="col-xl-2 col-lg-2">
                <div className="tp-menu-bar text-end" onClick={() => setSidebarOpen(true)}>
                  <button><i className="fal fa-bars"></i></button>
                </div>
              </div> */}
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- mobile-menu-area --> */}
            <MobileMenu logo={'logo_new2.svg'} />
            {/* <!-- mobile-menu-area-end --> */}

            {/* off canvas start */}
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            {/* off canvas end */}
        </React.Fragment>
    )
}

export default Header
