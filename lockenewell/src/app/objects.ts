export interface ContactItem {
    class: string;
    body: string;
}
export interface EducationItem {
    name: string;
    location: string;
    title: string;
    range: string;
}
export interface JobItem {
    name: string;
    location: string;
    title: string;
    range: string;
    comments: string[];
}
export interface NavigationItem {
    title: string;
    route: string;
    name: string;
    id: string;
    active: boolean;
}
export interface PortfolioItem {
    id: string;
    title: string;
    note?: string;
    link: string;
    image: string;
    description: string;
    skills: string[];
    screenshots: string[];
    detail: string;
}