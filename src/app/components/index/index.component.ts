import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PicPopComponent } from '../pop-ups/pic-pop/pic-pop.component';
import { PicPopTwComponent } from '../pop-ups/pic-pop-tw/pic-pop-tw.component';
import { PicPopTrComponent } from '../pop-ups/pic-pop-tr/pic-pop-tr.component';

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
      height: '95%',
      width: '95%'});
  }
  openpicT(){
    const dialogref = this.dialog.open(PicPopTwComponent, {
      height: '95%',
      width: '95%'});
  }
  openpicTr(){
    const dialogref = this.dialog.open(PicPopTrComponent, {
      height: '95%',
      width: '95%'});
  }
}
