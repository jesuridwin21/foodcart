import { OperatorFunction } from "rxjs";

export interface Receipe {
    pipe(arg0: OperatorFunction<unknown, unknown>): any;
    recipename: string;
    price: number;
    favoriteReceipe: boolean;
}


export enum CountryCode {
    india = 91,
    USA = 1
}


enum test {
    data1, data2, data3
}

enum ErrorMessage {
    netwrok = 'there some thing went wrong in netwrok'
}