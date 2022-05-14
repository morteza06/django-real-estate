import React from 'react'
import { BackTop } from 'antd'

function AppFooter() {
    return (
        <div className="fluid-container">
            <div className="footer">
                <div className="logo">
                    <i className="fas fa-home fa-2x"></i>
                    <link to="/">Real Estate</link>
                </div>
                <ul className="social-links">
                    <li>
                        <a href="https://www.twitter.com/">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkdin.com/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <div className="copyright">
                    Copyright &copy; Real Estate {new Date().getFullYear()}
                </div>
                <BackTop>
                    <div className="goTop">
                        <i className="fab fa-arrow-circle-up"></i>
                    </div>
                </BackTop>
            </div>
    </div>
    )
}

export default AppFooter
