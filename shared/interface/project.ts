export default interface ProjectInterface {
    id: number;
    title: string;
    description: string;
    image? : string[];
    techno: TechnoInterface[];
    link: string;
}

interface TechnoInterface{
    name: string;
    type: string;
}
