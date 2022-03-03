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
    "revision": "feef316fb00e33e63bdf498f7d6ae0a1"
  },
  {
    "url": "assets/css/0.styles.a90b21bd.css",
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
    "url": "assets/js/13.77c4410d.js",
    "revision": "cae174b44ff17076e1585b96f75b719a"
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
    "url": "assets/js/17.598a8f70.js",
    "revision": "5379d79c5b77982bd408d873e48ff0d1"
  },
  {
    "url": "assets/js/18.09da401b.js",
    "revision": "ba107ac355b7a906558d1e4d2a037b35"
  },
  {
    "url": "assets/js/19.f8db9933.js",
    "revision": "d0e1e19b7015dd7fab5a86b177152766"
  },
  {
    "url": "assets/js/2.c389c4bd.js",
    "revision": "f91a0edbd7565bebe9109f6085f0afac"
  },
  {
    "url": "assets/js/20.85404492.js",
    "revision": "707dddb530cb688c5a2db648dcc6eacb"
  },
  {
    "url": "assets/js/21.b2c7daa9.js",
    "revision": "0d8c42d711387be91ff14bb7fbfbc947"
  },
  {
    "url": "assets/js/22.54d36007.js",
    "revision": "c9b70aecf35054efcf0e1ccedbf89e39"
  },
  {
    "url": "assets/js/23.45f79293.js",
    "revision": "80dde24642cd72606a17395e1cff5867"
  },
  {
    "url": "assets/js/24.836991fb.js",
    "revision": "9d864e07d7cb04184817fccc1f4c613f"
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
    "url": "assets/js/27.fc760a60.js",
    "revision": "bd6aa8879cd7c2a932c7de203d3c8845"
  },
  {
    "url": "assets/js/28.7d1b9bf7.js",
    "revision": "ce90934a0453cb0554f31f52b2293400"
  },
  {
    "url": "assets/js/29.7bae6795.js",
    "revision": "0df7f5e969409905eb7b5012c619b44c"
  },
  {
    "url": "assets/js/30.1f6be384.js",
    "revision": "2b78f8e36d8371a89f9a7dc7e3a600dc"
  },
  {
    "url": "assets/js/31.e9abf171.js",
    "revision": "086af333fa4e1fa10baa39f628b80e3d"
  },
  {
    "url": "assets/js/32.853d24e9.js",
    "revision": "4d8889c6ac71e189824a561ced0b49d1"
  },
  {
    "url": "assets/js/33.0c83eb6b.js",
    "revision": "d2ffee937b08a1d551d846473a5252af"
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
    "url": "assets/js/37.8ca99faf.js",
    "revision": "c4eb105da5c13ee11459b9f85a258636"
  },
  {
    "url": "assets/js/38.48c4681b.js",
    "revision": "959c901f080542858126984e578f9095"
  },
  {
    "url": "assets/js/39.9a73fd12.js",
    "revision": "aefe4e6bdb7956fbf5a1fc7292268338"
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
    "url": "assets/js/42.13e17269.js",
    "revision": "be5762a50353e14ebaf8892487b70652"
  },
  {
    "url": "assets/js/43.36c9f6d4.js",
    "revision": "8b40186647bcf0d9e1416c038a8062c0"
  },
  {
    "url": "assets/js/44.48552f95.js",
    "revision": "2902f631c80ea60b7f52c8ca6a070c43"
  },
  {
    "url": "assets/js/45.da4c9ee7.js",
    "revision": "c11bc72eb5d53daf4fe4e0f981d0cdd8"
  },
  {
    "url": "assets/js/46.0f1b4f03.js",
    "revision": "bda242e43c625b3174aef07b844d6ec1"
  },
  {
    "url": "assets/js/47.0e7ab4e7.js",
    "revision": "04dc23f14f8cf227bf3c10834f051e16"
  },
  {
    "url": "assets/js/48.31141068.js",
    "revision": "36d147b1ff3150f28969d208183ac8df"
  },
  {
    "url": "assets/js/49.0fba20d8.js",
    "revision": "3f347ca22cf4206d3492626bf87300fd"
  },
  {
    "url": "assets/js/5.0c4f2251.js",
    "revision": "9d95b4c340f0e49468ad09435fd03e0b"
  },
  {
    "url": "assets/js/50.63369fdf.js",
    "revision": "097a123328e091b0f688a983f93b4dde"
  },
  {
    "url": "assets/js/51.c226ec7a.js",
    "revision": "780b06c48bafae66f291dfdcff373c38"
  },
  {
    "url": "assets/js/52.7963f4c6.js",
    "revision": "4c75c9ae1e8229e61eb739089268796a"
  },
  {
    "url": "assets/js/53.63806d62.js",
    "revision": "39a3072037777d7343209fb34d2c576c"
  },
  {
    "url": "assets/js/54.2362b9a9.js",
    "revision": "44a96665f73265512325bcbb8c353ad1"
  },
  {
    "url": "assets/js/55.27fb8943.js",
    "revision": "f6fb0e2460583ba23edb1a1068c14e5b"
  },
  {
    "url": "assets/js/56.757f7aa8.js",
    "revision": "c9edce473aa2a3f189cde685299e96df"
  },
  {
    "url": "assets/js/57.830eba4d.js",
    "revision": "0067e46a2f76772e933186aba463984a"
  },
  {
    "url": "assets/js/58.ded5ea04.js",
    "revision": "108dd0409b3c44def2094744af463722"
  },
  {
    "url": "assets/js/59.e5198321.js",
    "revision": "d815fe5ea0949dc965d802dd152e1ace"
  },
  {
    "url": "assets/js/6.0972289d.js",
    "revision": "a90d39087df66a2c2ac43f24a882a127"
  },
  {
    "url": "assets/js/60.b88d7f10.js",
    "revision": "1aea177f4bf69f6f98693590304f4463"
  },
  {
    "url": "assets/js/61.47580ee3.js",
    "revision": "35ff934855232238fc497d193ac2253f"
  },
  {
    "url": "assets/js/62.50a8b17a.js",
    "revision": "0bdc02e431d26a40a866b20294f39d3e"
  },
  {
    "url": "assets/js/63.00ca88eb.js",
    "revision": "c7c86f684936cd2181fed3ba9df2ef71"
  },
  {
    "url": "assets/js/64.9cbc1819.js",
    "revision": "ae48d5caad37dbd5c02da70182fa57a0"
  },
  {
    "url": "assets/js/65.3e94bade.js",
    "revision": "81a9929e1514a56858370856d0cdd0c6"
  },
  {
    "url": "assets/js/66.40edde6b.js",
    "revision": "1c9f33217c67286307e4dfe7c6acb30a"
  },
  {
    "url": "assets/js/67.4ebf9b87.js",
    "revision": "af638274d629ed854a570e7f7e31daad"
  },
  {
    "url": "assets/js/68.c9634e55.js",
    "revision": "419a8161d0fa0d44494774c1afa5629e"
  },
  {
    "url": "assets/js/69.0620f5c0.js",
    "revision": "c59fe1420700b4dd1f8282304b4c7046"
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
    "url": "assets/js/71.952bca00.js",
    "revision": "945fbfad630ca6456543cf73880e2c1e"
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
    "url": "assets/js/76.a62a3fa5.js",
    "revision": "801ee14f83d63e339bf62da2af28a104"
  },
  {
    "url": "assets/js/77.10cfffd1.js",
    "revision": "e33b35572f36dccaff28e7dd451ccc60"
  },
  {
    "url": "assets/js/78.00c8c425.js",
    "revision": "91b1ed88fb256a98d9c783efd2085768"
  },
  {
    "url": "assets/js/79.204583f5.js",
    "revision": "05a0119e081b684a27bfb905997f86ba"
  },
  {
    "url": "assets/js/8.a89496cb.js",
    "revision": "52a4e7bacd5a5f4b0b887ef8cee45a11"
  },
  {
    "url": "assets/js/80.7cca4738.js",
    "revision": "c6e8d9685f218db75e5aa6405e4b379d"
  },
  {
    "url": "assets/js/81.2093143d.js",
    "revision": "cdb129cc93a91b16ac4be321db90398d"
  },
  {
    "url": "assets/js/82.5475d6ad.js",
    "revision": "fb295bc2738591b9d436847f2c02821c"
  },
  {
    "url": "assets/js/83.60d597f6.js",
    "revision": "6a30026ed278344f36a1f21003d8d50a"
  },
  {
    "url": "assets/js/84.ea62fb39.js",
    "revision": "7da96c0507946698b19dbeb810707c00"
  },
  {
    "url": "assets/js/85.7c850be6.js",
    "revision": "fcdc330dec11bdf4ec29eb6e20532a87"
  },
  {
    "url": "assets/js/86.5af3d857.js",
    "revision": "099d3e0180b4e70753ba58a158c1c4fd"
  },
  {
    "url": "assets/js/87.cd797646.js",
    "revision": "6fa94b2526a3f8ebc000294924b92815"
  },
  {
    "url": "assets/js/88.6876c36e.js",
    "revision": "cdb5d5e65d3dd18ed9d1f9a1f1768ce2"
  },
  {
    "url": "assets/js/89.283d7088.js",
    "revision": "9f16bc35bc883232cbe1a8d21dba2af5"
  },
  {
    "url": "assets/js/9.71a69bb8.js",
    "revision": "1a928d7f1b09531c841332863169f334"
  },
  {
    "url": "assets/js/90.1564526f.js",
    "revision": "89ff6ed0933fa6f47afafde2b6d02fec"
  },
  {
    "url": "assets/js/91.1b6c69ff.js",
    "revision": "2fa96742ae70872ce369261ec77af143"
  },
  {
    "url": "assets/js/92.8ea9a223.js",
    "revision": "3a0cb856af1716fe1f38ad45f73b4135"
  },
  {
    "url": "assets/js/93.689c5a85.js",
    "revision": "fe30498e50ca9fb040e54351869bea8e"
  },
  {
    "url": "assets/js/94.0e5fb7ee.js",
    "revision": "45c671df6edf542c33caed151b979261"
  },
  {
    "url": "assets/js/95.57525c87.js",
    "revision": "1fe48181f905ec87a8050112fc6f2fc4"
  },
  {
    "url": "assets/js/app.b85d571d.js",
    "revision": "ddb4f6e357f2d8705f5cf7cf350e30dc"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "484c3a00b58967978c175e03a589769d"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "50cba99efb7bf894e8c11db8fb9ce6a8"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "c757f75f73ed348711b98014d1706edd"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "6acb34aa6e9477d40e0970dc5c21a1d1"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "38cc4afe4aa099fc15c0b09df51c4c7a"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "55eff961fe3f8356b099dfa5116b6eb0"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "37504010877070b53256349d2c8c7da8"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "149af8ae8228b739e0d10d611f770b8e"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "d113d9a2d11912e9e9d086dd7a5d1848"
  },
  {
    "url": "categories/index.html",
    "revision": "969f33218e33ecd713208cc15fb2f3b3"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "f9e06a74f5cf50220e4f3d51a5a39a13"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "0229aa88fa4668aa506cf579e45e70bc"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "1e56005f8469a146ce860d725c87eb20"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "13d6eead7cc22e1a66eaae2fba973522"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "5f1e06dc6cba05dd4252e82d512a4197"
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
    "revision": "bc96ab69c2c892ab6ece84c09fe2853d"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "92399f7e16046afe54ac64bf67c662bf"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "a043d564d73592f44a7152dedd39cdb2"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "e5f8c064e4614feb2e1ec454f67bebd9"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "c5ed60950545906a019d560b28656d8b"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "ac8090eb461d253db5d26faccf968a14"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "59de99f5690aff521e3a525762387714"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "e5a77ce261e86f602d6516d7e7da35d6"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "1e62a0940699eecc44906bb3b7e0e5be"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "7f0b57ae12239f4020199870204f1ce2"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "5347baf2fcf816fbf6e7ab0f657ae2d2"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "80db50873a2d9ccb931f7b8f5f362ac5"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "d0f1ce15c1b5b02c861b7a4d0d058893"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "ce29ce6d32ad45eee7acf39bff63b6da"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7b929830e7e3bccb17e7feae3cafef02"
  },
  {
    "url": "tag/github/index.html",
    "revision": "95cd6769d4c18d4ab48e62d478d38e60"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "156dde49d675e98682484674f8bc2339"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "915de31dcce975bf5c2e788ccde61483"
  },
  {
    "url": "tag/index.html",
    "revision": "e1665652e04ca23953467bb62a9b41e3"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "5d8f9d52b2daae96715af2865effb2eb"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "7282724ae159aa8ca398d25d3304d717"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "68cb50aeae87aebfd0e2823f712a1635"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "708eb61205388c15e4ca7d5057090281"
  },
  {
    "url": "tag/node/index.html",
    "revision": "0b50bc7a7c37424131d76f13f08e80a6"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "5aed28c6c657d0c46990b0befffaec4c"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "5712b9ac3b5f31c450d03ad77360a008"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9622df1773440e390ea3c5654956a8aa"
  },
  {
    "url": "tag/record/index.html",
    "revision": "250a3392d9cc7ff3aeaa3bf35370014f"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "4c71413fa1654f8d076e840911b7b825"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "a871b6ac1e8e2860117e1dfab9a77654"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "ad3511b617e0679a781810e872017813"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "d367982fc091d5dd84bf4733ab2aa06a"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "11f16ba1f4c50efccf7d59eadf3b7e02"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "73314bc8f67ab37232970593157add45"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a2927d4c66b39d674afe8a6edd12bd0d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c0ba6e43804e9bf84b91f2fb08701b4b"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "0f3a41c263cb2afd754cdf08b65ee695"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "c9055287a5bd4de45cc802166f57bce0"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "de6335fe87aaf54fcd6f4bdb40d379e7"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "d4e3109e08575ab1e0093212e5bde9c6"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "dae553c6a07b3670fd95ab5a0436921f"
  },
  {
    "url": "timeline/index.html",
    "revision": "a4393ee7e885aa5762434cdefe4ef8d8"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "e006babe8b12d0dda3c8039aa3640da5"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "26df547093b4f7b7c868dbb4c221a289"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "38603f109a49ca22528bfdd7b7fabddc"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "e173fbb6db21673c6103292d59a4d3f1"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "4e4c5a7db05babaee26d418862de503a"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "851ae53f3d1c79c4780228a2b4486a12"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "0d1b2df0bdc1c4a8dab72e868c413eb1"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "f2dc482bbfb19616cdeb5d5956384933"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "5d5293f806ea2f6061f0c93f9aabd68c"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "5bcdc73e4be5ded2e1efbf812aaa53b7"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "fe66c4297764f970ed2d242b763105fd"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "ee66dc70234ef542cadacbe0b7c8771b"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "f7824b6d4a800833399403e562e58c4a"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "2835087ca3641e0c1b0dc83f02e1764b"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "c695775649306a7bee64ad7374f1bf57"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "8dd06f7d3427431389150b9448016e74"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "ade1a40cdb9e61f268194d9702b52d60"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "6dbe849a96d14dd0cf7e1588e6e9add9"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "8278e135be436b13cf230c13caa04f7f"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "1eee2679d5d044a6d2cd9c2e6f5feb43"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "492e9175f4d0bb2eacc3c929070077eb"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "a350acbf7c245fe6157139448cffea38"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "439d3249dfb7d373f99a8c1e61582f1f"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "50897b0fde6c2b8b733f65b1c5e312b8"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "3eafa90a731c44f94074dead16e9358c"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "9de810674cde456d5a20d892fee50345"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "2c1516aedf84af37115a3a9508aa1454"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "bd99dfc4ea91b281171b4fdeb3b333d1"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "2f8a4eeb79fe68115a1d7fd7420513fa"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "cf5164357365143255eae06d74e2a688"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "144c291fe29c6c1c13ae050e58b32e1f"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "4deee72de4fdcf66477b819be6423b3d"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "730d216cb66b24912ec702b83458b7e4"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "c95558c343a338595a60d57f17719b82"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "74c29c92877e3cb2842d7b580d459ecd"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "b76aca64c6ad68f5678feddb6d345185"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "3ab75fd7f1aebc62ced74cfb8590cb97"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "56d37f0e37c69a51adc92c6a5073f485"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "6118932c85b7e59dd5abd9404e3a6d91"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "6972443547fbd22f85fa980ae8729711"
  },
  {
    "url": "views/essay/2022/0222.html",
    "revision": "aef6f1e378ba8852efac135882e93022"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "538944439343b21211331bf2eecb8921"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "4298d1c2d4e7d20723153333964a91f7"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "d6cc0b67baf1f3af9d3d799e18852aa6"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "9beecd0f6ace5a71a0ca9cfbc2222a57"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "694d5371e2355094944d7c0be9438132"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "8903dd3428bdbda21bfee6d4f76f6187"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "8e94ad7766db219b63317c6c3f931511"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "a4eab215778ae157e24908da48a6596c"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "18e79ae77806aadfc841a46b57cfdf05"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "48eb0a5cca54a00751aeb062e04325a9"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "1859ca792b3eab8773dac20ea45b09b3"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "679fa7c26933705cc7541ba153329c99"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "ac2d37ef2c9772117d8d6c0f5e3a86f1"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "16eea23983ae8c50c8d8dfe3c36770a9"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "11c749be67bec4ec6fc807c580cd6d89"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "48c51156f6e570675857716992ec31a4"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "d089a4fe45b15e2a937bcac58a98fe64"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "2bcebec5b4df2bdd4f6d5aaef340cfdd"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "01c48721c2a0be6e901ea1d83fa00fe9"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "4657c3b2dce9179a9f43e4a5d5db7ac5"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "899cc5e77ab7e186879a0f55ea9b3b60"
  },
  {
    "url": "views/knowledge/windows/git/GitRecord.html",
    "revision": "f6c2607190698d2ada51cf8257c3cbd6"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "b27c233d216442566cd714eba04d9d33"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "3a4389c5c564d45694753feafa61e7b0"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "1dde4b90bdb00575a4772350f4ee2b7c"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "38a2b2059157aa350a518ed717989a35"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "c8b59a6d835a1766ba53bbe95a9dcdda"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "7bf16f41cc90e0f2b1fa1d88b5dd61a6"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "27c86800a919d8538acc29526e78d94b"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "98841ed27c826011ae76e0d2e9e1ff95"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "ec7e5f17468a758ce9f1d57990306a66"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "9b59f46544aa2e0b5f89f4da7e7417cd"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "b05207877e74e93f584f82d2ff5226ed"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "1282299dd6af03d0b611be1c0a350a56"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "9d783f6d9c1cbac066f6dbaf8d4eae1d"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "7cba5552bbec32471e75cf0595004718"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "17a2da2d05eeb89fb88f0e1ac61adf83"
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
