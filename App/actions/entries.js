import { ENTRIES_FETCHING, ENTRY_PATCHING } from './types';
import Api from '../lib/Api'

export function getEntries() {
    return (dispatch, getState) => {
        return Api.get('/entries')
            .then(resp => {
                dispatch(getEntriesSuccess({entries: resp }));
            }).catch( (ex) => {
                console.log(ex);
            })
    }
}

export function patchEntry(entryId, newStatus ) {

    return( dispatch, getState) => {
        // API Call could come here
        dispatch(patchEntrySuccess(entryId, newStatus ));
    }
}

export function getEntriesSuccess(data) {
    return {
        type: ENTRIES_FETCHING,
        data
    }
}

export function patchEntrySuccess(entryId, newStatus) {
    return {
        type: ENTRY_PATCHING,
        data: {entryId, newStatus}
    }
}