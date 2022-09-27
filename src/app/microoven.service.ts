import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//access microoven.ts
import { Microoven } from './microoven';
@Injectable({
  providedIn: 'root'
})
export class MicroovenService {

  constructor() { }
  micro: Microoven[] = [
    {
      pid: 1,
      pname: 'Samsung',
      pdescription: 'Samsung Convection Microwave Oven 28 L MC28H5025VB | SAMSUNG India',
      price: 5500,
      img: 'https://th.bing.com/th/id/OIP.fbJktvTY6j5ZEkcL6R7BZAHaEg?pid=ImgDet&rs=1'
    },
    {
      pid: 1,
      pname: 'Samsung',
      pdescription: 'Samsung Convection Microwave Oven 28 L MC28H5025VB | SAMSUNG India',
      price: 5500,
      img: 'https://th.bing.com/th/id/OIP.lSwR1_qeCvSy-7r9_GHRyQHaE6?pid=ImgDet&rs=1'
    },
    {
      pid: 1,
      pname: 'Samsung',
      pdescription: 'Samsung Convection Microwave Oven 28 L MC28H5025VB | SAMSUNG India',
      price: 5500,
      img: 'https://th.bing.com/th/id/OIP.bed3wb0Qi91CRw89uymzGAHaE8?pid=ImgDet&rs=1'
    },
    {
      pid: 1,
      pname: 'Samsung',
      pdescription: 'Samsung Convection Microwave Oven 28 L MC28H5025VB | SAMSUNG India',
      price: 5500,
      img: 'https://th.bing.com/th/id/OIP.lSwR1_qeCvSy-7r9_GHRyQHaE6?pid=ImgDet&rs=1'
    },
    {
      pid: 1,
      pname: 'Samsung',
      pdescription: 'Samsung Convection Microwave Oven 28 L MC28H5025VB | SAMSUNG India',
      price: 5500,
      img: 'https://th.bing.com/th/id/OIP.lSwR1_qeCvSy-7r9_GHRyQHaE6?pid=ImgDet&rs=1'
    },
    {
      pid: 1,
      pname: 'Samsung',
      pdescription: 'Samsung Convection Microwave Oven 28 L MC28H5025VB | SAMSUNG India',
      price: 5500,
      img: 'https://th.bing.com/th/id/OIP.lSwR1_qeCvSy-7r9_GHRyQHaE6?pid=ImgDet&rs=1'
    }
  ];

  public getMicroOvenDetails(): any {
    const microObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.micro);
      }, 1000);
    });
    return microObservable;
  }
}
