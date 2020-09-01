import {AppComponent} from "@/components/AppComponent";

export class Navbar extends AppComponent {
    static className = 'app__navbar'

    constructor($root, options) {
        super($root, {
            name: 'Navbar',
            listeners: ['click'],
            ...options
        });

        this.headControls = options.headControls
    }

    toHTML() {
        return `
        <div id="nav-controls"></div>
        <div class="button"><i class="material-icons">settings</i></div>
        `
    }

    onClick(event){
        console.log('Navbar clicked')
    }
}
