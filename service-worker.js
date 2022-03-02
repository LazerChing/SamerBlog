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
    "revision": "59d9412243ab985ec03140e90f8de072"
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
    "url": "assets/js/18.063c2be0.js",
    "revision": "3a6724087833d4ceee4e571039624341"
  },
  {
    "url": "assets/js/19.fc69ea73.js",
    "revision": "008cb334a087907e5cfcafa69dc3f746"
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
    "url": "assets/js/26.1897998d.js",
    "revision": "5310ad2fee2d5154745abfea1391a68e"
  },
  {
    "url": "assets/js/27.02476af5.js",
    "revision": "28282160c87ea21e69c9a5a4e725b5ed"
  },
  {
    "url": "assets/js/28.cd5a0c04.js",
    "revision": "af72883f5d6358164c86c05c07359a3e"
  },
  {
    "url": "assets/js/29.05dc3731.js",
    "revision": "b89e522cd182fc4e64439c5cd243b1aa"
  },
  {
    "url": "assets/js/30.75c059dc.js",
    "revision": "8bb78014001110d763347c04ce998a42"
  },
  {
    "url": "assets/js/31.09a09e58.js",
    "revision": "1efa3d751e233628af3f6b204c58d44d"
  },
  {
    "url": "assets/js/32.a15c2dd0.js",
    "revision": "befdbe143f814c24e3d80371adc6e8a9"
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
    "url": "assets/js/35.0a614c77.js",
    "revision": "57046b553914d5b05c9ebe9a00d3c6d0"
  },
  {
    "url": "assets/js/36.048f6993.js",
    "revision": "a8a71d9c77b057ec213009c5d3b860bb"
  },
  {
    "url": "assets/js/37.08b15796.js",
    "revision": "200bf4ba18c846e62b9ba4be60307c9f"
  },
  {
    "url": "assets/js/38.72cb040c.js",
    "revision": "8de0fa9dd0e3fd3597faf2f00fc4fd05"
  },
  {
    "url": "assets/js/39.1a83cb06.js",
    "revision": "33d64cf1eec795e220f7c10caa9e0248"
  },
  {
    "url": "assets/js/40.09cbd5bf.js",
    "revision": "a0d3c5addb38e2e2ee40b60020601cf6"
  },
  {
    "url": "assets/js/41.a11c121d.js",
    "revision": "7b620bb3f5ce28c548aa38402eb15ce2"
  },
  {
    "url": "assets/js/42.3e08de94.js",
    "revision": "c1c0200e9b27d68a76138d421b15906a"
  },
  {
    "url": "assets/js/43.893af341.js",
    "revision": "6bf6424c6cde2ffdc5d742fd19651b16"
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
    "url": "assets/js/46.1db22404.js",
    "revision": "70faa4f28cd4389a067d54faa9a4ba6a"
  },
  {
    "url": "assets/js/47.2316e562.js",
    "revision": "782e67541a06f6b2302d66b33bbccbce"
  },
  {
    "url": "assets/js/48.2df8bdda.js",
    "revision": "f02b68adafea939b8c32ba02f0715867"
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
    "url": "assets/js/51.593d33b6.js",
    "revision": "fbc4bbe57da2442994b322bc5374c848"
  },
  {
    "url": "assets/js/52.a464e392.js",
    "revision": "c8231dbb366fcab3ade4c037b7bfc72e"
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
    "url": "assets/js/60.b88d7f10.js",
    "revision": "1aea177f4bf69f6f98693590304f4463"
  },
  {
    "url": "assets/js/61.339f702c.js",
    "revision": "e475ce7ade7df18f6f9eab25b4456953"
  },
  {
    "url": "assets/js/62.8f6c8f0c.js",
    "revision": "e0d5a96f16a25d40215414bdb9b6a8d3"
  },
  {
    "url": "assets/js/63.b0710f81.js",
    "revision": "2a4a47a2bae1a702fb1fa07f8f3c0679"
  },
  {
    "url": "assets/js/64.674c9a6d.js",
    "revision": "9a2ed1bc7333e42bf98732203ef168b9"
  },
  {
    "url": "assets/js/65.61a81f48.js",
    "revision": "ac1095abe5a5902edaf2b390571300fa"
  },
  {
    "url": "assets/js/66.40edde6b.js",
    "revision": "1c9f33217c67286307e4dfe7c6acb30a"
  },
  {
    "url": "assets/js/67.c14c2fc3.js",
    "revision": "d5a020669fedcb291c637ee4aca7c79f"
  },
  {
    "url": "assets/js/68.656bd277.js",
    "revision": "b8b9200c1cd1ae2f2663c4922d52a440"
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
    "url": "assets/js/74.690ef1c1.js",
    "revision": "e8b1963126b10fe87545a1c3d52b566e"
  },
  {
    "url": "assets/js/75.c9b43e8b.js",
    "revision": "93e1f073f9fa7eb2057953b224c64104"
  },
  {
    "url": "assets/js/76.4453af93.js",
    "revision": "c652c3e98d11f79b973e4cc57eb958fd"
  },
  {
    "url": "assets/js/77.10cfffd1.js",
    "revision": "e33b35572f36dccaff28e7dd451ccc60"
  },
  {
    "url": "assets/js/78.e97198ed.js",
    "revision": "139b63de13525db0ce7f48447e3fb720"
  },
  {
    "url": "assets/js/79.a4caf29b.js",
    "revision": "4e2740df82338790b678c21dd392b671"
  },
  {
    "url": "assets/js/8.a89496cb.js",
    "revision": "52a4e7bacd5a5f4b0b887ef8cee45a11"
  },
  {
    "url": "assets/js/80.833f0b04.js",
    "revision": "705a7917b9a3271a1290384066b6ceda"
  },
  {
    "url": "assets/js/81.7d9f0ec1.js",
    "revision": "9740872e9c7baf431e76614f861a2b33"
  },
  {
    "url": "assets/js/82.f003c802.js",
    "revision": "6af5be50c88cb5dc40365fd0565a752f"
  },
  {
    "url": "assets/js/83.e15c7440.js",
    "revision": "16239b981793d03f078bd2a8a79248f9"
  },
  {
    "url": "assets/js/84.4fae78b9.js",
    "revision": "69a782d2211518d19474b3f0ad45f20f"
  },
  {
    "url": "assets/js/85.a655a88c.js",
    "revision": "cd373f8c992fc641fd6e3da2dbc52f58"
  },
  {
    "url": "assets/js/86.f79fad96.js",
    "revision": "f5a34e83c117feaec0b5c8d31dc2fb7c"
  },
  {
    "url": "assets/js/87.b44aadfc.js",
    "revision": "51f22a22ac47780c97c746a4249c7eaf"
  },
  {
    "url": "assets/js/88.1a351a11.js",
    "revision": "bc60983d18417956483dcfac96c97c3d"
  },
  {
    "url": "assets/js/89.94846c7d.js",
    "revision": "a7309822ce4dfccd4f7009649174766e"
  },
  {
    "url": "assets/js/9.71a69bb8.js",
    "revision": "1a928d7f1b09531c841332863169f334"
  },
  {
    "url": "assets/js/90.1564526f.js",
    "revision": "89ff6ed0933fa6f47afafde2b6d02fec"
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
    "url": "assets/js/app.6473c77e.js",
    "revision": "02b1d0737472e0d487287217f5ce3786"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "518557a4969ccd42457189179370141d"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "e3a23a6da09f0561cfa4fc43dd0e74d5"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "f32af5cb130ea80bd7f0b01abe268a11"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "476f0a4d64cd72ac5d314ffe97c6ebbe"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "72757024f04c8da8ea6d13fa69903a34"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "78ab5ae70e17a920c24048cd3bca7479"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "a2ad1a31e4fcc9b9a35a74be4bfb209f"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "33d77300a7ccbb70c3cd3146fd62797b"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "b18b95b6f7b4f41e2c12c69cfe2b62c8"
  },
  {
    "url": "categories/index.html",
    "revision": "635cc64c16553b2e573198e678860aff"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "214d58f329537c362a26302ceffcd639"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "58ef46e803c49712ecd5197dc65ac947"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "d4bb6fa5ef931f761923102889f1559c"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "5936f8f89a9ae5bbfd021bc5736644ff"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "ddec543b01640b907b5630a40d32c429"
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
    "revision": "397407c7b5c51983e804e88fd5c52549"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "bc07c5426e9bd965e3ea90ae8d6b15c6"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "5ab2bfc36988a91ed4366b90f6ab7c3d"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "af547a3fb9d4cbbc46c2707a9cd64817"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "d82861af21ce79e6777abe5f86b7c29b"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "3477025ec82c41dd62344bf448e9621d"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "a6619f3cabaf9d7dd62a1893d5204145"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "aa831fb21f1a8b5c75c1406fc03738b7"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "0605cf330e764a969bfaa713e59708c2"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "8520b8986a7e658dab8e5fe541cfd101"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "115c2c325bf6d762445c72f877770476"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "baf0822971b010d2cbe41c2ef906f362"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "b2b4d7aeaccdc0b05202871fb423ab95"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "9ccbf776010763cbb0559356a37819e2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e5b12cc0cb8648354a1dced775cf596a"
  },
  {
    "url": "tag/github/index.html",
    "revision": "08456544f4631dc27ffb811829cdf416"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "8641903bfbd7cea89aefed2403fc7d05"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "1fcac08c5cc70cceccf2de7f484db0b4"
  },
  {
    "url": "tag/index.html",
    "revision": "2aaf289f7d3891b76f2727fbf9216627"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "84922e5e371c0f1a4146961a8843e075"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "f8a8acbc25d25409d172d26eb5f23742"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "2a6e047aa168755d876de1b3ef097f27"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "b737000136d277393073d2471d955d58"
  },
  {
    "url": "tag/node/index.html",
    "revision": "fadf51cddd19849f6cb885833a174572"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "d11bc23c3226ef6e3817950b02b72b66"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "6b32251e1e86202f2158ce84af14d8d5"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ed91a6682fe9f88e5441833009ef8f73"
  },
  {
    "url": "tag/record/index.html",
    "revision": "3edc45ac9042f5cdacc37318c6b04c31"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "33d499bacdd193eb74cac267c32b6454"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "46561e8384802698f461e1a8d542f922"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "c446c0ebd7b840a8fefdf4e310a32a89"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "2f8c04f0720b67a69866d1c9e461a0b6"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "4f1051c546817cbb2956748bfd8f0017"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "5ae32c71812a6f3fbf3c73e1af933ef8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "567b5809a291c44f99a531b14cac13fd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "852714b8a93839a655e08932224e7f3d"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "30e970305509e9db4b7891c5997949ab"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "cb911e10992493012cd0bfab85b07ca3"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "8126b4a5773b20a6b64df5fb1081ff88"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "12c669bc404357517df0cd9f4fd11b0d"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "96fa76a9bd62e3847cab0c6a7254769c"
  },
  {
    "url": "timeline/index.html",
    "revision": "79051dc01efdb26780c677caa8142b8e"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "9b8069f1d595facf6ed01285c92c8acb"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "3008595f38e0e80309da576fde88b7c5"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "8550a89873975f65d2c28be86df88f76"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "9c1d7c7975d9f6b468ff45a48fc0cd76"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "38be3a39a11656e59c011b6bb68c61f5"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "de3df439e51ace599e0224297a5ecb17"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "f4f4044e06402940537f4bf9419e9e6d"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "575bd5c14f4903075631d63974f731f8"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "1497e26bb9baebb52a0967f71d115d86"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "aeb69e8fd193ea678f7c42164dd70f61"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "ae6c495f436502a5deb9755ff3cf9a8e"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "929d67c33ad2b03387de8d8834d21830"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "1fea2e684a388af9752a8140b7916897"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "307b1d68a2e8720ad01319f04c359412"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "e312a8053c537d75e345175fb43e9587"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "7147457530f529435b6935039a1bb12d"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "125ac61c337b408fc12d4b270155f02b"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "a34e650000da063af12a69bde3949b3c"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "321ef18897c831025f09ab2be30e1671"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "a5b4d3266c9b8877c6ee3dd3d7fda796"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "2101a52dc326d9f827752510c829d8ed"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "42b15752ac2ee497b65a3489fa77595e"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "cc490eb699f9d579f742c90e33034a44"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "26f26277f26edc902a9fff49c041e8a3"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "53cefaa7154861c4c321320fc9b1cc69"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "8aac7d1dfd1f17f03bb50f367e7c45c3"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "baba5b794ce9ab570d137fd203c7db60"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "06086293a9d6c2ab7a585c325ada2609"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "1bc2d4bc2ac46f15438adb2626e29d7f"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "f88a1141c1afbf270f21f74a10e1a169"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "61c524e3ec66f5ff42ce4772650a57d5"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "14746e1b896be6976794d2fb446c08b7"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "d13d2d2fb0ff984581981c16648e3963"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "194c8ec82a701e1489c888c2491d2897"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "e9eb5feb3c4e2c2c3f1ed9851489646e"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "7e214e45724dd413020488f1f96fbff8"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "a146e5d5b88463a357e0cb4a8ad5e621"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "83b1db6b52c0b3fffd200137dc5c95d3"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "9ceb4967a113c11d6f2be5af790732a4"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "cf3c138f671a9107058b609826c4fdf2"
  },
  {
    "url": "views/essay/2022/0222.html",
    "revision": "c64dd9b4100cbbfc97221b27e118b9d6"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "9ab68e73a4df6afc2ac9267b62cbf3f5"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "d33ec78df4aa8cbd4fbeaff0aeca5e72"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "1418e6c738954a1994ac12b5214f0819"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "8b1a5ca3bf5430f03dc5f745c3e2ef37"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "f11be0e4abdfce29faa7e48294757ae8"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "d9e8a93f060548a4ddc73ae30e3f6af0"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "041c1a64dbef5dadd5b15e28ad68cea3"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "520d0f53cd687bddd480e1cc45ab104f"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "7bf330224f718366e5902cf202ec7374"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "57fa95f3fe7c50a467b2c772c8f83d93"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "7468df8302d85ccc4bfed710f602c44c"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "7447981e7f459d4ef5415361374b5aad"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "45486401a853355ef0729cae84197d5d"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "2f9ca6ca4eca9c6ab2119065d8aaf410"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "b97a185140948f02401181ee6070d8e6"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "29d64e6fcbe9f9b204f963b1f98a223a"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "5cdd8b17d16238653677f781d0ece7b7"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "c7a7851656988a5979f4dcda4bc18ff0"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "08547300b2718fcf0d8300d4ecd3cd45"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "67878fdb3c75036f623d96c6b4eca049"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "02c218ecb547844a4f9773764c2d6166"
  },
  {
    "url": "views/knowledge/windows/git/GitRecord.html",
    "revision": "1177826a5182aed3e7ac1027d0de7e62"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "084ce886e67afaf54ee28df69a1df740"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "ee16acc5e0f9ab67a4c35c0a853ea26e"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "64438842a88e38d0d1d72d8b86c82fe4"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "d4f9c83f163815304fc250cac2fa9f5b"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "d3a9b8f712ab54d044f19ff83bb24099"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "95b7983bdb498b2d5eda70fb5a20b203"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "2bd565f18f11bbbdfb5197dd006663e1"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "41873d7602ec811c9981a60ad70c5457"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "330716e22b697af25f9fd9a35f243426"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "7b07552ea340e4946b06204dce0c39ac"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "90f1126c05b9715de276ac0b1150545a"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "d1b56cbcbb799192bafb34dcec8d01aa"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "c5b517486ec2bc1bbc4e664b6a5e492b"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "f129ab6f890273e9afe686e8d254916b"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "25a0d999f9d7b2e7dae0a7a8a31b0632"
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
