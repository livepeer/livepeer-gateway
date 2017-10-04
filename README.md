# LivepeerGateway

This application connects to the **[Livepeer Toynet](https://github.com/livepeer/wiki/wiki/Toynet)**, and showcases the basic functionalities of the **[Livepeer network](https://livepeer.org)**.

## Electron (Node.js)

#### Quick start

```
git clone git@github.com:livepeer/livepeer-gateway.git
cd LivepeerDesktop
npm install
npm start
```

#### Development Commands list

| command  | task performed  |
|:-----------| -----------|
| `npm start`   | run the built application (`/dist`) |
| `npm run dev` | start dev (webpack will hot-reload the JavaScript and CSS) |
| `npm run dist` | generate a new build to `/dist` :shipit: 🎉 |


## Known issues and workaround

### Your camera is busy :collision: :movie_camera:
On OSX you can release it with  
```
sudo killall VDCAssistant AppleCameraAssistant
```

## Built With
[React](https://facebook.github.io/react/) |
[Mobx](https://github.com/mobxjs/mobx) |
[Webpack](https://webpack.github.io/)  |
[Electron](https://github.com/electron/electron)  |
[PostCSS](https://github.com/postcss/postcss)  |
[VideoJS](http://videojs.com)  | **and a lot of love** 😍


## Contributing
The best way to contribute is by looking at the [issues](https://github.com/livepeer/LivepeerDesktop/issues) in this repo.  
For details and process of contributing to Livepeer in general, please read [CONTRIBUTING.md](https://github.com/livepeer/wiki/blob/master/CONTRIBUTING.md).

## License
This repository is licensed under the GNU General Public License v3.0, also included in our repository in the [COPYING](https://github.com/livepeer/LivepeerDesktop/blob/master/COPYING) file.
