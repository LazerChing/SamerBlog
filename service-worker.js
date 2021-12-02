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
    "revision": "48b73b92e0b01f2d5defee6e7f0db180"
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
    "url": "assets/js/22.f79e1eb5.js",
    "revision": "f0d28637f85080e1772bee9b35bf9ff4"
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
    "url": "assets/js/27.481db529.js",
    "revision": "912dee467fa8e942077141d4e21f4ba7"
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
    "url": "assets/js/30.b35a2046.js",
    "revision": "7b88877dc4c27731ec18eb071a18c49a"
  },
  {
    "url": "assets/js/31.e9abf171.js",
    "revision": "086af333fa4e1fa10baa39f628b80e3d"
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
    "url": "assets/js/34.c194f6d1.js",
    "revision": "13a7cf655158b372ec64e7480585ba10"
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
    "url": "assets/js/47.fc6caf06.js",
    "revision": "c3978cc1d959546e24b6dd3138e8ba86"
  },
  {
    "url": "assets/js/48.2df8bdda.js",
    "revision": "f02b68adafea939b8c32ba02f0715867"
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
    "url": "assets/js/51.3e4c4c4f.js",
    "revision": "9c776c98825970287f701bc497b3c6f9"
  },
  {
    "url": "assets/js/52.a464e392.js",
    "revision": "c8231dbb366fcab3ade4c037b7bfc72e"
  },
  {
    "url": "assets/js/53.613a46de.js",
    "revision": "12de3ec94bba98a6af3bdf6e897176a8"
  },
  {
    "url": "assets/js/54.50dd72eb.js",
    "revision": "6892d6a21ab3850765733cee8caa1f55"
  },
  {
    "url": "assets/js/55.d8fd4330.js",
    "revision": "aec16bf05f1e28d1ceb46d46c9dfe542"
  },
  {
    "url": "assets/js/56.f35a2163.js",
    "revision": "78c4cae51475f36f2a164b4a7dd8daa5"
  },
  {
    "url": "assets/js/57.89cd9a05.js",
    "revision": "e73c208813a26e8c91ec2fbca6cdd09a"
  },
  {
    "url": "assets/js/58.a1259a60.js",
    "revision": "2932c8901df53fc64fb337d8f192988a"
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
    "url": "assets/js/67.1c3c0115.js",
    "revision": "a0e53fdde8607f0de7dfb4b20eb45665"
  },
  {
    "url": "assets/js/68.9f1e913a.js",
    "revision": "e119c02954ead871029707f3163750d2"
  },
  {
    "url": "assets/js/69.14c771e5.js",
    "revision": "fd50236b707cbdcc007f5898b840fedf"
  },
  {
    "url": "assets/js/7.ff65d71e.js",
    "revision": "83e589641a3e6c701a42d9a32413683d"
  },
  {
    "url": "assets/js/70.00b493e5.js",
    "revision": "5f8f3dc603a39ce228b5bc3e3bbaddf6"
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
    "url": "assets/js/83.27a12d90.js",
    "revision": "c69bddfff5aec8d1640c97a3df0d2107"
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
    "url": "assets/js/89.f537e4d5.js",
    "revision": "863b96661d4dba65c807c5d5fea18468"
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
    "url": "assets/js/91.23689151.js",
    "revision": "a6e5ae0e3824d981bd0f892780ea8b07"
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
    "url": "assets/js/app.d9892ffa.js",
    "revision": "25350c572e237b79247806b16785d2b4"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "6f099188a9c433023a8c4ca19e93c176"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "82df7d954522423dd52446082cb260a6"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "84608f5fc248c5ffc551d4175097fff9"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "93d8a505fbd7e5a5c1cf1c7b60eb52d8"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "eafb4db34e0ff54fa068975f04cbf07f"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "76cb2c42cd16fa5a5040580e9ec78b9f"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "6593d62ce05e8ca1bba1acabe49e1273"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "ae14048aa3de29d26c5b1005acf7920f"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "3a08a3a307893f129709381d1d3ba024"
  },
  {
    "url": "categories/index.html",
    "revision": "555c57160b3fc3a80b3cc64b5ac4d59f"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "2b6a19d1efd86132eae430509e265fe5"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "219717645d68b102e04cde0d74c8680d"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "b42583abdc01994c45fafcf731bbb2b9"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "78901d69275f471ece2d7a7be979fc10"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "a2af24216ebec0a2b4a6d66c157592de"
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
    "revision": "c61553bc518fbff0025a376c3e5a3638"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "29fe34def48b1ba6b955b33b5f96bf04"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "853b6f602beeb29693a2477e7be5b8fe"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "d50afc216f32b0a824225fb3779d5ea7"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "84156da7247ad7f5a8e6ecf3ee56cc00"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "7bc98bf546e03f080b2348e2db41a150"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "24de642e62ff325597adc78ff56f3e6f"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "7f54232721d604b37a9284eb9a6a8a82"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "4d49cde418d323617ec0a34e650fbdfc"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "baa8fa081d2bb1756ba653d24c63692f"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "1cf32d29503f0a469870592f6145a91d"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "807e5c59eb1fd2bb2122a6faa912ebba"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "2d1977c46fa4dae078087b31714a82d0"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "e88f09a9a6569795a8e99f25e3635408"
  },
  {
    "url": "tag/github/index.html",
    "revision": "511d74353589eaba3db68b4cfa3882a2"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "d6a67e86847eb290d4d350c66b14ad7d"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "a70634590c55c9eb97f040e14ce693e4"
  },
  {
    "url": "tag/index.html",
    "revision": "b6c15e39b56a10819b29167273c9d48f"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "bb64872990897a1cdf5ca4a5b79967f4"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "c1b3ca2f7323511fc558060414ef1c64"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "53fcb565d83eaca24e05363f0481dfd7"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "87c23d0d9f07670205d69510a54cc116"
  },
  {
    "url": "tag/node/index.html",
    "revision": "db357336fa0b7e25ddaae6cc1f6e39a5"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "f97c3ee1541cadfbcc365d1363981f73"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "b1c563d8f41afbec18e808a345f5a02c"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b8f3a901db9203728628cef471fe2154"
  },
  {
    "url": "tag/record/index.html",
    "revision": "be32aa0e8b1e646758cf9b7396e1a4c5"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "c65787cf6cfd4fdb6c6c0db382250b71"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "adc3b1a0d89115ff037cd0a0acb3d81c"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "fc6c3f25ae72f3c0847ba077d403fad3"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "4cc6682e8d45b9f3293fbad4850e683f"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "3aab8ef053d15e27d7c67fb1a32afa8a"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "49d5e97e02a6d1e198fd50024f5750a9"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "62e77632402264f82665d3360655eea0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "428e5dd89bcb98fb572983f2f3f23082"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "e7b223a4a97d80508b68d0fd0a5ede49"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "f0e6b0c3a5b40222d6429a30cb2c7008"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "e65556a9bfc55a9f1494c591cd01437f"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "4a6258b288060abe501fb707e30abd35"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "79a5644896f87fc8c10f3aa61766a40b"
  },
  {
    "url": "timeline/index.html",
    "revision": "64c357ad52438cfa60e7269b50f7fea1"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "c6d6a065222812dbcd1d67bae95623a8"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "52f3ceeea2b3195c5a162e3c36e92de4"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "16e39982f8d668c9d67b547138c1c82d"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "8190668aef05e64bed597ddb0ed55e6e"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "b1d1f16a8272279c8e56d0fa161b94b9"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "fd042d8e3cf69bbc4b529e9807fd6c5b"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "2435b3b71614f71b38cdaa3ad6a7a6e7"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "7983576e3a5fde91ca8f16a635ee46a2"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "e39d2f220463d684b7e2f3baefc40bae"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "e49909d5598df6ecefc7124739953e12"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "f17d812c9b7f3fc20550b5939b67e920"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "ea491502c119a0fa9530062c3e1eafbd"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "9d5fbcf77dbd40188c82b573a73c4d44"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "6dab1a6c4ec1e4d18a3631b3629add1f"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "6e90cb872ae4538011bd43f40c353894"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "d37136e35adc1a23b82601b7637f1828"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "da0338ab1b919c7ee1695b35a775a8d2"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "bd34201fe0ccd96bf46a11d200825085"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "93cb1238126ea90e2d6269d10e2492f2"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "2c8d78fd0386692dd777eed783a8e238"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "6a2c3935c54a8c4326ece1345ef5a490"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "b41b0400fbd2ae2b638c19616727c887"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "46cee151e6f67844c8ed2758561c477b"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "dff6e9c8ad69ce52534c935a5ad9b978"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "2e9e68a695d83c997d9e7f97414a7c12"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "10e7a6015233551c1d90f3a05b0429fa"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "c7e0979712a7d43d0b9320dcc44e51f6"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "2a428d75d92705392bf1df4a198208d2"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "89fdf9ff68c6ea1964dc77a81b5c7602"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "1914caeacc13b6bfe67fa849a4d97379"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "e19f656ea2cc81a236c6c6b5f32c343f"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "b2dfd24ca4082a046d5bc93cecb32cd0"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "7d43ea4057db3e06827bcdc644941339"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "1e5f135bf06110435151989ef6030e72"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "058ff06d6bdee896ef00449d68ff7c3d"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "07d0036e71da2b20924c4ac79b8aa3e0"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "2ead35692c5ee6f2bc318b2debb0f6cf"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "e4fb196dec592cbc9eb48f3373fefc7a"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "98061ab519b9868b0095ce6756a22763"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "78700a2477d6a3c2117022673f6a9781"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "b10c87e2f9d446103527998176a8bf4b"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "4c454380243e332eefefd6a2c837807b"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "9341a24e31e6343cd3e59f072aa16257"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "d0fd10d13bfce35ddd3779dc9b22c3b9"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "2c3a9565ea0042af966aa532d64e40b2"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "f90d9b26f55edd1a4ed41152a5efe203"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "e5dcac1e63c87cd799bec4c55eaade9f"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "2c51e1553c602deec75ffba46540ffe5"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "11c015f4222b8709c8fc4eb423778915"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "05a68044849f3d98f82eddfd3af647ac"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "c30abd7c4192f4fa34d7ff632ae97be8"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "7696293c430d7e8e9260c65e4e85e620"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "c04ffc56951dbd43e6d689ba28fde25c"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "b46168b43bcd2cd365c2a743e02d7741"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "0df9f5c97dd0a874d8299bab25268bfa"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "d3fec5d0be161322bb4fdb0970a2389d"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "de9ce74c82eab30998f745f1df71189d"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "ac5dfda7f5cc8c98c2db3bc55b0a662b"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "e84d0597c2c319dd4d3b8edf3517ea73"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "5f92ac76fd933293e1136d3b8f1d7a9a"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "996fedc5fb70334e9939aa01033b291a"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "aad74f940f97c7e596c023fe47c9d422"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "63c375741528db0f252894894d7a3437"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "d490e80416570086be5de3c875268f0c"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "4dd830f4253656f55f4cc1e2ad82fde5"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "b18764bd5b0123571493988f27d7bd20"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "a0677209f8645f64b3af6f34bab53b61"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "61570764418517096892ccfb67e854e9"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "6a403e75b8a0f32ba9ae72d4138ca157"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "a0100f5e58b0148fc8f4385c3b061e80"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "c94527003574dd00eb22413a01edbd21"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "d98efb9cd0b32903026d83fff7ce4e52"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "d447f9f35f37441cf0bd716f891ed669"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "3a6d5024da3dde38ecadb2a7118a24a4"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "d461a782c25ac7940e50b49ee07005ed"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "72b284d2b3ce75de0b99fff8e1c751ed"
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
