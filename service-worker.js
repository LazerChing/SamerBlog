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
    "revision": "69db2b45fd85deac7dbe8232de399404"
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
    "url": "assets/js/17.8882e0dd.js",
    "revision": "40f435dad2ec7c985b3e87aafc3e4ece"
  },
  {
    "url": "assets/js/18.5e6116de.js",
    "revision": "3f7aa20bcfebdafb90549fc0e4818ac8"
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
    "url": "assets/js/20.26befddd.js",
    "revision": "f70e24eaac3dc4d1f76f49a250dae38e"
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
    "url": "assets/js/29.05dc3731.js",
    "revision": "b89e522cd182fc4e64439c5cd243b1aa"
  },
  {
    "url": "assets/js/30.1f6be384.js",
    "revision": "2b78f8e36d8371a89f9a7dc7e3a600dc"
  },
  {
    "url": "assets/js/31.9007c455.js",
    "revision": "6737ea07ccf38cb8d78b70929eea9e2b"
  },
  {
    "url": "assets/js/32.28d81bb4.js",
    "revision": "fba7b77c46050fb9dd96ea85b7888c8c"
  },
  {
    "url": "assets/js/33.0c83eb6b.js",
    "revision": "d2ffee937b08a1d551d846473a5252af"
  },
  {
    "url": "assets/js/34.7b5f1632.js",
    "revision": "e9224ee0b4d4520e6072545ca2b9c280"
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
    "url": "assets/js/46.eb57b2c8.js",
    "revision": "ad9fd1626fdd77f629fbdbbfd087ec1a"
  },
  {
    "url": "assets/js/47.4b0bb4e4.js",
    "revision": "2a0e8d20875ee5a3bdcec725c9689ae4"
  },
  {
    "url": "assets/js/48.68c1e3a2.js",
    "revision": "9113b8612ec8c560b55f3ea27699a06a"
  },
  {
    "url": "assets/js/49.d21fcb61.js",
    "revision": "6566e5463bd8480e8feeea6e62651b63"
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
    "url": "assets/js/63.79be6817.js",
    "revision": "3429e3d1eba681b7202e049b2300e752"
  },
  {
    "url": "assets/js/64.5b1a571d.js",
    "revision": "2848d2384cd77f8def338d6f7bfbd076"
  },
  {
    "url": "assets/js/65.d392f6be.js",
    "revision": "ca5a5c53327dcc9d75c54ed255449ddb"
  },
  {
    "url": "assets/js/66.f92743cd.js",
    "revision": "8866ee088dcf38d8b1ad548d7a079522"
  },
  {
    "url": "assets/js/67.2ce2a65c.js",
    "revision": "171e125c8d7dde54540c667dc1465724"
  },
  {
    "url": "assets/js/68.acbe556c.js",
    "revision": "eded36bfdf1c194e956d1799a29f7271"
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
    "url": "assets/js/70.ed59820c.js",
    "revision": "de961f2d45f9d23f8185f90bfb8c5348"
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
    "url": "assets/js/77.0e3817b5.js",
    "revision": "b457f2c03173f2b9b5c9dcca9ee82391"
  },
  {
    "url": "assets/js/78.e42c7ff3.js",
    "revision": "ecfc78ad6110f1116a0241d4428c2d79"
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
    "url": "assets/js/83.77ca6268.js",
    "revision": "9924ff3e074f4ffeb60d0eb324bdc4ed"
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
    "url": "assets/js/89.82cbde56.js",
    "revision": "5b61a556e674ab2ef32763dc0ebd76c9"
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
    "url": "assets/js/app.07fd19f6.js",
    "revision": "f4cf8fb01f3ef97687e128d5621d8179"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "c949e503faaa4e57139a9343e7aee521"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "1b1f05db10883b553d6ada52b1b5506d"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "8f0804688748ca50f63fc9a590df4b2a"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "221716e844be37fed49c71801608ed68"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "a5822eaa2cb4e0b346254a7bd1d4b116"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "344af68aa694357bbd3cd2407456994c"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "fb9728bde8364f2f2af31371aa21b6ea"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "c825e7d91ee0467e08da3e67be384e1e"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "3213c03ffdfcd3fb5b6ec9dca85bf8c7"
  },
  {
    "url": "categories/index.html",
    "revision": "318165124e87bfb4c02cfa24173e18ea"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "eedfed966ea9d88b275d115c2ba598c8"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "f5641108ceb76f0d17e95696ecc02047"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "6cba038d07759a4bd1ec6a705e3bf451"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "4ae0bd17f6ab84b99a33d37386a14b46"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "850f7f76707f5f2b814b6c4feb962cf3"
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
    "revision": "1066c9fc794a227e782e3229b0299dc2"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "4bc919e6dd6a60ddd23204f41196b55e"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "94568b283e10d62b73f4018d90273f55"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "b70880d7543af12b27cd93db0226f771"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "6d34e4ec13bd37068d4709d47b534e55"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "9b9bbe9f98a790a40fee2852d32c2871"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "5a0fe033e38bddf10c501dea2e681f33"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "f100ed711532e4cbcdb02e71dd8f8f6b"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "90871fc0db3f9389d5527cc0790ef781"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "452ce6c05621ac4bcd668565df0853c3"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "55546a26cfd780f7e74c494161871499"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "1b87425cc997558e1312f5853d0ee59c"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "a494e54a14f67f912f16bc452b3a5d3c"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "b68a6f62c9d3f90308be6fc796e68e31"
  },
  {
    "url": "tag/github/index.html",
    "revision": "ee3d18a01156ac70ac2d26da26922241"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "5a9b1260ea664d503c5bc0484901ba86"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "27194f8bb3c61299293bc150f3a8d5e6"
  },
  {
    "url": "tag/index.html",
    "revision": "46c6d0a6d42d0673a378dcef499a6b7b"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "8b77cd10046b53fc7ba197a48de265ea"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "9e276160e45af5329a6355b4bd7a9ce9"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "5fdab63f5e6b5abdfa7d8abeeb0fcea6"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "4c7ee2ac7120030215975afbd66e39f7"
  },
  {
    "url": "tag/node/index.html",
    "revision": "386b0b3f2f247f21d42390478f8780bf"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "403144f8f6b593cc3787bc0a1c044b33"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "d7d34c50d22b942d7499d24968483266"
  },
  {
    "url": "tag/python/index.html",
    "revision": "673e7b4037be49f780a0d1b7071bc979"
  },
  {
    "url": "tag/record/index.html",
    "revision": "f3f52c6be5abb83df58a33e4f429601c"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "1624f6963c85962dda6f6e0f21561a76"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "f4ee8a09f99d1f2dd9e0026da80de4fe"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "59e9f141fa1ef3c4a4cc86d5f80d1da2"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "f0b58617b0830869640785e0004b40d2"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "6bd152ef7e2fd3ead27ef0f10acc2551"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "12a5e8706a3fc8efd3491a62e402c4bb"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "30505a81f515af5160fb18cef612d39c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fe4b65fc1787cf833c3abba64de3eb84"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "1cf5ab47b309d910f040880972399c6d"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "b74fd6043596ea95dfaa5da90361aa79"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "4c76774251a1b74656af97f2ec40aee1"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "53c148d7909c052bb2801f8e86e2aa2d"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "bbf8b36bf6b040b43339a42e9f62e033"
  },
  {
    "url": "timeline/index.html",
    "revision": "b6dc0c46cf7d2b13c2762b6e72fbe58e"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "715d4f62c23ff822af71c6de10df1c17"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "b4989b82b86634f79897e06061fe0510"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "fc28b3fd9cdbb3821eb7441cc7c87f23"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "0173492dd50bb6b4f248f30eae2054f1"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "02f5afb1557fbc9b50073883256a0baf"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "d00f056f44dc8b77c94e31e829e7bab2"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "c857e7ce6dcbbfa696ff4a3c8dd54f75"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "a4d6da43c0a4bbc8b22d81083342fb88"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "0140f4f9c8a0cded4c6404c4e6b05531"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "68c5d164e59e2dfb1722dc60f9535297"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "05edf0dc200133e8feb18b74f6a96520"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "16b2a750913d161e6b3fb24751e1f9ff"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "1a26d0ec0fb18cd9bfa50096daf29f81"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "64a68cbddbddb32a1fd26937c80c9bf2"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "12758a9b1f9a285ae11c0a22cc569796"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "4e2ffd22eef32a988838849b99a3f41f"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "659db666ef460047115b49298d3c64bb"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "f2897cd2f957a83037cd5d1698b9e660"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "c62d0ba034df09567c25bd311f3ee1ae"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "f9f4d90d3c72ef0968205083612dde5e"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "1111f7f746963336f049fda07ebcc617"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "59d0b4ad086a62ea9fbb3997d098be4f"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "7992fb700560ae34bdb85976fa8b15ef"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "8e0426c8ab25a5851e10781c2b7cc782"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "cf377c4fc5a77f0cd12a09c01852a8f8"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "d70113e651b7ab19551d36d3408811d9"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "e5f0e49a357849c5cf4d9570cf2817d3"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "64e260334abddc545bf48f6cf3707d81"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "ea3eb2355080f08755bfefb8c5dad454"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "222faa137e6a23feac1d0c88a0d70b05"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "360030b88a72d2a6672596c2f139616e"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "b41688f96b2f10317d10db16c7b7a6ea"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "3cf4d60b06bd4c025efb73d96a124ca5"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "6a40ea1f3f58df3205fff507df69780c"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "e2b82d614f5d9588105408bdbb23a057"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "be8937a6ebb41e7483b62955e4fd8c7e"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "6fdad3279cac032fdbaece28ceb7d015"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "899ecf9a33c74b38f543efdb36276196"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "8965d9412eea6614e80a1177b60871eb"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "1154d31e4901972fbc40a74a9da23f5d"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "1708961ff70f1584f59d59df1bd95e64"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "07edcb6e0daed22e57198fcda40c8bdb"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "bb844114fc1425027858a483b94c909d"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "baa22fd05b32934d5d202381020d0904"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "90d24eb2a3c3a2c72455f6d65615aafc"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "431343b99d5de6bfbb859ef83f1d3b37"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "5d55c9317ef26d6786a3516f5e594451"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "19319be37e6b55ed1bd0587c947cd5ea"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "43d0fad9e6602083b148b8fa365a8997"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "726d9e352060b57a52b1d34d59f13085"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "450b82fa9db5ff0ecb980f39edeb2e6c"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "ddfee7a4964371ef13fb486c6a93dc4a"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "7754f5ab6bfd2da44f2abd036bd34c70"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "c7297293dda3677b8b54d5901ad53bfe"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "a061fb3e1d70cdbbb5fc75823de0e5e3"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "ad33eeef832e7b05c4dcbe117436e860"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "275355adcc8b1c0903465731b29daac5"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "48a8d01e0831cc1221c476c6d3d72805"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "eac474cc95d39311adf825ceec90d14a"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "d9c97bf5963b61d424d6fb9725520b60"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "ba87ce0618973158afa24b1a1f85ac43"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "5f871e27674ec345c6022553aaa01461"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "f54b61bc1da776fc34262d7fa12a7803"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "2b8a2e81fa8bf234b8e4121ce85ee1fb"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "34ea3e14c8f2aa8782780c4ff1e8bbe1"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "1c3836c6b0a62777fdea69f463c5f9dd"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "61d18cb03ede506753c86097aab9053a"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "88f5c5959e92545891d199a99bdb9ccd"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "713e6202de2fd87f7bdb510c8d7f4270"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "6a41dd6edeed8813fabaad2072231fe4"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "4389bf3a7fe4c5e90a23c27d7867fb80"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "51ecd5d054db07d2e62fb1f80684cd2e"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "35d1ce5790780b27a68a01af50ee2a42"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "8ed6f34d8c4f14cc0634474cf3bf4a76"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "831f5173c63ff5eb2747fc117ab83551"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "be95144a55095738fad4c2371242aa1f"
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
