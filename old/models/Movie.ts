import { Genre } from "./Genre";
import { Reviews } from "./Reviews";

export class Movie {
    public reviews: Reviews;

    constructor(
        public id: string,
        public title: string,
        public overview: string,
        public releaseDate: Date,
        public language: string,
        public genres: Genre[],
        public poster: string
    ) {
        this.reviews = new Reviews();
    }
}