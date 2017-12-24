// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

interface AdventDay {
    front: string,
    unlockAt: string,
    flipped: boolean,
    content: string
}

@Injectable()
export class AdventDaysProvider {

  public adventDays: AdventDay[];

constructor(private storage: Storage) {}

loadDays(){
 
        this.storage.get('adventDays').then((days) => {
 
            if(days !== null){
 
                this.adventDays = days;
 
            } else {
 
                this.adventDays = [
                    {front: '14', unlockAt: 'December 14, 2017 00:00:00', flipped: false, content: 'Callaté Ojo saltón!'},
                    {front: '15', unlockAt: 'December 15, 2017 00:00:00', flipped: false, content: 'CaraTelevión!'},
                    {front: '16', unlockAt: 'December 16, 2017 00:00:00', flipped: false, content: 'Culiflor....=)'},
                    {front: '17', unlockAt: 'December 17, 2017 00:00:00', flipped: false, content: 'Eres un CAGATIÒ..'},
                    {front: '18', unlockAt: 'December 18, 2017 00:00:00', flipped: false, content: 'Pis = ORO'},
                    {front: '19', unlockAt: 'December 19, 2017 00:00:00', flipped: false, content: 'Groenladia = MAMALANDIA'},
                    {front: '20', unlockAt: 'December 20, 2017 00:00:00', flipped: false, content: 'YA LO TENGO'},
                    {front: '21', unlockAt: 'December 21, 2017 00:00:00', flipped: false, content: 'Mírate FEO'},
                    {front: '22', unlockAt: 'December 22, 2017 00:00:00', flipped: false, content: 'Lloro por el futuro'},
                    {front: '23', unlockAt: 'December 23, 2017 00:00:00', flipped: false, content: 'Gato con pontuflas'},
                    {front: '24', unlockAt: 'December 24, 2017 00:00:00', flipped: false, content: 'Pato con Chanclas'},
                    {front: '25', unlockAt: 'December 25, 2017 00:00:00', flipped: false, content: 'Efecto Invernadero = OSoS'}
                ];
 
            }
 
        });
 
    }

    saveDays(){
 
        this.storage.set('adventDays', this.adventDays);
 
    }
 
    flipDay(day){
 
        if(!day.flipped && new Date(day.unlockAt) < new Date()){
            day.flipped = true;
            this.saveDays();
        }
 
    }

}
