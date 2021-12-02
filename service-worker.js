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
    "revision": "803148991d59f65a0ba527628e40de3d"
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
    "url": "assets/js/13.e50ac1a4.js",
    "revision": "831e2e0bf2b455cdfaaa88b9b4551479"
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
    "url": "assets/js/17.598a8f70.js",
    "revision": "5379d79c5b77982bd408d873e48ff0d1"
  },
  {
    "url": "assets/js/18.c4bfc7b9.js",
    "revision": "7b29c13e74abcac3972791b63ee075a7"
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
    "url": "assets/js/24.836991fb.js",
    "revision": "9d864e07d7cb04184817fccc1f4c613f"
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
    "url": "assets/js/27.542a17ef.js",
    "revision": "2310cfcf04edb46bda58a8b27722e8a7"
  },
  {
    "url": "assets/js/28.7d1b9bf7.js",
    "revision": "ce90934a0453cb0554f31f52b2293400"
  },
  {
    "url": "assets/js/29.40704306.js",
    "revision": "92c5a7ed60b53dc5aa9dd624bbb830f9"
  },
  {
    "url": "assets/js/30.ed4fd5f6.js",
    "revision": "8f7188f0012f836b65c95cf3fe8dda45"
  },
  {
    "url": "assets/js/31.649ce96c.js",
    "revision": "fb378eeac9de12a9051cbf2ea7381560"
  },
  {
    "url": "assets/js/32.3a4eece8.js",
    "revision": "63610faf88828091992e452c0ad25bea"
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
    "url": "assets/js/45.d71c9f4e.js",
    "revision": "72f5cfa34b58c3280ba94a831022a9af"
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
    "url": "assets/js/48.7ec73d1a.js",
    "revision": "e4ef332554d8050cd321fc02b6f8d846"
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
    "url": "assets/js/53.528df25d.js",
    "revision": "3092a30dc03c721e72d7a592a675c54f"
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
    "url": "assets/js/57.830eba4d.js",
    "revision": "0067e46a2f76772e933186aba463984a"
  },
  {
    "url": "assets/js/58.7cb378c0.js",
    "revision": "c485f455a316dc4e2eac50b891f45cec"
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
    "url": "assets/js/60.35c159b4.js",
    "revision": "0504079d8aabfaf3aa576889c062e73d"
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
    "url": "assets/js/67.1c3c0115.js",
    "revision": "a0e53fdde8607f0de7dfb4b20eb45665"
  },
  {
    "url": "assets/js/68.9f1e913a.js",
    "revision": "e119c02954ead871029707f3163750d2"
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
    "url": "assets/js/70.2ba04ae5.js",
    "revision": "2ebbd96418c89e0b7496e8b921ddcb95"
  },
  {
    "url": "assets/js/71.7159f731.js",
    "revision": "b98c8e1846d3fac4dd8f94e83113af43"
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
    "url": "assets/js/74.d2bebc77.js",
    "revision": "83b2b3164b10a048d3e323fc62fad95f"
  },
  {
    "url": "assets/js/75.4c97b7c5.js",
    "revision": "d37e9f8ba3735d565b64b70349df3815"
  },
  {
    "url": "assets/js/76.32e266c5.js",
    "revision": "ffa12e15b2ce89afa3869c697bf0ed13"
  },
  {
    "url": "assets/js/77.61394769.js",
    "revision": "288e9a5af42d256a8ca98173a0362e01"
  },
  {
    "url": "assets/js/78.e42c7ff3.js",
    "revision": "ecfc78ad6110f1116a0241d4428c2d79"
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
    "url": "assets/js/84.56624654.js",
    "revision": "ed6e35e847f07086c28099664e99b8ff"
  },
  {
    "url": "assets/js/85.1b5f383e.js",
    "revision": "ea0ff95d91dff04e793e2f2c6f8d5e44"
  },
  {
    "url": "assets/js/86.c7d98c12.js",
    "revision": "ab48cc9a639aff827d6be303d6ccf432"
  },
  {
    "url": "assets/js/87.6e738a50.js",
    "revision": "45bd56d87ca100c4be722f0d227c71f3"
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
    "url": "assets/js/90.f772bc46.js",
    "revision": "873a89e32cacb49329a5c685b3dcaa07"
  },
  {
    "url": "assets/js/91.53ea2acb.js",
    "revision": "b02d40cf786b09fd6411f1e8ac096a60"
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
    "url": "assets/js/app.cf44d317.js",
    "revision": "923386675aa9e58859bccf93db146285"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "0e40b5076a021f24f1a95707aaed9df4"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "8a0611b407c1dbbb012ea35d74cf6e93"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "6b786be3a81cb045e919d5a39bb6f95e"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "6a816a47cf4c5b633eda9dba52f8e05d"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "e3dc79f3f6dc7ae1fee5e81e00616c4e"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "8eba79cbc21682f33e8a6529566bb00c"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "57762bc73927bfc6f62b9b2cc61a7eab"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "f039c0384377347717fb0d50a0373398"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "b9d3a8f480c0bbff9b19312cf6d3078e"
  },
  {
    "url": "categories/index.html",
    "revision": "eb9e6afdb453ae93a10b00738ca7ba4f"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "d0816ef1ac5bdf14b83e9d218ed0d50d"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "093a89bd7fc4d3c165899b51b86d7efc"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "86a2bf1f23555aaf0ed0e2d25ee0c4d7"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "a93ce54c89d9e5fba7fbb330714cdd2a"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "80e1a5ab1694628a9a27fc02a3f9c3c2"
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
    "revision": "1bc9126dde4643507457fbe327240e03"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "e1cb4ddcbaf8725dcbde0fc9bdc1a5b4"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "cb4fa402ee38e153a084a4d5f57daa90"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "f9f0730d50b0d55a5dee2d77fddbd8a7"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "b5c0186298a1d423d08fcdffe654f05d"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "24787b84e841f71568161689e1c6459a"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "ea71c32b3b0ca251f6392e50a3b40e9a"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "7d6eeea5509c1ee658ed5fa4fcf3d4b4"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "cb5f7bad06a38c215db1a4aebd66a04b"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "9029a79e482008a22c13dd28f166ee0d"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "c8d6fb642670bc7d388691229035dea6"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "ff67d42c1e58e47e9eebca4f37a1774b"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "aafbab5bfc86340f3cd53540ddf5947c"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "13d7eea6286bc9f816ab8477a6fa7dc5"
  },
  {
    "url": "tag/github/index.html",
    "revision": "ac66a465843e2dece753a9b7266acf91"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "32b24e8588a7a7677223b5b710e1b141"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "d6f1bdb0d059844ca86e9f384646ef0a"
  },
  {
    "url": "tag/index.html",
    "revision": "90d8d5ba62a5cb0da830e6138d9e3cf6"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "0b8d7814a1ac8fe6d9c5dfbcd2fd0eb3"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "213d6ed143bb2791135b2a2c816047e9"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "9cc4cc39e9686b8c0a10e1651f0f701f"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "808d5d86737dfcce5cd915985fd7d299"
  },
  {
    "url": "tag/node/index.html",
    "revision": "a819a1b73110ce9f46721c944f0f4e16"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "7b41b90d2e1655c229e1b31a778557e4"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "5cb977291c34f9735822e621c787d4ba"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f1a7cbc1790beb89d5667221b034d65c"
  },
  {
    "url": "tag/record/index.html",
    "revision": "2e3a7f6ef2f7db4937d9583fc16ef2ff"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "bc2ae05cdabb3fb0e814eae17d1346ab"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "3bc8a25883c144fd242011a72af3f693"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "60a7b22bb04dcf28e83781defa265ebd"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "e49e0b3e7ed5b39e5cb7ccf9710cce71"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "96e02647c06c1ac641ccb484a8a840ae"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "8fcfeb8138701459c52bcf6484370d99"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "27cb769f42eb6dc9e40f1d728569fbdd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d4968359595870291e3b8a306e6f9409"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "e5afddb24f117ced47b92dc3b46332a9"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "609286140439c85565a4ed495543578a"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "c1673284f84fe91e0e93e847f5137f92"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "0361636ece6e9333dfda1234d2514364"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "5fc57c31efa3cf9fa8ceff8bc0ccf624"
  },
  {
    "url": "timeline/index.html",
    "revision": "0677466568e5dda900018c38021e5082"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "30590a83ec0cdd69699769db9446db41"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "b605e828217c27ee996617859106f1b3"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "0c975abf5032c42441b21522bc03fe15"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "bbc30e064dc9add326b54295ce7d4781"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "12ecaa1a5f11318d40ddc36e8b582ae4"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "b8ca665c2f686a9c5f507d03454fdb12"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "2a8b3dce2a6c8ffb7c55d9825ff64145"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "36efadf10cda54e3280ff1390aa4d813"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "f252744338649d73e8c529aaf2befdcc"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "157d9f83a684549a4c26197e3c6e2f29"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "00f870a0177b94eda7c851617334a0da"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "74a4dee97982fce2c570a6e0e7995b8b"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "a467702c73096562bcd7bcca64624ecb"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "d0b6e96bafbbaa537e712fba08f4ab38"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "dfb742714b590f05e624f0dfa015838a"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "f541113bf00bed29906bb6373d3044e9"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "be2d082f7e90e220e368957223e99059"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "92eac2d8de08229aab094851cc4b1e4c"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "3ff6ae3ca4827d54fbad291f2da047ca"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "8fcf89d23429389eeb7871143080a709"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "85ad7f09c97ce231bbac5f7f4fe1e1cc"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "d8b081589868d413f2cca3612b95273a"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "d96eba8cfdd5a3c0592e8e48c9f4369e"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "99a695169cf7d410c4343d6d5d914c0a"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "cd4c8650839cd0e6c90643616c647a09"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "cc3669318fe1add4af5fa9c9aeb9cc5e"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "709fb08d31e2c89b64691b948e8168d2"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "5fecef5bf41a84e33b29bf666407a082"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "2c685f37fba2b30d543dc3d3aaedd399"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "7c393b98b36b3c92bed31c24adb17c35"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "e4b40ee96c4656138c1aa42bfe676d68"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "4cfb9aae8e54e29fcdc6bdedff50e63a"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "a0eb7ac1ce353138996652b569524f1e"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "6afbb323c2ff1c4ee574bda8e96e1a1a"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "0be0afb65d34a1231e547607f54489e7"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "da9e8a833bc88b28180acd15f701906f"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "a737a9440395d78dabc054b147dad79e"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "959ae20132d512151194071484de6be4"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "99824fc4eefb6f8979456a5950e8d4a6"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "610d7a1cd75b21fb1110d0c269859f93"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "bac733f3c3647a3a076e60790f7a9c48"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "35b58941b934a323af44b60cbde1e508"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "3c4238a1e18e9617edab58778f1cc6ed"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "21be7eb45b1c27d2d33f566f589fb141"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "7cb45186c586b251f2395daac41b0723"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "bf5a82ed2cbe75e96accc5d31bfe6c0a"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "cbadf119709ed183cf07f0a4cec61aa0"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "aeb39b0ae20556db758af9175561f7a1"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "fc78bd60b66e1d9ba719357e7bdbab23"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "d7359d3b911d312290e83e90045915ec"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "60e5058116ba8a38f476784410537c14"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "19992a0e99348ad8db5fcd4be1c15ee2"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "2093b386ad1c951b4a70df9c56b6a07d"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "240551c8d76724123cae184a1f0a6946"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "40267e865fdd3b0f407bbea2ce2ed0b6"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "6d06dc68746fef84a737a16d1787cb58"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "28651cb0ed5041db79f873ce697baa35"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "b61bcb2335b9cadebc871ed92a2c7fda"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "a30ee4eed809147cc5434c0b91fbc7ea"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "acce75639014845ff9a57c1fdec484b6"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "6425b20b015898c3fdea375f548895a5"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "726102f6d1ec49f28352251677ffa2bc"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "5467e2cb4af30bc9935a8f498fe4a492"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "83e79bfcd8dc8969bdefbf010e548858"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "fcfe553ada55c5f8fb2fcfacc1bca0f9"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "90f8aae0f19420228101e39c70890dd9"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "a5d0c5f63569d149802ffc9f071664f2"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "a3c603975b027a1c8f06d052a37d81c9"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "089fcb19ab5eaacaf94d58690f2e11c5"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "d88869997c5c1274efb86526a8c9faeb"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "3a162f6ff102b728a5151360d18fe11c"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "442f4d97ea2472e58468b373f4822798"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "b35edc8a604ca47242ec06c3685ad88d"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "b8208aa49c706a24fabf2700165c8608"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "30cd0abc9bf4e75b4748418a1c7d7a83"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "208c658a863c27a5abe155109dec6b15"
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
