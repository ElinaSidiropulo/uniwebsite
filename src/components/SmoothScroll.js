import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function SmoothScroll() {
    const location = useLocation();

    useEffect(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
            scroll.scrollTo(element.offsetTop, {
                duration: 750,
                smooth: 'easeInOutQuart'
            });
        }
    }, [location]);

    return null;
}

export default SmoothScroll;
