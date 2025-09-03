'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e5823569deb7181a6f626489226bb211",
"version.json": "fa42ca95e3110051818ec1c39dcc641b",
"splash/img/light-2x.png": "73dfff7fb00cc419a6d380ea7a19fe92",
"splash/img/dark-4x.png": "c4745f938d3465f4794356d4cbbfa602",
"splash/img/light-3x.png": "b5b3e90202344d0f7933e14e17b5c6f4",
"splash/img/dark-3x.png": "b5b3e90202344d0f7933e14e17b5c6f4",
"splash/img/light-4x.png": "c4745f938d3465f4794356d4cbbfa602",
"splash/img/dark-2x.png": "73dfff7fb00cc419a6d380ea7a19fe92",
"splash/img/dark-1x.png": "e4a67334b7a36216590b5fc2d115991a",
"splash/img/light-1x.png": "e4a67334b7a36216590b5fc2d115991a",
"index.html": "05645be88129933cd1471f4dafbecc7c",
"/": "05645be88129933cd1471f4dafbecc7c",
"main.dart.js": "df02b08d9d8bf8b6ac47899249f1db09",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1d335a9f37965dbca538a13fe04f459d",
".git/config": "78a8afa21b501543a3d8941671d85261",
".git/objects/61/96c455f387bfb748e7b8dd04fd425c541f3829": "59e41cbcc89870f6e080d427e0629ef2",
".git/objects/61/194706bb0328c37bf8f0f8670805acc9d0e284": "31a14327c5c0aadc42a9b13334f5e347",
".git/objects/0d/4d111f69ce363932092bc99109b25a017f169d": "28442cc5e8fe875b0bcf0886b911c54b",
".git/objects/92/5d2cdbeedec00807c9abc6b06e1717db7ac862": "f29a36cecad3a75fa6b0dfef8e48f2e1",
".git/objects/66/6650e1505f0616d19b0a38a5d73895b9b26e33": "a965d9c379257ff2a3847a0179727f23",
".git/objects/57/392d372c4b8a04621e7439375407248674a8bd": "3cc41d2d3a0c4f878787a5b95ecc9e38",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/6a/954351681537576b5a81de9a069886300ddabb": "7a10005ba1d2ebaa8e6d4532c80ae9f6",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3d/ba798f3ca80cae7a8af66c4f864f3d80559ec8": "c97b2ff6f53b01b604036bb4da5b91a3",
".git/objects/0b/fe151e4123de93dcc42962c1ccb4d98ba11c99": "5d84436a557d7833deddb44bcb7ce583",
".git/objects/93/f5b2675ad1d5befbef9018495bfbdd3225839f": "f4ee255e0659673ae3c209e8b8d47501",
".git/objects/94/1c6ad042517659a7c4543d0fbfd06e401b1cbb": "56c8edd5347cb43b4ad0e87b9f3b520d",
".git/objects/0e/bcd5f854b0b315eded8ac240f50cf79aa4f41f": "9bc3386b29a535644114934747d120e8",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/05/ed70f4566bf5a44a44e55029493144ace4cbfa": "9b202ad3aad516dc23bb71e82cd0c1a2",
".git/objects/b2/7c8283624bb897e3c12f5c7e8fc94d49c73eba": "cf066ccf66a145e4eea7154de39360af",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/28cf12596c0f4933dedbfdbdaba24b4079fdf0": "804f938b7d65ecb4f80e9c6168eb7bca",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/7d2f243caf3694e74b04dd6ed1278f06ceecb6": "b1fc002350e4cf674fa50882cc92fcf1",
".git/objects/d6/8d15298a2d13a7b103e846c1d75de8f6ae0722": "badb1ccc5c88284b1f8c226ea590f35f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/f57dd4417deb2e9e4590a8fbb23ccf9afccb59": "3187bfa2904b472853f951a728f41c68",
".git/objects/ae/dee17b9d21d31daa9890f34f5d0f51573fe6c5": "777d2aa25be005527c1b41ba304166c9",
".git/objects/ab/11e4dd0c365a78cb303c6063ea4b35a3e5bc36": "77cfdd8d66c899aae0fc5a21990c017c",
".git/objects/e2/4b724be15de3538ad9ad3ab7966d2ba821d0ae": "c697db82f45df2cea0da7c05ec35836e",
".git/objects/f3/1a2eb84f342bc31d1868fb2189887afcf5df5d": "2913c9749d3767c549b370760fe6c669",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/b46e82ce2385b39da64cd13ececd6945254e10": "8395a2f2a04d980ab005c2e7aec6a3f2",
".git/objects/ee/842a0c3b3de4e73803fdc90df90e928e2d47dc": "6213c21b9cd11118792307aa10da1a0e",
".git/objects/c9/30a63a28be0ae64a3fd4930f496db235218735": "7a771966bb91a5266c24e88057a88f90",
".git/objects/fd/a4e3f3ea3a26ffd5e710d04980acff1ba11db7": "d5bd578b3d3f18b72b0ce10f94634713",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/69537790d70316eb0bc6bb74d27a8eea7eb752": "4ce471d4ff2fb8462b418b38e64b4508",
".git/objects/ca/3a7124f8000b01ed30ca2b712f0b7aeb44e942": "b92c12958576ffcd14ccf4b508f88a18",
".git/objects/e4/f18a744d5b39d6441d7ac0884719ffb7b71496": "0e8c2e5b9b01a34ba326f3b3c54650c7",
".git/objects/fe/eaaa056ab411d85d970ac78a2f341fe671412a": "2276b9b93de21a7fe23c3e6eec0dca01",
".git/objects/fb/5081f02aef495ff7a48e07a4dacc3a5e931745": "33163aca692c27626e9c2666c56e2b22",
".git/objects/ec/970aa3fcf9da9953a4226e62a854ad2884b604": "6312105c50428662f63e7dc0a5657fde",
".git/objects/27/498bd072ff6dff7fa4c604ef8cc568da8cd409": "1c3ef4d96759e74deafd6fb7c0b2e9df",
".git/objects/16/8e51a3542d6cd1b79cabcda6468cc45e3e423c": "f35acbfcbf4f90b9ddd87f1393fb2f15",
".git/objects/89/86c23d01b801858403eaba5b01a66a9f65fd41": "b72d21131bd431f448414c66fb75b09d",
".git/objects/89/1657e97cfd77a3fb4d707d07dae11cae682ec9": "de483a19922f99054e9642363b567a9d",
".git/objects/87/1aadc880e8a1502821b00e2dde68ea0fc4b485": "d60a28dbecf07459f4432cc3df555276",
".git/objects/28/4cfe88f8c7f140356beda65f7ac3a2903555bf": "343ed898866197f92f4ba333a19575ae",
".git/objects/17/6eeb80392cbd60521358eb9843f700953053cc": "d9df57b2f41fa2ad9ab58a4eeb974392",
".git/objects/8a/3309f448809e4b6968f72d0435f2f027c36048": "9ec092748a0620ca38de2a255e9097b8",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/344a24338fdbfb49b321a49557fe43cc29f0ac": "f002df86855faf20bfe3cced56420b0b",
".git/objects/86/335fcbe88dc6e158f64e43148a1a71d8620d24": "f030ceab68ad9617712ce0f8bec3a068",
".git/objects/2f/567a01b753bacde8cba0832fa744967dafcab9": "91462a4a5a9de5a8a9008c917c0dd2cb",
".git/objects/88/7e9995ba5534be1dfa438f9468f8a71111dca3": "92e6e644604a7a6a88b83602274205e9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/60dea6fa8935b60a1943953a964b7bb4212cd2": "288cf08528c676cfc2bbc67d314c511d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/e7e805c9de95ddddb93e83d1e73a9826fc62ce": "49b94eeaa189dbcfc661c9da2c1d6bea",
".git/objects/53/07c84e2e9896f3e2e6e6efb7bc4f6438146cb3": "711ebfbfa6f638d07817e8eb00a1423a",
".git/objects/53/2c255313a44b9e753516d670dd7bd3c25a51ef": "fe251036a06cc8e6dbd089585bd38583",
".git/objects/08/436e524222979f154b1f1ab8d8e64cc9f25c8c": "4b11ba4f3de374ffa7c71aaa56a6d3d0",
".git/objects/6d/93b799cf91ac8e4ede4ad93e887a11277d1701": "fad4cc9b0842dc60043fcac716778382",
".git/objects/01/083a6cd5edc357b21de4e2f5f9553780d80746": "c3f2188f2901930739814c9125d1d192",
".git/objects/6c/6f6551f10153141c0a1efd577f7218712a47b6": "67023af3d0f35eadb3a874295ca7d746",
".git/objects/39/455992a3ae293a61090c69e4a2c67691a1018e": "31c16daf70478a202d6e1503e3531732",
".git/objects/52/fd11e64c371c8965b0806bb25febc4dc1a41cc": "08b80727cbece6014a62d8e2d914792d",
".git/objects/52/b5298cf2e94534594077954319628e22be0c1b": "e20dd57f76facaf56405f1ab85ffd91e",
".git/objects/0f/82a8360517d2c8b7d16e85434d40c6fb735954": "6a607eaa588a4312c03292ddbe569cfa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/2aab402575a35c79b4ded0a7ce886204cac498": "692ffa2d71490a91f5a464e567939fa3",
".git/objects/a7/b410f579f6a077a606487583ee5eb5cb1c4e0b": "21420cb4a16d97a4ac995f13666939fa",
".git/objects/b1/70133c3af44974ece834a4164fafa64204511f": "a5424b99543f42a87c59d93be7a32605",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/a63dbb738d72bff631d023f68cf57648bddc21": "9aa9936496d23a787da68101bdea805a",
".git/objects/d5/d986b0ef2d92cb53d4094fa5ce10dac133ebcc": "e5dca71db6987ec88c0490f95df8f75d",
".git/objects/d5/0cae5b9ab141227b94f7c6ec07af26b07be3e5": "b1669a6f8d9b83eea7ec8135d4af4b32",
".git/objects/d2/1bef2f234f3c782e15117a4955d0de3c9a7dc6": "fcc17ab1c18e00f2f5d59e1c430dfe02",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/d4e630bf0eca30f523e856e89c41cb080400c9": "fb78c27ed3e7cbc8ee86135cba818787",
".git/objects/c4/d474feffcdac0c07bde238afabe02a36f5fe03": "14769935c00887d52424c4a764816bf1",
".git/objects/ea/3e88c3ed5d7f472686ae5306c6ec52aea86234": "63faa113c73cf0175d15b8958c13c0e1",
".git/objects/ea/d1f199921b6e372df086997c24ee8deda02087": "b7b6f72605682082497218295d132d26",
".git/objects/e6/d6837e83b48e15b0cadc5803a1c3f24685e180": "f9afe05d68ffe69e67fa0dc9551d478c",
".git/objects/e6/9d896426d818b58b6314943a5493b683ca117e": "adc092a8c4a281361bb6120dcf16b995",
".git/objects/f0/56a7f98c953f2cef86a6b32ce1acba62cf7cf0": "02cfe40130925c20d3656dfc2bb5a42e",
".git/objects/f7/3cb4e30eee7ecf5dee166250d84eee3698f2fe": "0d7c590a3ce0ab1427ddec0966df1946",
".git/objects/fa/f943cd289d6312e7b5a4e0c6bfaf431b1545a6": "1ffe0e8252811a8475547cb485756b7b",
".git/objects/c2/1d2d1b6de3761229b248fcb70a6659a2e52e16": "11b8019b07e79eec0df9b6d36bdb0079",
".git/objects/f6/7f743d646e7d4825612efcb6d9f5210fbfbd2d": "48a336dff58aeea72745f69a11406957",
".git/objects/f6/f01bc26065115e5ae2c5dac64c1aa1f49d30db": "f25bbb2f33e0725d9d8df34b835b4e4a",
".git/objects/e7/4a580504d69b7580189810740dd25bd3d82316": "65fc850018074581ac53f946e51b731e",
".git/objects/46/a0f09d226412b36272800e3bda55b7b1c094f7": "d9345e81aea2a5e263ddcff7332fe0dd",
".git/objects/46/54947fac3b4c5b555ee0daa9a24d888ba04ff3": "51f6893dee6bded584e26e6364ae8e7c",
".git/objects/2d/a86ef7f0ff9f910ebf39ca8063916410e50b71": "e9d170f4778ab0aed7b3fc53a1ea7615",
".git/objects/1b/f5570f39bb32566b0d86ac3404d6e62abbd3b1": "5a1e6422b56c44d8c2d5645d061af9c7",
".git/objects/77/8b906b115681ad27c5bead2c3d06c11bbfa3b5": "af5bfb8608dfe7555da923c2bd919c7a",
".git/objects/1e/e03025a310270e5715ef66c7b70bb1866a35b5": "c628a760118cde479d5aa25ae7013ec6",
".git/objects/1e/7e29510a81db6a6ed2282fd719ea2c85656d77": "257eca5561b385058ffe8b2e9cf11e51",
".git/objects/84/d88dcd9629f07c72642a000e66108fa4268fc0": "549e4f0b753f1ca34c9d6e4382d4633a",
".git/objects/4a/475664ef348338647d964b02eeb4cf307fe607": "effc673aec33091cd564962dd32e9d0e",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/62a0fa92800ce9e4004954e598dedb32952d6c": "35d633ed90e86929949739d64d392431",
".git/objects/15/f4e3085ead1343c90512de568f68d540887b14": "36e815ef6f27837851b552734c06d3f4",
".git/objects/12/9fd30d285f89b62be927412ef1dff22b1cb571": "da9fdc8a1ac0298c91879c4b271c1942",
".git/objects/1d/7605e7a3ab07becfbcde215f718c040092715a": "79fe18f0f16775db3eb26ced161d70fb",
".git/objects/82/98b22791b4e5347fcd3114d861199c80d889a3": "c77eed5036ab3a2ec5dfd59918860c05",
".git/objects/49/5f609702f0c0480d2b48dd48b976b302bf2eca": "002b1a8b5f3eac92b9906f0945f50aea",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/37819bf284ae6f9ab4fa8c9dfe6765212ae2da": "469c59c1246160ce85c5e8307e45dc21",
".git/objects/40/696e374c61fa3d8b83d4380416d1be4d7f2d94": "21fe7a184f31b787aac8d1800f2f740f",
".git/objects/78/2fc75097589050a8ea23a6957dcd7ac1763430": "ee7fa60980aac1337d7fc92d0cc0aee8",
".git/objects/8e/c31f7b6195519592210c18d8d505742611c8ab": "addb5e42fefff38a2a576aa7dfaa9df8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1c4cf2d3ada0b961be15b9b1ce2b5dee",
".git/logs/refs/heads/main": "8e600404b3ed49bfbefc2779045cbad5",
".git/logs/refs/remotes/origin/main": "253ae76f86f73f4f497886c191f459de",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bb3f6777f91a144aebdc9054a619f066",
".git/refs/remotes/origin/main": "bb3f6777f91a144aebdc9054a619f066",
".git/index": "4918baa7bb8df8383b70038cdbe3b819",
".git/COMMIT_EDITMSG": "4d85f48c1cfae40cf70de1705eb5fd81",
"assets/AssetManifest.json": "6d7db6b680353cb49cda5b5413f64bdc",
"assets/NOTICES": "2dcde21e40f2335ffd9d60ce6ee46784",
"assets/FontManifest.json": "ff91f58eefb0f458e137610f03a6739d",
"assets/AssetManifest.bin.json": "aab99ffc089dbbf6394c5bd1f2ebbec8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c133cc30f8573b9ec17357a0c7bf7b9a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c111f4dc7e43ef506a1e1d9c3e319210",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "97f5d92746b7cee1a58ec819880030b8",
"assets/fonts/MaterialIcons-Regular.otf": "c63575e652e5e00ed11c181f4fe2ae27",
"assets/assets/images/3x/svantek.png": "50c932dd8a99d8ddeb8ebf369e520b0f",
"assets/assets/images/3x/falcon_acoustics.png": "a96456e5a9b6f937db160e628919794c",
"assets/assets/images/3x/pwr.png": "1b553ae27e24eb76597c60547c56ed18",
"assets/assets/images/3x/sygnisoft.png": "bd7a7a8012ccdd0e6466ca820cacad9e",
"assets/assets/images/1.5x/svantek.png": "cfe6b933266f57cf6451397409350f12",
"assets/assets/images/1.5x/falcon_acoustics.png": "0e85e958d61b729eb7e85dca41fc0bc4",
"assets/assets/images/1.5x/pwr.png": "6749fe91d28a6805891993c9a0b246cd",
"assets/assets/images/1.5x/sygnisoft.png": "9c584820d4d26d5fca54fecf6d708148",
"assets/assets/images/1.5x/ecoplan.png": "2f953f1b5613db9325522073d50034c6",
"assets/assets/images/svantek.png": "4688223700c5308a2eae782777fb81f3",
"assets/assets/images/pawellak.png": "c6943ba69af0f49b471152e589268ae8",
"assets/assets/images/falcon_acoustics.png": "d42bcf9c447c17978c71277fbd5034b3",
"assets/assets/images/flag_en.png": "e3220c3664c3634dfae55b28d235c2c6",
"assets/assets/images/pwr.png": "312ac14429f2499326c0280e75978abf",
"assets/assets/images/splash.png": "61022dc8f01ddf50a9493688c65ac6f4",
"assets/assets/images/flag_pl.png": "94207a58502fc6de434d9100f8cfc17d",
"assets/assets/images/sygnisoft.png": "249b715ec768ef9121c954d7d5f9d04a",
"assets/assets/images/splash_a12.png": "7f5004c9cb724486e3865a9ace08cff2",
"assets/assets/images/ecoplan.png": "062f81c5c9a410b1147451cb2bf44480",
"assets/assets/images/2x/svantek.png": "17008a999180d9b723e1541bfa3e9073",
"assets/assets/images/2x/falcon_acoustics.png": "cb163b6c6fd43b33c1b28ea4b2358e7e",
"assets/assets/images/2x/pwr.png": "a5a19bd666a6baefa2fb67bb941ea2ec",
"assets/assets/images/2x/sygnisoft.png": "292a48401c41e78f57acbb4e118dc580",
"assets/assets/images/2x/ecoplan.png": "830baf728b452d893c5d7cfded11b192",
"assets/assets/lottie/loading.json": "54c2eea997f9d6100da004950ecb75bc",
"assets/assets/translations/pl.json": "5992316dd4ebd75907b9aaa709902971",
"assets/assets/translations/en.json": "f3838864c27b4ebcbac84a3314cc7afe",
"assets/assets/services/local/features/projects/healthy_2.png": "24bda28efcccd173e46b58f2b575e20e",
"assets/assets/services/local/features/projects/healthy_3.png": "9513e952ccc33f8b47df54ac193c1b12",
"assets/assets/services/local/features/projects/concierge.png": "063587d126b63a109810bf2a859685cc",
"assets/assets/services/local/features/projects/healthy_1.png": "9f5bba962acd48b2a92206d62f62cb56",
"assets/assets/services/local/features/projects/enea.png": "96c7c024d32c4ec97d8bbb88016923b8",
"assets/assets/services/local/features/projects/pam_2.png": "226f1254665913b7ce889ac5b7371570",
"assets/assets/services/local/features/projects/quiz_1.png": "1cda83b56508a29f2ce8621f72efa0a3",
"assets/assets/services/local/features/projects/pam_3.png": "69958de4d35581738e43eef0c01ca843",
"assets/assets/services/local/features/projects/pam_1.png": "4d15652caf64e59dc070d7da26146abd",
"assets/assets/services/local/features/projects/quiz_3.png": "6b091ca2e5b875dcac07a184fba22d0b",
"assets/assets/services/local/features/projects/quiz_2.png": "eb05340cef4edbc1c3c995318e5d75fb",
"assets/assets/services/local/features/projects/concierge_2.png": "c74017fa51dd55fbee2fa2036217439d",
"assets/assets/services/local/features/projects/concierge_3.png": "8c1949ad17f2e27c2fa811c06608a81d",
"assets/assets/services/local/features/projects/concierge_1.png": "f18628bbdc3ee5c37df2a573dc4c0e32",
"assets/assets/services/local/features/projects/projects_en.json": "62426f7f25dc69f56e2602f6a7b379e8",
"assets/assets/services/local/features/projects/projects_pl.json": "faeb7affb16200c255097c22e6428460",
"assets/assets/services/local/features/projects/leksykon.png": "0af1c57f425038456a8b602ee2ce5029",
"assets/assets/services/local/features/projects/healthy.png": "3c6a9cdbca92df4940a76e484a11f3ae",
"assets/assets/services/local/features/projects/enea_1.png": "a025243fea57c4dda5eee5a398a56dce",
"assets/assets/services/local/features/projects/tukan.png": "fcc7396c567f4b2301652ccd6bca1710",
"assets/assets/services/local/features/projects/enea_3.png": "6cbb7f9bbe37a4cb194c8411a923d0e6",
"assets/assets/services/local/features/projects/enea_2.png": "2eb04bc2a134b407cb1fd8dc09501cf1",
"assets/assets/services/local/features/projects/idlogistics_2.png": "4e723a4b9fb2e638d578bac25e489ecd",
"assets/assets/services/local/features/projects/tukan_1.png": "40038e6ee78eaccb3a0659d363cadb4d",
"assets/assets/services/local/features/projects/idlogistics_3.png": "b12b22c897e7bbf062428ad00c4986a1",
"assets/assets/services/local/features/projects/idlogistics_1.png": "d42456e22d471701329babbfbc3b7d27",
"assets/assets/services/local/features/projects/pam.png": "dbce7d5b17ad0c5c115db12ba9fcd0e8",
"assets/assets/services/local/features/projects/leksykon_1.png": "e041b15f6298b3461135e762098ebd54",
"assets/assets/services/local/features/projects/leksykon_2.png": "c2bbf42646e1ad52242367ea87055dcd",
"assets/assets/services/local/features/projects/leksykon_3.png": "fba08e1d194af5d88608459ed48cf844",
"assets/assets/services/local/features/projects/idlogistics.png": "ff9f908eabcfaa5476d024bddbbdfc24",
"assets/assets/services/local/features/projects/quiz.png": "c6d6143e103dc51770b38b495ca58e47",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
