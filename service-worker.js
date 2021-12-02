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
    "revision": "bdd111c8b9f46389d37d96f8166a395b"
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
    "url": "assets/js/10.4348c2dd.js",
    "revision": "1dcab00f297bd4c2c43d0012a96edc9d"
  },
  {
    "url": "assets/js/11.2e140d8d.js",
    "revision": "7bf291e7264cf4f57768eaed3a5a07a5"
  },
  {
    "url": "assets/js/12.73be501d.js",
    "revision": "b75adfa267e9b7c76f3f88c0214fb1fa"
  },
  {
    "url": "assets/js/13.982ad374.js",
    "revision": "fa89ceee8e92210bb489e29c62bc20ce"
  },
  {
    "url": "assets/js/14.6876264b.js",
    "revision": "80413882394a6c0cfb6b991cbcb191fb"
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
    "url": "assets/js/18.063c2be0.js",
    "revision": "3a6724087833d4ceee4e571039624341"
  },
  {
    "url": "assets/js/19.80787e34.js",
    "revision": "0512f046c93889d6770f4ee6365b9381"
  },
  {
    "url": "assets/js/2.c389c4bd.js",
    "revision": "f91a0edbd7565bebe9109f6085f0afac"
  },
  {
    "url": "assets/js/20.fbd04435.js",
    "revision": "42d18c43fa8d5c3902d0b6b84cc4ea82"
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
    "url": "assets/js/23.20749b56.js",
    "revision": "1ba4600cc36fc859e788ecc0760a491d"
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
    "url": "assets/js/27.02476af5.js",
    "revision": "28282160c87ea21e69c9a5a4e725b5ed"
  },
  {
    "url": "assets/js/28.ec3eec24.js",
    "revision": "aa90ad62fc36d7bb2a45128dabc7ffd8"
  },
  {
    "url": "assets/js/29.391dd7b9.js",
    "revision": "a7f7175ff6591fdc9ff1ccdfe49b223d"
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
    "url": "assets/js/32.a15c2dd0.js",
    "revision": "befdbe143f814c24e3d80371adc6e8a9"
  },
  {
    "url": "assets/js/33.32109b5b.js",
    "revision": "17e3fcf6c01a1dae01f4320b8ccc8f69"
  },
  {
    "url": "assets/js/34.7b5f1632.js",
    "revision": "e9224ee0b4d4520e6072545ca2b9c280"
  },
  {
    "url": "assets/js/35.4ae0b68d.js",
    "revision": "9e6fdf0ba10eafd987fd93c20c5a0797"
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
    "url": "assets/js/38.06a7a588.js",
    "revision": "dca4ac6e2f928275a8f594e3df04624b"
  },
  {
    "url": "assets/js/39.a5fe7193.js",
    "revision": "d406fbe1685e24b537f47de9fdb51f32"
  },
  {
    "url": "assets/js/40.09cbd5bf.js",
    "revision": "a0d3c5addb38e2e2ee40b60020601cf6"
  },
  {
    "url": "assets/js/41.4bc6dd27.js",
    "revision": "7d3b6d0e69805eb28c28bb6f78b5d543"
  },
  {
    "url": "assets/js/42.3e08de94.js",
    "revision": "c1c0200e9b27d68a76138d421b15906a"
  },
  {
    "url": "assets/js/43.d80428e7.js",
    "revision": "34bbcff1d8e5113b36d0fa62d98c39ef"
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
    "url": "assets/js/49.872ee42a.js",
    "revision": "58ef0f20182002aee0e61e39812dc6ad"
  },
  {
    "url": "assets/js/5.0c4f2251.js",
    "revision": "9d95b4c340f0e49468ad09435fd03e0b"
  },
  {
    "url": "assets/js/50.87126066.js",
    "revision": "f8c56671dc0d6bea9ed7d50e2da79e06"
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
    "url": "assets/js/60.8f1e34e9.js",
    "revision": "1f7f27f094dd9a3161ec2d9fdabdbeaa"
  },
  {
    "url": "assets/js/61.339f702c.js",
    "revision": "e475ce7ade7df18f6f9eab25b4456953"
  },
  {
    "url": "assets/js/62.1a1cc01b.js",
    "revision": "2c4d0fd2418d780b15d15da53032d01e"
  },
  {
    "url": "assets/js/63.79be6817.js",
    "revision": "3429e3d1eba681b7202e049b2300e752"
  },
  {
    "url": "assets/js/64.013cec79.js",
    "revision": "269e580c0797bdb80304007787362075"
  },
  {
    "url": "assets/js/65.59e9eaa2.js",
    "revision": "1a5b0e1b71b9f3713f3d4d8aa49b701a"
  },
  {
    "url": "assets/js/66.620a9c04.js",
    "revision": "ed31dd13f0a572e526b4c3e972950de6"
  },
  {
    "url": "assets/js/67.2ce2a65c.js",
    "revision": "171e125c8d7dde54540c667dc1465724"
  },
  {
    "url": "assets/js/68.bc4bbc20.js",
    "revision": "e9557ef13a6caca5b05dea2aa00ac395"
  },
  {
    "url": "assets/js/69.385908ee.js",
    "revision": "4c631dd28543f7e08b05bb96ad1bc956"
  },
  {
    "url": "assets/js/7.ff65d71e.js",
    "revision": "83e589641a3e6c701a42d9a32413683d"
  },
  {
    "url": "assets/js/70.c4a75b35.js",
    "revision": "b5bdf2aa397b03d58ad91a205c618adf"
  },
  {
    "url": "assets/js/71.8e071969.js",
    "revision": "fc623ea85bd36080da460ff361b75102"
  },
  {
    "url": "assets/js/72.d7bddb87.js",
    "revision": "a12512f36dad800eda60e0e8e631024f"
  },
  {
    "url": "assets/js/73.6aa7f331.js",
    "revision": "fd506ae8068b91b364a9cbfc9f8e2cd0"
  },
  {
    "url": "assets/js/74.43c2764c.js",
    "revision": "c5a88068a92c97114ca1addf58ea94b2"
  },
  {
    "url": "assets/js/75.f6ef3e4c.js",
    "revision": "8a48609d971dcb60a3c8003f86ff076f"
  },
  {
    "url": "assets/js/76.56191409.js",
    "revision": "eadc67a856542f8428c5d5fe31954c25"
  },
  {
    "url": "assets/js/77.22214def.js",
    "revision": "5fd34d3a6b81b2bd4b0339eb5011e5dc"
  },
  {
    "url": "assets/js/78.afb6b0d6.js",
    "revision": "1ee50934b4ab70ee2cb9afc3ee17ecc3"
  },
  {
    "url": "assets/js/79.101b919a.js",
    "revision": "f7caa67e7a5a2799500fee43875e0584"
  },
  {
    "url": "assets/js/8.c36f8ec9.js",
    "revision": "b0d5b2ac54abd74c4e8c294585f2e144"
  },
  {
    "url": "assets/js/80.dd78a7c2.js",
    "revision": "8268adc20b3e95cfcaeec17721d8be90"
  },
  {
    "url": "assets/js/81.87ef551b.js",
    "revision": "7930615b0c937c28c73098e1b68af05c"
  },
  {
    "url": "assets/js/82.7f2769b9.js",
    "revision": "d53ed4d72bd81c5b5d63d7e1fe13901b"
  },
  {
    "url": "assets/js/83.77ca6268.js",
    "revision": "9924ff3e074f4ffeb60d0eb324bdc4ed"
  },
  {
    "url": "assets/js/84.044bbbf5.js",
    "revision": "774563afef5bae4bf46e8eda7a44a829"
  },
  {
    "url": "assets/js/85.2c21def0.js",
    "revision": "45afa6774894f71e2c928946ba052298"
  },
  {
    "url": "assets/js/86.9bde3284.js",
    "revision": "8a70cbdb7e3f0c2991f96bd3ee546fb5"
  },
  {
    "url": "assets/js/87.f98de1e1.js",
    "revision": "01ed4d3668b0171a092954494152ce30"
  },
  {
    "url": "assets/js/88.3c82da4c.js",
    "revision": "0e338681dbdc939c768001fb2e1de05a"
  },
  {
    "url": "assets/js/89.f537e4d5.js",
    "revision": "863b96661d4dba65c807c5d5fea18468"
  },
  {
    "url": "assets/js/9.71a69bb8.js",
    "revision": "1a928d7f1b09531c841332863169f334"
  },
  {
    "url": "assets/js/90.b40f1a3d.js",
    "revision": "338c8ffd20fb5c1b184827b2b1521d4e"
  },
  {
    "url": "assets/js/91.62690c2e.js",
    "revision": "716b62e1e9071a10ae17e996e2b09b56"
  },
  {
    "url": "assets/js/92.c08e904b.js",
    "revision": "2791c244e5a182ec125a8e60f4cb99c1"
  },
  {
    "url": "assets/js/93.9348b0a7.js",
    "revision": "3acbfe46fc7fff66be96360ba24a628d"
  },
  {
    "url": "assets/js/app.3819e071.js",
    "revision": "9e2eb46cea8e94569de7235994574546"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "d95689b5ba84de9d4612856ea5684a89"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "1c9e93a4c47a4524de1920f3e7d9f339"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "4f159413c2348801ddaacebbfdcf4701"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "0a70bc312a7e248f046c2e8717d2b06a"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "406afb3a8b3b9e9f4fbda6116d85ec32"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "3c1573d2f7a420391c18064d10b35541"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "da148e062979a8c8e40a3355530961a0"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "179356aa212fb22112be37cc872e4bd4"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "05aeb238eadbeafdcf617a8c8a287481"
  },
  {
    "url": "categories/index.html",
    "revision": "86303830de741079ede93b2e13f82270"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "c9e4bc8690ca4edb4715a8c9ac079235"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "9d9805711fcd0450c951f03f19580f40"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "0777602d64e2fb45d8038329f2c041be"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "d013a7dc949dc1ff66070aa61ed95a00"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "fd9a3e9ed3bf6449af7856dd962fadbe"
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
    "revision": "89c35e4a8adc1f93b4f7a001bcea598d"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "a6b26934621281b546549e9c9abe34b9"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "a1b452a09e484080461b1978abef5a33"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "fe2cf48df442567ad0e211d726aac671"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "060a5d898c552d9611cb65ca6c87394c"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "2e1840720f68e380d8594c1f77b13ff7"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "f32eee8475f2f757746a67dd9d95665b"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "f225671aa90661853a312b16f70ee4df"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "1a6a3d78bf37797f193d278dd8ca50b5"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "58f4f58f6e1895c952c525f72fee1213"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "d67d4a407c07a4b5f78fd9d4c1664e4f"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "51789ca072aa28f7176f77c840f8f8fd"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "8d485dca2e3cd34f6e0448b0895eb8c3"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "43df134658220b3f78f7e9797bac0be7"
  },
  {
    "url": "tag/github/index.html",
    "revision": "3986316997864b3fcd75094c8946b93e"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "8a5a90afcd3dd895a1e4ca2cddc1b790"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "185ec415fff8fb681445dfab6b357f9e"
  },
  {
    "url": "tag/index.html",
    "revision": "31b1ba85b383028b80ae629d33ce0312"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "67c86baab3b4c8e06a14bc2722f9c3c3"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "ae514d295031bf5a5bdf7c2e6b629f2e"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "641d7c7bb3aa1b4cf3b38c296b88662a"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "1afd464a5af7bbffe053c13fe6b24f2d"
  },
  {
    "url": "tag/node/index.html",
    "revision": "be082b70faa50dafd08145a5a76b77a5"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "76e480965f6cced79af77b5016452863"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "1d07d3d4f4236a06de0ff995e6d83041"
  },
  {
    "url": "tag/python/index.html",
    "revision": "3448198009f5a2bf7b73d12caaf0f759"
  },
  {
    "url": "tag/record/index.html",
    "revision": "814a3329bf1a3bd88d952b152456de5e"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "1a2a68dfee4b14ac67cdb6f06b37173b"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "48d4cadc69739329c1ec034354b48939"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "bfd83c1de85bafc091f6d6d142c3fdd3"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "c041bfbdff5f4cd043ac6732d8bd5f43"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "5da310173978deb0171019d681c1f8a3"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "e7966234e79c4e3f60b16a442c083905"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c3d27bfeaf8611d0215c16a15f1cefa9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "389cc7374964e911c28003325e42e655"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "eedd89687ee5d41f2a4b0424d7347f18"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "6f0345ef08efee932e189ca09eb6cd56"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "c405e8f7d51b053c51f03fc45bb6473d"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "42f4d3a789c3f0edf63b3fa760b1f0f3"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "97e5e4061e20a9f499f57292a0794116"
  },
  {
    "url": "timeline/index.html",
    "revision": "0131f4a1997bba2519bb477b0c0bb913"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "c86f4cdec882e2308aeac31d74f35729"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "8d25f67abf8ba8adc42402e76f1a5006"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "1f8aa00ed13ac538691b8986e75a4e5e"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "b21e9c7ddd3ab8751201e260c8d40553"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "b1c1046c6a34b671031f12b6a39c5481"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "1f3775d9d41b677bba78ba0b57e14fc1"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "97a328c586b0af86363668efc1df97c1"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "fd1af879be7cf16ad3bdc5a1318c9b8f"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "326d63566530eed29615d33db71b3fdd"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "56ce9821360422df6562ec10087c5a79"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "13b08bb8f59ef244a1f14151ef784a64"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "f562e739f23fed41254694f003449264"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "051279d8df9130dc78787ec8503e90ed"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "98aea21a0732cde0542b8987b16db804"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "e8d4512276803b4076bb2595353ef342"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "656eef40bc639b639318c45ee675ad98"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "033a683c08fb26efb18a77a6c48cddb4"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "edb08ed53eb317c1ae801be254b6a9c0"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "1011bd771ae5158111848abc527a4dc4"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "6188c9c7a073514402c4b7991b00320c"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "e83a02596c543e4d91238cf5c54c555b"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "36fb5399cfc57f0b224e3b050f8b573b"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "2debbf896956a120dc39ac79c7ee79a4"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "f8d0f11d02dba0a2e013742ec4e3664c"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "18d8854cf5cf6f90f914dcf9ae144ad0"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "d92c601fc11db518aaec44610e2a649c"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "cc5ba59b260b362457caa730bf692224"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "7170bb1687a14a0853e78bd2e5ce3398"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "f080ec4b2d00c69ea09dca0dbde7713f"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "b2d8e3bb7ef6591712982e14063f2681"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "c10d35572a938c8fec8c00ee8f074466"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "3a9b36c0f60c94ca4c033e3ad5855e3f"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "17ab632a4d77a55c77d29e90c8502e4f"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "76c99922a147822eebf6b68e3fd0a611"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "418314587ed58325fce211b47ce845ef"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "c6a3a2780b29fe986c6631e2f908a343"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "da62c3aa74da37ee27532611d36fde9b"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "c4299c9633165de80184faa5170f3909"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "814bdd2d54eaa03eb140c8547f249d66"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "45d5d8246518ae5acd4a1f3d87b5754d"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "99c4acf05a1213eb7647694138e0a675"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "c47228c82a4ceda6c89a0cebfef11186"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "211c75656bcfc86ea2df5b32f97f22f2"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "251671ee3780b5a54a33c6d096e86eaf"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "c60c87c65b0e5d68c09b2c53f4e9c915"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "38f14c83bd921cc74e40c7312d6ef328"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "20f874a386654474fa1dc7c19f05229f"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "3b0aa1c3399f4a5a3bad8b6e90b45a0d"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "95c19b5dbaed999552ff5ea0240ed82b"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "d6eceb193e01334006a1fe437266e839"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "2444bc080d66b43eb3e71f07b394c80b"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "8826ca1da18914928f4857fcf4b63a1b"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "d4261088202a28ee74bbae9c60fdaa8d"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "7c308d36487779ffad4874db886744f8"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "d298a9ffa940214064dfce46f1f15565"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "ea479e350bbe7c22f338dcaa1a5de9db"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "44390d6ff6fc3e46818eff827272cd86"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "dc42c8aed3628dd4cfdb878fabd93af4"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "c81e7498e57e7a99a4418bff3fed3590"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "e6a8fe327c0aa14a2e218391721718c3"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "720526b87d880037ea179cc83863d40e"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "5f828970a8ebbd0184ee9eebf1f52858"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "b74b92b05e6b9ae705790930267a73cd"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "224ef148804f6f989d447cc57456342a"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "706362c1073eac030306a3e3ffbf6faa"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "3a8e57de32cc2fbdf8b2afc3b53e68f3"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "91dd51bd894bc73f3f011e1727ed4b0a"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "274aaf6cfd958852123c25d1183e194f"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "8119ea9bd036f8978da6bdb5d5f58e49"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "091fa979b2004ebe5c836b3dcf9b5d1d"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "26bac3736bad1426392241b8c4db61a6"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "81fb6c3b567b36467c400538ace3528b"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "b68aece17464e2214ff267659a5ca619"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "49ebe8c13696d6a6d82bab5891c7058f"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "94d804c533bbb186687c01ccd5f3a1e1"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "168b3fd8552844a853daa490c0a09013"
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
