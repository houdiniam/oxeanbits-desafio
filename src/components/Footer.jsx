import React from 'react';
import './Footer.css'
import { SvgIcon } from '@progress/kendo-react-common';
import { linkedinIcon } from '@progress/kendo-svg-icons';

export default function Footer() {
    return (
        <footer className="footer">
            <span className="span">
                Desenvolvido por:
            </span>
            <a href="https://www.linkedin.com/in/houdiniam/" rel="noopener noreferrer" target="_blank">

                <div className='text-center social-icons'>
                    <div className='icon linkedin'>
                        <SvgIcon icon={linkedinIcon} size="large" />
                    </div>
                </div>
            </a>
        </footer>
    );
}