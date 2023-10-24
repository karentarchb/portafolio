import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PicPopComponent } from '../pop-ups/pic-pop/pic-pop.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(
    public dialog: MatDialog
  ) { }
ngOnInit(): void {}
openpic(){
  const dialogref = this.dialog.open(PicPopComponent, {
    height: '90%',
    width: '80%',
    maxHeight:'542px',
    maxWidth: '542px',
    panelClass: 'addNotas'
  });
}
}
