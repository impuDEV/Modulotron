import {AppComponent} from "@/components/AppComponent";

export class SidebarLeft extends AppComponent {
    static className = 'main__sidebar'

    constructor($root, options) {
        $root.addClass('fixed')
        super($root, {
            name: 'Sidebar',
            ...options
        });

        console.log($root)
    }
}
