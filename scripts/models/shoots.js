import {generateID} from '../helpers/utils.js';

class Shoots {
    static get defaultShoots() {
        const defaultShoots = [
            {
                id: generateID(),
                title: 'In the morning',
                content: `<div class="slider-container">
                <div class="slider-one">
                    <img src="../images/katie_001.jpg" alt="katie_001">
                </div>
                <div class="slider-two">
                    <img src="../images/katie_002.jpg" alt="katie_002">
                </div>
                <div class="slider-three">
                    <img src="../images/katie_003.jpg" alt="katie_003">
                   </div>
                <div class="slider-four">
                    <img src="../images/katie_004.jpg" alt="katie_004">
                </div>
            </div>    `
            },
            {
                id: generateID(),
                title: 'Varvara\'s Jewels',
                content: `<div class="slider-container">
                <div class="slider-one">
                    <img src="../images/varvara001.jpg" alt="varvara001">
                </div>
                <div class="slider-two">
                    <img src="../images/varvara002.jpg" alt="varvara002">
                </div>
                <div class="slider-three">
                    <img src="../images/varvara003.jpg" alt="varvara003">
                   </div>
                <div class="slider-four">
                    <img src="../images/varvara004.jpg" alt="varvara004">
                </div>
            </div>    `
            },
            {
                id: generateID(),
                title: 'The Foggy Day',
                content: `<div class="slider-container">
                <div class="slider-one">
                    <img src="../images/sveta001.jpg" alt="sveta001">
                </div>
                <div class="slider-two">
                    <img src="../images/sveta002.jpg" alt="sveta002">
                </div>
                <div class="slider-three">
                    <img src="../images/sveta003.jpg" alt="sveta003">
                   </div>
                <div class="slider-four">
                    <img src="../images/sveta004.jpg" alt="sveta004">
                </div>
            </div>    `
            },
            {
                id: generateID(),
                title: 'The Short story',
                content: `<div class="slider-container">
                <div class="slider-one">
                    <img src="../images/shortstory001.jpg" alt="shortstory001">
                </div>
                <div class="slider-two">
                    <img src="../images/shortstory002.jpg" alt="shortstory002">
                </div>
                <div class="slider-three">
                    <img src="../images/shortstory003.jpg" alt="shortstory003">
                   </div>
                <div class="slider-four">
                    <img src="../images/shortstory004.jpg" alt="shortstory004">
                </div>
            </div>    `
            },
            {
                id: generateID(),
                title: 'Alina\'s Day',
                content: `<div class="slider-container">
                <div class="slider-one">
                    <img src="../images/alina001.jpg" alt="alina001">
                </div>
                <div class="slider-two">
                    <img src="../images/alina002.jpg" alt="alina002">
                </div>
                <div class="slider-three">
                    <img src="../images/alina003.jpg" alt="alina003">
                   </div>
                <div class="slider-four">
                    <img src="../images/alina004.jpg" alt="alina004">
                </div>
            </div>    `
            }

        ];

        Shoots.setShootsToLS(defaultShoots);

        return defaultShoots;
    }

    static getShootsFromLS() {
        return JSON.parse(localStorage.getItem('shoots')) || this.defaultShoots;
    }

    static setShootsToLS(shoots) {
        localStorage.setItem('shoots', JSON.stringify(shoots));
    }
}

export default Shoots;