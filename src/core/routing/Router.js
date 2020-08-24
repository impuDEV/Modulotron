import {$} from "@core/dom/dom";

export class Router {
    constructor(selector, routes) {
        if(!selector) {
            throw new Error('Selector is not provided in Router')
        }

        this.$placeholder = $(selector)
        this.routes = routes
        this.page = null
    }

    init() {
        window.addEventListener('hashchange', this.changePageHandler)
    }

    changePageHandler(event) {
        if(this.page) {
            this.page.destroy()
        }

        this.$placeholder.clear()
    }

    destroy() {}
}
