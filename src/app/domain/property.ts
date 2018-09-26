import { Type } from "./type";
import { Subarea } from "./subarea";
import { Gallery } from "./gallery";

export class Property {
    
    id: number;
    ref: string;
    uuid: string;
    title: string;
    description: string;
    type: Type;
    subarea: Subarea;
    nbBedrooms: number;
    nbBathrooms: number;
    price: number;
    gallery: Gallery;
    activeDate: string;

}