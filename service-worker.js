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
    "revision": "ebe39e4f2a6a13ebf2fa0ac5d66d897f"
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
    "url": "assets/js/10.8e85f0f4.js",
    "revision": "03fbffd411bd7cba134eb9012e880104"
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
    "url": "assets/js/18.2f643988.js",
    "revision": "caf3427c164c8e0b60c14c34f6b86837"
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
    "url": "assets/js/20.fbd04435.js",
    "revision": "42d18c43fa8d5c3902d0b6b84cc4ea82"
  },
  {
    "url": "assets/js/21.8028d412.js",
    "revision": "160475276f7789545ee068cd80374f4e"
  },
  {
    "url": "assets/js/22.a5b9d05b.js",
    "revision": "3b99d91ced073935d71f29a1069b9dcd"
  },
  {
    "url": "assets/js/23.45f79293.js",
    "revision": "80dde24642cd72606a17395e1cff5867"
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
    "url": "assets/js/27.b268bedb.js",
    "revision": "cd581dbd519dd8bb5e6162e104376579"
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
    "url": "assets/js/31.649ce96c.js",
    "revision": "fb378eeac9de12a9051cbf2ea7381560"
  },
  {
    "url": "assets/js/32.dfb4168a.js",
    "revision": "2e6d1f67b89db3ed3f6df8967975a6f8"
  },
  {
    "url": "assets/js/33.23416f00.js",
    "revision": "41c64a79ce41dd5a032e3c585d179a9d"
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
    "url": "assets/js/53.95881b4d.js",
    "revision": "8c4cf98ad2591dd35c0dbf1f22698d56"
  },
  {
    "url": "assets/js/54.9a04c84e.js",
    "revision": "a8e84492d817181caedee9e52160f1db"
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
    "url": "assets/js/62.8e6b8742.js",
    "revision": "c9f8ef576d071576365697759712a351"
  },
  {
    "url": "assets/js/63.a4ec2567.js",
    "revision": "db5d8664a97aaa2c3fdd431269e843b7"
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
    "url": "assets/js/73.76d7bfb8.js",
    "revision": "41319366764e396b3dcb8e5482eacc6f"
  },
  {
    "url": "assets/js/74.745bc523.js",
    "revision": "b97b00ec6495dadeb4e4cb0d66a572a5"
  },
  {
    "url": "assets/js/75.ffb4df53.js",
    "revision": "75d7622fc59d9326b1bdafac48a9231f"
  },
  {
    "url": "assets/js/76.32e266c5.js",
    "revision": "ffa12e15b2ce89afa3869c697bf0ed13"
  },
  {
    "url": "assets/js/77.22214def.js",
    "revision": "5fd34d3a6b81b2bd4b0339eb5011e5dc"
  },
  {
    "url": "assets/js/78.51406226.js",
    "revision": "d71f9396a9aba0192f0c906fb70ca729"
  },
  {
    "url": "assets/js/79.06e8e51c.js",
    "revision": "d6a661922abcd48304bd8d34c6ed3714"
  },
  {
    "url": "assets/js/8.c36f8ec9.js",
    "revision": "b0d5b2ac54abd74c4e8c294585f2e144"
  },
  {
    "url": "assets/js/80.9b5b6025.js",
    "revision": "8bdd04273a25201911e471d53e6a4a4a"
  },
  {
    "url": "assets/js/81.345ba4f3.js",
    "revision": "8c38a08d5a4a94545c22d27aafe3b198"
  },
  {
    "url": "assets/js/82.7f2769b9.js",
    "revision": "d53ed4d72bd81c5b5d63d7e1fe13901b"
  },
  {
    "url": "assets/js/83.f2e52209.js",
    "revision": "2d36275cb469ea66cb1aa181b0e4cfed"
  },
  {
    "url": "assets/js/84.56624654.js",
    "revision": "ed6e35e847f07086c28099664e99b8ff"
  },
  {
    "url": "assets/js/85.019cf932.js",
    "revision": "2b0705ccaa493abf5268b04c566a346e"
  },
  {
    "url": "assets/js/86.656b143c.js",
    "revision": "df220347ee5ae6da1fe11ccdf5aa4245"
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
    "url": "assets/js/app.4f0e53c4.js",
    "revision": "e1a4215296d89d3a94834a5f89cf38f3"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "500c14ca0af82f6bb22934ac7aa194ec"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "985b87aec286316e3cc3f5c4ee34886c"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "dd03632362320bf5090ddbd4b738cf97"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "222dc878195cda69b5d0c1697ebdf2f5"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "2fc46bc69a48e0e9e8c313e695926236"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "b0c6c6caed1ce79ba794e937b9c76d84"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "0d8c7784f1766eb3db1393aebdde5712"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "8b82ee07dd8c1a3a5a662a644186d788"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "ff89302ce2e8dfbc0a51a17e8af29dcb"
  },
  {
    "url": "categories/index.html",
    "revision": "f4aec3529ba5f74398ecbf6f46545aed"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "7e9379999c02eb1e008e01fd3f57ec1a"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "3adb322fa37bd664dc3129f9d14af139"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "e613c292fc01197b841609ca86c4aa59"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "5dd848f3f566c9232e23919f452213d8"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "ccf5c719480eb730a64e01817d976d59"
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
    "revision": "7a9d082a47d48d769a43fb11f6ec3d07"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "674b0a844c04acb7a1817534235f21d6"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "5afabd321f774ad6633a0000c8f7fb3d"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "1264344cf1c3edcbc0f7f13df50a7875"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "727ab82bc27678098ee1d79c2d06edfa"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "6bd81083ad9859b3c7c70035161e14e7"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "439e6be8f35947ee623417f5e982d858"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "9e4a7ec0bda5413d23e0f166f0469885"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "18b98da7782ec328482547b0ee8fac13"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "2f8d277c75d6b8969c61227c80b7c5e4"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "e461f6863661470298f6719dc6fb3d67"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "73c3be512a5b6f2f6aeaeac4d10fe921"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "b571a58bb5e76f1ea0ba7d6983ce36d8"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "b1a4d3beaea68330f54272d7c3ee70a0"
  },
  {
    "url": "tag/github/index.html",
    "revision": "393e29f13088affaae137050ca7d969c"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "371613908f66b1d25e07008d06ff766b"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "c0d93d2cc52608a865fc8bbec9cb2f1d"
  },
  {
    "url": "tag/index.html",
    "revision": "002c765e223b66a12758d81763cb0271"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "24e46b43ac7da7c466ff7667fcd4fd26"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "3391177ed937af0e17efb129149650a2"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "636b40cd40d474168e3868f343da9848"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "2609c4d63eb76bfecfa93c5f06307f3f"
  },
  {
    "url": "tag/node/index.html",
    "revision": "5d43a33e89cbe1b428b681c888d265f6"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "d52d58044faf17a1d5a87510de4f21bd"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "dcb40fbb4f1645268bbb566d9f01d5d5"
  },
  {
    "url": "tag/python/index.html",
    "revision": "2b90995c4b7697af88612ad1079c42f0"
  },
  {
    "url": "tag/record/index.html",
    "revision": "b179ebe113671b94581e6d56d16e9f23"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "9e25c1e1a7faf8e2e0a4472c91c2a752"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "713b4c22c2be99761030ab64c1649133"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "af8c07f717d9795ea1e88723c508e87b"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "d469c2b026dcc44c1d068e8e37fb0abb"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "aade254dca819fb614727cf8c7d3ee84"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "e612546bdc53b495aba121900a0f9810"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1338e4e37a13ba4aa5635cbdda18936f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "34c553cd09ea8186217c63194287e549"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "59276c41cef79ede3ec65087d9f966b2"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "3e3e71cde72d29f285aa227d8eea38aa"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "bcc2a9ca878dedbe98730b5e8a9e612b"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "35f33f1cae6883c1e2ba8a5b4bed628f"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "38afa7947660ae2180f8d377e13aea89"
  },
  {
    "url": "timeline/index.html",
    "revision": "ecb4f88e47aea263e1e3ecd6034fb630"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "d9e3ef35f5b299cd5e2d81d64f364645"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "93c88716b74886b1306afa9e64047534"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "609551e5a9b813e26036713ff49325df"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "092c33b433f57e9078cc82ba89c277ce"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "aae097557b1a06c18d3aa8798eaa3628"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "c3842448fe8f3cf7b6970396273b06e2"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "6010b86888f82fdba578cb03055eccea"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "dc39bfe5d2829e5d8f8e1e8b230c6c53"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "97ff1e8ada7c8cd868c57490ce4de12f"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "1dbff7d440d940b2e169b98100dd698c"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "0dab1b27dd0c31c38b8d70ff6b86512b"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "67ac635821c808dab18681cf07b13083"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "e607cf1ca02d32c37dd4656d886d218a"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "80e5971a1fefb91bb3f8ccd5933db715"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "456056b7606590895d82db14ede23b2f"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "b39977b6f7f8caeefe95db21a6caccc3"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "bb8412f48047c3a1d2484403d1bfddd8"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "4b29203708dcccb62cf534ae98c237e6"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "f7ccb66c36dbd146b5e33b6b989190ee"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "38d19860387b3092257e75ee40b34374"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "5e29cc89a7cee8ba1fe7b7bdeebfa200"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "d2fc9436938722ed3ff33802f3671a98"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "2ec8ba521b8f39987c97c966f6db3ed2"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "38900aedefd7908cfe0b9cbefe4bb5c5"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "818fb3cfaa9c4185d0f96865bd9fff57"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "d2cb909475c1116faf5bc6dfff5348bf"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "4073e36cbfcfeaf867eaf1925721c643"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "e25d5d5e4a9832190751c212b7006304"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "ceda9cc9a8ec0747d9566f1ebaecd309"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "ab08c8f3331df81a128b398fb72dc1a6"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "6e5e433a686e535c922f0394283dde94"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "20b1c240578cb42adf4caf540ec96307"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "16f8930aef22c173a4345a713380514e"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "a1cf05a24cfb836f0c960fd913264aa5"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "8737297b38c9ca5f65927eb6f116bd2d"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "5a58f8326b3dd0e49d19f8f24d25bb0e"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "5b592a4560ab2d30ce789a20dc5f3ff3"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "453b70dab4852a65bd1e48c1ae7e3ea8"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "247ba6fb24e6d8386a515305684501e6"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "c5d2958a59a27db4a787247c25a2825c"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "7529af28e774e63cdcd117b6ae2ac9ea"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "2b741824b3f8ee1c8c1d6c0c33737d14"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "dc05875a25f7973c1a56d03b03b48570"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "5e94828d2dd4eeae0bf325e23fc7c1de"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "eee81c7be96ea45f312d52d802886f51"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "e14cf4091d4a8b5dfd02d22335e98bd3"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "a6038a00dd8fac6cf974e9b38c7ce038"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "e9efc562dd341b7e222d3a0a5d87dd04"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "bbe542d09b5f63cf1f012f4b92aca700"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "197067ade5a3f2d5e40ff882ebd28472"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "e0a4f5609da839d84f4bb9ae2c54b9b2"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "4f85cbe1e39909e3666c349f4739ea88"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "0e452a79da628de88c0c317004219a7e"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "b7b296cde02ccc81f0a88ed9134566d6"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "ac14847bcb871d1e08582a7b2745fc9f"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "0f5600e47207e89fb7b635e7c75f3ea0"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "0c2319644e3e2c8abb306ea57d02d90b"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "a917e8951b16b8a861712f68c6c233c0"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "976b5ee3f637f2f75b5650516d83a32e"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "f53713789e6a9cce02ed7bf0df32308a"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "8e2ffadb3504137c77f070d880b1f19d"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "ee2296c1c1808871d7764da64d4a6770"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "a2ad5dc81e43b7da338614ae7e732b9e"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "12f387d75897196fb0a09e01391152ad"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "29e03d930f11f124771f55874411ef63"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "dd1352ee72d5caf9d98c20f13c6710a7"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "3a228c853716b31cf5f2ca137e8b4eda"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "a627d89a307ab4dc3bd9c289f7841d49"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "8412ba9f9cf71d6e21ef260b20ba7a96"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "3f4761b6f83ce534faa64d066990a679"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "bf7212269454b6cdde17a1cb4db57e7c"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "99e4d27071d8fe874faa11b9bd854518"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "121703818a8df4c694006be0b5f59d29"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "b11f72927797b48ca42be81ccdf79eba"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "1387ff77c14c399ebfeadf21cefc05e4"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "dc1602e601e5c39392eecf593029eefa"
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
