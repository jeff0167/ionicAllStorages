import { Component } from '@angular/core';
import { IonicStorageService } from '../services/ionic-storage.service'; // npm i @ionic/storage-angular

import { Storage } from '@ionic/storage-angular';// npm i --save @ionic/storage

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  simpleLocalData: any;
  listData = [];

  constructor(private dataService: IonicStorageService, public storage: Storage) {
    this.loadData();

    this.setVal();
    this.getVal();
  }


  setVal(){
    this.storage.set("name", "pirate " + (Math.floor(Math.random() * 100) + 100));
  }

  getVal(){
    this.storage.get("name").then((val) =>{
      this.simpleLocalData = val;
    })
  }


  async loadData(){
    this.listData = await this.dataService.getData();
    console.log(this.listData);
  }

  async addData(){
    await this.dataService.addDate("pirate" + Math.floor(Math.random() * 100));
    this.loadData();
  }

  async removeData(id: number){
    this.dataService.deleteDate(id);
    this.listData.splice(id,1); // hacks, we don't have to reload the data
  }


  removeItem(item: number){

  }


}
