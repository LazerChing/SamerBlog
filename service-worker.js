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
    "revision": "52ccb96a0df7895037ae873dad448c98"
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
    "url": "assets/js/22.076b1e40.js",
    "revision": "1fe911eaa8319c6276adb97fd3c11747"
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
    "url": "assets/js/26.1897998d.js",
    "revision": "5310ad2fee2d5154745abfea1391a68e"
  },
  {
    "url": "assets/js/27.02476af5.js",
    "revision": "28282160c87ea21e69c9a5a4e725b5ed"
  },
  {
    "url": "assets/js/28.926d7d9f.js",
    "revision": "035b6f87ab389c415cdf33f520341a6e"
  },
  {
    "url": "assets/js/29.cce1192e.js",
    "revision": "55f082d7fb3c4ec5a101bc83a7a8127a"
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
    "url": "assets/js/36.8d9c0cb4.js",
    "revision": "bd4e6637fee6391aee7656e86c0196ec"
  },
  {
    "url": "assets/js/37.0c023a7c.js",
    "revision": "cef1273718ae34468db7df0c1faa2e76"
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
    "url": "assets/js/44.f3cda532.js",
    "revision": "5db330d1377a7fe0f2681a80f4d89d6c"
  },
  {
    "url": "assets/js/45.d302802e.js",
    "revision": "d07926d86595c2b836b662f8beab8d53"
  },
  {
    "url": "assets/js/46.afaba4ac.js",
    "revision": "c03f8fea455760c8aa609b387d1f6d8b"
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
    "url": "assets/js/54.b6e524b9.js",
    "revision": "8d95d3dcb9194744469f0b578eda6f3e"
  },
  {
    "url": "assets/js/55.9e222c82.js",
    "revision": "4d3e2bbd20b8d6adfa43ef84b9bd2cca"
  },
  {
    "url": "assets/js/56.757f7aa8.js",
    "revision": "c9edce473aa2a3f189cde685299e96df"
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
    "url": "assets/js/64.8e9a26f5.js",
    "revision": "95d5259e54f66255e4d31acde4b7f2b3"
  },
  {
    "url": "assets/js/65.426c2270.js",
    "revision": "f7fcc36935925f61064bc7715790a680"
  },
  {
    "url": "assets/js/66.dc5235c3.js",
    "revision": "7fecca8959401b9d6178d1783a29a874"
  },
  {
    "url": "assets/js/67.4910aa77.js",
    "revision": "e777682b1c74623c28b0579c0e435b6c"
  },
  {
    "url": "assets/js/68.acbe556c.js",
    "revision": "eded36bfdf1c194e956d1799a29f7271"
  },
  {
    "url": "assets/js/69.2f6d9abe.js",
    "revision": "add485819315ec7602afd5b16dec03d8"
  },
  {
    "url": "assets/js/7.ff65d71e.js",
    "revision": "83e589641a3e6c701a42d9a32413683d"
  },
  {
    "url": "assets/js/70.ed59820c.js",
    "revision": "de961f2d45f9d23f8185f90bfb8c5348"
  },
  {
    "url": "assets/js/71.865d0929.js",
    "revision": "4b8b20a0b882ee6d7ee1b43362478b3d"
  },
  {
    "url": "assets/js/72.fb45158f.js",
    "revision": "04a10131970d3df8cfe802627b47e345"
  },
  {
    "url": "assets/js/73.9e6cf3ad.js",
    "revision": "44f4540050da0c5d14fba357bf74a130"
  },
  {
    "url": "assets/js/74.ebdcdf97.js",
    "revision": "868a0210f11bed1f64ff4325ddf1e05d"
  },
  {
    "url": "assets/js/75.7461aa8e.js",
    "revision": "96da82bec6704041f40721f50f28806d"
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
    "url": "assets/js/8.bbba3991.js",
    "revision": "188ab18893d22a86f5aa9bbeb7cfe6da"
  },
  {
    "url": "assets/js/80.dd78a7c2.js",
    "revision": "8268adc20b3e95cfcaeec17721d8be90"
  },
  {
    "url": "assets/js/81.2f18154a.js",
    "revision": "72297869b49685c70fccaed655822b4e"
  },
  {
    "url": "assets/js/82.af1ac5d5.js",
    "revision": "d4749a2494ed7856d7e53187973b40f7"
  },
  {
    "url": "assets/js/83.d9b44401.js",
    "revision": "f66cd49507661736bfa771c9a3d39fe6"
  },
  {
    "url": "assets/js/84.b4781912.js",
    "revision": "491c7148d448fe11b63486e0e5f40342"
  },
  {
    "url": "assets/js/85.1b5f383e.js",
    "revision": "ea0ff95d91dff04e793e2f2c6f8d5e44"
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
    "url": "assets/js/89.ac43b77d.js",
    "revision": "a2101413913e309e8dfff9b4b8041f7e"
  },
  {
    "url": "assets/js/9.71a69bb8.js",
    "revision": "1a928d7f1b09531c841332863169f334"
  },
  {
    "url": "assets/js/90.08bdfce8.js",
    "revision": "60ec5dcd1a8817e4321f8164bbb3c149"
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
    "url": "assets/js/app.c8c36624.js",
    "revision": "cf488221a1c7a6718b55b871641ec86a"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "b8cc4f191734b8f5764547d2ade3f932"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "448baf4e5ee7370e67d4ebefb90f9bcb"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "33fa1fcd8b15abc7d5dcfc50016f2426"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "8d20011c000c0e81eb437a22c1039f9a"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "0b76042779e32f0d241ae6b5ea977d93"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "904212d8845ba43ab764a8a67aa4eb6b"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "77485e0810be49f68aa8cee8070a6cd3"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "01431288c243d1d3f67ce19bfebc65c6"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "14233dc42907edf26462c1e4f5bc9b0d"
  },
  {
    "url": "categories/index.html",
    "revision": "69f5de1e6fcaeae8166eefac7677202d"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "3f82b8216f57a1aeffef0d53c97b260a"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "48cfe3f6df681bcb77c1e67a19ef832d"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "888fe9f28b55a72c27f4878b9fa5c1ef"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "376e471aa455eb9cc0da248777b79160"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "27384f47585924cf329aa0cc89cd97ad"
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
    "revision": "4b510797da42662366749cf5f979d459"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "d3e9143667adf0e864b0a2c3e67532a2"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "d69172e82930d6426352390fa25c3928"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "582eb74edb3429313c2d2241afe5392b"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "b1127e8455a4d75dfe4d9adcdccdd647"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "5861e7e5371168eca2ffef61680a753f"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "68087c83dbfaf825e99cc9f5249511a9"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "c319de16340d7c4e11f44beb93482e00"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "43bebfea118fdd1e4463613e2ca459f7"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "21b64e7d94d448c513eb27206f1d6928"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "0b6a1b2a988afd123e835d83c6cbbea8"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "5afb0bca5e082cf77be36d836ad95743"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "8136f75a0f2221704640ffdd73133c6e"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "773791c4ad48618f59dee2ecdd328928"
  },
  {
    "url": "tag/github/index.html",
    "revision": "b5ca40c2e28168b04435f3d9eb7a3866"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "f98abdb8192395dd1cb0dc67cb87549e"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "5f07a7f5aee0a02a4c1e0b97de8aa1eb"
  },
  {
    "url": "tag/index.html",
    "revision": "38dff236810c76fb201a56e60ec49565"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "1945a14dfb9c69cb24d545b6195b6bc3"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "b5dc3d0765dd1c2e584493c119c16af3"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "fa24ae224d79f71d0fab1e5d37d4d4a2"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "713745754c6e84ee31dadecc15dcbfff"
  },
  {
    "url": "tag/node/index.html",
    "revision": "2152bd089abe6d28945979a82fadffe1"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "10d81becd6a9cbe9078e0dad1e744c2b"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "26cb687cf36f4247d4c061e5e7cd5a86"
  },
  {
    "url": "tag/python/index.html",
    "revision": "7536f556d8e06684d1fbc8fa9cf2f05c"
  },
  {
    "url": "tag/record/index.html",
    "revision": "9f672868f6e16d22baf3a391bec3005c"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "44424f8f1b4b33c65d9f5c3fbef28223"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "e00e32a7b3e934cd8da8018716592bcf"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "a26999fe2999591766ec8cc0241b0d81"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "84df9c388055a98ea088624e59970be2"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "897c84dc1e71feb8cb54dd99f3051de1"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "09aa8d03e918768fd24f12389c942741"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e8950d73bd4d048871c4593970ccc9f6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4a8d76f354824780c5f7c4d68fb9d377"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "ed9c3ab999a53f6d2fb4a5f7244df814"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "8baa10a78d5760900055bf13f897dcaf"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "ca0dfcc17b5317e67fba0b01ff875d9e"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "bca316d87645b88a823963b5d9d10896"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "4981f70acf09f1867bab21bf256c9640"
  },
  {
    "url": "timeline/index.html",
    "revision": "dd1d26c4e54f171b7a77808acb7b09f6"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "4cc8ea0ceb91c184bbc1020bd395b235"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "91d9282af99e45525e7a66df91713b03"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "4c2ab2a8075da0a62a5ab73ceacfc082"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "b92a716f5ec65932d4e289df9f488ac0"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "a8ebf95311eeea20765f6df9916dce16"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "998ea85598e7f9d6ac15e233a38ed88c"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "a61278b76ad87254c97e5c8a4f2d4171"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "f4e9819e88bdc2675d23ce08472c0598"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "accb2b2d5fe50224f7a47cd6da76d94f"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "67928230d122249a2fa608b7c8379317"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "6743431f44be8484f920632f141bb075"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "2fae8e9b5986e7ce9df98bebc6260f69"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "8ed589a08e3d289edad71f87abf55a23"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "0780bc9ec589e9b96a9287330c92496c"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "28d4c48262eb7f1a6e1b7b3dff8577a4"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "335534323440debf8bb2c719483a0443"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "e297312885e666f60fa7bd942c455740"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "27802c421e5c291de34064d59e1c7788"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "3a7450e84e91c07a13da02854bbfb313"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "195fded27995938b77266d2425f0f361"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "d26df3341d5fcc8d09c95135289c9d42"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "e6c33c578bb2b2009c5751d4a382aef7"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "f605859c878433dbd28739290bf7e396"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "85a2660170053d15c62c702a947ca9b8"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "5814bbafbf99d856ddcc2fbb758f7dd1"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "b71a70ac69dc762a3ad82227489a85f2"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "2f6f582e0d053a9254294192af63aa87"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "5e4cd06b673c8dc05a3647da6807ece2"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "59d957a9b59d9707f4334d2b387591bb"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "c291846d37b49a0aa32a2a580291962e"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "0d4a0273b3d69286f3133cffc8534f3d"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "626d19094922e502d6b51798d838d547"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "cf975e8538d6a55060279e5cf8c2e72f"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "de81b6c335125de074e640e0447ee6b0"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "72f83a743808c49c55352a04fe042116"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "4a8326fa90e2fa585c3d3167b2228f9c"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "f9fb6e8a69952d25e8ca22a46e735ee0"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "accb2820140aea7e5b5b2db53642fa03"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "3df8f4ff4c8e90b9b9f15e0d02367fdc"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "627ee5800fa2ffcf97569e628b1ff496"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "75c40d1efa37451b57a5a6776c27e237"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "1d7304f18065b9772568c5a038f030a8"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "e979bd0678c19a3eaf02afe8a3660ef7"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "02c1d7a352862d2c3d3661015a9c06f1"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "f78a404f9f241c11b29397e20518aa8a"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "95ac1bc29c3a7dc86c76f473b5682b31"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "3034118dba02b8970114a63fc32346cb"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "e8eaf37be83e10fe3426626ee8f0bddb"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "466b0f56b8c10128e79f5177da6ee50d"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "8bd80bcb8398527a9f9b63cc272a133b"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "f39ec35fb48fea4f779da8c90ee0bd4c"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "a9b2354428a0216c054e402c8ddb5a3a"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "15b4797c558b255e4ad7f3c8a532d7f8"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "881812f053a92caf4475e250aaf7420a"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "1dd76f170adbefcdbbe9d0c07fed34bf"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "338e3cf399dc300b856df3ca102b9ed9"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "fbe19b648a72cdb6a7d1eddfe8a8cdfe"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "891819af12b9679cd9264bdf0cd0a098"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "6e68cd42c7a4b9b060424e7667214c33"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "2b62fa76d1ee6b3b0957b54ce9a1bb31"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "8c4e04086112a5aa4931472c9f08e9e7"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "93893aa7b877f87d2e4d94e50a24a0ee"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "dd8a243f9720bccec761f9de8b5a3ef8"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "62937b3fa13f57ff8f45ab6a38284663"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "d90cec74e895de4482c320cacf8384ee"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "b4d20a3d16d2d6e3f55116d1b6b18745"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "8f49b5fd4aa9f9ba5ba0553f6808df90"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "ed6d53547d044daa1f558b9dc6de9c0e"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "0aba8bbde3250c464c7f268a8ab916a6"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "fb0ea4491e8dd332fadf68f0820f568b"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "0e7c92f1e19f49cd7a29c6ffa731e51c"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "9f3398d33f1ffd04bc9f1d1fe9d9e4fa"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "14b11367e8de3ca00f6a30d32184a604"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "7821326a3894adf6f11402cf85b6a70d"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "c56bad1099b2c2511cfe5c2fa5919a56"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "0e99f630afda2cd2fb8017147179271c"
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
