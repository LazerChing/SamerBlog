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
    "revision": "f62168f7db19c2810482235e0543c0e3"
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
    "url": "assets/js/23.662b5bde.js",
    "revision": "86ac04c79ffc68dc8d2b7142f57c0301"
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
    "url": "assets/js/28.926d7d9f.js",
    "revision": "035b6f87ab389c415cdf33f520341a6e"
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
    "url": "assets/js/42.18061199.js",
    "revision": "81c6468454341e1bd6bef89df6563d25"
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
    "url": "assets/js/46.eb57b2c8.js",
    "revision": "ad9fd1626fdd77f629fbdbbfd087ec1a"
  },
  {
    "url": "assets/js/47.2316e562.js",
    "revision": "782e67541a06f6b2302d66b33bbccbce"
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
    "url": "assets/js/63.db7200ae.js",
    "revision": "052ce8554e191c428966fd25195d3219"
  },
  {
    "url": "assets/js/64.bee117ed.js",
    "revision": "07c86a7999082dce849f3143967c4700"
  },
  {
    "url": "assets/js/65.cbd30e71.js",
    "revision": "2735560ac80f1963d5e5f177be008d75"
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
    "url": "assets/js/69.0620f5c0.js",
    "revision": "c59fe1420700b4dd1f8282304b4c7046"
  },
  {
    "url": "assets/js/7.ff65d71e.js",
    "revision": "83e589641a3e6c701a42d9a32413683d"
  },
  {
    "url": "assets/js/70.9ec2223c.js",
    "revision": "c5f4bc514327ba3c2187b033fb2e78b1"
  },
  {
    "url": "assets/js/71.005c1d14.js",
    "revision": "ea4d4330aed4a43499efbe88a6ab685d"
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
    "url": "assets/js/76.a62a3fa5.js",
    "revision": "801ee14f83d63e339bf62da2af28a104"
  },
  {
    "url": "assets/js/77.10cfffd1.js",
    "revision": "e33b35572f36dccaff28e7dd451ccc60"
  },
  {
    "url": "assets/js/78.1e5412cf.js",
    "revision": "0ed152948885b4a794829d423b0adb7d"
  },
  {
    "url": "assets/js/79.769f4b52.js",
    "revision": "52e7231ddc3eedb7071ded988e3d7beb"
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
    "url": "assets/js/81.222b47d0.js",
    "revision": "082d67d0b878d5be76d80340e3efb4bd"
  },
  {
    "url": "assets/js/82.f003c802.js",
    "revision": "6af5be50c88cb5dc40365fd0565a752f"
  },
  {
    "url": "assets/js/83.dcbc7905.js",
    "revision": "7d31a91e43d8a0febe7f98cfa120339e"
  },
  {
    "url": "assets/js/84.b0f98d79.js",
    "revision": "755e348372ff9748f715f56e3f39c317"
  },
  {
    "url": "assets/js/85.4510b867.js",
    "revision": "0a880ba5a54b8ff3665ab875e81c125e"
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
    "url": "assets/js/88.43a8a046.js",
    "revision": "07c2b83e606da929bdc041adeffe8065"
  },
  {
    "url": "assets/js/89.fe7eb7bd.js",
    "revision": "d4569e042607065dcfc60de6663bdeb6"
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
    "url": "assets/js/app.46b6e5d0.js",
    "revision": "cea4f4523f6c4b3519223bac74caf25e"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "eb828c4cc61fcc4e9e87b6a80039a579"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "cf5d8f795f4613bedd95339807735d5f"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "8422d2cbf9a1364a7f73f9267c1a120a"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "0eb23552b1ec1f84ce1b6705c75d8873"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "5d87c920cc904908236db56f44c90491"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "5200dea9b68319abb516f71862107413"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "45eec1c8c573f48fb8909f8ade2d6dec"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "0d91de634676e20b9ddb24707a7006f9"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "6fcee385219406f3a4d1f29239610da2"
  },
  {
    "url": "categories/index.html",
    "revision": "d986114e3c0a02f420a6bad3faf2fae2"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "3eccfd2bf01e5d7a51fadda7306a05f5"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "0490adca4b57f784b358eef9eeaa824f"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "08df07c4379d4d3d3a7410c1b4dfba79"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "90280219a5d105da9cd0f08d7d943234"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "2680fbc3abf37190f511668ed5e28f4a"
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
    "revision": "2dee5399bc7606a13c027eb4198ae6e9"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "6e68c38e5d6e7f8b706bf1c440ced34b"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "ac64cc41e1a4098310e9e72602a5d77c"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "269c0a5c03b3528f1cb3af22cda6e1b6"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "63fa537ff1fcbdb4dd2ee384cbcc3139"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "3d49ec645719e0bc2aace87e741ff90a"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "274f837d432dc1f409a5e50ba8fc41cc"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "310d39e497130123a7a3b17e823f8389"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "22cd8ccbd8fd6914ec0e4114c2bc8f8e"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "7fe31ccd1a8fd10d66f3a6ae15664859"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "190aab2181558e007b3841e45b237b64"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "0f662dac61a570a0f00881cd8ed99fd1"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "70b954f20444de0c5648829fdf138cf8"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "328249fc2105526a292d07082ca2c919"
  },
  {
    "url": "tag/git/index.html",
    "revision": "83b79e59656f756c7b1552a44676aadb"
  },
  {
    "url": "tag/github/index.html",
    "revision": "4a78269e477136a70f6fc777134c2315"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "bbd3b588d66e16b5cf5591e770a7fb4c"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "a990cec6190eaeb79ca3c4623e2536a0"
  },
  {
    "url": "tag/index.html",
    "revision": "1ffe6e6d33fe0b021168308c8528ef03"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "1c0ba24d257dc638e081fffa36e87bd6"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "27e32c8e31761aa4f2a6c264441c3860"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "8d270b1daf7b6f1680f7ebb42bcb190f"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "69c4af4b5a6ded3d1eabb6d96c274041"
  },
  {
    "url": "tag/node/index.html",
    "revision": "9e8e516be8aa189e4fefcbb7bb5c33a1"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "b61b297d317149d3a947e875b09c922a"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "86e429b538c534e314e700cd0f8fee13"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ee27dd23765aa3f885c050e0e70149bd"
  },
  {
    "url": "tag/record/index.html",
    "revision": "2f8a7b954b5ffe31d77a90be04f9be12"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "b097701b3f7180eb75a06417c799c078"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "5346316012a4512d5d8e1c11ee6b189c"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "805b71c5ed9c4099294f9e597b78ab7a"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "704145d56a0fef2ca4704ad38085199a"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "bb8d9a7c118c6197bc368b068b15da17"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "04fe64ae66cb73b6d805a3b444bb9948"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "53cbdaf8d9d84551309f0a6b9b2d1517"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0f19f29003b4155d700458389a3d3c54"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "2bd4e1310826414f255e41a1b092d152"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "8dd08ce199af2aa573daf880fa351598"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "ffcf6cdd0748d5ca0d7d5e6841a71150"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "2534ff8b133322b9e2fd5596cf318e28"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "f787b51d514b468bad89192f9629a3d6"
  },
  {
    "url": "timeline/index.html",
    "revision": "fc6b930b18d57f3507d24edabd5c039b"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "8f74383236a757f400592a126344dcaf"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "a90fa68cd8adb959f90715b4781c9779"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "5a6cbd7a7d6f20b5a50c117483982d88"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "137c02499e5015947754cb9ffa23ea45"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "e0b2b6228bcde8b142c7919f2eaee6a6"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "0777be86afb9023c12408e546287d9a7"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "8d391212ca6817e9ef6379c38dbc21e7"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "ec765786cb20d0de4df8311610b507c4"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "aecc90e07f976975091841e45ca20aa8"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "c04ed600f692bf96925ee39fc51423d2"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "098ecea00f78b208f9d13fdd477c6cb8"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "35eab8ed3bd9a8f479abc30f4b9ee91a"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "08ac77d9d1a6f165e968581f30195dac"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "027b8d64d81e837dffb1cfa40344bdcc"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "c2d05049d469c48724d0d3ece3da6c09"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "9f92cf11503d4ac77d4d68097960a490"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "51070838640c95e7fef32263ecd9e5f1"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "d1123a4e130e018d15c112395daaf1fd"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "5016b9c7023f6f573a63971bb5f06c9e"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "a891bc187b8d9628f01ecc99923489cc"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "3bf24ccdd761fa3bd661a37c4a1066e0"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "aaba3766c3074abcbaf75c25853427e9"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "f895152f7dd5521f33213278c0cabfac"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "53b116b31af8c422dbd2e0cab411a27b"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "56d656e5c99c6899ad4fae60822b4f57"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "32d4b1a81b329f2740cb5940c42fb221"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "05b46bef9561d5126818c90b1451edd2"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "51d4a435095e43fb63f269b1158bbdbd"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "da1a7bcb462c1910f9bbcd0db0a8e774"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "7d121b8b73ff5ab52794dabf2019438a"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "1e5d5dc76f09cb18575dfb17d34405be"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "19596e4c706c32eeec7cd5cc5a015497"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "70db8e8a2fe023f20469b22dae08a89a"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "3a136f48be37af04ec89e6e16d4bea86"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "ca79550ba8e705bfa5328a8d7bb3ce0c"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "87a9bdd9a9af80640f9bab05f9a682c0"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "6005df2180eeeeab989c0fb501e2a0f0"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "feb1415f873a896da05b470a7b78c986"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "a7051b8f2ee14883c77f666dfc1ddc10"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "9f1c8a7957d01e4bdb86026468dd140d"
  },
  {
    "url": "views/essay/2022/0222.html",
    "revision": "7eb73010c2428d37f077d4663cd09265"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "a7519baa62b1b938c2193ef69dc5f42f"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "a39e5e18e8b0eb5c43bb8ba0ae36f803"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "51aac0186d43544a0fc742b1136a2474"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "34a2e42f123d3b3006f41c1930b22968"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "f45643173f95d18942920150019e95da"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "977cd98e080f668d01d5b6e640e314d4"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "00ca1a100c5e3edf7416886f87350962"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "3c7184b047da1a9a5208f8f3e5ca5c24"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "ed45232d7d4d8845af4659a213e24ef6"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "5b2706338497522dc9c499abd4788a61"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "c5dec13ca01b67e449295d182f8fc2c8"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "768d2aa1f2c0fe97a800664584f3aaac"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "c017e7943f7344ebd631b630da328aaf"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "ec9e0aa7d3f5bc9bccce520db75c5b21"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "b707fb075b867bc9c41ddb07fce7a286"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "b3079fe6ee078855fc748c22d565b103"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "08673ad2db9ad63bf4a37a354acc9f00"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "46e9e6001d3b45d94206727663582e71"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "8d1f7b2ae4049f273c2f522661559d25"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "ba124d11be04fb6fd6a5f9ba3d4cb8cf"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "dca5df6f326a58728df9d2fa83c005be"
  },
  {
    "url": "views/knowledge/windows/git/GitRecord.html",
    "revision": "d9ababae81a19b9afab9033154e5fbe2"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "976263d5d1448c9ae9f7b0d3a706de82"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "37be00193ce4f1033028c757f86ea320"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "e0b2b219cf546dbd5a9621819aa97969"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "689b7537a5103d7d273d39ce2d73c11a"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "b76a7e1cf39ed7504947e1c6e996a20e"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "4f70928113ff8779b719b28d6e8c8a53"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "dda933356f644f84c68158bf05fc3349"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "4e07c1008b56fff08eba1dfe71c7eb38"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "524dfd36655f5836d994211d88711e3e"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "20cba64f6d62b5cb7e77b94cda95c1f7"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "59830d4301f49fe2d4e4e6a80f01c4a0"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "eb903dc7fb8e5a1c7d4a6c6f52ccea2b"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "f6da32f462f138164cba7ef881db28b6"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "5ca994ebc529763b6b08af82df768114"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "6427dbd31fa991edf6c677f9e98830d1"
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
