import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store/src";
import { tutorial } from "src/app/models/tutorial.model";


export const ADD_TUTORIAL = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'

export class addtutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: tutorial) {}
}

export class removetutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

export type Actions = addtutorial | removetutorial