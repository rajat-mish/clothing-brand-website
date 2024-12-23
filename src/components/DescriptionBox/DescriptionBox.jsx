import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>

                <div className="descriptionbox-nav-box fade">
                    Reviews (122)
                </div>

            </div>
            <div className="descriptionbox-description">
                <p>An eCommerce website is an online platform for buying and selling products or services. It features user-friendly navigation, secure payment gateways, product listings with images and descriptions, and a seamless checkout process. Designed to enhance customer convenience, it enables businesses to reach a global audience and boost sales efficiently.</p>
                <p>An eCommerce website showcases product descriptions, high-quality images, prices, availability, categories, customer reviews, shipping details, and discount offers, ensuring a seamless shopping experience.</p>
            </div>
        </div>
    )
}

export default DescriptionBox
