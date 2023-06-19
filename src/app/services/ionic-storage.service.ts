import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'OnePiece';

@Injectable({
  providedIn: 'root'
})
export class IonicStorageService {

  constructor(private storage: Storage) { 
  }

  async init(){
    await this.storage.create();
  } 

  getData(){
    return this.storage.get(STORAGE_KEY) || [];
  }

  async addDate(item: any){
    const storedData = await this.storage.get(STORAGE_KEY)|| [];
    storedData.push(item);
    return this.storage.set(STORAGE_KEY, storedData);
  }

  async updateDate(id: number, item: any){
    const storedData = await this.storage.get(STORAGE_KEY)|| [];
    //storedData.push(item);
    return this.storage.set(STORAGE_KEY, storedData);
  }
 
  async deleteDate(id: number){
    const storedData = await this.storage.get(STORAGE_KEY)|| [];
    storedData.splice(id, 1);
    return this.storage.set(STORAGE_KEY, storedData);
  }
}
