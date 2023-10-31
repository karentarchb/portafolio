import { Component } from '@angular/core';
export interface img{
  img : string,
}

@Component({
  selector: 'app-pic-pop',
  templateUrl: './pic-pop.component.html',
  styleUrls: ['./pic-pop.component.css']
})
export class PicPopComponent {
  public img :string = '';
  constructor(){}

  ngOnInit(): void {
    this.img = '../../../../assets/landing-ecommerce.png';
  }
}
