import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable} from "rxjs/index";
import { map } from "rxjs/operators";
import { Log } from "../models/log.interface";

@Injectable()
export class FbService {
  logsCollection: AngularFirestoreCollection;
  logDoc: AngularFirestoreDocument<Log>;
  logs: Observable<Log[]>;
  log: Observable<Log>;

  constructor(private afs: AngularFirestore) {
    this.logsCollection = this.afs.collection('logs', ref => ref.orderBy('date', 'desc'));
  }

  getLogs(): Observable<Log[]> {
    // Get logs with the id
    this.logs = this.logsCollection.snapshotChanges().pipe(
    map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Log;
        data.id = action.payload.doc.id;
        return data;
      });
    })
  );
  return this.logs;
}

  newLog(log: Log) {
    this.logsCollection.add(log);
  }

/*  getClient(id: string): Observable<Client> {
      this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
      this.client = this.clientDoc.snapshotChanges().pipe(
          map(action => {
              if (action.payload.exists === false) {
                  return null;
              } else {
                  const data = action.payload.data() as Client;
                  data.id = action.payload.id;
                  return data;
              }
          })
      );

      return this.client;
  }*/

  updateLog(log: Log) {
    this.logDoc = this.afs.doc(`logs/${log.id}`);
    this.logDoc.update(log);
  }

  deleteLog(log: Log) {
    this.logDoc = this.afs.doc(`logs/${log.id}`);
    this.logDoc.delete();
  }
}
