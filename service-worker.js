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
    "revision": "834298a88ece0ec2c84d38caf121a622"
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
    "url": "assets/js/17.598a8f70.js",
    "revision": "5379d79c5b77982bd408d873e48ff0d1"
  },
  {
    "url": "assets/js/18.c4bfc7b9.js",
    "revision": "7b29c13e74abcac3972791b63ee075a7"
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
    "url": "assets/js/22.d9275c16.js",
    "revision": "aa873140009ada67751676defd30bdc1"
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
    "url": "assets/js/28.3d05b05c.js",
    "revision": "f6240f423918ed883722c3e361ee7ba7"
  },
  {
    "url": "assets/js/29.d8204c46.js",
    "revision": "0a0f6581a697ba0185dea218df23492f"
  },
  {
    "url": "assets/js/30.ed4fd5f6.js",
    "revision": "8f7188f0012f836b65c95cf3fe8dda45"
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
    "url": "assets/js/33.e826bc8c.js",
    "revision": "d7a066a047bf7408b5e8ee4c381e2405"
  },
  {
    "url": "assets/js/34.813148b8.js",
    "revision": "b128abfc784b5b9227ee8bdd7d602e56"
  },
  {
    "url": "assets/js/35.9283ceef.js",
    "revision": "2632c2444084148ab5d77b8c1026d04d"
  },
  {
    "url": "assets/js/36.048b7cac.js",
    "revision": "b113794b95eb9d5872bfe78af85861bf"
  },
  {
    "url": "assets/js/37.0c023a7c.js",
    "revision": "cef1273718ae34468db7df0c1faa2e76"
  },
  {
    "url": "assets/js/38.fd2ed8bb.js",
    "revision": "668fa7b79db5598feec465f439563116"
  },
  {
    "url": "assets/js/39.5b2a0e8b.js",
    "revision": "658a63cb6df29833e19607a0e203161b"
  },
  {
    "url": "assets/js/40.09cbd5bf.js",
    "revision": "a0d3c5addb38e2e2ee40b60020601cf6"
  },
  {
    "url": "assets/js/41.61eec258.js",
    "revision": "50b46c07aa0751bf4d542f8e26f2e916"
  },
  {
    "url": "assets/js/42.ab6bb5a3.js",
    "revision": "fa2a21a072fc0cfebcb52b3c8d929cd5"
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
    "url": "assets/js/55.a1035de3.js",
    "revision": "bcee406fe877131bb88fee089c37d817"
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
    "url": "assets/js/63.f7455c48.js",
    "revision": "b96e00f43d03babc067912826273b30e"
  },
  {
    "url": "assets/js/64.5b1a571d.js",
    "revision": "2848d2384cd77f8def338d6f7bfbd076"
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
    "url": "assets/js/74.21a3e532.js",
    "revision": "903e7b33b516d98cc4d09789c42a2afb"
  },
  {
    "url": "assets/js/75.4c97b7c5.js",
    "revision": "d37e9f8ba3735d565b64b70349df3815"
  },
  {
    "url": "assets/js/76.56191409.js",
    "revision": "eadc67a856542f8428c5d5fe31954c25"
  },
  {
    "url": "assets/js/77.3dd2ecf5.js",
    "revision": "7c69926517a873882306e2e41be06f31"
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
    "url": "assets/js/8.a89496cb.js",
    "revision": "52a4e7bacd5a5f4b0b887ef8cee45a11"
  },
  {
    "url": "assets/js/80.dd78a7c2.js",
    "revision": "8268adc20b3e95cfcaeec17721d8be90"
  },
  {
    "url": "assets/js/81.f4da8704.js",
    "revision": "3205dddbda068658118396b1eca6fe1b"
  },
  {
    "url": "assets/js/82.af1ac5d5.js",
    "revision": "d4749a2494ed7856d7e53187973b40f7"
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
    "url": "assets/js/85.019cf932.js",
    "revision": "2b0705ccaa493abf5268b04c566a346e"
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
    "url": "assets/js/app.306842b7.js",
    "revision": "4274691ba7d3eef674daa7d7d0bb6fdf"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "22f99fe9da41d2befde882d35092532d"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "45df689d1ab224ebfc710517a9e1c720"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "c1dd88e3495408d46635fc7b489c7d5e"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "e8bf04994359106db514e6217cecabc9"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "88b27d522a368fa52c3ede0e9332c0f0"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "f8e8a77425fc6798d5149db0071762c1"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "129063c5215d0d26c2d23a131a6df9e6"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "96394fdab04599832d26d851732b53b7"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "a0df1e4aa84b1571d7d69a4f658d0fe6"
  },
  {
    "url": "categories/index.html",
    "revision": "0cecc631a1499274acc4c76c944bfacc"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "b9caf1f06153749bd38b1fdc67f19cf1"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "12d64c9d2f5ed741627730dd644d9d46"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "b67a403989e57080f44b4f22663fc39a"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "4413a037e20a8fdc6a8e2414ce001805"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "3feb55c07c7cb5deadd86db59a0868e9"
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
    "revision": "a7cceb38d3439157e4dc88abdedb074a"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "b3280c9d8743d6651645c0883864bc40"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "734b7e465cc6928e78bc0f27549cc470"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "886fdc076b4c582b02d329616218d8e8"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "79e55a4063118ae7c5ef1eb131aac8d2"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "7724dd1728ac7e264a07849e87932e1b"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "551ca7a33bbb71b84a10ce75c2d96d4b"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "d6847a7e0f83089e2f78cd7f67ad5bf8"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "d03cca4bdca42a66ec23d0f93bb2b3d0"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "d6c199e6a33405b71b0742c4ba7e4873"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "f25a6fc51f2be0c968652c7d5986b3fb"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "88e3a217dc61427e84e95b6ed81deb95"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "bee1b20781a74ecaccc69a30543bb366"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "3493387f5a1edaa0d5d67e26fd4ff4b0"
  },
  {
    "url": "tag/github/index.html",
    "revision": "c9fe15f18b29d6d22bd6d500041baaf7"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "6521aa4422fe130e5561de74eabe227f"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "3f139b6dc3c5908ffedf6c168c61379d"
  },
  {
    "url": "tag/index.html",
    "revision": "24c11961e6947ffad2586e443450cd63"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "08d687fdd455a0641a629c2e3f7933cb"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "2193f8b72f7ad06701daed017bf4f4d3"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "cc6e648ce50d35d4b9ee885cedf4e430"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "abebfb2444cdb67de2112c2abd76d4e4"
  },
  {
    "url": "tag/node/index.html",
    "revision": "1651c21d5003b7a199fcf1e72820ac36"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "bc0dd8d678eb8871c6557ede517b138f"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "8f56bb931fcf325284b14a5e7c898181"
  },
  {
    "url": "tag/python/index.html",
    "revision": "09a6c17e9db74dfce2739c651faf1212"
  },
  {
    "url": "tag/record/index.html",
    "revision": "59bd773a8f93216a972a1e1e0fe04ba6"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "fcb6463f83f9d8885e9b432e4618845c"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "3408513b98dba55abdc2cbd55bd7bfe6"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "99e4b67512446148e8cb8e6e1866d3d4"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "3b1bd04c5d9181f6f2f0f7679e11eb60"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "2ef7cf0dc4b6eada04c32aa9b3c833d9"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "e0a4ca0c3306bf56f2d1038812e63c19"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "83e056f8c37bd9a9f4eda31d37d838e1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b3c181af718510c8419fd64d56ecf7f4"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "70515753120854fd17189682f6d3cf79"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "eb23662e17d5d63673f507484dcc52c6"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "5b1e4a1173b41a9188602ca0b03888db"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "8ff25a684aa91cc1e1ab7e3734fcdc49"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "5d31777569594f94110eae9af843c274"
  },
  {
    "url": "timeline/index.html",
    "revision": "fa1566b978341ae401074b8961d75c3a"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "77f514e087a2fa739054c1213a66cc72"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "df0e9b21a48537b64d9b43f85198a950"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "ff001207589104f92ba1dc76c8ade9ae"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "2c8b2057f8cdc4221b3afaf2d4d16fe8"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "59ae4f51e016095e6fb29198133af496"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "ab8fd2895634e22a3342bcdb49e59e51"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "4ec0f7dd34b664c13743cf0602467bf7"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "f0e6388a0011b9dd7d03c3fe97a52cb4"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "7ae7548928a1b9cae40eaa4db92249a4"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "6694788d63f1b6d3934fdbf75095a52b"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "39e5510d5b41ab7628eefcb7655e0049"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "6e5f46132d5dccfd233b022b875908aa"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "c79bf78859d376f5fbc35d5d817289ea"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "90da517e6b1a460b3828439c53d4f230"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "9ca69e9bc2ac036aa4eb95968adf71f7"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "4e9fc77b5ed3eb3f0820d1940fff12cb"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "301754ed82833547e5f78f1670d8a9b5"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "fee60c761a7975e7091ab588e5e67b2e"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "95e45a780c60dee96c7d0a4cbf0bb49a"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "0cc68f66bacbd9057403a53fa931b328"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "73089d7544898323c2c0b9a5f2f3814a"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "f44c1620cd84f3280a398d2dd633ca07"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "29313d91ff014ecaf6b611e127ed0ef3"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "ba462cf20d61f92c166860e239ce729c"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "36f2a76f6ef6edecc29dab7989d1d8f2"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "b7a418750317a343bc0042d4e8897e6a"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "a98c266ccc8e06a1703e53d97deb18a4"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "f5f39d5b0b828c35aafbf772824548ae"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "23154aa8009fe757e1f9e7b943d345f3"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "785a81742b925cdf33fc0428a4497fcf"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "0e8d92dfb92385f96aa45014f5372a52"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "1a894caa4fadf1ae92151236e57759b2"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "9023e4a5e47eaa98aeb141b2c3a77b64"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "0338e77ba6773f7a07a11113d5f036c7"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "5862f7ea014cf6c6e110beca89f9293f"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "c8cd5e88286d1806de6a3e569694f9fd"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "e9bd3bffbdaf71342e8e0e679542dfa4"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "c108ed43e6bbac1ccf5b765cae5cdd8d"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "f0692768fe0ecb84a03ba6e95f909800"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "c2901cb5208487b8ba88e23b5408a0a7"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "9d93d6a8511cb2d5c83029e8b3d994eb"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "fdbbbc4d422fb217b04d61b3d88d2fdf"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "afb08e74720adb67b8face83f083c6e9"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "ca5fd9260f357fc294667b6822a5f889"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "1626eb1b404193a364b964b6f842ccb6"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "870f4fda49f05f9eef141ff89efcbab5"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "10f66be88cae77b62c948be647e31f43"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "3aa441ccdfc7b5d58737b5a1489bff52"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "c68ea6306bea98e2ccc7f6e4fdc4961c"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "b0f5da53245a942b3df3f90d62b54f34"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "942eefb45ead5d20b06817803d74e222"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "88cf5df1975b919a1e3042b59610052f"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "864be935628fbe272bc63d96a7dce167"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "af59f0ebe2cf1ef019aef8a7c5b7e931"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "caf33e7150c8a8d2c6e9f81e5d193a98"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "3161dfb66cabd6ea91738d8140621b18"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "948eba718b64095af84231aa5838fcce"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "68240f46bf9b9b3ac5f246ed5da01449"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "dc2dc3f7f6214302abad40f7def87234"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "0af67ec3ddf8fd9758195693f558fe69"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "482b721cce04050a10d5f9f041bc0787"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "e65793bc8cd5523d52d3437f5d2a837a"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "dc5a9a41b99ae502342440547244ef1e"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "cf2b640cdb49991e574050919a4cb7af"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "75758ba921376ab10328aa7a900474e8"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "e286fca77c942d74c839454962901ad0"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "c60fdd50617f686bcfbace93770ae5de"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "5d46e2054072cd5acfc8165c25d3cdcd"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "c3dac022a1e24ec1ca351340bd45c2fd"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "7098e78f86e41424d65c04fcce6fed4d"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "f4b528d3f271d7a43b3a8904b9843787"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "de808f4ae8c73417de941af7fba8f640"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "a46794dd45f025a9de43d204c3eb402e"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "a6645898f4b2073737d17ed1dac26ca6"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "5b84f363aa84e1d2e06019aa393f8883"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "5898a8631d7394db62ec013361f16acf"
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
