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
    "revision": "ef0764f6be30cbfac24916602ada0f38"
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
    "url": "assets/js/10.1454c792.js",
    "revision": "61b0547d45bf05c61eaa18e856497a55"
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
    "url": "assets/js/19.7628eb08.js",
    "revision": "4cfd6622246bb1178e6275e5ef5df764"
  },
  {
    "url": "assets/js/2.c389c4bd.js",
    "revision": "f91a0edbd7565bebe9109f6085f0afac"
  },
  {
    "url": "assets/js/20.7c539513.js",
    "revision": "3fa71f05ceaa0b21f9a5fcde3b3a7358"
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
    "url": "assets/js/26.14bd07e3.js",
    "revision": "70ca3b9313aae2fa745c81455f2319d9"
  },
  {
    "url": "assets/js/27.542a17ef.js",
    "revision": "2310cfcf04edb46bda58a8b27722e8a7"
  },
  {
    "url": "assets/js/28.ec3eec24.js",
    "revision": "aa90ad62fc36d7bb2a45128dabc7ffd8"
  },
  {
    "url": "assets/js/29.40704306.js",
    "revision": "92c5a7ed60b53dc5aa9dd624bbb830f9"
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
    "url": "assets/js/35.d776c68b.js",
    "revision": "3ff87c7f6fa35430e883d04547aa95f0"
  },
  {
    "url": "assets/js/36.6b4c3d3f.js",
    "revision": "0565125f44f3405c557dbb55442d0075"
  },
  {
    "url": "assets/js/37.95060099.js",
    "revision": "8adf7f0d4a12949a8988461c070c9159"
  },
  {
    "url": "assets/js/38.fd2ed8bb.js",
    "revision": "668fa7b79db5598feec465f439563116"
  },
  {
    "url": "assets/js/39.bd4c5b5d.js",
    "revision": "7742a3f33b72f54b50b29233f71e5c5d"
  },
  {
    "url": "assets/js/40.09cbd5bf.js",
    "revision": "a0d3c5addb38e2e2ee40b60020601cf6"
  },
  {
    "url": "assets/js/41.a11c121d.js",
    "revision": "7b620bb3f5ce28c548aa38402eb15ce2"
  },
  {
    "url": "assets/js/42.68735d62.js",
    "revision": "45d08efee9d89960fb1c9a0c0d3a71a2"
  },
  {
    "url": "assets/js/43.07bdacef.js",
    "revision": "75669a9c9670ed49851fa107d99b8871"
  },
  {
    "url": "assets/js/44.9009cd96.js",
    "revision": "a41e868c8dd2d965a3d0fa17817d65ef"
  },
  {
    "url": "assets/js/45.d302802e.js",
    "revision": "d07926d86595c2b836b662f8beab8d53"
  },
  {
    "url": "assets/js/46.1db22404.js",
    "revision": "70faa4f28cd4389a067d54faa9a4ba6a"
  },
  {
    "url": "assets/js/47.4b0bb4e4.js",
    "revision": "2a0e8d20875ee5a3bdcec725c9689ae4"
  },
  {
    "url": "assets/js/48.68c1e3a2.js",
    "revision": "9113b8612ec8c560b55f3ea27699a06a"
  },
  {
    "url": "assets/js/49.4f58dd68.js",
    "revision": "c1f1624002f259cdf52cae77c370683a"
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
    "url": "assets/js/57.ff1c94d0.js",
    "revision": "5e2ec2e09f91f2e2f6892dd270e707b5"
  },
  {
    "url": "assets/js/58.c91cdbea.js",
    "revision": "afc4524df14b6d26711d787bb8d0afc8"
  },
  {
    "url": "assets/js/59.56e93051.js",
    "revision": "a6a9f2d3eeec6988cff606f4e9335592"
  },
  {
    "url": "assets/js/6.0972289d.js",
    "revision": "a90d39087df66a2c2ac43f24a882a127"
  },
  {
    "url": "assets/js/60.db711198.js",
    "revision": "8f4e4dcc31e96cb402258fd3b649d3ec"
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
    "url": "assets/js/65.c66a84da.js",
    "revision": "365771c8710469349b35908b4ed88bb0"
  },
  {
    "url": "assets/js/66.defe9920.js",
    "revision": "88790ddaca66f1400def1ebadd9fadbb"
  },
  {
    "url": "assets/js/67.c14c2fc3.js",
    "revision": "d5a020669fedcb291c637ee4aca7c79f"
  },
  {
    "url": "assets/js/68.656bd277.js",
    "revision": "b8b9200c1cd1ae2f2663c4922d52a440"
  },
  {
    "url": "assets/js/69.7478d996.js",
    "revision": "eb00926234f44978439e6d9b20ac8468"
  },
  {
    "url": "assets/js/7.ff65d71e.js",
    "revision": "83e589641a3e6c701a42d9a32413683d"
  },
  {
    "url": "assets/js/70.395031a1.js",
    "revision": "486ef8137346a9181b3cd1a73f951072"
  },
  {
    "url": "assets/js/71.c222cc60.js",
    "revision": "c6ad749483b47820f11ae13d767b4a95"
  },
  {
    "url": "assets/js/72.5ea5be8a.js",
    "revision": "e5cd0f8cc8eb755c0ed68ae9207db7a5"
  },
  {
    "url": "assets/js/73.b73ea12d.js",
    "revision": "1d5c8b455896bdbf89bcedb14b467228"
  },
  {
    "url": "assets/js/74.3497cad0.js",
    "revision": "aa1931f5ca38010e9a9af0b2d77f8a8b"
  },
  {
    "url": "assets/js/75.bcea42e7.js",
    "revision": "cd0289dcb69d1dfc27ede4b77535186e"
  },
  {
    "url": "assets/js/76.57a454fd.js",
    "revision": "1bcb5c7be0ace1ebcbc8d250f3f3b30a"
  },
  {
    "url": "assets/js/77.8663b849.js",
    "revision": "bab0b055994461e5b7d27e3341b46da6"
  },
  {
    "url": "assets/js/78.22e39b16.js",
    "revision": "117e78dc73d371dda3b7226bf56a18da"
  },
  {
    "url": "assets/js/79.9c7ff6ac.js",
    "revision": "32aafd1bd0ef7c8c7360fb2ffc83520f"
  },
  {
    "url": "assets/js/8.bbba3991.js",
    "revision": "188ab18893d22a86f5aa9bbeb7cfe6da"
  },
  {
    "url": "assets/js/80.59f61418.js",
    "revision": "48af834ca40a6b4acaa56c3f1372e0e9"
  },
  {
    "url": "assets/js/81.f06451e4.js",
    "revision": "47d96279d1afec4bd3718258c13307e4"
  },
  {
    "url": "assets/js/82.5475d6ad.js",
    "revision": "fb295bc2738591b9d436847f2c02821c"
  },
  {
    "url": "assets/js/83.b2b5625c.js",
    "revision": "0e1ee0b9275ca70d3991ecba999d2767"
  },
  {
    "url": "assets/js/84.b0f98d79.js",
    "revision": "755e348372ff9748f715f56e3f39c317"
  },
  {
    "url": "assets/js/85.7c4f50a7.js",
    "revision": "a9b7c1e69a8e39a5137c04b7a22ba089"
  },
  {
    "url": "assets/js/86.f79fad96.js",
    "revision": "f5a34e83c117feaec0b5c8d31dc2fb7c"
  },
  {
    "url": "assets/js/87.42cabf41.js",
    "revision": "d05acdec574db5361674dd301b27a8eb"
  },
  {
    "url": "assets/js/88.33157310.js",
    "revision": "aea1b93aa5a62b49ebffaf002688f871"
  },
  {
    "url": "assets/js/89.94846c7d.js",
    "revision": "a7309822ce4dfccd4f7009649174766e"
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
    "url": "assets/js/91.808fa31b.js",
    "revision": "ccf605f6875c9f18af34809ffe61544c"
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
    "url": "assets/js/app.3a30457c.js",
    "revision": "8392abb029e2add2c0a8c15f803c97e0"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "2363ddb2ad0dfc02d13818691b46d4f5"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "8dd0adde40be19a7dcdd5b645381b01e"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "fe0f8eb1a456f46899ea94ba6810a0fc"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "68f9089a0ae607de61d138dd08e6a9bc"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "76cf4ec32a9914fce4b7e44a63581c95"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "467d650320ff1c42f259f1fe597d9925"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "e646db6b4e714bcc0d1bd8d773f5af70"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "5f2589a18d947493408473e03082d299"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "b9d74d0351804ad100879c43bc3a1f03"
  },
  {
    "url": "categories/index.html",
    "revision": "eb1539739d66a192c97fd23015fa260e"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "bd69ecdfa1fedb7d8c99b0397dd9552c"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "0ea1617030178b0c03be5c74a9ae8378"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "15669da30f85d336fc8b9bcc13e03dc8"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "7cf2636b231e138fe69317d4e2f97deb"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "ae5cdb32aa17b5833815ccdecf750dd0"
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
    "revision": "adb0cf7491e4d83dff95bbcc93bf783a"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "319c81d61b5526c6d0f9f1aacfc48ccb"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "7657b01c9c02df7a3ff30f5df66be85e"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "5d01fb9f47c2d8ba6f36b2966a2f6209"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "7dab92bf60e926065d50ad09b5418295"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "abab827f2bdb2eefce897f6af0c58d08"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "6ba97dc2dff859370cb5bfe79539d1e8"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "713e0577ee039aed9781850155cb23f8"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "96641f02a69772b98fd191c73b369d7d"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "525e943e4fada31610aa3fdff38b7be1"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "5f703e7f7760211cc68dac3ecab5aef2"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "3aa90be49c669e7bec74a4fd9f11c6b6"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "a7aabb5af857544715737b55dd647f1e"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "92fa58dd72bab2446cc26dd5b8941ea5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fb4fd0cc57244b445d65b7ce2271c264"
  },
  {
    "url": "tag/github/index.html",
    "revision": "02fad31ece1e702fdab3005358569310"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "dbc3334ac67779731360e1fe5ada1690"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "3fbdeb657710dcd66c8cf439c81ae0ac"
  },
  {
    "url": "tag/index.html",
    "revision": "7d4df07260c6ee82eda4dcabd6043abf"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "0a3469fb43c57cd14d48ca31ebff718c"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "f49fd96c7590e214648cf63081fe699c"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "7218f3f1cb03b938bd4e0117ac3f48ac"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "2a2655498f3ec42a6a52c27fd7c15b20"
  },
  {
    "url": "tag/node/index.html",
    "revision": "027b8e5912c37258a4e4806773b70df8"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "80cc3351695c9aec0fc14c6d4462f231"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "b11edeaeb15df162c10d9ffd1c4ad2fe"
  },
  {
    "url": "tag/python/index.html",
    "revision": "7ed4414e2bba1ff0988d7c0dfc06756c"
  },
  {
    "url": "tag/record/index.html",
    "revision": "2e995de10ac629f0c33b69b25d0273a8"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "3a2e54d083040c46e17f73d2f49ffec9"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "78f82ae0e8a80ae11aa65bd38647bf31"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "6dde464a73a507525e614d19b9c61609"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "f6d26682af43ac932857b6b00c9cf287"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "2253c4af3fdc2105d3535a320ed15faa"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "8cf4870c25346d4bc6e5f1cccc58baf5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "97c2ec4fa4c43c9392b294cd9691ea33"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f819fed885d0a232f5e32be46b2b171b"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "fafc14432b59f3b39216db375226721f"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "a6141342d4897cdde40b34e0914aa769"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "56ae2f61e68795bc0e349f6e27041720"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "b69f8de2edaa73fe44456931139fd95c"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "d70f86ba23a84742460469c98e231bcc"
  },
  {
    "url": "timeline/index.html",
    "revision": "934cc344929ab6cbb75223dba53077b4"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "c6ba408a6b001b5ff8ceea11b52bf836"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "cd30b8837d37160e58db4ee2bd010fd4"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "8b777c5e90f317dcaa78537824385098"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "3ed0d342d557c96ae3484ac667f85f51"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "0a94c52d8ed8a9e47b8a0396adf95cb1"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "81d8fed743d5a9514acf4a217a83dd1c"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "cfb6ee4458d04e6bb9d0b1653eefcc90"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "aea65c222118a646f74620b5e86ad58b"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "4ec3e055111c6e5e2bb3f8b519691195"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "58eab981ef170ce88c3e68dfaf45059f"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "6ef5664e7539c84d05509c554697c22b"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "bb1389e72b0b04a1c2ef1856e505e186"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "add0c3fb49f198aed90b7dd52b3b08f7"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "18ca189d2b5d787d1c4ffba4224079f7"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "7843d02560e67b3b6e34a642f36502a9"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "cdfc9097a0ee501ecd9e4e85d44a414e"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "18b9f3fda3cb0a855d90a3ac7c91d5db"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "e88a1f21e0900802de99f50673062550"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "3296f81bcd6b9a67643f78f076c9f4b1"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "61a4c8b57f18370aae6bb4081c3f039e"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "7085c6791793beb0ad5cff83993856ef"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "12813684645ea01500574dc20e356d98"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "4d08c731ef88332ed6e1e09471fc2098"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "09f0efa6a7aea56deb747dc08cbeb408"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "ba81002ff9f18a7d38f656e23eba8266"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "2b90d88fa5eef036799551afb2b381aa"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "83274ce9c54e7b446ef5575232cbb1cc"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "18c902fe291287fc22e27c961bee670d"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "54e31630085d4f8214fc280666f400d5"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "b5180fc47dec5361ed9c39671f5cf1a9"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "7c2ae0abc7699427877ef09970629526"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "6bb0b29b20da91a10af7f9357492855d"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "626f6e076c32cd255fd963122ed538f8"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "2c41eb39988aab1b60f84d9d901b7345"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "8a0f4d09a937b07d72c0126801eeae57"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "39f57f35cbbf635dd6711f8559601295"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "a9d49c7537e506c7eb1689c9b8c59d99"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "b648a853c4a614eb47f1497b57ea2386"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "b1eef8fcabbc4ce895fddc0730ce1a42"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "f4a0dda5f774dfb71fef58ae402e8f4f"
  },
  {
    "url": "views/essay/2022/0222.html",
    "revision": "694afde35e602f94cb65ddb0a910c881"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "a52af65ff3ca1fba9c6072c01c09b0f5"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "78541a4c4a89f0b3923b7ce7fbdc80af"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "81c64736ce3a55e6af20f3f784973fe2"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "41e2ca80e8fa5c6fe4409915b4d6a4b9"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "16aeb824ef03435a73d8d8bd3e9471ef"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "37bcb27416fc3fa634db82586291f416"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "50e72b73db38b5bb90dfb3978a7b3356"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "42faf692a0eab9abf7bf6ca2f01e2a46"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "579610b858db6c4eb416a285cff90412"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "308d0d8db0b99218923ab79dd6b22ab8"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "fbd1d6b4fd1fbea3523ad6066b80a8a2"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "9a31655828af00450c07dfe9a1239353"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "e11deffa572f3022a0bc35fba6d133be"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "cfe80d99d2206b35eba42c213461adbc"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "b752fa48ec98c2dcca04fde65b61d63a"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "e793bae15889e1dcd7b0bbc34dc2a402"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "9eae670142e1f443e1e35503e1405489"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "30b99ee1757252ec7cc52179a1b05cd6"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "fb503b15cbbbe68f86883390b026b293"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "af733fdf68045b2d89581324e4844db5"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "8a618d4b1a54aa6088e34475dec6d7e8"
  },
  {
    "url": "views/knowledge/windows/git/GitRecord.html",
    "revision": "654d29f6490d64ef81c7b2c9521ff105"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "64e7d29c0ea25fc0097e71e9c28c51b2"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "8ee6a8a410de512d567b14786ad17435"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "804aa1f8af9ce70a7a09b21250afef85"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "3df0060cdcf54b9f1211d0ccc47bfd34"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "d4f39056af709156932869c180a045b0"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "f8429a0a31804fae76b7a1aa16161ef8"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "aa4e0ff9ac4115595b243c101f07b8ff"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "f01f2b0782a9c2dd6cbef327ba33574a"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "a41b8095d6f2af15096cbd25a7f6c687"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "7d8869a1a4bd8ebdd6c7502fd188fea0"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "4f0f0ef6ae587c30bb0d39d5bf385349"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "592c023646340fa11aa3a71dca183ea3"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "cf85241544103d3b33adb6937f670b57"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "4961c8448528d46c5000ad62255c9bb8"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "6f7f27bf460732305acdd8d4f2f66306"
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
