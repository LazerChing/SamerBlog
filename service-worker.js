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
    "revision": "8b86bdd6939587c7c4ac1cc0157a88ef"
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
    "url": "assets/js/10.981e556f.js",
    "revision": "888401cddf44cfdeab0e2321d52f99b2"
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
    "url": "assets/js/17.7f4dea77.js",
    "revision": "4681d7c67a9845a4756125128e37a587"
  },
  {
    "url": "assets/js/18.aacddc60.js",
    "revision": "beac1af371a1034765e59127f412d8f0"
  },
  {
    "url": "assets/js/19.ada47ccd.js",
    "revision": "41ec4ac93255925e4b55c83c0e0dc4aa"
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
    "url": "assets/js/23.c85d68db.js",
    "revision": "2349e623f592a9d3ae68e17e107796f4"
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
    "url": "assets/js/26.8b3a9828.js",
    "revision": "6a4e0bd8de211b19d008adfb070a82d5"
  },
  {
    "url": "assets/js/27.fc760a60.js",
    "revision": "bd6aa8879cd7c2a932c7de203d3c8845"
  },
  {
    "url": "assets/js/28.ec3eec24.js",
    "revision": "aa90ad62fc36d7bb2a45128dabc7ffd8"
  },
  {
    "url": "assets/js/29.05dc3731.js",
    "revision": "b89e522cd182fc4e64439c5cd243b1aa"
  },
  {
    "url": "assets/js/30.ccc81554.js",
    "revision": "a598c578a5a6d48aa63927b33967a7b2"
  },
  {
    "url": "assets/js/31.09a09e58.js",
    "revision": "1efa3d751e233628af3f6b204c58d44d"
  },
  {
    "url": "assets/js/32.853d24e9.js",
    "revision": "4d8889c6ac71e189824a561ced0b49d1"
  },
  {
    "url": "assets/js/33.0c83eb6b.js",
    "revision": "d2ffee937b08a1d551d846473a5252af"
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
    "url": "assets/js/37.0d5d0ba5.js",
    "revision": "f68bd6f9319954b34824791dc879a118"
  },
  {
    "url": "assets/js/38.05300e05.js",
    "revision": "295d69b340f89cff98cee70caf6f0b7d"
  },
  {
    "url": "assets/js/39.1a83cb06.js",
    "revision": "33d64cf1eec795e220f7c10caa9e0248"
  },
  {
    "url": "assets/js/40.209fa833.js",
    "revision": "6b67096f2bab1ad4fc29f83c4b386020"
  },
  {
    "url": "assets/js/41.5d75ea01.js",
    "revision": "ef0be6b6af04e21966b3de12bdac892b"
  },
  {
    "url": "assets/js/42.ab6bb5a3.js",
    "revision": "fa2a21a072fc0cfebcb52b3c8d929cd5"
  },
  {
    "url": "assets/js/43.36c9f6d4.js",
    "revision": "8b40186647bcf0d9e1416c038a8062c0"
  },
  {
    "url": "assets/js/44.48552f95.js",
    "revision": "2902f631c80ea60b7f52c8ca6a070c43"
  },
  {
    "url": "assets/js/45.5fe5ee17.js",
    "revision": "7196941ffaf278a4372101e4deacfd31"
  },
  {
    "url": "assets/js/46.1157df42.js",
    "revision": "4ff7058b49f2e303a267dd82782905ed"
  },
  {
    "url": "assets/js/47.0e7ab4e7.js",
    "revision": "04dc23f14f8cf227bf3c10834f051e16"
  },
  {
    "url": "assets/js/48.c3c19817.js",
    "revision": "e391d169f61a282cda10171031d07c00"
  },
  {
    "url": "assets/js/49.0fba20d8.js",
    "revision": "3f347ca22cf4206d3492626bf87300fd"
  },
  {
    "url": "assets/js/5.0c4f2251.js",
    "revision": "9d95b4c340f0e49468ad09435fd03e0b"
  },
  {
    "url": "assets/js/50.63369fdf.js",
    "revision": "097a123328e091b0f688a983f93b4dde"
  },
  {
    "url": "assets/js/51.d5c4b9ab.js",
    "revision": "4f4d77cd741974f9d77c123c1277fa2e"
  },
  {
    "url": "assets/js/52.5eb884c3.js",
    "revision": "3be896f73aff71bf8aa7d9348e0e1a68"
  },
  {
    "url": "assets/js/53.5a4c2860.js",
    "revision": "d6c7052293ac9d23238689ee35f0d8ea"
  },
  {
    "url": "assets/js/54.a2c0f016.js",
    "revision": "dade84f59065ec0855c9bd7a7c8e3f7a"
  },
  {
    "url": "assets/js/55.a93a4fcc.js",
    "revision": "7d8adaf24d30a18e109ab8264b9125b9"
  },
  {
    "url": "assets/js/56.757f7aa8.js",
    "revision": "c9edce473aa2a3f189cde685299e96df"
  },
  {
    "url": "assets/js/57.0dc7ad0e.js",
    "revision": "6da3a7b806e78e5ebb5c09eaa9f2f81c"
  },
  {
    "url": "assets/js/58.c91cdbea.js",
    "revision": "afc4524df14b6d26711d787bb8d0afc8"
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
    "url": "assets/js/60.e01423cc.js",
    "revision": "d9e35cca30f1802e569904e966f518f7"
  },
  {
    "url": "assets/js/61.59f804b0.js",
    "revision": "174f5020ec86c2c604b5d96fb3e56c62"
  },
  {
    "url": "assets/js/62.2ba4e7e2.js",
    "revision": "aaeacc777ff8f82ac3af8b40becd277b"
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
    "url": "assets/js/65.58add987.js",
    "revision": "4ea0a2aae21b15b2d539976be3175ec4"
  },
  {
    "url": "assets/js/66.f92743cd.js",
    "revision": "8866ee088dcf38d8b1ad548d7a079522"
  },
  {
    "url": "assets/js/67.06ad7c65.js",
    "revision": "e760d0548db54431b9c18207781e6609"
  },
  {
    "url": "assets/js/68.9f1e913a.js",
    "revision": "e119c02954ead871029707f3163750d2"
  },
  {
    "url": "assets/js/69.da6eec6f.js",
    "revision": "f7b0d203fff8653d275157a695e44675"
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
    "url": "assets/js/72.fb45158f.js",
    "revision": "04a10131970d3df8cfe802627b47e345"
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
    "url": "assets/js/78.08964de0.js",
    "revision": "d2bee73f011af1a1f3e4860a84e92090"
  },
  {
    "url": "assets/js/79.c68035d2.js",
    "revision": "6e3922eff25048d45f139b4391c47730"
  },
  {
    "url": "assets/js/8.c36f8ec9.js",
    "revision": "b0d5b2ac54abd74c4e8c294585f2e144"
  },
  {
    "url": "assets/js/80.467f5928.js",
    "revision": "ae11684f72816600a0502693c47f4b2b"
  },
  {
    "url": "assets/js/81.2a49ec3e.js",
    "revision": "8d3ab23a4bdd294a4a9662e702ae98ca"
  },
  {
    "url": "assets/js/82.77fa4941.js",
    "revision": "797431d0d964b84edc486a17c6797646"
  },
  {
    "url": "assets/js/83.1fa8a973.js",
    "revision": "8e499ffe6eedd12efcc749be5e52d59e"
  },
  {
    "url": "assets/js/84.b4781912.js",
    "revision": "491c7148d448fe11b63486e0e5f40342"
  },
  {
    "url": "assets/js/85.2c21def0.js",
    "revision": "45afa6774894f71e2c928946ba052298"
  },
  {
    "url": "assets/js/86.e74c20fc.js",
    "revision": "2f7ef36ff0a402dad9c5581d36e342ab"
  },
  {
    "url": "assets/js/87.0b775de0.js",
    "revision": "7ec3ab0f1012abb110f06f03f0e5ef85"
  },
  {
    "url": "assets/js/88.53f2d220.js",
    "revision": "f1b16cf25b131d6c58af8585b323f65d"
  },
  {
    "url": "assets/js/89.dfe0e779.js",
    "revision": "abfea088002fede8ecbd52697904af60"
  },
  {
    "url": "assets/js/9.71a69bb8.js",
    "revision": "1a928d7f1b09531c841332863169f334"
  },
  {
    "url": "assets/js/90.24e092f5.js",
    "revision": "ce333657de904b5843928b1a1a2cf522"
  },
  {
    "url": "assets/js/91.62690c2e.js",
    "revision": "716b62e1e9071a10ae17e996e2b09b56"
  },
  {
    "url": "assets/js/92.da3625ff.js",
    "revision": "f41dfe983dfd7a02f93dc5683a25b606"
  },
  {
    "url": "assets/js/93.9348b0a7.js",
    "revision": "3acbfe46fc7fff66be96360ba24a628d"
  },
  {
    "url": "assets/js/app.1a5248ae.js",
    "revision": "01c4536ac904c40083a34ed1cb562183"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "cf184600d08c552105881a842e536d1a"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "ebfb7819a9b85a6653fa089b465f8fd0"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "7c346bc859db8c973a64b83173c9091f"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "2ddbc137f0d15e4efec970ee6b7bd78f"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "24511dca2912e81f6465ad18b2fd1533"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "268ee66ebdaedcb04bf081d9f64c5429"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "7d25f36d5d7b91276eb6a98bbde67361"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "c8f6ff34779e36597c3b2378ecfe166f"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "56bcfe021ca188cf83092b3cfb090931"
  },
  {
    "url": "categories/index.html",
    "revision": "ecda6e55cb2fd2825d7f1d3ecbb10722"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "497fee106a54a02448e24f9bde9aabd0"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "3d3ec6ab6e1b09854535e9fb000ed37e"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "aff6e39209807384f7a6e64b519bac3c"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "e308745a3c07bd7fa04b71831cfbf119"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "fbea42bc922966866d7be42dd4d67c97"
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
    "revision": "c1453e5f0b28f5c08651dcc54ba91fb7"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "0b1a3a71c05078a272bf380a7ef37f7c"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "f3b49feae960a420c8b248dbf86672e5"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "1ffc9ff540d9b5c36aa18ff29ffb6b10"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "b2c7da042330dca5e1d2be178a8238f8"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "b78742852431d033c57125b0389df76f"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "f5df91a12e95bdcdd6e7f9f8428d5b2d"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "1cb3c78bbd8bfec13dbcc0793c60c034"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "d5d58238597f6779e483cb3310c80e1c"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "caa33c3589d6a713e66c7a35a8ab0731"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "36aece9d4ee013b5a6ee6e975e5c8ec8"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "3d900796f29062d9b03bded4e7854561"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "19bca8463264f9d68afc4255afc23918"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "053bcc1fac0e17280f3765e767f2372c"
  },
  {
    "url": "tag/github/index.html",
    "revision": "f75c3185f449c4e2b85751ad6bdaa936"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "065a8cfc6be26b0a395dc9d43dc4a76e"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "f346daa5b6d63ead9fe8799657ca265a"
  },
  {
    "url": "tag/index.html",
    "revision": "855a221424d645f1e7747bfe40b6e46c"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "d64bf77217d53c08d21faa252a0ec66f"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "42e1dc7bb77889e4bcc7e765e840179c"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "40ba9e38cdb40b3c9a4c96b7a67e3602"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "669d4cc49094276d55d8b5cfc6f19117"
  },
  {
    "url": "tag/node/index.html",
    "revision": "9c5f491f8b7fe516d37f32979f59a4da"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "a4bfab2dd0193b3f4b0c66bc5e5eeb64"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "8fef55f1c488dc517e6b6f9fe35e835f"
  },
  {
    "url": "tag/python/index.html",
    "revision": "90911c4c780b44c536f2a11b0a0686c3"
  },
  {
    "url": "tag/record/index.html",
    "revision": "b244edbcca81598429f0a140fdb570e4"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "40407f5cd129b258ddf991d3312b88a5"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "56820a0877264d79cf5d821e4ed51442"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "f8c34840273d6d0837c0f9567c1838fe"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "9e5c804fa67e04ca337efed6487b6a49"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "c11b562c0b283d012ce89f2a5bc6d59f"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "e864a3fbe9c9a1b36ef5766ce0b56c34"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8586d215e9f1451b412ff6425597dbce"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "699d8d9d676814fdb62d160b14953c36"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "2dd1f48a8c3f064454f6c52bc285625c"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "50e8f2a2c415d2eefd1b2c5c40b89463"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "dbb6c796cae787e02c9c6acd87333206"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "197262881d15513d66f5bb209379ed3d"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "58c1e1b0c6c47d761b92fe9899598974"
  },
  {
    "url": "timeline/index.html",
    "revision": "d10241b201412ca1b8277a6b6b5051ff"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "40a4bb88eba3ef7acced6a2db85ddf49"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "a2cf49ca52f694228b6fff3d96f3884d"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "b5aa618f06a38e5829b69e2bd1916d7c"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "f5ed14b386c3271a427ff4273142f407"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "d5e90b5f76f7d1cada0b56730efcdb67"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "6dd03e5e213068a7818417b973491fcf"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "e3f796a31f0173e37dea2833ecce125a"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "5f325c96c4d7c6e219cb9a175ae15307"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "76034e6a782473641195a55d543e4376"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "22ca8da2bb24f731f1c02075825eebc9"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "d49dcdaf5cadb1220cccad303d3b6746"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "29e849ee9ae1429031adc47c626c4f79"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "4845a091f8885d099a12e58af0623920"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "9389c197d4ecf9526cb0fd6ba3ea960d"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "07520dacc20832013da2572a29743cf6"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "dfade836b8242a58b4e909d108835627"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "56224801bbb337e27a70fbe697f553b4"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "5a97dccca0c0be4fd498bfb5ac464660"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "ed85b03ec5cbc7220b5b07a1b58ee9f1"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "0569af2bb28fd1b4176a81479c9ca00b"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "a3d6d267508d6f55c243c018327b6328"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "8b18b1ac113ab0119a5f867e0a90fa2c"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "1c350164a698335050616ce07bc2a78d"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "ebd185aef7602229ae5e5ac6cb791998"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "b06bd738e0fa9e6836fab27bce554956"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "7b4623d67e0ad947af89229013d673f2"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "26af7f7adfcfc8a3fb02172420665ab4"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "3c0d437d3dd7bd56770868752ca1e7df"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "6428e0a7d4c8a8aed0ec5348f7488466"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "7f9f374cdae96cb416ae5b762cb8ec11"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "0301859be8954079e526c6f7374b2c00"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "95c39567c6357077b17405b099533a7e"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "beb36de8d5fbf6f7496d7bc52323cc17"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "776cd3003b5cef556035601c04821595"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "38b0ca7298cb24eb92fe081245e949be"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "b2a54ffafac5c1413ecf95712306fc0f"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "25810251bd7d768a27b8c182cd76838b"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "8b650790569e576b44c6384ec5d015ea"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "05e3627c87e688665f5ffb0d83a3ff4d"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "75119f36dab86f3f23a522f41cac34c2"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "9d6c2c08b2c26d4b14b2cb899228ced0"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "f42f164c83a2cd31e4e082c4301aef1c"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "6053270b9c190e120833aa8f33b40b08"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "1c17dd93376b979df652396de2cccc57"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "410ed1c90a84dba62e3bbb648c3d415e"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "39f402b1bf06f76b96b20aaf8dfadef5"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "4328187cc39aed6d738db38fb2b6b92c"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "09dc3da5ecd231db03284ce45ce113ef"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "826dcacf00e48627a8f1491e43992b5d"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "398654ae4decdec66766ecff151c82bb"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "55a455c9d671fa9818b5e59aacc70612"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "5998e302d24ddd95e3c340bc473cabc1"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "1abda611d057ad7d17986399dd8ab778"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "e2b31303badf187f8a43386da1bb8e66"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "f16b4241fe1b9b4ed6dd1e31f4f9fe64"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "bc6f633c4f25dddcd5549ed822c90fb8"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "4d7c757f20650bb24b131fd408c6ab71"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "d9bd396e02abbd0f1dee1ca9feb31bdc"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "fbdddc511778a2c1ec091f71cf4ec94b"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "c7a4c3d4168d83e5e0bcc16584262303"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "a0665db802b6d56f29a8b00b64a71930"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "6fbd10b1d395be334316cf92d99056f7"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "5c8bb5eb30dd18575c202ee00cd035d5"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "debbb2f3b7ac2163de5848017b5fa099"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "bddf61011cfe4e246ebbc29102737800"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "478d99d317e5ee783667c523a4f3f0f6"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "45245583cd8d6fd16131b2a22aa2d904"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "6ee119ce5dc8369f8fb85c379cc66334"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "56392046b49a55f9cb29666fa81301f2"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "adc236f2b9b52f9386d3f3b6488a833b"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "d74ab1d43dbdb6a15f48f5af17bdfb68"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "61580df37ebf0e39783e6ad0dabf1576"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "8f82b3a6577f4bc81b2da19ff5ae3f88"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "9ea6655d384fba940c662fdb0a61b627"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "6a861547f1018291e481f3d95f97e226"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "c34c4f3af0bcc70c41a7d94696d5d825"
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
