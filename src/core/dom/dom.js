class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string' ?
            document.querySelector(selector) :
            selector
    }

    html(html){
        if(typeof html === 'string'){
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    on(eventType, callback){
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType, callback){
        this.$el.removeEventListener(eventType, callback)
    }

    append(node){
        if(node instanceof Dom){
            node = node.$el
        }

        if(Element.prototype.append){
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
    }

    addClass(className){
        this.$el.classList.add(className)
        return this
    }

    removeClass(className){
        this.$el.classList.remove(className)
    }

    attr(name, value){
        if(value){
            this.$el.setAttribute(name, value)
            return this
        }
        return this.$el.getAttribute(name)
    }

    find(selector){
        return this.$el.querySelector(selector)
    }

    findAll(selector){
        return this.$el.querySelectorAll(selector)
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if(classes) {
        el.classList.add(classes)
    }
    return $(el)
}
