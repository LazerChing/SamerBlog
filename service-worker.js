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
    "revision": "4e74ebfae10e528d8978c3a0c2a40fd6"
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
    "url": "assets/js/10.12016baa.js",
    "revision": "2e61763b3b37ca72300b8c8891073791"
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
    "url": "assets/js/19.80787e34.js",
    "revision": "0512f046c93889d6770f4ee6365b9381"
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
    "url": "assets/js/21.8028d412.js",
    "revision": "160475276f7789545ee068cd80374f4e"
  },
  {
    "url": "assets/js/22.076b1e40.js",
    "revision": "1fe911eaa8319c6276adb97fd3c11747"
  },
  {
    "url": "assets/js/23.425106da.js",
    "revision": "c09e40aebdeab846b68ee2087171edcf"
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
    "url": "assets/js/30.b35a2046.js",
    "revision": "7b88877dc4c27731ec18eb071a18c49a"
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
    "url": "assets/js/33.32109b5b.js",
    "revision": "17e3fcf6c01a1dae01f4320b8ccc8f69"
  },
  {
    "url": "assets/js/34.7b5f1632.js",
    "revision": "e9224ee0b4d4520e6072545ca2b9c280"
  },
  {
    "url": "assets/js/35.9283ceef.js",
    "revision": "2632c2444084148ab5d77b8c1026d04d"
  },
  {
    "url": "assets/js/36.373dbf85.js",
    "revision": "d5fafb0b9599fc6ed4f62340a964e690"
  },
  {
    "url": "assets/js/37.64ee9a5f.js",
    "revision": "a96be3ab92ca14df4735df568b029d75"
  },
  {
    "url": "assets/js/38.72cb040c.js",
    "revision": "8de0fa9dd0e3fd3597faf2f00fc4fd05"
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
    "url": "assets/js/62.8e6b8742.js",
    "revision": "c9f8ef576d071576365697759712a351"
  },
  {
    "url": "assets/js/63.31b671db.js",
    "revision": "6793b68348d15385f994847219d3bdae"
  },
  {
    "url": "assets/js/64.5b1a571d.js",
    "revision": "2848d2384cd77f8def338d6f7bfbd076"
  },
  {
    "url": "assets/js/65.196b07a5.js",
    "revision": "1ce9de9333d5bfb1dae1b49c96d0751d"
  },
  {
    "url": "assets/js/66.f92743cd.js",
    "revision": "8866ee088dcf38d8b1ad548d7a079522"
  },
  {
    "url": "assets/js/67.8ae97014.js",
    "revision": "040924abeb35be1b8977f554ecd54db9"
  },
  {
    "url": "assets/js/68.2c9a8d93.js",
    "revision": "328a90232f501730f9c7e05b9f36fb54"
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
    "url": "assets/js/70.ba26c588.js",
    "revision": "a9dfb98f87f1f04994317727cdc37af9"
  },
  {
    "url": "assets/js/71.7159f731.js",
    "revision": "b98c8e1846d3fac4dd8f94e83113af43"
  },
  {
    "url": "assets/js/72.abb81aaa.js",
    "revision": "872d7006e2ed45e79e6ebd5945beeaa5"
  },
  {
    "url": "assets/js/73.76c524d3.js",
    "revision": "10025b492fe5a2d1be9860ef52c67cbd"
  },
  {
    "url": "assets/js/74.d2bebc77.js",
    "revision": "83b2b3164b10a048d3e323fc62fad95f"
  },
  {
    "url": "assets/js/75.cc7456a9.js",
    "revision": "82c28b2f9421bbd55ea2343bf3676f52"
  },
  {
    "url": "assets/js/76.0ae7d53c.js",
    "revision": "a4deb8bc1188d9fe5c385552a39f1d97"
  },
  {
    "url": "assets/js/77.3dd2ecf5.js",
    "revision": "7c69926517a873882306e2e41be06f31"
  },
  {
    "url": "assets/js/78.de84a44b.js",
    "revision": "f683db82b4d41eaf8d44db7ec682b743"
  },
  {
    "url": "assets/js/79.0299093a.js",
    "revision": "436e3978940333e22fadb1dc4f187bc5"
  },
  {
    "url": "assets/js/8.0abec78a.js",
    "revision": "37bde597c8d310c8ea0a71d454a0bfa5"
  },
  {
    "url": "assets/js/80.acfc5bc1.js",
    "revision": "69b778eadf2c45c9d5596cd5e10e4a11"
  },
  {
    "url": "assets/js/81.87ef551b.js",
    "revision": "7930615b0c937c28c73098e1b68af05c"
  },
  {
    "url": "assets/js/82.98c8fade.js",
    "revision": "56a9514dac8ec2f76e40df40fbf7c979"
  },
  {
    "url": "assets/js/83.e1fc279b.js",
    "revision": "ff340b472a7a732808ec8325267c3f62"
  },
  {
    "url": "assets/js/84.b4781912.js",
    "revision": "491c7148d448fe11b63486e0e5f40342"
  },
  {
    "url": "assets/js/85.6357b8b9.js",
    "revision": "dbe02410d009edec0665db9e80b63f01"
  },
  {
    "url": "assets/js/86.d5a77470.js",
    "revision": "517d5f5e5cd426d1e78ea706a5489dd5"
  },
  {
    "url": "assets/js/87.6e738a50.js",
    "revision": "45bd56d87ca100c4be722f0d227c71f3"
  },
  {
    "url": "assets/js/88.00eb7111.js",
    "revision": "770d4a660d03d68a50e3ada6b5073fba"
  },
  {
    "url": "assets/js/89.82cbde56.js",
    "revision": "5b61a556e674ab2ef32763dc0ebd76c9"
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
    "url": "assets/js/92.6fe08a1d.js",
    "revision": "fdda8a5fd86e8c82d8e9c50d4671ec83"
  },
  {
    "url": "assets/js/93.9348b0a7.js",
    "revision": "3acbfe46fc7fff66be96360ba24a628d"
  },
  {
    "url": "assets/js/app.9496fcd2.js",
    "revision": "4da1682432f6fd12a05af950067493e5"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "acafc40138def11a570f1519ab82a04b"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "b9c6d2fdb0245e334e97f45699390831"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "ad2e3cd607287cf97e87a0625cec246b"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "2cc5be8fc261ad0d6d0d68d331262a9b"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "0b5e16581fa61590e6f2cd732c8777ad"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "2f540b370d3f5c2f03e0473aa741d80c"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "68b2c0d4b634bc3c38fd6cd00468a6a3"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "b0e09caa8caea5a0977b9c20ff4ca155"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "9bc90221b65d0723ec9a75bbcd955950"
  },
  {
    "url": "categories/index.html",
    "revision": "9a829eceaa7bed9df4995e4a5dbc46d8"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "7fa4fb563943c2205ab25198b399d463"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "aec03f52da3ec09ab88b52f2af75ee61"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "f0f235878c52c3b08f1c1b9d2b862ccf"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "b28a6900f6096098df7a3038c4ae5247"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "fb9c508362fdf6d5e3ff897a6b4279db"
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
    "revision": "b2cf1fa794cadd36b94eea06a963780c"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "1dae0f4c168b8da3d4d5cb14778b8a63"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "ac1ec0d11b4e43ccaec81744564b23a6"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "924e1456f326cb5c79034ff4dbf64ae0"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "1d41ae8f279ba76b2b7ad825e4768d02"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "64d9f2b7196beed06ff712d73b9ae626"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "d96648f33d143826eb75e2f2dadb1bf8"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "84ba4b7fb961330e2c08e8e8e817b901"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "74f10d81adb7fb7e5ebdedda7c3ee4ab"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "b1a50d7ed6df659e92a2ac705b636b0c"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "4576f276fbd540f85b5cb61c151a08e7"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "91a683309eaf289da2a2073d930b5538"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "d8dae04401cb0f099b01a7ef91a66621"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "aadeb1b71cd65c4f194b46caa14ff70e"
  },
  {
    "url": "tag/github/index.html",
    "revision": "6a90af885b4cd8dd3c9122b7875f54ef"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "20d534265a96c0d4b0490ff976963f61"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "38b2e14b1bbd66bc46281abb109b9f22"
  },
  {
    "url": "tag/index.html",
    "revision": "d92c528f29f44e9826513a04cedd98b0"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "6d79d4b0c2b8811708ec35bf8904cd91"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "ab258f36be1075e6dc4e848711491c72"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "1169e208500175983b82a420656fdac4"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "c20ea39b5b505f199617fecab00f51c1"
  },
  {
    "url": "tag/node/index.html",
    "revision": "de3aca9c95a459bd69dfb08875b6e73a"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "a5cc54d867b0ea783facbb0eb11c78ea"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "d52d9991874862632d9ed09bb0d7b981"
  },
  {
    "url": "tag/python/index.html",
    "revision": "126e1776ae0b0ae8b205f2a6037fc562"
  },
  {
    "url": "tag/record/index.html",
    "revision": "64ba1ec0840a9fff8b0aa073d52a09f3"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "4670a2e411f5fcef4d1a765055be13b3"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "f90c3b21ca2ef3934c5b32a44e868797"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "052e2c5084e551b78164c24a60423517"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "cd4d3bd6432b03d82d4f6d779d7a1802"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "b6013c666fe8bbbaaa9b49f7fdab8e2e"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "fcaaed4880d2257fe8f95e65475c80c6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a9872eba11229c6e06f0ea0de5551c79"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "8261e0e2cd424de357aac9f69da6268e"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "3c94e65fec4c19f0d3ecd06465d07d7c"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "91916308904add687ed195b6388f171b"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "2e3c4170c8fd1666c725dec021ef8312"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "47c2f675957998dd40c426214fd446d9"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "22b1efb8a6c6500a866a83200168d030"
  },
  {
    "url": "timeline/index.html",
    "revision": "2993b830f205ed2f351fefc0810f34d0"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "b27de183663bcfc382926ce79399ccf4"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "e81f0a8a5cc6e8ff5dc815cd81b9ab02"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "8e08222e523afb6ff04160e48ad6ab83"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "f81b207c3495d674f9ddaebe1686dc3c"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "7788d213d033d0ce4cbb22510455486e"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "a6f338c58ae2763d1266b18399c4b01a"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "7b8d5254be711d5c1ba38ece9ef8a2ed"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "a2615cf1dd2c9dc2e555aca91158d4f5"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "e232efa776b2116afee65105f638f2a1"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "f87aa4ae7de658ef5e14f907ef923fa6"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "8aa9aba56b12b03fa109c42ef5bbcec2"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "afb21f7ee0eb924c1e7e2eef4f39ae0c"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "4834779d8cc280b8b631d4263d43374a"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "3a81dade0af616d261707071a215df18"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "28299128bfd66d0f07c7e88f26d2528b"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "9f815bcae47754174a7685c9882cd6ac"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "fc3bb09008d24424894c53fb0478a47c"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "03822dfb2bfd1d97cf392d215ac46f19"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "f3a3b4d2d56d4144223e26dca26b5364"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "67e83f93af915d028ed5d147e4bb9b52"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "dd058507e06f6bb1b5493af780202367"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "18d25d70b706b3381043f5bf9a8541ed"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "0127043ef2bdc0b21301827ecf13ebee"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "0f78bb24817fc2b482f874ff44944971"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "93db3ed21478e32fd871f8c8c3e080b5"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "e857b7fa0410495a19478d7da6967c05"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "4d9f59b58bfa5266c141cdcb8c1f134d"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "3131d784129dce5e82f0202b4bdcb9c5"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "aab41af4801d5df7ea90e47959b4076d"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "70724de6083147f09b424be302500b5f"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "f4141fc2cff088c63f668b13bbae7993"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "d79948360198cb49fad826c119c6d984"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "f0c2fa56461f51c641109e724e648646"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "296bdf605a244115c79d96f538930337"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "2e37b13564d610d3d61b21657d478248"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "7baaa68fd6692ea29db29d64af0f20bd"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "46a19702a2c12e4d087d5cce37d18c43"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "61daa753427567e8aa9f005dfb9fbf04"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "8f02b0911203582bbc54e0df51cd7862"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "806c14759cc4e875b301750a8d220bb9"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "459370fa476bee08478fcf553f253c50"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "1db3daf5ad171a5d5ddd43699305dd6b"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "590b64129e27ccd08d3ac5832f1e45c7"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "8f1a9957a0774254734270715c8501fe"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "f5e64d888fc1a948c6c5a04fe17e3e48"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "d8b5e14fc01c506e2d6e1838552dd3c3"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "cb147e4e0de499cc41e1f86059304d95"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "632c604d35ebc42beb38b1fdc7938463"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "d4ecf971f6418e8e8dd157e1f926750e"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "f3447f5ebc95f38cdb4bdd59760b5c88"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "ad78fa2dbfe0361f64e8a2af3e3bc706"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "c148d8eb8835559a348d09a236922cc8"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "54be133e1356bf1efdb5fa16c4a94572"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "99f7e45034c21ab2c7929dc6c7c0626f"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "568b722c21937e2dacedc263392280f7"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "32e722cfbda9ee0633bf4a436bf8d367"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "2c89a00f968e8eddd0fc3635ff215aa6"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "9e4d2302d84d10823905e3d032762f69"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "97eae57c9f808e7105937c14af78994f"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "2e82f41da212ac65b51c8adad31b6df1"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "90c7c13aebedf5b45e7f001bacfb1310"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "e76fef1aac32943317669aa9f3f10238"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "9fff8193de94cec82fac9ca06f05a3d9"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "227eadf0907d596356fefdf86b41a0ab"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "faeb517f291f3ae5532950510d0e6561"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "63500fcc23348f165cddfafb8d4abe85"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "afa92903b9041eb1ca73a4c2f8e80d6e"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "9b4479194e66ee88252049eaa0b3d3db"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "62f34c34d84e8c4ac00c40b4c15dd1e9"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "ecff6fb4b53e027b972a4766c3ef33fd"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "92942beb0f95a44c072a8a983322f104"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "ed11478bd1bba053c47267ae16d842f1"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "434e0862c0b66cebcb66b78726e9b4b9"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "c4c39f07f1aa63678332820122dc18bd"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "16aa937abecd8b4e9e1af18800337803"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "3aeab7650c608cd5e5508d6f88665c4e"
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
