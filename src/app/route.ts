import{Routes} from"@angular/router";
import{HomeComponent} from"./home/home.component";
import{GalleryComponent} from"./gallery/gallery.component"
import { AboutComponent } from "./about/about.component";
import{BlogComponent} from"./blog/blog.component";
import{NewsComponent} from "./news/news.component";
import{ContactComponent} from "./contact/contact.component"
export const appRoute:Routes= [
    {
        path:"home",
        component:HomeComponent

    },
    {
        path:"gallery",
        component:GalleryComponent
    },
    
    
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"blog",
        component:BlogComponent
    },
    {
        path:"news",
        component:NewsComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
    }
   
]