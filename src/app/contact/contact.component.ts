import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/products.json";
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact[]=[];

  constructor(private contactservice:ContactService) { }

  ngOnInit(): void {
    const contactObservable= this.contactservice.getContactDetails();
    contactObservable.subscribe((contactdata: Contact[])=>{
      this.contact=contactdata;
  });
  }
  all: any=(allprod as any).default;
  productDetails=false;


}
