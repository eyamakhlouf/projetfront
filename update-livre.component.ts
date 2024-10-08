import { Component, OnInit} from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { LivreService } from '../services/livre.service';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';
//import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: [
  ]
})
export class UpdateLivreComponent implements OnInit{
  
  currentLivre = new Livre();
  genres! : Genre[];
  updatedGenId! : number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private livreService: LivreService) {}
  
  
 /*ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
    //this.genres = this.livreService.listeGenres();

    this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).subscribe( (liv: Livre) =>{ this.currentLivre = liv; } ) ;
    //this.updatedGenId=this.currentLivre.genre.idGen;
    //console.log(this.currentLivre);}
  }*/
  ngOnInit(): void {
    this.livreService.listeGenres().
    subscribe(gens => {console.log(gens);this.genres = gens._embedded.genres;
    
    });
    this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).
    subscribe( liv =>{ this.currentLivre = liv;
    this.updatedGenId =
    this.currentLivre.genre.idGen;
    } ) ;
    }

  /*ngOnInit() {
      this.livreService.listeGenres().
      subscribe(gens => {console.log(gens);
        this.genres = gens._embedded.genres;
      });
     
    this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).
     subscribe( (liv: Livre) =>{ this.currentLivre = liv;
                                this.updatedGenId =this.currentLivre.genre.idGen;
       } ) ;
    }*/


  /*updateLivre()
{ //console.log(this.currentProduit);
  //this.currentLivre.genre=this.livreService.consulterGenre(this.updatedGenId);
this.livreService.updateLivre(this.currentLivre).subscribe((liv: any) => {
  this.router.navigate(['livres']); })

}*/
updateLivre() {
  this.currentLivre.genre = this.genres.find(gen => gen.idGen == this.updatedGenId)!;
  this.livreService.updateLivre(this.currentLivre).subscribe((liv: any) => {
  this.router.navigate(['livres']); }
  );
  }

 

}
