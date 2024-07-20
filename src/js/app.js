import Swiper from 'swiper';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.clients-slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    const headerBurger = document.querySelector('.header__burger');

    headerBurger.onclick = e => {
        headerBurger.classList.toggle('open');
        document.body.classList.toggle('menu-open')
    }

    gsap.from('[data-counter="true"]', {
        scrollTrigger: {
            start: '400px 300px'
        },
        textContent: 0,
        duration: 1,
        ease: "power1.in",
        snap: { textContent: 1 },
    })
})