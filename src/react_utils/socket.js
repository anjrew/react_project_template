import { Action as action } from './redux/actions';
import * as io from 'socket.io-client';

export let socket;

export const init = store => {
    if (!socket) {
        socket = io.connect();
        socket.on(
            'connected',
            (data) => {
                // console.log('conected data is ', data)
                // store.dispatch(
                //     action.setUserId(data.id)
                // );
            }
        );
    }
};
