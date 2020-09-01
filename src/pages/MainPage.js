import {CommonPage} from "@/pages/CommonPage";
import {SidebarLeft} from "@/components/mainpage/SidebarLeft/SidebarLeft";

export class MainPage extends CommonPage {
    constructor(param) {
        super(param, [SidebarLeft]);
    }

    getRoot() {
        return super.getRoot();
    }
}
