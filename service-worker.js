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
    "revision": "cfe0d729620b180a057f7a606aeb52c8"
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
    "url": "assets/js/10.00058c8c.js",
    "revision": "6a150dbe46f6a63e0dccd35af38f9753"
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
    "url": "assets/js/17.541c8024.js",
    "revision": "16a06305fb3971053f0049c69a0c5d06"
  },
  {
    "url": "assets/js/18.57ad4f41.js",
    "revision": "4540bb345d1ee643ab56089ab72d684e"
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
    "url": "assets/js/23.c85d68db.js",
    "revision": "2349e623f592a9d3ae68e17e107796f4"
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
    "url": "assets/js/27.6cf187b8.js",
    "revision": "23a96f62ba3403efac8b203277148a14"
  },
  {
    "url": "assets/js/28.cd5a0c04.js",
    "revision": "af72883f5d6358164c86c05c07359a3e"
  },
  {
    "url": "assets/js/29.7bae6795.js",
    "revision": "0df7f5e969409905eb7b5012c619b44c"
  },
  {
    "url": "assets/js/30.efff71ff.js",
    "revision": "fa8edd3a783cc4689f366548ac2cc012"
  },
  {
    "url": "assets/js/31.09a09e58.js",
    "revision": "1efa3d751e233628af3f6b204c58d44d"
  },
  {
    "url": "assets/js/32.5759400f.js",
    "revision": "17fdf19abd7f0180ecee74f16c9a11ca"
  },
  {
    "url": "assets/js/33.0c83eb6b.js",
    "revision": "d2ffee937b08a1d551d846473a5252af"
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
    "url": "assets/js/36.048b7cac.js",
    "revision": "b113794b95eb9d5872bfe78af85861bf"
  },
  {
    "url": "assets/js/37.011ea175.js",
    "revision": "f85b047e283221a339431274e903b137"
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
    "url": "assets/js/42.13e17269.js",
    "revision": "be5762a50353e14ebaf8892487b70652"
  },
  {
    "url": "assets/js/43.3e263944.js",
    "revision": "7f09ae709289a0ac25b68b6c155d75b8"
  },
  {
    "url": "assets/js/44.48552f95.js",
    "revision": "2902f631c80ea60b7f52c8ca6a070c43"
  },
  {
    "url": "assets/js/45.da4c9ee7.js",
    "revision": "c11bc72eb5d53daf4fe4e0f981d0cdd8"
  },
  {
    "url": "assets/js/46.0f1b4f03.js",
    "revision": "bda242e43c625b3174aef07b844d6ec1"
  },
  {
    "url": "assets/js/47.0e7ab4e7.js",
    "revision": "04dc23f14f8cf227bf3c10834f051e16"
  },
  {
    "url": "assets/js/48.31141068.js",
    "revision": "36d147b1ff3150f28969d208183ac8df"
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
    "url": "assets/js/51.c226ec7a.js",
    "revision": "780b06c48bafae66f291dfdcff373c38"
  },
  {
    "url": "assets/js/52.c1f389b1.js",
    "revision": "e44cdaf9b95ba7200de86d0477ac59a5"
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
    "url": "assets/js/55.27fb8943.js",
    "revision": "f6fb0e2460583ba23edb1a1068c14e5b"
  },
  {
    "url": "assets/js/56.898f291f.js",
    "revision": "de7f078a0253551c8a45ba0cac28a8c5"
  },
  {
    "url": "assets/js/57.37b36349.js",
    "revision": "67c9f5c6165c39bada9b899724048fbf"
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
    "url": "assets/js/61.c6f3e7b5.js",
    "revision": "a9ca034e58be1e25f359faa6844e8fc2"
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
    "url": "assets/js/64.0c1bd46f.js",
    "revision": "58db59938be35a2b4e8333162df6009a"
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
    "url": "assets/js/75.ffb4df53.js",
    "revision": "75d7622fc59d9326b1bdafac48a9231f"
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
    "url": "assets/js/78.08964de0.js",
    "revision": "d2bee73f011af1a1f3e4860a84e92090"
  },
  {
    "url": "assets/js/79.26f5b253.js",
    "revision": "145e7543a2cf0d7106504640674a293e"
  },
  {
    "url": "assets/js/8.c36f8ec9.js",
    "revision": "b0d5b2ac54abd74c4e8c294585f2e144"
  },
  {
    "url": "assets/js/80.acfc5bc1.js",
    "revision": "69b778eadf2c45c9d5596cd5e10e4a11"
  },
  {
    "url": "assets/js/81.8771e57f.js",
    "revision": "3ea20dd811c80717314703047171badb"
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
    "url": "assets/js/85.1b5f383e.js",
    "revision": "ea0ff95d91dff04e793e2f2c6f8d5e44"
  },
  {
    "url": "assets/js/86.e74c20fc.js",
    "revision": "2f7ef36ff0a402dad9c5581d36e342ab"
  },
  {
    "url": "assets/js/87.66721438.js",
    "revision": "ee525b332c693e6dac3237bfaafe1c58"
  },
  {
    "url": "assets/js/88.07ec09a0.js",
    "revision": "b580657964c345e3c3029bbbff27413c"
  },
  {
    "url": "assets/js/89.336f167c.js",
    "revision": "c2834d12f47d79ff587425c0e2c05f95"
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
    "url": "assets/js/92.6fe08a1d.js",
    "revision": "fdda8a5fd86e8c82d8e9c50d4671ec83"
  },
  {
    "url": "assets/js/93.9348b0a7.js",
    "revision": "3acbfe46fc7fff66be96360ba24a628d"
  },
  {
    "url": "assets/js/app.86e84e3b.js",
    "revision": "bafd0e81faba444aa2c0d183bba17e89"
  },
  {
    "url": "assets/js/vendors~flowchart.7dbbceee.js",
    "revision": "edcacc957e3aaa4e1b80345252b7aa30"
  },
  {
    "url": "categories/Article/index.html",
    "revision": "5836e1411ab055de0c12042f905157c5"
  },
  {
    "url": "categories/Article/page/2/index.html",
    "revision": "00247a07e46d809968bbe84354f05c54"
  },
  {
    "url": "categories/Article/page/3/index.html",
    "revision": "8a8c9b9ab1068d221fad9f24a2b63ce7"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "60e939c4159a7113ffd1b092a5898e9e"
  },
  {
    "url": "categories/Cocos2dx/index.html",
    "revision": "fa5ab9db20fd351cdd063cb37906c5fd"
  },
  {
    "url": "categories/Essay/index.html",
    "revision": "78c89c4f089ea5ae836d48ca7aea6ceb"
  },
  {
    "url": "categories/Essay/page/2/index.html",
    "revision": "a6c3a285a973d21b036b7bbfc0dcf4b0"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "9ba3b9ec8dccd90ddc455899624428b7"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "9eb3be8d2081966f0565ca8ad74d3a23"
  },
  {
    "url": "categories/index.html",
    "revision": "175603755db512562f5b4187a2ab30c9"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "64668aadeecdc450465a364514b36ed8"
  },
  {
    "url": "categories/Other/page/2/index.html",
    "revision": "0b395b924b8330c6cb18150b6617220f"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "1e87aad7b15267a0e34f27eea5c823f7"
  },
  {
    "url": "categories/Three-Month/index.html",
    "revision": "91547ede94f9ae33235f1c4750cfe077"
  },
  {
    "url": "categories/Utils/index.html",
    "revision": "1388a86ae64c53598a86f6e37093390f"
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
    "revision": "d035b7c97dfa1036765c8d0caa49c8ac"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "67fe2b5fc0e05a25e84ecf95b7a14b78"
  },
  {
    "url": "tag/博客主题/index.html",
    "revision": "bf89b421b0f63333b371abe0de68def6"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "773665fc9ff3bebb507437d4a766d3e2"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "cffda2ff396bf76a8a7cedb2384cba50"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "91577ff23a1c93d47cd545da85ca1d35"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "b51e8eab13765d3d821aeeba575a71a6"
  },
  {
    "url": "tag/随笔/page/2/index.html",
    "revision": "75407e0a956c6bb6dab3f773d84a69b3"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "3cdf27f73176d0d7022ec0a50243b428"
  },
  {
    "url": "tag/apple/index.html",
    "revision": "347fbb749172f20f05d8e5da693ec548"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "044c5e4374621854e1b9ba33f7fc828a"
  },
  {
    "url": "tag/Cocos Studio/index.html",
    "revision": "2d58f14a8243b28f4b7a38e53a148cf8"
  },
  {
    "url": "tag/Cocos2dx/index.html",
    "revision": "c0d7d9ac9123ad8ee5fe55ebf2791ea7"
  },
  {
    "url": "tag/doc/index.html",
    "revision": "25e0dfde04e4728128ac3a6fa6673ea3"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "9fe471847a3977cee3e64b874e0a8ebc"
  },
  {
    "url": "tag/github/index.html",
    "revision": "e61a259aad9f7fb4b13fa53edf7a5b17"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "8daae556d6ee932e82cd6ca489a9d783"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "919a1529da3bfb268b4a481c447323ab"
  },
  {
    "url": "tag/index.html",
    "revision": "2584bc77789046781927b596fc5d9d46"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "acea42818cae4fa771f55ab8f836b0e5"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "e04457f4fd01caaf31dfa0e290fa6bdd"
  },
  {
    "url": "tag/Lua/index.html",
    "revision": "e19d7d0a27ad5615fda22a5c35777dd5"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "fbebcd11b01ae37b35d3d2d9caad374e"
  },
  {
    "url": "tag/node/index.html",
    "revision": "b5118495ba240633edf69dfdb42e8911"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "244340ed93d54ea10c45ce315b8f3a93"
  },
  {
    "url": "tag/Pieces/index.html",
    "revision": "97b08f8c7fbe155a305c3f31275f6c23"
  },
  {
    "url": "tag/python/index.html",
    "revision": "4664049b083d602effda7add9265c257"
  },
  {
    "url": "tag/record/index.html",
    "revision": "12509dc490fd56209db5d10ddb089e7e"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "43adaeb2388175acee8537fb681d4357"
  },
  {
    "url": "tag/runner/index.html",
    "revision": "ba6c1f64b490ee83526cabec34a69e13"
  },
  {
    "url": "tag/shadowscoks/index.html",
    "revision": "2a3dd11d4f4da3e9540e134d18c22544"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "e2494c1865b08281a0048459a2dd6228"
  },
  {
    "url": "tag/Three-Month/index.html",
    "revision": "85b536ddc77eae129b02dc5b37e959de"
  },
  {
    "url": "tag/vue vuepress/index.html",
    "revision": "5e2cae31213b36820d3c9fff4fc902ad"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d4dc1ccecd3899bf858c40152f0826c5"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d832b9404627f7c46da352f37bea4fd0"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "45be9c0811d8396f0435ecb5dd2796a0"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "9614513e79316c8c1577b610be746f13"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "707d0fe60ff7543a011f3e8585928a46"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "9d52064092c5341b2ff7d151d443d658"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "8e35a327ceb480481254d45786a42c6c"
  },
  {
    "url": "timeline/index.html",
    "revision": "b74d5d052f338a2e3c325f239e382a8b"
  },
  {
    "url": "views/article/2013/042201.html",
    "revision": "27360eec51ff5591383855cb62bf5563"
  },
  {
    "url": "views/article/2013/092001.html",
    "revision": "f22567ac4625b9ecd266740c01c9f57b"
  },
  {
    "url": "views/article/2014/033001.html",
    "revision": "e8ab943d28dfcfd88fc00d8614e11301"
  },
  {
    "url": "views/article/2014/072101.html",
    "revision": "e1044c275b5f5442aff571f9d54791de"
  },
  {
    "url": "views/article/2014/092301.html",
    "revision": "7985c442be1c86fe708084070d6dc319"
  },
  {
    "url": "views/article/2014/112501.html",
    "revision": "21b39f9a65d3b004d9e74d1e8bf6ea64"
  },
  {
    "url": "views/article/2015/042301.html",
    "revision": "4573a2e8c0d1888f9a45dbc6450fe290"
  },
  {
    "url": "views/article/2015/042302.html",
    "revision": "bb4be9d5a367393652f5dc746f1afc4c"
  },
  {
    "url": "views/article/2015/051201.html",
    "revision": "c0a4c12859f1012ada0cfe1bbdd7cff0"
  },
  {
    "url": "views/article/2015/082101.html",
    "revision": "007bf4c400df7618e0f9f7051afa5d0e"
  },
  {
    "url": "views/article/2015/112101.html",
    "revision": "ebd4acbe73a205142094e92d4d784699"
  },
  {
    "url": "views/article/2015/112201.html",
    "revision": "480a52bdeffdf660aa30fc67c0d0f51c"
  },
  {
    "url": "views/article/2017/032401.html",
    "revision": "401ad3f655e419450a8efecaec6a3dd9"
  },
  {
    "url": "views/article/2017/082201.html",
    "revision": "3d7af03a3fd5423985c7e4a6ac93a677"
  },
  {
    "url": "views/article/2019/033001.html",
    "revision": "0a046b6d1c7795481f6fc54cb4e77b84"
  },
  {
    "url": "views/article/2019/041901.html",
    "revision": "41fc14bffc19700da49290ff1b3343d5"
  },
  {
    "url": "views/article/2019/041902.html",
    "revision": "80dd83532bb411c3d3725b96c017fe83"
  },
  {
    "url": "views/article/2019/041903.html",
    "revision": "36952578ce63da295d28900c8247f4e0"
  },
  {
    "url": "views/article/2019/041904.html",
    "revision": "994c1d711b8f61d7ec8b6d2dafff0afc"
  },
  {
    "url": "views/article/2019/041905.html",
    "revision": "3dba7b1ed8cbd12cae51776cd7949e8f"
  },
  {
    "url": "views/article/2019/041906.html",
    "revision": "7be0360ab5663c32f98e76b4ac7f0236"
  },
  {
    "url": "views/article/2019/041907.html",
    "revision": "b8e4c065d2f76ae79e70be5e5e5d1ec3"
  },
  {
    "url": "views/article/2019/041908.html",
    "revision": "95f7821ab5b69d0bdc66a56c5dfa2ab5"
  },
  {
    "url": "views/article/2019/041909.html",
    "revision": "fa9b75f56d76e2a5182a4f178c83df0d"
  },
  {
    "url": "views/backEnd/2017/110101.html",
    "revision": "618c0abeafb40857b3e92b53e2328dfa"
  },
  {
    "url": "views/backEnd/2017/110102.html",
    "revision": "805395a2852492fd3d72f3c7243df7b0"
  },
  {
    "url": "views/essay/2015/071301.html",
    "revision": "218328df18e78eacefb56ca38789d395"
  },
  {
    "url": "views/essay/2015/112601.html",
    "revision": "d78bff6fb64a9161ff8c9ffee62d4b5a"
  },
  {
    "url": "views/essay/2017/032201.html",
    "revision": "12ce3930dd1378acaf4ae7df33938867"
  },
  {
    "url": "views/essay/2017/071301.html",
    "revision": "2523224569b0f8ef1dd8ef3de7457601"
  },
  {
    "url": "views/essay/2017/102401.html",
    "revision": "24fcd2da2c62a462ec15783829bf3bd7"
  },
  {
    "url": "views/essay/2017/110901.html",
    "revision": "5c5426742855ee9a4ab8bc0d3aa568e4"
  },
  {
    "url": "views/essay/2017/111301.html",
    "revision": "03212a07335632d08902f5efff6b811b"
  },
  {
    "url": "views/essay/2019/012401.html",
    "revision": "ff766b625ecc643a016598fb6052181f"
  },
  {
    "url": "views/essay/2019/012501.html",
    "revision": "8f7fa7f7257fe13bef150727cce97d24"
  },
  {
    "url": "views/essay/2019/012502.html",
    "revision": "cf182a452cdee96a6df5ac90712d5aae"
  },
  {
    "url": "views/essay/2019/041401.html",
    "revision": "c50a0c686f84dceacc1ab242dde50694"
  },
  {
    "url": "views/essay/2021/degrading-for-success.html",
    "revision": "a4d51eb03e414d96fd1fdb7801da6be7"
  },
  {
    "url": "views/essay/2021/game-of-wild-beast.html",
    "revision": "baa10b83a4c59fedd12b0e1cf1595d6b"
  },
  {
    "url": "views/essay/2021/Life.html",
    "revision": "2b600a521d8e261f258beb8ebf6dbfeb"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "fc27b373b39efd79b005b27b04ab349f"
  },
  {
    "url": "views/frontEnd/2017/121501.html",
    "revision": "4c982e707542ac308dc265d31c914717"
  },
  {
    "url": "views/frontEnd/2017/122801.html",
    "revision": "152c6751a993001b6459984f04730442"
  },
  {
    "url": "views/frontEnd/2018/010101.html",
    "revision": "773eeaf8674c81d22603ac97eb4ea78c"
  },
  {
    "url": "views/frontEnd/2018/020401.html",
    "revision": "311a3a230f5f47d053a58bbc5b37dcc5"
  },
  {
    "url": "views/frontEnd/2018/072601.html",
    "revision": "0c3eb0cb6aded7445ad876cae9977732"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "2bc699af949dd9f1601a38703bf6fd78"
  },
  {
    "url": "views/frontEnd/2018/081501.html",
    "revision": "87b952b32f31422d9f1c6ee25ea582f9"
  },
  {
    "url": "views/frontEnd/2018/081502.html",
    "revision": "382442f847f60f35c7cea717dd13bce6"
  },
  {
    "url": "views/frontEnd/2018/091001.html",
    "revision": "4a1df414165f51367b44d4968bf86872"
  },
  {
    "url": "views/frontEnd/2018/091301.html",
    "revision": "fe767251945cdf503b2ad2730228169f"
  },
  {
    "url": "views/frontEnd/2018/110301.html",
    "revision": "c3d21aaebccf51d1f9fbf7279cb654c7"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "4b6b6aff205017ba1da38cfdc3fb51f2"
  },
  {
    "url": "views/frontEnd/2019/061501.html",
    "revision": "aaae6716bb47df3429d36d449ec65317"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "2522e81fedcf9ddfb32767bc99ca676d"
  },
  {
    "url": "views/frontEnd/2021/05/0518.html",
    "revision": "5f6f689fa39570d9cc9f2aab5aa78d4c"
  },
  {
    "url": "views/frontEnd/Cocos2dxLuaProjRecord.html",
    "revision": "18b0155570c8616dec94ec3dd85fbaff"
  },
  {
    "url": "views/frontEnd/LuaRecord.html",
    "revision": "0b9f11b50f545d26682dd444d27a602a"
  },
  {
    "url": "views/frontEnd/VuepressRecord.html",
    "revision": "f3736ab4e99d32762b61b80f808dc080"
  },
  {
    "url": "views/knowledge/packageManager/PackageManager.html",
    "revision": "39258cc9577cf24d4b421eda468e8383"
  },
  {
    "url": "views/knowledge/python/Summary.html",
    "revision": "c10049dcd721e6bdcc012c067f29fff3"
  },
  {
    "url": "views/knowledge/windows/shell/ShellRecord.html",
    "revision": "0c40fd74c969f4307c31fc4523b4c4de"
  },
  {
    "url": "views/other/2017/071801.html",
    "revision": "c74f32a94a8d592c97531d0735dd6ac9"
  },
  {
    "url": "views/other/2017/121801.html",
    "revision": "7950fcddabb9c0cd0fd5cb150614dd4e"
  },
  {
    "url": "views/other/2018/090901.html",
    "revision": "3bd69577d7d46227061aabc3ed03d1aa"
  },
  {
    "url": "views/other/2018/100801.html",
    "revision": "0a850586eef458829d72e371b33cdb0e"
  },
  {
    "url": "views/other/2018/121201.html",
    "revision": "99caeecb32003e2647143dcd645dc1d9"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "74ec1b4d097596b9899510591f6b3e94"
  },
  {
    "url": "views/other/2019/041101.html",
    "revision": "cb613586c878f21f121c5cc643b49999"
  },
  {
    "url": "views/other/2021/0512.html",
    "revision": "3c17c1b94032389ab77f6b7a0606c8e5"
  },
  {
    "url": "views/other/2021/ImproveEQ.html",
    "revision": "50aee6b023928e51971d3b60e380b0b7"
  },
  {
    "url": "views/personalInfo/aboutMe.html",
    "revision": "8b21988d04fd4e8e0918075dd1d720b4"
  },
  {
    "url": "views/pieces/Pieces.html",
    "revision": "9852ac7a1cbe443110c873feb71d9781"
  },
  {
    "url": "views/threeMonthStudy/2019/0122.html",
    "revision": "4f547348b23acc8a04c244e6882eb33c"
  },
  {
    "url": "views/threeMonthStudy/index.html",
    "revision": "8fc1e78d8019318fe97478a5cbdaba37"
  },
  {
    "url": "views/utils/Utils.html",
    "revision": "776da1b5a37a8332343648feefe983ba"
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
