import * as types from './mutation-types'

const mutations  = {
    [types.TEST_PLAY](state, play) {
        state.play = play
    }
}

export default mutations;