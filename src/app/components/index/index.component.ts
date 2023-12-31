import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PicPopComponent } from '../pop-ups/pic-pop/pic-pop.component';
import { PicPopTwComponent } from '../pop-ups/pic-pop-tw/pic-pop-tw.component';
import { PicPopTrComponent } from '../pop-ups/pic-pop-tr/pic-pop-tr.component';
import { PicPopFrComponent } from '../pop-ups/pic-pop-fr/pic-pop-fr.component';
import { PicPopFiComponent } from '../pop-ups/pic-pop-fi/pic-pop-fi.component';
import { PicPopSiComponent } from '../pop-ups/pic-pop-si/pic-pop-si.component';
import { PicPopSeComponent } from '../pop-ups/pic-pop-se/pic-pop-se.component';
import { PicPopEiComponent } from '../pop-ups/pic-pop-ei/pic-pop-ei.component';
import { PicPopNiComponent } from '../pop-ups/pic-pop-ni/pic-pop-ni.component';
import { PicPopTzComponent } from '../pop-ups/pic-pop-tz/pic-pop-tz.component';
import { PicPopElComponent } from '../pop-ups/pic-pop-el/pic-pop-el.component';
import { PicPopTeComponent } from '../pop-ups/pic-pop-te/pic-pop-te.component';

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
  openpicEi(){
    const dialogref = this.dialog.open(PicPopEiComponent, {
      height: '95%',
      width: '95%'});
  }
  openpicNi(){
    const dialogref = this.dialog.open(PicPopNiComponent, {
      height: '95%',
      width: '95%'});
  }
  openpicTe(){
    const dialogref = this.dialog.open(PicPopTeComponent, {
      height: '95%',
      width: '95%'});
  }
  openpicEl(){
    const dialogref = this.dialog.open(PicPopElComponent, {
      height: '95%',
      width: '95%'});
  }
  openpicTz(){
    const dialogref = this.dialog.open(PicPopTzComponent, {
      height: '95%',
      width: '95%'});
  }
}
