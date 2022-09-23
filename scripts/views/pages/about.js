import Component from '../../views/component.js';

class About extends Component {
    async render() {
        return `
            <div class="about"> 
                <h1 class="page-title">Welcome!</h1>                   
                <p class="about__info">
                    So, here you can see some of my photo shoots.
                    <br>
                    Enjoy!
                    <br>
                    MakSEE: "I SEE ;)"
                    </p>
                <a class="about__btn-start button" href="#/shoots" title="Click here to get started!">
                    Start using
                </a>
            </div>
        `;
    }
}

export default About;