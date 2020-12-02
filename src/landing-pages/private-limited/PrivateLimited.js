import React from 'react';
import LandingPagesHeader from '../../common/LandingPagesHeader';
import BackgroundImage from '../../components/BackgroundImage'
import PrivateLimitedContent from './PrivateLimitedContent';

function PrivateLimited() {
    return (
        <div>
            <BackgroundImage imageUrl ={'/assets/private-limited-bg.jpg'} />
            <LandingPagesHeader startingPrice='5,499' companyType={'Private Limited Company'} />
            <PrivateLimitedContent />
        </div>
    )
}

export default PrivateLimited
