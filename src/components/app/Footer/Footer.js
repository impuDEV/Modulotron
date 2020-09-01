import {AppComponent} from "@/components/AppComponent";

export class Footer extends AppComponent{
    static className = 'app__footer'

    constructor($root, options) {
        super($root, {
            name: 'Footer',
            ...options
        })
    }

    toHTML() {
        const year = (new Date(Date.now())).getFullYear()
        const date = year === 2020 ? '' : ' - '+ year
        return `
        <div id="copyright">2020${date} © impuDEV</div>
        `
    }
}
