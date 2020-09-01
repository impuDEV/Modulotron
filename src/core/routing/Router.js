import {$} from "@core/dom/dom";
import {ActiveRoute} from "@core/routing/ActiveRoute";

export class Router {
    constructor(selector, routes) {
        if(!selector) {
            throw new Error('Selector is not provided in Router')
        }

        this.$placeholder = $(selector)
        this.routes = routes
        this.page = null

        this.changePageHandler = this.changePageHandler.bind(this)

        this.init()
    }

    init() {
        window.addEventListener('hashchange', this.changePageHandler)
        this.changePageHandler()
    }

    async changePageHandler(event) {
        if(this.page) {
            this.page.destroy()
        }

        // TODO: implement loader animation

        const urlPath = ActiveRoute.path
        // TODO: implement 404 page redirection
        const Page = Object.keys(this.routes).includes(urlPath) ?
            this.routes[urlPath] :
            this.routes.main

        this.page = new Page(ActiveRoute.param)

        const root = await this.page.getRoot()
        this.$placeholder.clear().append(root)

        this.page.afterRender()
    }

    destroy() {
        window.removeEventListener('hashchange', this.changePageHandler)
    }
}
