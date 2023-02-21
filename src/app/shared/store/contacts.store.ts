import { Injectable } from "@angular/core";
// import { ComponentStore } from ""
import { contact } from "src/app/models/contacts.model";

export interface contactState{
    Contacts: contact[]; 
}

@Injectable() 
export class Contactstore   {

}