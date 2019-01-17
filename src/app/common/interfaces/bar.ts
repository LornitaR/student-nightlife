import { Listable } from './listable';

export interface Bar extends Listable {
    id: number;
}

export interface BarServiceResponse {
    bars: BarDBObject [];
}

export interface BarDBObject {
    bar_id: number;
    bar_name: string;
}
