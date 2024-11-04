export class Review {
    constructor(
        public userId: string, 
        public star: number, 
        public comment: string
    ) {}

    updateReview(star: number, comment: string) {
        this.star = star;
        this.comment = comment;
    }
}