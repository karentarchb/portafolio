import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PicPopComponent } from '../pop-ups/pic-pop/pic-pop.component';
import { PicPopTwComponent } from '../pop-ups/pic-pop-tw/pic-pop-tw.component';
import { PicPopTrComponent } from '../pop-ups/pic-pop-tr/pic-pop-tr.component';
import { PicPopFrComponent } from '../pop-ups/pic-pop-fr/pic-pop-fr.component';
import { PicPopFiComponent } from '../pop-ups/pic-pop-fi/pic-pop-fi.component';
import { PicPopSiComponent } from '../pop-ups/pic-pop-si/pic-pop-si.component';
import { PicPopSeComponent } from '../pop-ups/pic-pop-se/pic-pop-se.component';

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
  openpicFr(){
    const dialogref = this.dialog.open(PicPopFrComponent, {
      height: '95%',
      width: '95%'});
  }
  openpicFi(){
    const dialogref = this.dialog.open(PicPopFiComponent, {
      height: '95%',
      width: '95%'});
  }
  openpicSi(){
    const dialogref = this.dialog.open(PicPopSiComponent, {
      height: '95%',
      width: '95%'});
  }
  openpicSe(){
    const dialogref = this.dialog.open(PicPopSeComponent, {
      height: '95%',
      width: '95%'});
  }
}
