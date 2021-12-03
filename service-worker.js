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
    "revision": "b8e9ed7f64e451a5f56651d435ac8b49"
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
    "url": "assets/js/10.e15e679c.js",
    "revision": "bd961724db366bf3586f342ca28edf9b"
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
    "url": "assets/js/17.d599907c.js",
    "revision": "1e9fe78341b1180af7e94cb22082092d"
  },
  {
    "url": "assets/js/18.57ad4f41.js",
    "revision": "4540bb345d1ee643ab56089ab72d684e"
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
    "url": "assets/js/20.235a1d60.js",
    "revision": "5ecd0da48fdc128592e952611227cfc4"
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
    "url": "assets/js/23.b93995cc.js",
    "revision": "cc59d0d57808bd6b2917b90c28f1ea96"
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
    "url": "assets/js/28.7d1b9bf7.js",
    "revision": "ce90934a0453cb0554f31f52b2293400"
  },
  {
    "url": "assets/js/29.05dc3731.js",
    "revision": "b89e522cd182fc4e64439c5cd243b1aa"
  },
  {
    "url": "assets/js/30.b35a2046.js",
    "revision": "7b88877dc4c27731ec18eb071a18c49a"
  },
  {
    "url": "assets/js/31.32670a17.js",
    "revision": "f476ee4a49f42a04341c14eacdf8c3ec"
  },
  {
    "url": "assets/js/32.525fb313.js",
    "revision": "2e7503e4364dc8eeb4ea86d6473394b4"
  },
  {
    "url": "assets/js/33.f0e8409c.js",
    "revision": "7c7b9efaa4820b71881f6b9d6dbd1832"
  },
  {
    "url": "assets/js/34.62ab1104.js",
    "revision": "d83fd50d311bf97820499bc738be46b0"
  },
  {
    "url": "assets/js/35.72ea55ff.js",
    "revision": "f9b12468d1ef838562ccb280ea62b795"
  },
  {
    "url": "assets/js/36.373dbf85.js",
    "revision": "d5fafb0b9599fc6ed4f62340a964e690"
  },
  {
    "url": "assets/js/37.08b15796.js",
    "revision": "200bf4ba18c846e62b9ba4be60307c9f"
  },
  {
    "url": "assets/js/38.9105bfae.js",
    "revision": "409ce0680676d47842a03e16ca320ad1"
  },
  {
    "url": "assets/js/39.0739fad3.js",
    "revision": "a2086d857c75afd30a68c265ffe9fecf"
  },
  {
    "url": "assets/js/40.8eef9a95.js",
    "revision": "4839f58b979305a93721ab9db77e6ada"
  },
  {
    "url": "assets/js/41.2f7b28ec.js",
    "revision": "fd461820eb5132b8b5854dcd32f96dad"
  },
  {
    "url": "assets/js/42.54b89b5f.js",
    "revision": "89d5681378094972994e52124a69aec7"
  },
  {
    "url": "assets/js/43.c068bb22.js",
    "revision": "d0a13850b0b4d1bb2069c734b2f145f9"
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
    "url": "assets/js/46.afaba4ac.js",
    "revision": "c03f8fea455760c8aa609b387d1f6d8b"
  },
  {
    "url": "assets/js/47.0e7ab4e7.js",
    "revision": "04dc23f14f8cf227bf3c10834f051e16"
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
    "url": "assets/js/50.63369fdf.js",
    "revision": "097a123328e091b0f688a983f93b4dde"
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
    "url": "assets/js/53.528df25d.js",
    "revision": "3092a30dc03c721e72d7a592a675c54f"
  },
  {
    "url": "assets/js/54.a2c0f016.js",
    "revision": "dade84f59065ec0855c9bd7a7c8e3f7a"
  },
  {
    "url": "assets/js/55.27fb8943.js",
    "revision": "f6fb0e2460583ba23edb1a1068c14e5b"
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
    "url": "assets/js/62.5e381270.js",
    "revision": "aa28960e645ab9b228fd2da8203c3232"
  },
  {
    "url": "assets/js/63.a4ec2567.js",
    "revision": "db5d8664a97aaa2c3fdd431269e843b7"
  },
  {
    "url": "assets/js/64.0c1bd46f.js",
    "revision": "58db59938be35a2b4e8333162df6009a"
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
    "url": "assets/js/67.2ce2a65c.js",
    "revision": "171e125c8d7dde54540c667dc1465724"
  },
  {
    "url": "assets/js/68.ecedb794.js",
    "revision": "facc58238a09e3ee661ed63db3598289"
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
    "url": "assets/js/70.c4a75b35.js",
    "revision": "b5bdf2aa397b03d58ad91a205c618adf"
  },
  {
    "url": "assets/js/71.865d0929.js",
    "revision": "4b8b20a0b882ee6d7ee1b43362478b3d"
  },
  {
    "url": "assets/js/72.abb81aaa.js",
    "revision": "872d7006e2ed45e79e6ebd5945beeaa5"
  },
  {
    "url": "assets/js/73.6aa7f331.js",
    "revision": "fd506ae8068b91b364a9cbfc9f8e2cd0"
  },
  {
    "url": "assets/js/74.95ec1248.js",
    "revision": "711cf4837c4ef85761574686c8e223cd"
  },
  {
    "url": "assets/js/75.4c97b7c5.js",
    "revision": "d37e9f8ba3735d565b64b70349df3815"
  },
  {
    "url": "assets/js/76.3bb909c8.js",
    "revision": "d61041cd4de3558374357c0ee068a827"
  },
  {
    "url": "assets/js/77.22214def.js",
    "revision": "5fd34d3a6b81b2bd4b0339eb5011e5dc"
  },
  {
    "url": "assets/js/78.b7c38294.js",
    "revision": "331fbfc4e159ffa0395f893190cce5b7"
  },
  {
    "url": "assets/js/79.101b919a.js",
    "revision": "f7caa67e7a5a2799500fee43875e0584"
  },
  {
    "url": "assets/js/8.0abec78a.js",
    "revision": "37bde597c8d310c8ea0a71d454a0bfa5"
  },
  {
    "url": "assets/js/80.f75a2cab.js",
    "revision": "7a37ec02292ff9b3e666ddf5e7494945"
  },
  {
    "url": "assets/js/81.87ef551b.js",
    "revision": "7930615b0c937c28c73098e1b68af05c"
  },
  {
    "url": "assets/js/82.f08fbf57.js",
    "revision": "9183e78915b61e8119638d8c83d9bbc1"
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
    "url": "assets/js/85.4b7a367d.js",
    "revision": "c6da8554c776b0bda9f1bf3929e0c629"
  },
  {
    "url": "assets/js/86.d5a77470.js",
    "revision": "517d5f5e5cd426d1e78ea706a5489dd5"
  },
  {
    "url": "assets/js/87.011d78de.js",
    "revision": "4ec002a8ff71c502673c345ad5bbf441"
  },
  {
    "url": "assets/js/88.07ec09a0.js",
    "revision": "b580657964c345e3c3029bbbff27413c"
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
    "url": "assets/js/91.23689151.js",
    "revision": "a6e5ae0e3824d981bd0f892780ea8b07"
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
    "url": "assets/js/app.399fa310.js",
    "revision": "e6afe1320afdb006ca4199b8823486b0"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "baf273cf6d67df30cd0a5fdb68c2d60d"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "84eb2f94cfbb85590e9fdab474827c4c"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "b471cadebba8ccafd84c885105254291"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "28ab8bbd69b86481f06bf22678fe8713"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "0a549b07fc9f01e39b0d6c50f7b9a050"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "316df4d75d91a8fe1839f8f8949ac3c4"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "69ca9b7970e4aeb137fb672c0a40c410"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "d704dd492e5ea60929e1fe139860b58d"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "7c117898669617c4d5d229e8e7f534ca"
  },
  {
    "url": "categories/index.html",
    "revision": "657bea63925a3c360c216f95509fd329"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "75be49c596696fde334e25bf9d3535b2"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "6a1ab42751a4bc498fa51798cd53d838"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "8ff061f67ba2ca37b67dce72367ce8a4"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "ab8e373482e9b2e17d45db97cd4878c2"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "43df0526fd0feb38dadd1558f4517b86"
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
    "revision": "a8ba5425e3eaad1167f154241e909e42"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "ba104061f65b3d7225127440de1ebd14"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "13265773f60d029634e5d278cbcffaeb"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "7f71f76627af1f5de6b18a8fc39ee9ea"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "46cbc27fd09badf158df8e0f8dba3704"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "7bf3cd1ec88fa5096ee2cef2645440ce"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "00e3ddc32f95fbd5accb13f122c096ae"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "6bf13c04c526a9420b9c4d74e70f71aa"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "c0076aa0c226de5015a9f3b831a53af7"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "11bab47885de6828e994bef06acbb3be"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "631d5b7a0fb327ed0e150e5c46fa2886"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "ecf7acf4dfc82f548a6cb98aa3233ea5"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "3940b19ff2fae60d867416dbd1220290"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "7c3bda76a57d81c17d099a5581d88f5d"
  },
  {
    "url": "tag/github/index.html",
    "revision": "75dc37590e8cb31aa82d93241c36417f"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "e4502c7132c7fe3eb137ebcb31d289ba"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "b464fa9f4481b16a9c0c8179a0c02a7f"
  },
  {
    "url": "tag/index.html",
    "revision": "95252d41fe2813eeaec7fac273c7c8a8"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "abc57f402c35f21364418977dde40555"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "704bc6630ba14b1a9abc2227376224e6"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "b356589b6895b62851d0f3d2903c239f"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "8f1c1055bd5831cb40d079926ee0f876"
  },
  {
    "url": "tag/node/index.html",
    "revision": "c08c60ac9911a8cb37416c0abe2eefa0"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "e4bdcf380f3864f41865e8d7bb964a7a"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "095f316cbae69ffe573dbae35a4e5d42"
  },
  {
    "url": "tag/python/index.html",
    "revision": "35f2d45e31dca9e2b4844c741b4249ba"
  },
  {
    "url": "tag/record/index.html",
    "revision": "f6346b739c0f5f4612d053caa0fd9453"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "083a2722463dbdbc295e415ef3a1e71f"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "3f88311f550f892c5269de04f0b81313"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "0a797fa0c026226a37e178253bb9424d"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "9a1ca959793f276e2d8b26d57ed60b16"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "5766377e44a656712e33ef3fc95b6a7c"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "80b69fa4e14449368756405d8a822d73"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6b7e7781bccc9932ce427b6d373fc4d1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e8322d8ccbf7dbaf77b01573639daf8a"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "7cfd686572e0cdf093bc3f677590befe"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "57ca35ac5756e77296ebbfe1dce58d4c"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "86b066d7b4c7d01c3556ec0fdfd73301"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "b2b500cb68b8a2852029655ccc49f7fb"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "e106f51dfd6f027f40574b9499d47dd5"
  },
  {
    "url": "timeline/index.html",
    "revision": "32cf4bfc3c4ebfef4c0c02e85d5d2e05"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "a830b659e6f70a8a000094d0963512a3"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "2f407b20a2772fd3a1db154a54b04f7f"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "22535db82eec12d0c40b80b59717e9d2"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "f9060b2835a336ae5bb49b795f80b932"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "eaefcf0b22a802618f22e76715eb2b9f"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "291747b6e1a9191d39ef41d2ff66c329"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "5a2741b4f41bf3a6744a3e1062624690"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "a318d3c58a0dce944476e212e26a357a"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "8c7210e535873db2264a52595a212c8b"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "af661313cc676701ec23e1e43eb44589"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "c538e59ef61367ba2e06350a224da28b"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "0f6324e9a5fea5fe82f5cb770e054221"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "17f47339150475776daeb722debf3991"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "550a458221979f1925ac1f764524e623"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "531192c33e2c2db3db265ce5f1f5bacb"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "71b8ce92553541d8b6e4296731616ba4"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "ae355ab4a9c4b484b6fa814c47cbddec"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "8616789ecbd33b036103e1a33c8389b7"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "d11b05237e29d123effad205dad4948c"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "6bffbe5e5c18665eb7d4689516dd5bdf"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "12dceaca88c1a89a2dc8746e79953d5f"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "90ceb4d91eef4b339220038dc9ada665"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "6b4c73227c5c3a7ec0c1a57adbade333"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "75c71b50d6990e49710aae6f2f1a1bf1"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "c7bf291abb7f1a78f86af6b43710dbfe"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "adb172d673aa0f2b8914132db930389e"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "c9e0e582753376c34d89f292b57b1f75"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "2d7a5d16443f5166d24605beeec85689"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "db2e723b10e66cae79961febfa94b070"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "871c75f167ac33b3ee8453d5849797f7"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "212a36217c0c5300f326c1b44ce77779"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "6666f7d14fd7de321e6e136ee3b406bc"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "8479f39bfad5aae8f037b2070af53c42"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "625e03aae40605cea57341525e1f101f"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "1dc2337ae35c3d53f896a8bf28813e42"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "3dd1406918d156254d643f3726aa34ac"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "4383ff0e7a78e5baaa4b4c378280a23d"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "c7e7897ebf5cdc5b21e5e9eb594e2fef"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "c260790b786db2263aa27dd6cbbbdd12"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "7f80d78a22d3a90c493c9a7dc5873f09"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "118fa165434f30fea1df03416997eb2c"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "38f9f851d91e762b4d3dba07726680fc"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "c21320f65e2aa7b3b969961bd607b64b"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "957057663a5f5e2d29ed26d3d2fed6f9"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "ea72e2b3f1c5901daa1ed589dba9794e"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "1066c37a69a58423b36df17018b2f39b"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "8237609c09731a8bb7b0fbfd8ff98c9e"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "cef5d4d640918320bae6f1a409a58cfc"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "d0cda599b70fa0cf26197507036d671d"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "875c3c9cde593cc555a705389c7f10d1"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "f8eb576ec5458d02eb95e13abacd2b26"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "0a77a6bf79874971bc09b9f0bd30a12c"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "37a49f526e0dee02407d1cf8696bfbcc"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "1774340e1c5273e453a93dff10279acb"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "574634ef57cb3db35cf88124ca4441eb"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "5a932f1137239a63749ef4f14759a840"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "37a8e394dd3d11f509e19d1b2c8981d5"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "bfa856dd264f060183acd71dbec99ff4"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "4e910cfc08b0a8f98655b24dfe3786e9"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "771f1722f0b2138116ff470540d8c2cd"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "d6401c07ac3c9ec931487bc3c79ae9cb"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "3a51593568dee27ef3460bccc8d371b3"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "b0fc9c14f1419472d1139b4915bcf5a2"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "d0d69e1411b163e1d74e81f3fcdcf878"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "c8d06110b9b27b1c5c4579462a0694be"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "990552fba566919342f897cbe6aed0ba"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "d5670476170962ddaabaa5089b226481"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "bc5967a454eb48e1898e305b65007c80"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "342b927fc1cb4fddab6ae582afe96178"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "888665499037a5406bd332145394428a"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "860f2b0aa5567a2585c418b55a5614c6"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "654802a16497a6ea906a5e526c9b633f"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "d09c8b2e8a75b813b254c12886ac0c20"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "f4e6c5bb490bda63ed3bef0566f02d4e"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "02def599a12e9a9154d804a7638643af"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "186f2821045313125629e3a6ed5456e1"
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
