import { JokeType } from "./joke.type";

export interface Joke {
    type : JokeType;
    joke?: string;
    setup?: string;
    delivery?: string;
}