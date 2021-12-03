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
    "revision": "5f5bb7f9b2ee5c415ed265365c9e4d1a"
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
    "url": "assets/js/10.c81bed64.js",
    "revision": "dc88f7f1997630d11f277c9dd8ed339a"
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
    "url": "assets/js/17.e42273ff.js",
    "revision": "d6377d41f50157ada5e1e4a2d94b4850"
  },
  {
    "url": "assets/js/18.15686452.js",
    "revision": "3437ed95ab0eea9f0949d4cba58fbf84"
  },
  {
    "url": "assets/js/19.b53fb5bf.js",
    "revision": "6cd9b3865076aa154adad2c8f9e5c6ac"
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
    "url": "assets/js/23.fbecdda6.js",
    "revision": "aff674c4539b84be9098aab4322140cf"
  },
  {
    "url": "assets/js/24.2c64d871.js",
    "revision": "edbaf027edb81c2d11e676c383a7ed31"
  },
  {
    "url": "assets/js/25.25a8ceac.js",
    "revision": "f8373190c149586d55939262be931143"
  },
  {
    "url": "assets/js/26.a0d8f5b2.js",
    "revision": "96538e0e776540ce829cc669124b42cc"
  },
  {
    "url": "assets/js/27.02476af5.js",
    "revision": "28282160c87ea21e69c9a5a4e725b5ed"
  },
  {
    "url": "assets/js/28.ec3eec24.js",
    "revision": "aa90ad62fc36d7bb2a45128dabc7ffd8"
  },
  {
    "url": "assets/js/29.f5297fea.js",
    "revision": "bb928da1f5019c47d8f37374b09556e2"
  },
  {
    "url": "assets/js/30.1f6be384.js",
    "revision": "2b78f8e36d8371a89f9a7dc7e3a600dc"
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
    "url": "assets/js/33.cede83cb.js",
    "revision": "71fbfaa4d3bf8665baaf676f454b302e"
  },
  {
    "url": "assets/js/34.62ab1104.js",
    "revision": "d83fd50d311bf97820499bc738be46b0"
  },
  {
    "url": "assets/js/35.d776c68b.js",
    "revision": "3ff87c7f6fa35430e883d04547aa95f0"
  },
  {
    "url": "assets/js/36.a0c1390a.js",
    "revision": "7dd60c2182a716e84459652ae9407eac"
  },
  {
    "url": "assets/js/37.47fe37da.js",
    "revision": "3b51d0b95a156103dbb1f015e849592c"
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
    "url": "assets/js/40.209fa833.js",
    "revision": "6b67096f2bab1ad4fc29f83c4b386020"
  },
  {
    "url": "assets/js/41.574ffc45.js",
    "revision": "28ac122b8a893a5760d979925b950c96"
  },
  {
    "url": "assets/js/42.9de7c5ef.js",
    "revision": "fcb190a326a12b49cd19d38c0aa8b8a3"
  },
  {
    "url": "assets/js/43.df1a02ab.js",
    "revision": "eb695025f4a6cb9c4fa9c44be285131a"
  },
  {
    "url": "assets/js/44.421748f8.js",
    "revision": "bbe3215cf5076d121e99831f18dbd33e"
  },
  {
    "url": "assets/js/45.da4c9ee7.js",
    "revision": "c11bc72eb5d53daf4fe4e0f981d0cdd8"
  },
  {
    "url": "assets/js/46.c5e84792.js",
    "revision": "e15433082c63e6b3e2894a6347917866"
  },
  {
    "url": "assets/js/47.3273ad1b.js",
    "revision": "bee1bff5146e42594f8582cfe405729d"
  },
  {
    "url": "assets/js/48.7dee5154.js",
    "revision": "e7b0104d0eb29fd7eed94f345f31742c"
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
    "url": "assets/js/50.87126066.js",
    "revision": "f8c56671dc0d6bea9ed7d50e2da79e06"
  },
  {
    "url": "assets/js/51.2544c08e.js",
    "revision": "3ff1de2cd49e8ea328544377bcc2b191"
  },
  {
    "url": "assets/js/52.8ee76b75.js",
    "revision": "ad41fd7ee1e2976010918eef28ef5ca4"
  },
  {
    "url": "assets/js/53.63806d62.js",
    "revision": "39a3072037777d7343209fb34d2c576c"
  },
  {
    "url": "assets/js/54.f4c9e583.js",
    "revision": "a3996e5bf9c5ed4a8c2b02837fa91bc1"
  },
  {
    "url": "assets/js/55.0a7f2ed7.js",
    "revision": "563d04b563a20bebf39494c0be74def8"
  },
  {
    "url": "assets/js/56.a6f40e68.js",
    "revision": "1679f29a6636554084858dbfcce972a1"
  },
  {
    "url": "assets/js/57.2439a9a2.js",
    "revision": "1b9eb752e4840c68a7f8840189a07095"
  },
  {
    "url": "assets/js/58.a1259a60.js",
    "revision": "2932c8901df53fc64fb337d8f192988a"
  },
  {
    "url": "assets/js/59.68faac1c.js",
    "revision": "e52c267469ecbe4cfe37e535a4307a25"
  },
  {
    "url": "assets/js/6.0972289d.js",
    "revision": "a90d39087df66a2c2ac43f24a882a127"
  },
  {
    "url": "assets/js/60.3807b4ed.js",
    "revision": "b286ef49a6982af970f283594ec2def6"
  },
  {
    "url": "assets/js/61.bcaab2ab.js",
    "revision": "a9de215713d171c4b088e00d9721fd39"
  },
  {
    "url": "assets/js/62.0850d99e.js",
    "revision": "9d1babf0b043813d16c80609d97f0111"
  },
  {
    "url": "assets/js/63.4cf50e81.js",
    "revision": "416a10102e248bf074031ca3d0c8e8c7"
  },
  {
    "url": "assets/js/64.0c1bd46f.js",
    "revision": "58db59938be35a2b4e8333162df6009a"
  },
  {
    "url": "assets/js/65.196b07a5.js",
    "revision": "1ce9de9333d5bfb1dae1b49c96d0751d"
  },
  {
    "url": "assets/js/66.620a9c04.js",
    "revision": "ed31dd13f0a572e526b4c3e972950de6"
  },
  {
    "url": "assets/js/67.d2dd854f.js",
    "revision": "61fec5cbbf0c545efa6305a0dddea714"
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
    "url": "assets/js/70.00b493e5.js",
    "revision": "5f8f3dc603a39ce228b5bc3e3bbaddf6"
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
    "url": "assets/js/74.745bc523.js",
    "revision": "b97b00ec6495dadeb4e4cb0d66a572a5"
  },
  {
    "url": "assets/js/75.4c97b7c5.js",
    "revision": "d37e9f8ba3735d565b64b70349df3815"
  },
  {
    "url": "assets/js/76.b1a6e976.js",
    "revision": "c005d5a97b9b4026a9a16724a2d832a5"
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
    "url": "assets/js/8.bbba3991.js",
    "revision": "188ab18893d22a86f5aa9bbeb7cfe6da"
  },
  {
    "url": "assets/js/80.dd78a7c2.js",
    "revision": "8268adc20b3e95cfcaeec17721d8be90"
  },
  {
    "url": "assets/js/81.c878cf47.js",
    "revision": "8ef573d5334f74856a5a599d4ee11bb4"
  },
  {
    "url": "assets/js/82.af1ac5d5.js",
    "revision": "d4749a2494ed7856d7e53187973b40f7"
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
    "url": "assets/js/86.d5a77470.js",
    "revision": "517d5f5e5cd426d1e78ea706a5489dd5"
  },
  {
    "url": "assets/js/87.f98de1e1.js",
    "revision": "01ed4d3668b0171a092954494152ce30"
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
    "url": "assets/js/app.fbfd71f3.js",
    "revision": "9484b817b96dd9618c2189d1c82cf523"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "2353d5e7bcafcfa82b71d98bb9ad6c4a"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "9e176a26fb62f113ead486c92fb16cfb"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "32acd31d40398da214de99ecde244d0f"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "6b2bf8682ae2beedab57df4609af044d"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "7bc10d7893b95c5889fbf09c5871dee3"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "3e64bdacfc32c74f776bc91e6d3697c4"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "5c4c1daf20c704f33ec459e2b7a73a06"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "85a9874166fcb23060c04c49fcab6764"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "2d96785b1bf0ee3ffd50520b2876c37c"
  },
  {
    "url": "categories/index.html",
    "revision": "f8e30e39fe2f677c25ef09c27f2950b5"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "caf80290fefcf17535266a9d2d9c0787"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "afe0eb9a1dd70eaca3013b15f79bb236"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "16aa411a3f7be4ba90df5c15ad4f9905"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "83e069bc133679ef19def02deabeb3b2"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "59cc58fc3210002a94358e9ba552db11"
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
    "revision": "9b1469132e39e1bc3c3de6571bdb962d"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "038d337eccb96b54332a2521a375d6ea"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "102fbfcb2e0169edb1b89023d958d753"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "635d205fcdea9d320c80eb6f82a8a29e"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "722d6c0c4a3d06effb8c4e6ef86c488c"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "6764b05252110647740fb8a81f48e9a9"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "01ac76ef387c4ddd2efc517c54c73742"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "84920b038727a7cca4acbecfa30ce936"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "d27e70d3b6e7431faf8c00916359eb66"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "63b0034b286ef49ffbfeb75b932028f3"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "b64d2c0cebd8d3a11d7fe64bfef9642e"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "18d194a07eca3e40248e0614728d31f5"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "ec3167751ec36884ac727e6ac655fe23"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "9d4303703b1097a91b861e9748eb797e"
  },
  {
    "url": "tag/github/index.html",
    "revision": "9eb610dba5b1b327314e2d52efd5e38b"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "d24a5be4d6ebc8daae4448b2c573a8ff"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "378d06bd6d9df1cd624a9f3266cdc43d"
  },
  {
    "url": "tag/index.html",
    "revision": "0f715ca07d41f039becbcef70ae917f7"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "c03e72345c9a9fcdc19a2f09657f0d39"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "3fdcabf058a51b7f686563bed205b390"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "28bd7b3ca1c4d1c864d465e10cc1c01b"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "b3736dec0c51cc34de3ecb5c7ee11ed1"
  },
  {
    "url": "tag/node/index.html",
    "revision": "1c3b0b95ee10ed5a9800ba6f648a72d9"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "b0da887bcc46df1363843cb420e7e056"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "1a63b33fc7a13cad2122c00fd5a586ce"
  },
  {
    "url": "tag/python/index.html",
    "revision": "71d37350bdd6a738691582b16cdbe494"
  },
  {
    "url": "tag/record/index.html",
    "revision": "2dfab631b75e34afa4126d4a3db4e218"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "c341b6f33da67a539ea2a37e1805147a"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "97f8ec00537c5f836b8c987a8dbcf8db"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "37e0abd387e3b19946422aa660163105"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "07fcadf2b933946f28468f789306bab5"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "636815aeb259dd85d50ca4897c73be27"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "2bd07fe319731711f771fc19bc4a2d7f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1b20490e18cfa3dcd70fe12a0835ebf1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "493b55cefd1808e7ab50355dc53130e9"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "9201ca4ef4ce2dceb61f7e0f47e0ccbd"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "0760d9ba0af3e23ee88dbe7100791073"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "c49223b631a21e5c31be171f5da26a16"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "29f4f795ba66cc33076f7a5bd7d781ed"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "720c6d0fd13ca77ac9d9d51dd0bc5793"
  },
  {
    "url": "timeline/index.html",
    "revision": "3efd0d3a4c09ff2b59c486b73bab2ca8"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "2027709ea121ab717c0c3fa4720c647f"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "453b4c312f8b7c3ed8820587b48fb229"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "ba0e5e959a20b9672771504663d6bdab"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "4351d70832de8d0c18b563b9a33fc598"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "7f0356398bb1cd75ddc5153cdec43373"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "bbf1365a88ec288e20aee25e8033ef0e"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "6ca3498d0495c8d121fa018ae2ee3697"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "1918b99d5a30bad75993a234daa6f8b7"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "75b133bf7d97b3ea9e561937805fefd5"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "5deab47e1f3af0d157d9c074c617c1e6"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "325728713f00c9d162e5f07af97e13a6"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "1d723c7a2d3b6812a9753461b4a10c9b"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "669e38c26444a8801b54f4531db31b25"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "675d017bd9e33755c4724be7f5408e3c"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "65ca40d00a342da9963a38f2250cac7d"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "3115a3ed1cd4c8bdb808e926a8f2e6d0"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "261157f688c317a1216eb61747a1bb0c"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "c4c0cac8b65a93e9ece6bf4e9b8619a9"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "c701b49aa5f002ba6d285b35ea6cea61"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "44b901cb173067b68f17f12247a5b3d8"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "2946eb942c03d55d2a4b731ae9a9bee2"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "824541faa6b546fe747b1060725277dd"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "f1bdac6915dcc16514596ab6312e2060"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "2db7f8114712e95929c1b917f99f6d9d"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "e47f55cf8360ab79382403282cbe7424"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "ebd54c7fd444ffb4a396f0a2e7af2da0"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "1061873ac6909a2727185df484379cc5"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "32c0e2a75319a1db5206cf336eedbea8"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "4c4402e244c1daa69730db0ba99a9cd9"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "fe0469b1d3cdb8e7318e8ba15bd8aa36"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "3360815d8d4513c96c9c273e8ac994a6"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "b2527e858ff00004b90c3258e52057f3"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "147a4d1336ce968cbeb29331a1c1de77"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "63a83a13204d6584fece8dc2239b02b3"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "7ecc5d642aa774f91fabd4f49838fd9a"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "ad1c5b97fd36f92a683931025ffca7de"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "4f1c77a89c4ed820f69dae960f952290"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "1458c5431153a5221f76debd4232abf5"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "cfe860b8befb604c967ef7cec4cb5777"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "4261c40c05b716ac0efffccdfecc66d7"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "13f6d8bc063131b979991ee84602e6d0"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "850ed287664c89f0d25a52842c5e52d7"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "6ef362154fab816257a2d15436b0d017"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "123948193b5d62a8dc2fc0fb72985ee9"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "4e5c4cca8c7041342a6f434759cfa57c"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "88e5334b141e160b2df3d30a83ce0c80"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "033251a5b0315ded940c89b9cd0ae10d"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "23d4a2b7794bc8285cec0a01fe87dce9"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "7bc9c207517b90e35ec819fa55507d80"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "f652304a21ef4c1f38d69adb13ecb36f"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "cd4144a58dca219dbd07515e9f2ab808"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "897e9bf29851de9997c9487a0a678ff8"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "dd847c744a0052d56c8a0d7d024dbe8a"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "87640fd0c23b196e82df5aaed45db43e"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "4d02b92601ae2461586a58b388ba2b19"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "356d3c0e2c117d708596745aa069c441"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "13dba5735d8141642472a075ee28fff2"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "81f6b7909eacfa929be67a2d245ac3f5"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "7c90f531a5a20ead1dc457602b935592"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "2c1963036ca88bf17eb9e9d8caeee630"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "a8c86de4d4ee8e7dc7ec77aa7395c500"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "050a33096fda4b72db4c420385a9d101"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "9c75af87e1f0824572bbf3c8aad82ba6"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "dc7596241d766f69b6b139f3cc37b353"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "64c849beea21e69b90bf79e6052a4e0e"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "5b3cef760a857ef717ebb34426e295ff"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "e78ca3363fbe422105d0cb738146d3c9"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "175436f1a0faf98a3ad027a4991afa63"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "bda8235395a04355d0e1777dc530c458"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "08ebafdd478f0d80b4d721ff2a0ef27f"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "07feb8576937e75e942b5d719b5170e2"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "6ecda9b9e9770ccce49fc99445b5cc16"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "cc5999db12f9bc526d253f21086e4dce"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "2ceafde0e1ed3e68705f5878d1f1b623"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "ad45813299be5d7caa238de13d63ab8b"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "2a1d6b7a9fb985b54534420136be84d7"
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
