import { Listable } from './listable';
export interface Drink extends Listable {
    drink_id: number;
    bar_id: number;
    price: number;
}

export interface DrinkServiceResponse {
    drinks: DrinkDBObject [];
}
export interface DrinkDBObject {
    drink_id: number;
    bar_id: number;
    drink_name: string;
    price: number;
}
