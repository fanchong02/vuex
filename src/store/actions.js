import * as types from './mutation-types'

export const selectPlay = function ({commit, state}, id) {
    commit(types.TEST_PLAY, id); 
}