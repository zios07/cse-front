import { Type } from "./type";
import { Subarea } from "./subarea";

export class Property {
    
    id: number;
    ref: string;
    title: string;
    description: string;
    type: Type;
    subarea: Subarea;
    nbBedrooms: number;
    nbBathrooms: number;
    price: number;

}