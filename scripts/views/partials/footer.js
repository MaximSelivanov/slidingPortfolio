import Component from '../../views/component.js';

class Footer extends Component {
    async render() {
        return `
            <footer class="footer">                   
                <p class="footer__info">
                    Maxim "MakSEE" Selivanov &copy; All Rights Reserved, 2022
                </p>                  
            </footer>
        `;
    }
}

export default Footer;