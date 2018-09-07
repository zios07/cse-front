import { Location } from "./location";
import { Subarea } from "./subarea";
import { Type } from "@angular/compiler/src/output/output_ast";

export class PropertySearchDto {
    
    location: Location;
	
	subarea: Subarea;
	
	type: Type;
	
	nbBedrooms: number;
	
	nbBathrooms: number;
	
	minPrice: number;
	
	maxPrice: number;
	
	ref: string;
}