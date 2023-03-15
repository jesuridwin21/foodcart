// import { Action } from '@ngrx/store'
import { tutorial } from '../models/tutorial.model'
import * as tutorialActions from '../shared/actions/tutorial.actions'

const initialState: tutorial = {
    name: 'initial Tutorial',
    url: 'https://google.com'
}

export function reducer (state: tutorial[]= [initialState], action : tutorialActions.Actions ) {
    switch(action.type) {
        case tutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        default: 
            return state;    
    }
}