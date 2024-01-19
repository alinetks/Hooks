import * as types from './types';

export const reducer = (state, action) => {
    switch (action.type) {
        case types.POSTS_SUCCESS: {
            //Encontrada
            return { ...state, posts: action.payload };
        }
    }
    //Não encontrada
    return { ...state };
}