import {DomListener} from "@core/dom/DomListener";

export class AppComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.subscribe = options.subscribe || []
        this.unsubscribers = []
        this.prepare()
    }

    prepare(){}

    toHTML(){
        return ''
    }

    $emit(event, ...args){
        this.emitter.emit(event, ...args)
    }

    $on(event, fn){
        this.unsubscribers.push(this.emitter.subscribe(event, fn))
    }

    isWatching(key){
        return this.subscribe.includes(key)
    }

    init(){
        this.initDOMListeners()
    }

    destroy(){
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}
