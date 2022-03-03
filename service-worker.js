/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4a77db6794586c89538022e6ec1d55c7"
  },
  {
    "url": "assets/css/0.styles.595150d1.css",
    "revision": "0d6ed7bf3b1e6d73d2eb46bd11ea675f"
  },
  {
    "url": "assets/img/1-1.d77b88af.png",
    "revision": "d77b88afaf9383a57f41b508125790f2"
  },
  {
    "url": "assets/img/1-2.7765e6eb.png",
    "revision": "7765e6ebfae2dd800f7554015eff0428"
  },
  {
    "url": "assets/img/1.7e1db593.png",
    "revision": "7e1db5932a2c77ae21d1a43658740d7c"
  },
  {
    "url": "assets/img/2-1.f7ac141d.png",
    "revision": "f7ac141dd0f2fa27dbcd0c009d9755a4"
  },
  {
    "url": "assets/img/2-2.d90f311b.png",
    "revision": "d90f311bd0cddf861297e4292ef5e3c6"
  },
  {
    "url": "assets/img/2.546ac487.png",
    "revision": "546ac4870845bdae1fd686965ff8f306"
  },
  {
    "url": "assets/img/3-1-1.9b42706e.png",
    "revision": "9b42706eb0e9dd721042c735ce06f585"
  },
  {
    "url": "assets/img/3-2.229402bd.png",
    "revision": "229402bdd0b871392cf5a9b75bb8bce0"
  },
  {
    "url": "assets/img/3-4-1.6d4e547e.png",
    "revision": "6d4e547e84c046576da3a838b7570e94"
  },
  {
    "url": "assets/img/3-4-2.4599d6a7.png",
    "revision": "4599d6a75930ed27a233156e3bd55217"
  },
  {
    "url": "assets/img/3-4-3-1.9e2fd117.png",
    "revision": "9e2fd117efe48b020525b4fee56969df"
  },
  {
    "url": "assets/img/3-4-3-2.493a28f8.png",
    "revision": "493a28f8bed9fe64242d73cf79a0534d"
  },
  {
    "url": "assets/img/3.3b8e3c37.png",
    "revision": "3b8e3c373419b75d1b713e52a6c2fcaa"
  },
  {
    "url": "assets/img/4-1-1.39e0c6ec.png",
    "revision": "39e0c6ec5e4b3b859435425b5ebe46b6"
  },
  {
    "url": "assets/img/4.daa6eaf2.png",
    "revision": "daa6eaf2671a7c3b139bc403af33488b"
  },
  {
    "url": "assets/img/5.a3a628ab.png",
    "revision": "a3a628ab01f201989621296ac8051437"
  },
  {
    "url": "assets/img/6.0ded2d21.png",
    "revision": "0ded2d214d0678ef97dc903786846996"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/payinfo.7057cc64.png",
    "revision": "7057cc64f46145c45b826db103993d3b"
  },
  {
    "url": "assets/img/SocksCap64.2049bd5d.png",
    "revision": "2049bd5d871aaa7ac1f9b1a6d241ac61"
  },
  {
    "url": "assets/img/SSTap.2b1e728a.png",
    "revision": "2b1e728aa1a66e6bdc639dade32348c5"
  },
  {
    "url": "assets/img/tea.97da9426.jpg",
    "revision": "97da942662861cd18341b7b851bd367d"
  },
  {
    "url": "assets/js/1.46310a80.js",
    "revision": "0c11488dbcb35f7311d69ca436b527f6"
  },
  {
    "url": "assets/js/10.c81bed64.js",
    "revision": "dc88f7f1997630d11f277c9dd8ed339a"
  },
  {
    "url": "assets/js/11.2e140d8d.js",
    "revision": "7bf291e7264cf4f57768eaed3a5a07a5"
  },
  {
    "url": "assets/js/12.d6466770.js",
    "revision": "a9c8153dfe732d77c59b35f069db4c15"
  },
  {
    "url": "assets/js/13.982ad374.js",
    "revision": "fa89ceee8e92210bb489e29c62bc20ce"
  },
  {
    "url": "assets/js/14.cd46a225.js",
    "revision": "ddd1f25e50a210150ef06a57ead095bc"
  },
  {
    "url": "assets/js/15.c6b55496.js",
    "revision": "749935fd50feb33b84e70e3a68187c77"
  },
  {
    "url": "assets/js/16.fd159ad6.js",
    "revision": "aaf5f160576e4c2d18ef133868511750"
  },
  {
    "url": "assets/js/17.8882e0dd.js",
    "revision": "40f435dad2ec7c985b3e87aafc3e4ece"
  },
  {
    "url": "assets/js/18.2f643988.js",
    "revision": "caf3427c164c8e0b60c14c34f6b86837"
  },
  {
    "url": "assets/js/19.bb0c375d.js",
    "revision": "4b32cd36d922175429ceb54ff13fdb42"
  },
  {
    "url": "assets/js/2.c389c4bd.js",
    "revision": "f91a0edbd7565bebe9109f6085f0afac"
  },
  {
    "url": "assets/js/20.ea1fdc58.js",
    "revision": "00f34cc27d936d426a28fe5c08e408c6"
  },
  {
    "url": "assets/js/21.8028d412.js",
    "revision": "160475276f7789545ee068cd80374f4e"
  },
  {
    "url": "assets/js/22.076b1e40.js",
    "revision": "1fe911eaa8319c6276adb97fd3c11747"
  },
  {
    "url": "assets/js/23.fbecdda6.js",
    "revision": "aff674c4539b84be9098aab4322140cf"
  },
  {
    "url": "assets/js/24.2c64d871.js",
    "revision": "edbaf027edb81c2d11e676c383a7ed31"
  },
  {
    "url": "assets/js/25.f6a92f25.js",
    "revision": "ff7f0a9de77d64389a11358621cbeab6"
  },
  {
    "url": "assets/js/26.8b3a9828.js",
    "revision": "6a4e0bd8de211b19d008adfb070a82d5"
  },
  {
    "url": "assets/js/27.4255d96b.js",
    "revision": "9f231e8346d2d5a0b8829d57abcbac94"
  },
  {
    "url": "assets/js/28.ec3eec24.js",
    "revision": "aa90ad62fc36d7bb2a45128dabc7ffd8"
  },
  {
    "url": "assets/js/29.d8204c46.js",
    "revision": "0a0f6581a697ba0185dea218df23492f"
  },
  {
    "url": "assets/js/30.efff71ff.js",
    "revision": "fa8edd3a783cc4689f366548ac2cc012"
  },
  {
    "url": "assets/js/31.649ce96c.js",
    "revision": "fb378eeac9de12a9051cbf2ea7381560"
  },
  {
    "url": "assets/js/32.853d24e9.js",
    "revision": "4d8889c6ac71e189824a561ced0b49d1"
  },
  {
    "url": "assets/js/33.e826bc8c.js",
    "revision": "d7a066a047bf7408b5e8ee4c381e2405"
  },
  {
    "url": "assets/js/34.813148b8.js",
    "revision": "b128abfc784b5b9227ee8bdd7d602e56"
  },
  {
    "url": "assets/js/35.9283ceef.js",
    "revision": "2632c2444084148ab5d77b8c1026d04d"
  },
  {
    "url": "assets/js/36.048b7cac.js",
    "revision": "b113794b95eb9d5872bfe78af85861bf"
  },
  {
    "url": "assets/js/37.0c023a7c.js",
    "revision": "cef1273718ae34468db7df0c1faa2e76"
  },
  {
    "url": "assets/js/38.05300e05.js",
    "revision": "295d69b340f89cff98cee70caf6f0b7d"
  },
  {
    "url": "assets/js/39.a5fe7193.js",
    "revision": "d406fbe1685e24b537f47de9fdb51f32"
  },
  {
    "url": "assets/js/40.2382b06c.js",
    "revision": "9bba2436b388101e96cadc699494fc4b"
  },
  {
    "url": "assets/js/41.2375e8a4.js",
    "revision": "250515c25311914fa423e68a1940ef02"
  },
  {
    "url": "assets/js/42.3e08de94.js",
    "revision": "c1c0200e9b27d68a76138d421b15906a"
  },
  {
    "url": "assets/js/43.2cadf52b.js",
    "revision": "b57e084dbfe184d0a6daa5a7d489e299"
  },
  {
    "url": "assets/js/44.a21b9852.js",
    "revision": "ee3fb0a053624d835f99f2f9a7c5edab"
  },
  {
    "url": "assets/js/45.4acca5d9.js",
    "revision": "3ddd4d83f766fbf1a6534a1b1fdf8148"
  },
  {
    "url": "assets/js/46.8b51be2f.js",
    "revision": "31a38733c3effda74ca80b4d2b6035b6"
  },
  {
    "url": "assets/js/47.2316e562.js",
    "revision": "782e67541a06f6b2302d66b33bbccbce"
  },
  {
    "url": "assets/js/48.2df8bdda.js",
    "revision": "f02b68adafea939b8c32ba02f0715867"
  },
  {
    "url": "assets/js/49.d21fcb61.js",
    "revision": "6566e5463bd8480e8feeea6e62651b63"
  },
  {
    "url": "assets/js/5.0c4f2251.js",
    "revision": "9d95b4c340f0e49468ad09435fd03e0b"
  },
  {
    "url": "assets/js/50.dbe14d4c.js",
    "revision": "2d36ac78a4dde4dde9043c8e8663ba21"
  },
  {
    "url": "assets/js/51.14d6e0f2.js",
    "revision": "286c122aa8851cab2e899c4e07b6e5a2"
  },
  {
    "url": "assets/js/52.7963f4c6.js",
    "revision": "4c75c9ae1e8229e61eb739089268796a"
  },
  {
    "url": "assets/js/53.95881b4d.js",
    "revision": "8c4cf98ad2591dd35c0dbf1f22698d56"
  },
  {
    "url": "assets/js/54.b6e524b9.js",
    "revision": "8d95d3dcb9194744469f0b578eda6f3e"
  },
  {
    "url": "assets/js/55.8f2650ff.js",
    "revision": "bd437463a806be67f42a3eeab1f43dca"
  },
  {
    "url": "assets/js/56.898f291f.js",
    "revision": "de7f078a0253551c8a45ba0cac28a8c5"
  },
  {
    "url": "assets/js/57.5e516bd7.js",
    "revision": "9a6cfc0bfeec2af75707e3d24c04a066"
  },
  {
    "url": "assets/js/58.fcc500c6.js",
    "revision": "21b9df0c0f85e7da3f5f9c8c903a3108"
  },
  {
    "url": "assets/js/59.2207165a.js",
    "revision": "aac0cde0976c7248d318c7a72ac036b1"
  },
  {
    "url": "assets/js/6.0972289d.js",
    "revision": "a90d39087df66a2c2ac43f24a882a127"
  },
  {
    "url": "assets/js/60.35c159b4.js",
    "revision": "0504079d8aabfaf3aa576889c062e73d"
  },
  {
    "url": "assets/js/61.c6f3e7b5.js",
    "revision": "a9ca034e58be1e25f359faa6844e8fc2"
  },
  {
    "url": "assets/js/62.8f6c8f0c.js",
    "revision": "e0d5a96f16a25d40215414bdb9b6a8d3"
  },
  {
    "url": "assets/js/63.212803ce.js",
    "revision": "dc617dd7b3306059990694eaa5f317b5"
  },
  {
    "url": "assets/js/64.674c9a6d.js",
    "revision": "9a2ed1bc7333e42bf98732203ef168b9"
  },
  {
    "url": "assets/js/65.61a81f48.js",
    "revision": "ac1095abe5a5902edaf2b390571300fa"
  },
  {
    "url": "assets/js/66.40edde6b.js",
    "revision": "1c9f33217c67286307e4dfe7c6acb30a"
  },
  {
    "url": "assets/js/67.67159e35.js",
    "revision": "f709340643a7e68f25afd5da7fed7172"
  },
  {
    "url": "assets/js/68.f4205d2e.js",
    "revision": "9dd4501c45ce881c8473576b7b5c1f84"
  },
  {
    "url": "assets/js/69.b08768cf.js",
    "revision": "20977f2217fbe3f394e7bfea0310d7d4"
  },
  {
    "url": "assets/js/7.ff65d71e.js",
    "revision": "83e589641a3e6c701a42d9a32413683d"
  },
  {
    "url": "assets/js/70.daadf643.js",
    "revision": "02efa40532b693266b2ff8dbb6cfce5d"
  },
  {
    "url": "assets/js/71.0f753d3e.js",
    "revision": "951dfacf66c3dfe41c6c80135e945531"
  },
  {
    "url": "assets/js/72.5ea5be8a.js",
    "revision": "e5cd0f8cc8eb755c0ed68ae9207db7a5"
  },
  {
    "url": "assets/js/73.521b3b5f.js",
    "revision": "0869ebdea033b9c9bf768f57b5c51547"
  },
  {
    "url": "assets/js/74.412448c4.js",
    "revision": "09a6a7295789830fcab8484e3cba095c"
  },
  {
    "url": "assets/js/75.bcea42e7.js",
    "revision": "cd0289dcb69d1dfc27ede4b77535186e"
  },
  {
    "url": "assets/js/76.1bf93bf5.js",
    "revision": "293bb7f9a2d2bc87cdb06d3a1b3c03f0"
  },
  {
    "url": "assets/js/77.888e0ad9.js",
    "revision": "bdc7b6eab15a2e115413bbe913b70085"
  },
  {
    "url": "assets/js/78.22e39b16.js",
    "revision": "117e78dc73d371dda3b7226bf56a18da"
  },
  {
    "url": "assets/js/79.1eda31af.js",
    "revision": "ac92ab8a7621a046b6919b7be9daf0b9"
  },
  {
    "url": "assets/js/8.ad82fb1d.js",
    "revision": "ea7643c29f4db6f812e33d34746db347"
  },
  {
    "url": "assets/js/80.bf5b014b.js",
    "revision": "897ebddb1dd107174d261106e796c6bd"
  },
  {
    "url": "assets/js/81.ad2e2b8c.js",
    "revision": "0a617aaa503616d637a501ba651e3752"
  },
  {
    "url": "assets/js/82.dfe3c570.js",
    "revision": "76e398cad6182e9f84791b19fc830a29"
  },
  {
    "url": "assets/js/83.e15c7440.js",
    "revision": "16239b981793d03f078bd2a8a79248f9"
  },
  {
    "url": "assets/js/84.bda68050.js",
    "revision": "4824c26b7d0acc48466a27070d9e0cbd"
  },
  {
    "url": "assets/js/85.a655a88c.js",
    "revision": "cd373f8c992fc641fd6e3da2dbc52f58"
  },
  {
    "url": "assets/js/86.5af3d857.js",
    "revision": "099d3e0180b4e70753ba58a158c1c4fd"
  },
  {
    "url": "assets/js/87.bb65feae.js",
    "revision": "314e62f02de45b6bc2337da60687d834"
  },
  {
    "url": "assets/js/88.43a8a046.js",
    "revision": "07c2b83e606da929bdc041adeffe8065"
  },
  {
    "url": "assets/js/89.e820b961.js",
    "revision": "db56de463e23375226bf896701b1a134"
  },
  {
    "url": "assets/js/9.71a69bb8.js",
    "revision": "1a928d7f1b09531c841332863169f334"
  },
  {
    "url": "assets/js/90.915894f3.js",
    "revision": "7b3e131f6f4a33a7dbf3b87b3f0ec7fa"
  },
  {
    "url": "assets/js/91.08842503.js",
    "revision": "140e99569fb8c320d48778ee56a953a8"
  },
  {
    "url": "assets/js/92.274131ae.js",
    "revision": "2fe108bd7968533b556dc26570332bdb"
  },
  {
    "url": "assets/js/93.26b6ad15.js",
    "revision": "cd24e7596129bc6a3710e44d10f4eb88"
  },
  {
    "url": "assets/js/94.b9b1da6c.js",
    "revision": "f519b48b6b1a27f81db255af8cd21a18"
  },
  {
    "url": "assets/js/95.57525c87.js",
    "revision": "1fe48181f905ec87a8050112fc6f2fc4"
  },
  {
    "url": "assets/js/app.231cfa13.js",
    "revision": "40ca61b724137b516e7d2a504eeea2b8"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "4532e256f91de33cdb180bea8b15a288"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "e78d91bbcb99abdc4619a6dae5d432c3"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "22148de700442a63515c2e625460cf9e"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "bb271778e7b85470c1e082b9b8f991e0"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "393b677449bcbe717bcf49a627ceb3b9"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "11a15c958f49211d0961884fea823805"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "afcee2b518bccf18a8ff878616aaa1ec"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "6ef41c37ef7b6e293092b267dc3dd886"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "24bedf0987da2d2d76a16c159a44544f"
  },
  {
    "url": "categories/index.html",
    "revision": "831cc1f6ebcf27f32ba8c88bd6f3fdfa"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "9d85a78ad41151ab7d828ff8e093a5d5"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "00f974bab822d0ebbad9ecdd9a5527b5"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "a0279feac9cb5b48a9f655ead58d28ca"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "e10c348d9e38343494e2c08317eddafd"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "489f8b92deb5293f0de2c597fc95006b"
  },
  {
    "url": "img/banner.jpg",
    "revision": "38ad7665b3d03e2eb2edcf02347ea21e"
  },
  {
    "url": "img/banner.png",
    "revision": "bf507fff78a71e912ccc9640c6fb4394"
  },
  {
    "url": "img/bannerBg.jpg",
    "revision": "a5a0daf99b98977826b66ef0ae4ec1cd"
  },
  {
    "url": "img/bannerBg.png",
    "revision": "c2ec6fc20c2af790d9330afa03481cff"
  },
  {
    "url": "img/head.jpg",
    "revision": "6782c0efd38ccd614b3201109883dd44"
  },
  {
    "url": "img/head.png",
    "revision": "3b61be6d145d969cad375471f67c5f59"
  },
  {
    "url": "img/hero_black.png",
    "revision": "341621b18486ba4639bd2fa6fa5aab98"
  },
  {
    "url": "img/hero_old.png",
    "revision": "6e0567b30bfbca91471a5d5b886a13c5"
  },
  {
    "url": "img/hero_write.png",
    "revision": "944bdac8ed5e270e2e51db554b4c2232"
  },
  {
    "url": "index.html",
    "revision": "37f230370c2c029e9e9b1c6856e77b73"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "ff12d0c5be631f205c6e28f0f513dea2"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "b481d238d215789f9d7e9704b770188b"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "3ef745493fc83743ec8407ed66a14d56"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "e264833c67cf1d62db89d1d52ace7c3a"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "19e3a24eb5b2b4e6dc44a7b266a62910"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "3cd316404258829ee0b1bda315e37fde"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "d6d4503e6480a4a3601367987235b5ff"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "60ef7e1c07b094da2e9db1ed290d5365"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "678e94eda11012a0aa90b3daab97134f"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "a5ad34f1fdb5362816af43fc21fde7c7"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "c106703c327fea0dae291f87f77d5313"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "cb924e75974992d8dec55b4dae2ae27f"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "58fa639159c7892edb7cb5b68fb3d90c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7fe112df8cbf6383fc24d13470af30d1"
  },
  {
    "url": "tag/github/index.html",
    "revision": "1e593c905b629f9a29010ab55502d70f"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "0a8aff65f90534523238b9082a897709"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "97a17b42e4a1bc0973f327db880be8e4"
  },
  {
    "url": "tag/index.html",
    "revision": "eb3c45a5e84c80aa70b86e39b7cc09df"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "54895647d2895686a7ca5d65134fb8c5"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "e667ecd52819a62d8b590ec7cffd621f"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "bfa724f62f208216c6081fe569914bf8"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "cfbe7dfd52dd0c197089690d9b8aa381"
  },
  {
    "url": "tag/node/index.html",
    "revision": "49cda8118a7bb311c5dcbb8d5a23d39f"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "226b1932262aba92e20e2bc2d1fe8e05"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "85cc141bb53953c7b360e67b42c8e97a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "3a41123dd9533f14be2a9cf3d66b0b73"
  },
  {
    "url": "tag/record/index.html",
    "revision": "7645a3b4d641acdf22e5fdce4a54d6e5"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "d56368b471a8b976e531558d7a66b7b9"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "2ff77d0365c02ce3e74f9bb28e0451fa"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "08dcfc18fe18acd633a2b75601a60da3"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "f2b62b9e2ce70601a7801f79583a0f8f"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "f839fe66df3bc42269cfd9e82f54c834"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "5bfcff9ac057bd9a86c421abdf59f7a2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1d6899b0ad4567fdcb33fb3691cc6c76"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d37d5410315ac4a6d5ab9d4cae93e349"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "09a05deb6e62da8e83f8f563b97d9a97"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "87b16a0ec6490e8233fec826386ea28e"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "979ffa42518a5603cf4164330b9b6721"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "5a7c4017eb5c1f1380348b90675cdae7"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "8cc9b537ca93bbfe11f61f33572a966b"
  },
  {
    "url": "timeline/index.html",
    "revision": "96619b08b32342813046bf35e06437bd"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "77781010fc70d80815aa8d20a7f4b075"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "09d4c1d51b30ebe2764f1d5ba0e78b1f"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "e679c3e915bb530cdd20f4ed42b449bb"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "9a1efd89546e09aba23200a272ed985f"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "c4b8b377ec8117b463e57fcf704b2fb7"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "dc42afe538d507badca052a977add50d"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "ed5ba222cde1c6f576fe616dfcad13c5"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "a39465a2a9d7e01e2543956d10f19f90"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "be815fdfc6545baec014fb9bc0f79ab6"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "f6bb030b1b8929cf6ea864e3a40a5af7"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "4fec712920071166e6ad0f4a2ee3ccf7"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "221842883934eddd6957b191fde010a8"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "6f7b812b58e597e4b70a10fce29ef351"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "8cbac671494e9b1b9ff2b4ec7fb429bf"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "8ade9f2db5f3766ef6c0c953484f82c3"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "c35dc5cac3b7aed20aac8b9e065614fb"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "100b777ee516e4742b6654e82b419791"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "f7e75b16a38bfc5e62397c9d85d46ddb"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "df7cafa0c6670c560c39856b8172ecde"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "136d43c47ef6bf26c69f822dbaa6a619"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "1096c77a435ad5e719f61891aa1da43f"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "dcceab6521075758c72f4eaa5e093e92"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "dd99fbc7cf0d38b204cd4b6f99505f71"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "9bad46a406e792454ad5803c745d856a"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "a74929caffe71df5f474db6453c66bf3"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "e2df63d2d619882151a6800f7d56792b"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "18c063fc1f10232c644c62fd4fe6ad1d"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "7bcd81bc1b85a978f0a6492358fad187"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "409995c8f04f6d91912ebfe9a5398dd7"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "89aaccf342ebb9eeadde7415775c7a08"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "5896993626e37b3cb83eb5c4b5073f7d"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "a7a83f89b71b43c4ba59c197b895ce17"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "a279843352de6a7bf88e0cdbdbd02847"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "f8896e1e17818af248d553497b942dbe"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "a9a6647e77019002b8ac11554fb05813"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "013e19cfcbe04511478757836b205ff0"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "100ca10a34399a404398abd016be736c"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "8fe1cb3e19758e20625e3bb335418a82"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "d322b38e7c95ae97dcf66a2b9a239d2b"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "6772db4a5041acbd752abaa6a1004a32"
  },
  {
    "url": "views/essay/2022/0222.html",
    "revision": "e7b552971aab467ebdbc29912c475a85"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "26a9ac02637339c4222af463a601ff2c"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "dcc8ddf0c003c1276cde58e26a417c00"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "26f501a2858165462e4114bb53300a8b"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "36541f1e55f3780654b41ec61c4037bc"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "e764b15f55644cda832a68e8458e3307"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "6bab7eb265ad731348cd52578af0d354"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "b354bb79f1292c672d3deafe6f52268f"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "55f7df58a555a24c2eea2359422337a8"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "b30edb4687e16f049d7634e174068ee4"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "2dd3c31a37264da55c465b5a1bd83736"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "baabc5cc72c0d5e669b5287c915d0ede"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "3d3470f962e6a17068c16358c646bddd"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "d05273a555866d45b022c7d6b2f3c9fa"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "d1c483948fc1b143419caea0b9d6bd94"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "88f0c5b1541ab63f97059a9606489315"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "85b6fd2a2d613dbc85ed2906d9fa3432"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "57c5f62e1ca09c447ceb65376c643623"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "f270a1fb0f9ffa5396a9e98ed5b387a9"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "a158b230c1e0a28552224c87f96d6d0d"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "deae54230c557c7b6b9e8911cdd5a58c"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "53430665a9c7264bd719fade9d83dc23"
  },
  {
    "url": "views/knowledge/windows/git/GitRecord.html",
    "revision": "f2fa518858a1e1d448c6a7d4c03029fb"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "4c2a540fe2d6b667acc4809bc7e3d622"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "958a15d1deacf23f1379cfb48f3d79cd"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "43e386faea1abd6d8c94b34e7a70b174"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "778c29cdb35f527ca04bc5b7280b628f"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "9b6326bc044d614ae2a1d9896e84feaf"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "c707245db58044426f60bc6fc450e1cf"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "c7eed165375c7fe85f1dcdfbe1aa0ba6"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "dfea759f1463a6c2ff0d6775960ef78e"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "be9639383ba0ed6f6097c2413f37d1b7"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "81f0fb24670d0355364608d42b2d0016"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "c002c095f894af2e0842506889c5cd99"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "53ea1d76177841026f164379fea66da8"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "025383bcef95c6e71b995a3c203bea42"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "61d5bfba004904bfac36ed514d534648"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "c4d8d2941ead3478abb5f17527c79d47"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
