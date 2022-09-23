
import Component from '../../component.js';


class List extends Component {
    async render() {
        return `     
            <h1 class="page-title">Photo shoots list</h1>     
            <div class="shoots">
                <div class="shoots__list">
                    ${this.shoots.map(shoot => this.getShootHTML(shoot)).join('\n ')}
                </div>
            </div>            
        `;
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const shootsContainer = document.getElementsByClassName('shoots')[0];
           
        
		shootsContainer.onclick = evt => {
            const target = evt.target,
                targetClassList = target.classList;

            switch (true) {
                case targetClassList.contains('shoot'):
                case targetClassList.contains('shoot__title'):
                    this.redirectToShootInfo(target.dataset.id);
                    break;
            }
        };
    }


    getShootHTML(shoot) {
        return `
            <div class="shoot" data-id="${shoot.id}">
                <a class="shoot__title" data-id="${shoot.id}">${shoot.title}</a>                        
            </div>
        `;
    }

    redirectToShootInfo(id) {
        location.hash = `#/shoot/${id}`;
    }
}

export default List;