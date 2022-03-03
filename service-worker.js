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
    "revision": "b8e27315b53ef35aa22df5ec61b6be2c"
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
    "url": "assets/js/13.77c4410d.js",
    "revision": "cae174b44ff17076e1585b96f75b719a"
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
    "url": "assets/js/18.2f643988.js",
    "revision": "caf3427c164c8e0b60c14c34f6b86837"
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
    "url": "assets/js/20.7c539513.js",
    "revision": "3fa71f05ceaa0b21f9a5fcde3b3a7358"
  },
  {
    "url": "assets/js/21.ecb0c631.js",
    "revision": "d2bd9269a0003c208a7fa60520a76907"
  },
  {
    "url": "assets/js/22.a5b9d05b.js",
    "revision": "3b99d91ced073935d71f29a1069b9dcd"
  },
  {
    "url": "assets/js/23.fbecdda6.js",
    "revision": "aff674c4539b84be9098aab4322140cf"
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
    "url": "assets/js/27.542a17ef.js",
    "revision": "2310cfcf04edb46bda58a8b27722e8a7"
  },
  {
    "url": "assets/js/28.926d7d9f.js",
    "revision": "035b6f87ab389c415cdf33f520341a6e"
  },
  {
    "url": "assets/js/29.adde584d.js",
    "revision": "32902a257d31bb09e814633a049cadee"
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
    "url": "assets/js/32.a15c2dd0.js",
    "revision": "befdbe143f814c24e3d80371adc6e8a9"
  },
  {
    "url": "assets/js/33.23416f00.js",
    "revision": "41c64a79ce41dd5a032e3c585d179a9d"
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
    "url": "assets/js/36.6b4c3d3f.js",
    "revision": "0565125f44f3405c557dbb55442d0075"
  },
  {
    "url": "assets/js/37.0d5d0ba5.js",
    "revision": "f68bd6f9319954b34824791dc879a118"
  },
  {
    "url": "assets/js/38.aad2cd51.js",
    "revision": "af2d3e0b567b2c64fbe81ea2778671eb"
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
    "url": "assets/js/41.574ffc45.js",
    "revision": "28ac122b8a893a5760d979925b950c96"
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
    "url": "assets/js/50.189bef26.js",
    "revision": "1272346bd338aaa2a53797e135b719a6"
  },
  {
    "url": "assets/js/51.e82e6d26.js",
    "revision": "19c443b1f12dc3dc88f1a5cbd0887c53"
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
    "url": "assets/js/62.8f6c8f0c.js",
    "revision": "e0d5a96f16a25d40215414bdb9b6a8d3"
  },
  {
    "url": "assets/js/63.212803ce.js",
    "revision": "dc617dd7b3306059990694eaa5f317b5"
  },
  {
    "url": "assets/js/64.674c9a6d.js",
    "revision": "9a2ed1bc7333e42bf98732203ef168b9"
  },
  {
    "url": "assets/js/65.c66a84da.js",
    "revision": "365771c8710469349b35908b4ed88bb0"
  },
  {
    "url": "assets/js/66.f1315c50.js",
    "revision": "9221b3716826066a1f8951002e528907"
  },
  {
    "url": "assets/js/67.4ebf9b87.js",
    "revision": "af638274d629ed854a570e7f7e31daad"
  },
  {
    "url": "assets/js/68.656bd277.js",
    "revision": "b8b9200c1cd1ae2f2663c4922d52a440"
  },
  {
    "url": "assets/js/69.b08768cf.js",
    "revision": "20977f2217fbe3f394e7bfea0310d7d4"
  },
  {
    "url": "assets/js/7.ff65d71e.js",
    "revision": "83e589641a3e6c701a42d9a32413683d"
  },
  {
    "url": "assets/js/70.395031a1.js",
    "revision": "486ef8137346a9181b3cd1a73f951072"
  },
  {
    "url": "assets/js/71.6a108d52.js",
    "revision": "61d7ef98f11cdccf739ae34f5581a49a"
  },
  {
    "url": "assets/js/72.87ae7ca1.js",
    "revision": "e18b4a29a9256669f9471a3215228d40"
  },
  {
    "url": "assets/js/73.521b3b5f.js",
    "revision": "0869ebdea033b9c9bf768f57b5c51547"
  },
  {
    "url": "assets/js/74.d50ea997.js",
    "revision": "936256d2fcabe7565c724e02febf49f7"
  },
  {
    "url": "assets/js/75.c9b43e8b.js",
    "revision": "93e1f073f9fa7eb2057953b224c64104"
  },
  {
    "url": "assets/js/76.a62a3fa5.js",
    "revision": "801ee14f83d63e339bf62da2af28a104"
  },
  {
    "url": "assets/js/77.98df6a45.js",
    "revision": "bc3f3d9bd48400da833c7c4a6923204a"
  },
  {
    "url": "assets/js/78.1e5412cf.js",
    "revision": "0ed152948885b4a794829d423b0adb7d"
  },
  {
    "url": "assets/js/79.8ef65b9c.js",
    "revision": "cc7ce7132e09b1a065753e2d882b92c9"
  },
  {
    "url": "assets/js/8.c36f8ec9.js",
    "revision": "b0d5b2ac54abd74c4e8c294585f2e144"
  },
  {
    "url": "assets/js/80.59f61418.js",
    "revision": "48af834ca40a6b4acaa56c3f1372e0e9"
  },
  {
    "url": "assets/js/81.6c416565.js",
    "revision": "4083c2b0b607f4fd9f3f656765e83d04"
  },
  {
    "url": "assets/js/82.58777db7.js",
    "revision": "d6a4405a4ab7cb3eaa8628ccbb8fb791"
  },
  {
    "url": "assets/js/83.b2b5625c.js",
    "revision": "0e1ee0b9275ca70d3991ecba999d2767"
  },
  {
    "url": "assets/js/84.0630f6a4.js",
    "revision": "36287a0e01966f8bf9cc38ff9a5e6b04"
  },
  {
    "url": "assets/js/85.7c4f50a7.js",
    "revision": "a9b7c1e69a8e39a5137c04b7a22ba089"
  },
  {
    "url": "assets/js/86.33749860.js",
    "revision": "8dba0ce7ec5e75bb1d2a6739f5984ae6"
  },
  {
    "url": "assets/js/87.b44aadfc.js",
    "revision": "51f22a22ac47780c97c746a4249c7eaf"
  },
  {
    "url": "assets/js/88.43a8a046.js",
    "revision": "07c2b83e606da929bdc041adeffe8065"
  },
  {
    "url": "assets/js/89.02276dde.js",
    "revision": "589501d457157a8463d2050dcdaf2faf"
  },
  {
    "url": "assets/js/9.71a69bb8.js",
    "revision": "1a928d7f1b09531c841332863169f334"
  },
  {
    "url": "assets/js/90.124a4dd4.js",
    "revision": "fa0fa5b67e404afa0a984f76a67a441c"
  },
  {
    "url": "assets/js/91.e2cd66ff.js",
    "revision": "a20e86e137fd336c7a73be7890b072ff"
  },
  {
    "url": "assets/js/92.8ea9a223.js",
    "revision": "3a0cb856af1716fe1f38ad45f73b4135"
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
    "url": "assets/js/app.2efedbd4.js",
    "revision": "5f5bd8c1bcc1bb6a97c6dfd3a9b41afe"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "6fdb9a7b0007443e16003c3dfb25bb25"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "5d5e256a6494e9012a46f5f1976bc4b4"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "1c24c7828f137472c04b7b4780fae1f9"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "bd970c7273ae7d47c32ec09fb88475d0"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "3cef635284e29435026f2c80a5fedca8"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "4adc928e30d5eb65c6481111d21f06ed"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "0798dec35308e35b2567ff957934ad01"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "c1366d093e75602455279bed7ac5e2f2"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "9e74eff69c7af726b7fb76c2bc0cce86"
  },
  {
    "url": "categories/index.html",
    "revision": "1da52fa48c59695949a1bc8d2454325e"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "ddddf8d9be0a33197654985b2960b928"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "a158b32b825553fc2b73723a976f6851"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "acb9b3ff818ccf3396d59420ea4c7e8e"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "2c23b9bf57e176f9e003f20e3a8d56e6"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "729500293803795714ac0d65b9db49fe"
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
    "revision": "f215e56c9a4cadbff0b67f9f2b852301"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "93f79d60560a960498ce6038a796994d"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "68e08cddb47c36a713e207b0536968c1"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "2e3a0571dd0b4bfeed6c98459905a4c3"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "d99714be0db262c88d7f13c6f000bb56"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "f17c6979b76fd5d604c023082b8e8faa"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "d3382d3e0e1591d51170d5c3e88ca617"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "db060d062db2fb148a0abe81bc1412c3"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "33c91501364ccb77d28181a3db8425d3"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "c2b99e8247e4892a0efe667ab8057506"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "328b5631e9e1d6c9b035eeebda1eaf9b"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "9d1772da35c327655f90112d4e490ecb"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "7769c69fe9b9b5f3069c30cf0067c47e"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "ed2585761f3afd329e0f1e96c822d8d7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f0879176b292ebb53c6bf2fc5cce36ff"
  },
  {
    "url": "tag/github/index.html",
    "revision": "0f4e117cd67212a11ad82edc5fa6f5ee"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "daa26f84a1b4382067f2874d1772a9fe"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "3a71473819bdd9695e497dd12e1eea89"
  },
  {
    "url": "tag/index.html",
    "revision": "df7e3113c2c664af77ddfee1fe4f84ff"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "970975eab6118d0edd810ff885ade337"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "e83f8f18f85e937e51bfa9214fa7dc5c"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "a83d639c5b0e5850239e2655aaa75a91"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "14bd0ca3d6bf83cc2f53312d17bc667f"
  },
  {
    "url": "tag/node/index.html",
    "revision": "2cd9adadeff5e2d41c2ab7576b5c0c89"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "ee502344bcc1d51f745ee8d7823b63f0"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "c89783ff85e9527e17db30e0c327e4e4"
  },
  {
    "url": "tag/python/index.html",
    "revision": "87323eb70d28759188f0ee6ca25a561c"
  },
  {
    "url": "tag/record/index.html",
    "revision": "7ba2434a32134c46ee84e775af5019ef"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "36e529225160b8bba744b976c00f43c4"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "fb8cc9767d332f927626bb087c12dd1e"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "8fe01644eeabc24838778fd6a4b19e07"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "239d43748af6d34bbc4ff0f8f41e34de"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "861acd8c78c4bf2d880b84f9f5dc6f0a"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "5211e83c66243a488591245c90cb7bf5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "cc39c53c95c0f2693fa6d5056c1471fc"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1e75e8ba4412d42adf74b47c918c776b"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "fa71432c1e94bd5690146dc91be00c6c"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "b5fec843109ce71c4d70c9bc9626cfa6"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "2ccc80363f1acaf4452753b03a11d15b"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "be6e760646825ec77d664f301377a6ff"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "08c01dd5e6723fffdc1a57f2f5a8d917"
  },
  {
    "url": "timeline/index.html",
    "revision": "f420e0c267bd6f516e0d7646b1a0f172"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "155b1609101718e7e9f06abf0f50f050"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "c573e0367c48bfc18a032e7e33815a20"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "f61e306b6c42a1226552e7867e69227b"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "78bb4bf72d03b66f0c2bbb87eefd08a1"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "222696a84e675567d82936b7b4f3f5bd"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "72414b55627a5da4e9273c88c1f0e560"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "a62f693e6ed16fb564070db5e3098d17"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "2ba9860e5d5774722f1e02b989aa2833"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "b7a1b645f19a8638f6660427ea20a0af"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "726e08451c4bd5f477293af7c8f7f352"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "24615e10616b9187f9ba00bf428d980d"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "8ec999dd5dae442bd3eaedeb5d154437"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "b62e3ac56507efa8aac3ece8238b7f48"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "1d31f52717793a1b6f3a07dc95386738"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "ffdb5849c36f4a4ac149a7dfd20ad644"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "ef84e7075bcfc73e6acf9bd506915cfb"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "9c3db722988e650dd15ba4f7f9837af8"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "ab6277604fffa76fdeabcd084ca2e45d"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "fbe9de706be31f30b9fa3e8d73f6bddb"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "ec775e32dc990e83734074aaf04e945d"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "a4d326945601d60b3d1d99e49636cc6a"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "a196650bdf8dfdf8addcba4d4a640158"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "34163d7a13561cb17842da84df417e43"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "5b1f6b4a532464fe0e4d7f934891c76b"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "50fff26e276bd5bd1543b28c845f8e9a"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "ec8c7651fd580a4535beb8e812fda013"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "8ee102530edd204f4b2a6d3fe4927ced"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "ef59211c95989e7f94a21817913fa4a3"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "1edcc6270d96101847fd8d216204e060"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "44eb8feef5b7e0f08fdca51fb6a5a573"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "ebe0468c9dd6b89455b5fc21d87a7b16"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "889b5d3ecaf0392a8c34c01c75a5aa50"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "162dbd21a98221033973c89901d8b93b"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "fce916844dae092e8e5690811920ddfb"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "1e0eebabd15ef7a4c9f2418a995962fd"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "ac5790bab097a8278e9eaa25b35f8744"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "4a09434ee644ab0e7358d991f4c8156c"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "a1d5418330d023ea0eb74a78a1c5ba7d"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "a923eec0f378a4926ed50dbfebb28db5"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "a0b859e31220f05f1f4b23333ff8039e"
  },
  {
    "url": "views/essay/2022/0222.html",
    "revision": "daf5ce3d3553fe15fea2437609a7e31e"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "b690e32e1c9bd9adeddc05e3385aa97a"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "a0eeca4ddd7f7b5e0e955939c0bf5f8b"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "5aef400f43464f47ebb160cdeda34260"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "a0c37b94d8d7e1164c8c02d1ff15d66f"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "8e5a4c1ba060d2be0a3479694649d5e4"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "2486387f36e563c9406d33d59260aa77"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "939c4a12f941dc69468f1e016b112639"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "fc70a68fb5d3ef4f20d9a87e35f02ebd"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "afab46642288fee0b4e750199d28fc8d"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "9deca7378ab9f2601ffb3fd54526aa24"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "6e84bd535539d5ae61440cf7df83bd97"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "eef264e4cb8e95197a93fd17c19e43ea"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "11c1aff307c2026cae8e2901e755e084"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "0b6716aed704ce82103616cdd466854d"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "2a3e55f9b6255c8709113899282e8ccc"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "48b819b0e3e96967173acda99bdf5e31"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "aaef7be47953d20cf703d230c8fc81e8"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "18920d11c141970e9ab08480fcfff605"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "7cf331dcaeea2ce8d48ad4cd0f67edb4"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "96d58e0ef001cf118156cdb9aee393c5"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "31d7e2954bfb51777615b5b2f0b6f081"
  },
  {
    "url": "views/knowledge/windows/git/GitRecord.html",
    "revision": "96ab60de980a1b5e9b582f49fc339887"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "baf057ac40c8759ebb032a20f575290a"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "a1ab4a0e5317c1657bb7bdd6f64593e3"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "47843b8dacb5846089701e59860ad884"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "bb1af9cde0cf7f52e429d12511cf40ad"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "c5a33b0c899acf6f0232310d519fd5c5"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "e3585e2826eedcca03af3264d53f8d8e"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "a4b3cbb752f91660c675707911b1df3b"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "f36ee81ca5df355e56c0d1937ee07c6d"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "34408b13b14c4ad6b429421d3359e4a3"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "652e81508025288bebdf725df270319c"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "f30a32e3031bb5264e2bd56a842d7257"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "dff5dc59b4e4161598d05057e5408fd1"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "dd819402bf45313d851fcdfd869253fa"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "71bb873a1bd774ad84e4d20746e50b3a"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "a56d243a35865ab36c240ef9717ef168"
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
