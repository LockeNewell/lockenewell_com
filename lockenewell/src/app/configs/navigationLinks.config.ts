import {NavigationItem} from "../objects";

export let navigationLinks: NavigationItem[] = [
    {
        title:'Home',
        route:'/elevator',
        name:'Home',
        id:'HomeLink',
        active: true
    },
    {
        title:'Resume',
        route:'/resume',
        name:'Resume',
        id:'ResumeLink',
        active: false
    },
    {
        title:'Portfolio',
        route:'/portfolio',
        name:'Portfolio',
        id:'PortfolioLink',
        active: false
    }
]