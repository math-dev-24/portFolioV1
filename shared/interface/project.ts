export default interface ProjectInterface {
    id: number;
    title: string;
    description: string;
    image? : string[];
    github?: GitInterface[];
    techno: TechnoInterface[];
    link: string;
}

interface TechnoInterface{
    name: string;
    type: string;
}
interface GitInterface{
    name: string;
    link: string;
}