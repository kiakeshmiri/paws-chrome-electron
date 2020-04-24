import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NetworkstatusService } from './networkstatus.service';
import Dexie from 'dexie';
import { PawsClient } from './proto/Paws_grpcServiceClientPb';
import { Error } from 'grpc-web';
import { Diary, FetchParam, DiaryList } from './proto/paws_grpc_pb';

@Injectable({
  providedIn: 'root'
})
export class PawsService {

  private pawsdb: any;
  private isOnline = true;
  private diarySubject = new Subject<Diary.AsObject[]>();
  public diaryObserbavle = this.diarySubject.asObservable();

  diaries = [
    {
        "id": "1",
        "date": "03/13/2020",
        "image": "images/oreo2.jpg",
        "note": "My captors continue to taunt me with bizarre little dangling objects. They dine lavishly on fresh meat, while I am forced to eat dry cereal. The only thing that keeps me going is the hope of escape, and the mild satisfaction I get from ruining the occasional piece of furniture. Tomorrow I may eat another houseplant."
    },
    {
        "id": "2",
        "date": "04/23/2020",
        "image": "images/oreo1.jpg",
        "note": "Today my attempt to kill my captors by weaving around their feet while they were walking almost succeeded, must try this at the top of the stairs. In an attempt to disgust and repulse these vile oppressors, I once again induced myself to vomit on their favorite chair ... must try this on their bed."
    }
  ];

  constructor(private http: HttpClient, private networkstatusService: NetworkstatusService) {
    this.registerToEvents(networkstatusService);
    this.createDatabase();
    this.isOnline = networkstatusService.isOnline;    
  }

  private registerToEvents(networkstatusService: NetworkstatusService) {
    networkstatusService.connectionChanged.subscribe(online => {
      this.isOnline = online;
      if (online) {
        console.log('went online');
        console.log('sending all stored items');
      } else {
        console.log('went offline, storing in indexdb');
      }
    });
  }

  private createDatabase() {
    this.pawsdb = new Dexie('paws_db');
    this.pawsdb.version(1).stores({
      diaries: 'id,date,note,image'
    });
  }

  private getFromIndexedDB(id: string) {
    return this.pawsdb.diaries.where('id').equals(id);
  }

  private storeInIndexedDB(diaries: Diary.AsObject[]) {
    this.pawsdb.diaries.clear().then(async () => {
      this.pawsdb.diaries
        .bulkPut(diaries)
        .then(async () => {
          const allItems: Diary[] = await this.pawsdb.diaries.toArray();
          console.log('saved in DB, DB is now', allItems);
        })
        .catch(e => {
          console.log('Error: ' + (e.stack || e));
        });

    });
  }

  private async sendItemsFromIndexedDb() {
    const allItems: Diary[] = this.pawsdb.diaries.toArray();

    allItems.forEach((item: Diary) => {
      // send items to backend...
      this.pawsdb.diaries.delete(item.getId()).then(() => {
        console.log(`item ${item.getId()} sent and deleted locally`);
      });
    });
  }

  getDiaries() {
    if (!this.isOnline) {
      const allItems : Diary[] = this.pawsdb.diaries.toArray();
      if(allItems.length === 0){
        this.storeInIndexedDB(this.diaries);
      }
      const diariesInIndexedDB = [];
      for( var key in this.diaries)
      {
        diariesInIndexedDB.push(this.diaries[key]);        
      }
      
      return of (diariesInIndexedDB);
      
      // if (diariesInIndexedDB) {
      //   console.log('got it from indexeddb');
      //   console.log(diariesInIndexedDB);
      //   return of(allItems);
      // }
    } else {
      const pawsService = new PawsClient('http://localhost:8080', null, null);

      const fp = new FetchParam();
      pawsService.fetchAllDiaries(fp, {},
        (err: Error, response: DiaryList) => {
          console.log(err);
          const diaries: Diary.AsObject[] = [];
          response.getDiariesList().forEach((diary) => {
            diaries.push(diary.toObject());
          });

          this.diarySubject.next(diaries);
          
        });
    }

  }

}
