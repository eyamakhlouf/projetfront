import { Component, OnInit } from '@angular/core';
import {Livre} from '../model/livre.model';
import { AuthService } from '../services/auth.service';
import { LivreService } from '../services/livre.service';
@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit{
  livres?: Livre[];
  //livres : string[];
  
ngOnInit(): void {
    /*this.livreService.listeLivre().subscribe(livs=> {console.log(livs);
    this.livres = livs;
    });}*/
    this.chargerLivres();}

    

    chargerLivres(){
      this.livreService.listeLivre().subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      });
      }
      
    


constructor(private livreService:LivreService,
            public authService: AuthService) {//this.livres=livreService.listeLivres();
 }
  /*constructor() {
    this.livres = [
      {idLivre: 1,titreLivre: "L'Art de la guerre",
        auteur: "Sun Tzu",
        prixLivre: 19.99,
        datePublication: new Date("01/14/2011")
      },
      {
        idLivre: 2,
        titreLivre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        prixLivre: 12.50,
        datePublication: new Date("12/17/2010")
      },
      {
        idLivre: 3,
        titreLivre: "1984",
        auteur: "George Orwell",
        prixLivre: 15.75,
        datePublication: new Date("02/20/2020")
      }
    ];}*/
  

 //this.livres=livreService.listeLivres(); 

/*supprimerLivre(l: Livre)
{
//console.log(l);
this.livreService.supprimerLivre(l);
let conf = confirm("Etes-vous sûr ?");
 if (conf)
 this.livreService.supprimerLivre(l);}*/


supprimerLivre(l: Livre)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.livreService.supprimerLivre(l.idLivre).subscribe(() => {
console.log("livre supprimé");
this.chargerLivres();
});
} 
    
}  