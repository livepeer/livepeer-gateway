/*
    Listener to dialog bettween dependencies (LivePeer, FFMpeg, Electron) and the app
    @return a events received in the stores
*/

import { Logging } from '../logging';


export const appEvents = ({ app, mainWindow, api, listener, emitter }) => {
    // Start logging
    Logging.setLogging();

    /*
        Listen for API callbacks
    */
    api.on('notifier', (args) => {
        emitter.send('notifier', args);
    })

    api.on('loading', (args) => {
        emitter.send('loading', args);
    })

    api.on('peerCount', (args) => {
        emitter.send('peerCount', args);
    })

    /*
        Send bug report
    */
    listener.on('sendBugReport', () => {
        Logging.sendBugReport()
    })


    /*
        Forward loading from the app to the LoaderStore
    */
    listener.on('loading', (event, arg) => emitter.send('loading', arg));


    /*
        Forward notifier from the app to the LoaderStore
    */
    listener.on('notifier', (event, arg) => emitter.send('notifier', arg));


    /*
        Refresh window
    */

    listener.on('criticalRefresh', () => {
        Logging.sendBugReport().then(() => mainWindow.reload())
    });


    /*
        App restart
    */

    listener.on('restart', () => {
        app.relaunch();
        app.exit();
    });

    /*
        Toggle the fullscreen mode
    */
    listener.on('toggle-fullscreen-editor-window', () => {
        mainWindow.setFullScreen(!mainWindow.isFullScreen())
    });

    /*
        Minimize window
    */

    listener.on('minimize', () => mainWindow.minimize());

    /*
        Close window
    */

    listener.on('close', () => close());
    app.on('will-quit', () => close());
}
