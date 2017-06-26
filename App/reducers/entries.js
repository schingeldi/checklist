import {ENTRIES_FETCHING, ENTRY_PATCHING} from '../actions/types';

const initialState = {
    entries: {},
    isFetching: false
}

export default function entriesReducer( state = initialState, action ) {
    switch( action.type ) {
        case ENTRIES_FETCHING:

            let newEntries = {};


            action.data.entries.forEach((entry) => {
                let id = entry.id;
                newEntries[id] = Object.assign({}, entry, {id});

            });

            return { ...state,
                entries: newEntries};

        case ENTRY_PATCHING:

            let patchedEntries = state.entries;
            patchedEntries[action.data.entryId].status = action.data.newStatus;

            return {...state,
                entries: patchedEntries
            }


        default:
            return state;
    }
}