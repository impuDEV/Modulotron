import './scss/index.scss'
import {Router} from "@core/routing/Router";
import {MainPage} from "@/pages/MainPage";

new Router('#app', {
    main: MainPage
    // modulotron: ModulotronPage
})

