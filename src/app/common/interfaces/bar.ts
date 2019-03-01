import { Listable } from './listable';

export interface Bar extends Listable {
    id: number;
}

export interface BarResponse {
    bar: BarDBObject;
}
export interface BarsResponse {
    bars: BarDBObject [];
}

export interface BarDBObject {
    bar_id: number;
    bar_name: string;
    description?: string;
}
