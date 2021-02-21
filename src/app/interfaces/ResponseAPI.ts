import { Movie } from "./Movie";

export interface ResponseApi {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number,
}