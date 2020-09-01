import {Emitter} from "@core/dom/Emitter";
import {$} from "@core/dom/dom";

export class App{
    constructor(options) {
        this.components = options.components || []
        this.emitter = new Emitter()
    }

    getRoot(){
        const $root = $.create('div', 'app__wrap')

        const componentOptions = {
            emitter: this.emitter
        }

        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            const component = new Component($el, componentOptions)
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })

        return $root
    }

    init(){
        console.log('init component')
        this.components.forEach(component => component.init())
    }

    destroy(){
        this.components.forEach(component => component.destroy())
    }
}
