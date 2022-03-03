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
    "revision": "259b233ba5ef3eca00cc891f3743f726"
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
    "url": "assets/js/10.a261962e.js",
    "revision": "41966040e750d4369f0ff6a552172b7b"
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
    "url": "assets/js/17.95e4f425.js",
    "revision": "f0a713496354bed12b72239bf4824aab"
  },
  {
    "url": "assets/js/18.1d5b8b9f.js",
    "revision": "fbdffac2930f852f66252c9018ed6f12"
  },
  {
    "url": "assets/js/19.fc69ea73.js",
    "revision": "008cb334a087907e5cfcafa69dc3f746"
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
    "url": "assets/js/21.ecb0c631.js",
    "revision": "d2bd9269a0003c208a7fa60520a76907"
  },
  {
    "url": "assets/js/22.54d36007.js",
    "revision": "c9b70aecf35054efcf0e1ccedbf89e39"
  },
  {
    "url": "assets/js/23.662b5bde.js",
    "revision": "86ac04c79ffc68dc8d2b7142f57c0301"
  },
  {
    "url": "assets/js/24.2c64d871.js",
    "revision": "edbaf027edb81c2d11e676c383a7ed31"
  },
  {
    "url": "assets/js/25.25a8ceac.js",
    "revision": "f8373190c149586d55939262be931143"
  },
  {
    "url": "assets/js/26.14bd07e3.js",
    "revision": "70ca3b9313aae2fa745c81455f2319d9"
  },
  {
    "url": "assets/js/27.481db529.js",
    "revision": "912dee467fa8e942077141d4e21f4ba7"
  },
  {
    "url": "assets/js/28.3d05b05c.js",
    "revision": "f6240f423918ed883722c3e361ee7ba7"
  },
  {
    "url": "assets/js/29.1c38830d.js",
    "revision": "6472cc842fad8ba6f23a2e918b04b1f3"
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
    "url": "assets/js/33.cede83cb.js",
    "revision": "71fbfaa4d3bf8665baaf676f454b302e"
  },
  {
    "url": "assets/js/34.7b5f1632.js",
    "revision": "e9224ee0b4d4520e6072545ca2b9c280"
  },
  {
    "url": "assets/js/35.84582624.js",
    "revision": "14bcce61247019e09e8122b71a9801b7"
  },
  {
    "url": "assets/js/36.048b7cac.js",
    "revision": "b113794b95eb9d5872bfe78af85861bf"
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
    "url": "assets/js/39.0739fad3.js",
    "revision": "a2086d857c75afd30a68c265ffe9fecf"
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
    "url": "assets/js/45.f617ec83.js",
    "revision": "4fe2ae6e86e88340c2c4ca62bdad78b7"
  },
  {
    "url": "assets/js/46.8b51be2f.js",
    "revision": "31a38733c3effda74ca80b4d2b6035b6"
  },
  {
    "url": "assets/js/47.3273ad1b.js",
    "revision": "bee1bff5146e42594f8582cfe405729d"
  },
  {
    "url": "assets/js/48.7ec73d1a.js",
    "revision": "e4ef332554d8050cd321fc02b6f8d846"
  },
  {
    "url": "assets/js/49.597df4b2.js",
    "revision": "29c8bf7f358fed4da62add654ddc9603"
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
    "url": "assets/js/53.96b0aa26.js",
    "revision": "cdc5928c0c9f887b3280ecdb1aae11a1"
  },
  {
    "url": "assets/js/54.eb4797b6.js",
    "revision": "cef03100a78194ee285f947f55a4b872"
  },
  {
    "url": "assets/js/55.8f2650ff.js",
    "revision": "bd437463a806be67f42a3eeab1f43dca"
  },
  {
    "url": "assets/js/56.c8f7649d.js",
    "revision": "fbb4c352f0ad98daa449ff094e07be52"
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
    "url": "assets/js/61.47580ee3.js",
    "revision": "35ff934855232238fc497d193ac2253f"
  },
  {
    "url": "assets/js/62.403e30e3.js",
    "revision": "fed9ba0d5bcc23b82349b517cfc2312e"
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
    "url": "assets/js/66.f1315c50.js",
    "revision": "9221b3716826066a1f8951002e528907"
  },
  {
    "url": "assets/js/67.4ebf9b87.js",
    "revision": "af638274d629ed854a570e7f7e31daad"
  },
  {
    "url": "assets/js/68.26623002.js",
    "revision": "e06a4ae9fe52803787a7174bf4640044"
  },
  {
    "url": "assets/js/69.95d6ea51.js",
    "revision": "1ca9f14cfc8583275a0d7e8edd46e337"
  },
  {
    "url": "assets/js/7.ff65d71e.js",
    "revision": "83e589641a3e6c701a42d9a32413683d"
  },
  {
    "url": "assets/js/70.a0fcb7ce.js",
    "revision": "8cd1e75fbfbcb4345843527022176d6a"
  },
  {
    "url": "assets/js/71.da183720.js",
    "revision": "d0cd05e29c321dac60423c66e89ccfa0"
  },
  {
    "url": "assets/js/72.0ad4ef94.js",
    "revision": "aecebce5ddfb30b12537c54e33eeec5c"
  },
  {
    "url": "assets/js/73.2a3a7b80.js",
    "revision": "62ca8e60bcf6cbefb1ff75abee93e943"
  },
  {
    "url": "assets/js/74.613dcd0c.js",
    "revision": "3ed64c361dd444721c2c879076bea684"
  },
  {
    "url": "assets/js/75.412aae82.js",
    "revision": "3baf3ff58884ed04d1b044610c18afeb"
  },
  {
    "url": "assets/js/76.bdd99842.js",
    "revision": "93ce3e161607b8a98ce09e2fd94b3d39"
  },
  {
    "url": "assets/js/77.12c61e7c.js",
    "revision": "8fc28d6d8e560dcb85fe27068fb4cb06"
  },
  {
    "url": "assets/js/78.9119a3df.js",
    "revision": "7ca30b985c8d6450360edf8fe2bf6e6b"
  },
  {
    "url": "assets/js/79.769f4b52.js",
    "revision": "52e7231ddc3eedb7071ded988e3d7beb"
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
    "url": "assets/js/81.6c416565.js",
    "revision": "4083c2b0b607f4fd9f3f656765e83d04"
  },
  {
    "url": "assets/js/82.dfe3c570.js",
    "revision": "76e398cad6182e9f84791b19fc830a29"
  },
  {
    "url": "assets/js/83.68a29e63.js",
    "revision": "b31a160153df63e0ebc16936236e0725"
  },
  {
    "url": "assets/js/84.fc1d59b6.js",
    "revision": "e27a64fe393e0fd78955712bbd918f53"
  },
  {
    "url": "assets/js/85.a655a88c.js",
    "revision": "cd373f8c992fc641fd6e3da2dbc52f58"
  },
  {
    "url": "assets/js/86.19ae8ff9.js",
    "revision": "81528fda4dc1070885d00f1abaabdeae"
  },
  {
    "url": "assets/js/87.cd797646.js",
    "revision": "6fa94b2526a3f8ebc000294924b92815"
  },
  {
    "url": "assets/js/88.43a8a046.js",
    "revision": "07c2b83e606da929bdc041adeffe8065"
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
    "url": "assets/js/90.915894f3.js",
    "revision": "7b3e131f6f4a33a7dbf3b87b3f0ec7fa"
  },
  {
    "url": "assets/js/91.08842503.js",
    "revision": "140e99569fb8c320d48778ee56a953a8"
  },
  {
    "url": "assets/js/92.e01a3bba.js",
    "revision": "8b8e2a13cc3807747c2b566bda7210a7"
  },
  {
    "url": "assets/js/93.689c5a85.js",
    "revision": "fe30498e50ca9fb040e54351869bea8e"
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
    "url": "assets/js/app.147c1c45.js",
    "revision": "86dbb4535e0ca95de758f02f3c833c14"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "14bd36b7da7f4d6d0984df6c11cf4e2b"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "23c7d717847dae1840d6d1b83fbc3a18"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "d4d108801d2f2355c3e2af0183786194"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "c949c0db463d7af3c0332530767bb3d5"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "abd9db5ccb9bf7fe5f89a8a4414564e7"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "1f2d22da4be2a9e211d45e94fcca8ba0"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "7297c945e4ae99db88ec9ed99c101754"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "823d376649374818ada722edf4d7baff"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "7c8dd29c632538f053f2d9dec2adc71e"
  },
  {
    "url": "categories/index.html",
    "revision": "764865baeb9b5a7354194130c3969ee8"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "98b2879ad198a14bd6e532668e95c95c"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "29127a5c9d86d7dc7ac25f07ee537624"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "53dcefd3aefa04a6ca4252f4362efd94"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "ef838bb37e9122e88bb6b372a8e24d61"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "97ad3af5c00862e2e3619fbeedeb1b4d"
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
    "revision": "db5d456244debacd9f9d1bd652fdfacb"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "ea56e4a8cb5637bea59b1e27110710b7"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "fcc873912b75c81c51827ecbc858a249"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "6a4d91d38f404792b19b2e985b68532c"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "0434cf150564b0545de448700f0b296b"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "4e3d258990f9ab017df990556b37bc4b"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "945f93940ca676ab7f7302ec42dffb63"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "2562f1bbe88c5d9b7bd2a9b88b666f09"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "520d0b44fb9bae392e60cd3aec0b1242"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "09e7ae0f3ef676549e45aa150e9f90d8"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "1c5707c72c081aad654170b1239f0fe0"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "81912693f6b28f47a1598e6c9deff812"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "2236bfc9b391e09e0836253ccae2c1ed"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "6a106a093ceb86ecd125c54f15371f93"
  },
  {
    "url": "tag/git/index.html",
    "revision": "dd0dfb0c9067f22753cc55fdea20c150"
  },
  {
    "url": "tag/github/index.html",
    "revision": "cb01e491033c4f556d888bd65a2aa5bb"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "276dad75aac631444c4ce7b99b615e3c"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "4ba599648988c13a753b0c3287999819"
  },
  {
    "url": "tag/index.html",
    "revision": "c8d18ce7ae268a7855f706e91d6d060c"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "9765fbd9d0f2006bee81f3ccdb598a08"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "4bb41298a6ad2e1d560d97af14f4bfc4"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "01534b4b55fdb876b74418d160cfbff0"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "b781a87ad3a45e8a811d03e34478af6a"
  },
  {
    "url": "tag/node/index.html",
    "revision": "dee671beb76625e4298e87730989f377"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "294655f957045cbf33d63d3c9af59ec3"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "a0485b01f68d886c7652d275220c3e77"
  },
  {
    "url": "tag/python/index.html",
    "revision": "3b10efd5a5626091b8478a0a84ff2429"
  },
  {
    "url": "tag/record/index.html",
    "revision": "500a13d9079ac83718927227cfaeedd2"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "468c52d62ed1ecc095547f740ddab5ee"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "7168c155af77119e96f3c1d6362157a3"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "09224b4f196deafd4a7352dcd74ed5eb"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "ed907ea32901236265d6d0fad6889244"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "27569035b96ba1d8be4aa9fd48fa124d"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "31bb93326bebcba63cff4472c8d9a9ba"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8a2f9dbf71e352c9520af22619feb117"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "74e9ae6730c41ab63832bc83029cd524"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "cc434e9790a8c20e1407922dc57e6b87"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "79d9d4faabd8d6defbcbc9d6b60b66ff"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "4a60c36de9bda72f91c8f9ae4aa7a7b3"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "5c99882c2157d6422621c76a6a43b1c8"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "57994d19a0dcc7104977f3f0f922fc09"
  },
  {
    "url": "timeline/index.html",
    "revision": "5a926b26dee9605461d0a80d65b2f695"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "f8e41a075fcaf477c0faca06ddf24f4c"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "5c4a48be18565cd769f00bdc07269d47"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "32d04e70e1a7af5b48e451fc6ec4792d"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "975887e8b518ef82fb7f127a48355fd5"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "4c3e8bee5e150fa55b64d05275f4fc42"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "f041c3ad473419ff0a8eb87c9d9a0b4f"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "eaa223b31410518cdea9593064c4c797"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "4c5fbd10e3b83d7474436e65ece655b1"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "8f224d162390a81d0848dbbee4740c2f"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "09852517a7c72f428d7e617081d937d3"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "1757cacc393665b0a40772195de6b8f5"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "9676cf37ad6f86236b7a555ed6c56687"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "29daa42ed8cc64b47dfb381c24d18e7d"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "570a90e6627e7427c170cf8d2986f0ae"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "243817ac9f569287f9e1f0d05abc6a84"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "edf9216dd355872bee2a363e66c0952d"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "c917274f1aaec8f6efc4faa4e531374e"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "941ca8a91a6bd1e1935d1e057a12a326"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "ecd09389bd9dc22580805a3f4fdc2eba"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "3295b1483a54f804cfcb0f9c0daf32d8"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "5c9cd294fd998d8ca8c098842cb4a131"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "15d88d03889f830fa9b40813b34c95e1"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "3aa8d7886c818b61abcaade48ffa2814"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "6a8590d634e03bf3a0093cf8ae742bfd"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "3b4ef3e39d060add155f1a774d1413a2"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "4b4ae8fa24148ced89f59241c8408094"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "2dd6bf0024938b5bd7682e6a3e9086d1"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "2c57941adc41c37841252162529b5ed8"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "5d92c412ba9fae3e0ba381b1cd7db044"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "c2df2670a275beed1556e80f8f13005b"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "0ae95402aaa99d06873526eb35d8612a"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "29a61f0455909917414a87b7a9ff4e89"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "0eed7273547f232e71e38cbae27ef23c"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "ccef88c4f087f473d761d88e18f5f1b8"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "dfac03ad434051cdae030a8e41e7fb2a"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "b5363d82e537da922f560d1508c518e5"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "9cc3e6fb8577c7afee845c486c47708f"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "9cc89cae2a59321648402eab6464081f"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "3dd9828ddca41d0c3ce5d136449d5545"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "8250bfe2b278cbd78bd63164245d5fca"
  },
  {
    "url": "views/essay/2022/0222.html",
    "revision": "ffbe2b7dc875330d323f5629a3322cd4"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "86054517fc27b866060f51f648de4abf"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "e8d83c84118cc248813fdd3bfc85b13e"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "c64fafcaa522843f5ea2f9f7e651d47f"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "b821c94fb45e9036f6c26d19f4339654"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "e1921b86892d77788a9be59efee3a501"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "8775cfd0044cf6a6279ea4aaecedd173"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "d74d78567b0cda1baa542c44d92a8634"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "bc49199ab1e7615607ae6b6e8436b420"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "d894adbb08f72c8db999c05e62f4f0c8"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "834f08c2ba930b972fe524aac971a5dd"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "ccf3633aa09a6323c4ce8101379ff4dd"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "8d416d84435d4bba64656e27eb48e02e"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "fb32e30641a51a0ca0cd588bcc4a93f9"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "5d31f1305bd976306097bd1d00eb6cbd"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "a4f00e5e591f26f4b35ecb103fe28635"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "f315ace999fc6e3137fdbf42d91534ac"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "feeb8bb0caad96c05081e28085bbc3fa"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "6de69ff452995c1c36f158d730995a92"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "c3ae3c0c04ebf28405bd2aef3a743ea3"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "fc3c8de6fa3fe2ca6a389d08da6adbc0"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "c724fadf8ca9a95bce4bbdb5ddf17e61"
  },
  {
    "url": "views/knowledge/windows/git/GitRecord.html",
    "revision": "3deffe642c5691ccac0ab003dc7890e5"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "8cbd74512e5f6fb481b6080a72b159ef"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "8b64faf4f1f4280b68791ef3869b0c0a"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "cab76a4d3665aee2a716f869f1ea12fb"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "491cff3b405cbd74a5d1f2940aacc2da"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "a6760b79f2e1d262b96dc9d2aca2d016"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "ce5aeec2eeb436e34b949936f3e8502b"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "97a095c168ca6c7433e3b231adc718ae"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "057a6943ef15510495dd571ab0d6d0e8"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "fbc0c6eab82c026725ea94413e441001"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "be3197e32d97d226c72536a5ea6ed049"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "fe52cf0ac7d1e4ee1b9e17a48c0223d2"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "d6521612738e3c17acf21347b63f376a"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "7a56274e290cda08b821b5ca51fd6e02"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "07b822d1dff7ec0d2b85537c38136201"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "24d95ed3c2c70448cbe2148dfcc79e48"
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
