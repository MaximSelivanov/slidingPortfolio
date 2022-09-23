import {parseCurrentURL} from '../helpers/utils.js';

import Shoots from '../models/shoots.js';

class Component {
    constructor() {
        this.urlParts = parseCurrentURL();
        this.shoots = Shoots.getShootsFromLS();
    }

    afterRender() {}
}

export default Component;