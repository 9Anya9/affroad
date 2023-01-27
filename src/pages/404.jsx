/** @format */

import Link from 'next/link'
import React from 'react'
import Breadcrumb from '../components/common/breadcrumb/breadcrumb'
import SEO from '../components/seo'
import { FooterThree, Header, Wrapper } from '../layout'

const ErrorPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Not Found'} />
            {/* <Header/> */}
            <Breadcrumb title={'404 Page'} back_home={true} />
            {/* <!--404-area-start --> */}
            {/* <!-- 404-area-end --> */}
            {/* <FooterThree /> */}
        </Wrapper>
    )
}

export default ErrorPage
