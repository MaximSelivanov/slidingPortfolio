import Component from '../../../views/component.js';

import Error404 from '../../../views/pages/error404.js';

class Info extends Component {
    constructor() {
        super();

        this.shoot = this.shoots.find(shoot => shoot.id === this.urlParts.id);
    }

    async render() {
        let html;

        if (this.shoot) {
            const {title, content} = this.shoot;

            html = `
                <h1 class="page-title">${title}</h1>
                
                    ${content}                                     
                
            `;
        } else {
            html = new Error404().render();
        }

        return html;
    }
}

export default Info;