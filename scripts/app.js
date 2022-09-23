import {parseCurrentURL} from './helpers/utils.js';

import Header from './views/partials/header.js';
import Footer from './views/partials/footer.js';

import List from './views/pages/shoots/list.js';
import Info from './views/pages/shoots/info.js';

import About from './views/pages/about.js';
import Error404 from './views/pages/error404.js';

const Routes = {
    '/': About,
    '/shoots': List,
    '/shoot/:id': Info
};

const router = async() => {
    const headerContainer = document.getElementsByClassName('header-container')[0],
        contentContainer = document.getElementsByClassName('content-container')[0],
        header = new Header();

    const urlParts = parseCurrentURL(),
        pagePath = `/${urlParts.page || ''}${urlParts.id ? '/:id' : ''}${urlParts.action ? `/${urlParts.action}` : ''}`,
        page = Routes[pagePath] ? new Routes[pagePath]() : new Error404();

    headerContainer.innerHTML = await header.render();
    contentContainer.innerHTML = await page.render();
    page.afterRender();
};

(async() => {
    const footerContainer = document.getElementsByClassName('footer-container')[0],
        footer = new Footer();

    footerContainer.innerHTML = await footer.render();
})();

window.onload = router;
window.onhashchange = router;