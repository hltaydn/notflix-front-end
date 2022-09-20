import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/movies.service';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  searchText: string = '';

  public posts: any;

  public moviesData: any;

  public filteredMoviesData: any;


  private newMovie:Movie = new Movie();

  public movieForm:FormGroup;
  private title:FormControl;
  private actors:FormControl;
  private rate:FormControl;
  private description:FormControl;
  private type:FormControl;
  private photoPath:FormControl;
  private url:FormControl;

  private header: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  
  closeResult = '';

  constructor(private movieService: MoviesService,private admin: NgbModal,public formBuilder:FormBuilder,
    private http:HttpClient) {


    this.title=new FormControl('',[Validators.required])
    this.actors=new FormControl('',[Validators.required])
    this.rate=new FormControl('',[Validators.required])
    this.description=new FormControl('',[Validators.required])
    this.type=new FormControl('',[Validators.required])
    this.photoPath=new FormControl('',[Validators.required])
    this.url=new FormControl('',[Validators.required])
    this.movieForm=formBuilder.group({
      title:this.title,
      actors:this.actors,
      rate:this.rate,
      description:this.description,
      type:this.type,
      photoPath:this.photoPath,
      url:this.url
    })
   }
   filterList() {
    this.filteredMoviesData = this.posts.filter((post: { title: string }) =>
      post.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  ngOnInit() {
    this.moviesData = this.movieService.getMovies().subscribe((response:any) => {
      this.posts = response;
      this.filterList();
    });
  }

  open(content: any) {
    this.admin.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  close(){
    console.log(this.movieForm.value);
    this.admin.dismissAll()
    this.movieForm.reset()
  }

  addMovie()
  {   
    const apiUrl = 'http://localhost:9090/api/movies';
      
    this.newMovie = <Movie>this.movieForm.value;
    this.newMovie.id = 0;


    console.log(this.newMovie);
    const abc = JSON.stringify(this.newMovie);
    console.log(abc)
    this.http.post(apiUrl, abc,{...this.header}).subscribe((res: any) => { 
      console.log(res)
    })
  }}