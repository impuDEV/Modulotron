import {AppComponent} from "@/components/AppComponent";

export class Content extends AppComponent{
    static className = 'app__content'

    constructor($root, options) {
        super($root, {
            name: 'Content',
            ...options
        })
    }
}
