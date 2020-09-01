export class Page {
    constructor(params) {
        this.params = params || Date.now().toString()
    }

    getRoot(components = []) {
        throw new Error('Method "getRoot" should be implemented')
    }

    afterRender() {}
    destroy() {}
}
