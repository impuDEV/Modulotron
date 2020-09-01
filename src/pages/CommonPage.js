import {Page} from "@core/routing/Page";
import {App} from "@/components/app/App";
import {Navbar} from "@/components/app/Navbar/Navbar";
import {Footer} from "@/components/app/Footer/Footer";
import {Content} from "@/components/app/Content/Content";

export class CommonPage extends Page {
    constructor(param, components = []) {
        super(param);
        this.components = components
    }

    getRoot() {
        this.app = new App({
            components: this.components.concat([Navbar, Content, Footer])
        })
        return this.app.getRoot()
    }

    afterRender() {
        this.app.init()
    }

    destroy() {
        this.app.destroy()
    }
}
