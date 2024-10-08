import { Genre } from "./genre.model";
export class Livre {
    idLivre! : number;
    titreLivre! : string;
    auteur! : string;
    prixLivre! : number;
    datePublication! : Date ;
    genre! : Genre;

}