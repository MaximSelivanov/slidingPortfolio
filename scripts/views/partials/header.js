import Component from '../../views/component.js';

class Header extends Component {
    async render() {
        const page = this.urlParts.page;

        return `
            <header class="header">                    
                <a class="header__link ${!page ? 'active' : ''}" href="#/">
                    About
                </a>
                <a class="header__link ${page === 'shoots' ? 'active' : ''}" href="#/shoots">
                    Photo Shoots List
                </a>                                            
            </header>
        `;
    }
}

export default Header;