'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9393953f29f74bf7ad3e6b3f574bd3cd",
"version.json": "fa42ca95e3110051818ec1c39dcc641b",
"splash/img/light-2x.png": "73dfff7fb00cc419a6d380ea7a19fe92",
"splash/img/dark-4x.png": "c4745f938d3465f4794356d4cbbfa602",
"splash/img/light-3x.png": "b5b3e90202344d0f7933e14e17b5c6f4",
"splash/img/dark-3x.png": "b5b3e90202344d0f7933e14e17b5c6f4",
"splash/img/light-4x.png": "c4745f938d3465f4794356d4cbbfa602",
"splash/img/dark-2x.png": "73dfff7fb00cc419a6d380ea7a19fe92",
"splash/img/dark-1x.png": "e4a67334b7a36216590b5fc2d115991a",
"splash/img/light-1x.png": "e4a67334b7a36216590b5fc2d115991a",
"index.html": "35c6a612ed26e8bdab95b30dc04283de",
"/": "35c6a612ed26e8bdab95b30dc04283de",
"main.dart.js": "bcfd2e06529e9730ac783349a50f4e96",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "cad6d218600672b7ead8bc37c443e4a2",
"icons/Icon-192.png": "510ce32512f0c771ecf190789e873c28",
"icons/Icon-maskable-192.png": "510ce32512f0c771ecf190789e873c28",
"icons/Icon-maskable-512.png": "530aeccbc91c3c0a53d52e815c0a98a0",
"icons/Icon-512.png": "530aeccbc91c3c0a53d52e815c0a98a0",
"manifest.json": "71bb0b365e39540ba1db24a1f42d8a47",
".git/config": "724fb5d7680d2c01221988f9d40a3b96",
".git/objects/61/96c455f387bfb748e7b8dd04fd425c541f3829": "59e41cbcc89870f6e080d427e0629ef2",
".git/objects/0c/af062126bc3db46eca57c9c0539553b918e8d2": "b5ff7893e1a65e2159da5289467c935a",
".git/objects/68/d6942db5c1d8b32f43a70597fadd49a99d0b0e": "dace7ea6d40b2ab22a5d14c3c29c6344",
".git/objects/57/392d372c4b8a04621e7439375407248674a8bd": "3cc41d2d3a0c4f878787a5b95ecc9e38",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/5f302ae66a380a7da7b70f8454de6f948ea805": "232f18ede801cc95dddc8446cf6c790d",
".git/objects/6f/85d32506a10317b7e8a311fcaec1286b77ebc9": "5de54596fef1a2b4842f47c53047f425",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/93ee061258a41e97e6756644ce31ea1bec59d5": "58298930c126ca030a54f7cadff2665b",
".git/objects/32/107b72611b0028a99fea2602dad11e3c21e84b": "7da7e50072bf528a7f31f14c49e5baec",
".git/objects/32/31b99cf7e0cfccd1d7a71c7349848109084ade": "9983d6fec7cd4e0636b5c4287d9f69f6",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/51/a3641f357161b4742b5c36017dc363736fe094": "2832ddb8164b618d756904140685788f",
".git/objects/3d/ba798f3ca80cae7a8af66c4f864f3d80559ec8": "c97b2ff6f53b01b604036bb4da5b91a3",
".git/objects/58/c62dbb338986b1cf2a9cdc64de0a6846d921fb": "474a70babccee32042ab42b34ede6fc5",
".git/objects/94/1c6ad042517659a7c4543d0fbfd06e401b1cbb": "56c8edd5347cb43b4ad0e87b9f3b520d",
".git/objects/0e/bcd5f854b0b315eded8ac240f50cf79aa4f41f": "9bc3386b29a535644114934747d120e8",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/05/ed70f4566bf5a44a44e55029493144ace4cbfa": "9b202ad3aad516dc23bb71e82cd0c1a2",
".git/objects/9d/c1edae087222bf0d1fef685b805ad2cc94964f": "7ec355c032e6f9a9192d2abd4aa7b135",
".git/objects/9c/eb690bcb780de9bc54c1761074dbe2854337c7": "63a91e2a4742d84fbbfb10dd3677a392",
".git/objects/02/ea69bee068a748b603d8c53f23247506a64ae3": "2db99d2ac1b80614f435953f448999d3",
".git/objects/a3/362d7230b17a0de0bbcdd12a1285765f18222d": "2243878adc48df934aa5a01b576ce154",
".git/objects/b2/9fb78e1972a10ba93fd0d6ab3995aac4dbb69b": "a9781138b6e3362d4c40c868126b0266",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/c8120d67d01de41bbbe66372af833228f46445": "cb4dbe6cdb2fd238b95466d5b635eb8f",
".git/objects/d0/77796d1622a5a912d47de49325866f10b64ae1": "de4c9497c20418d9e81a96d7faf6ac93",
".git/objects/be/b920949fc886f4b31f5c0c06cd4ea381be9920": "ebe54ea50a79b77efbbec902b5816640",
".git/objects/df/645d0bf2dedf3a85d5c953d5809136713b5c8b": "e65a294e0b70c33993a204490d05f65e",
".git/objects/df/e742759f0e7974315c21fea32e85cc6814b2be": "1f2c3b25ddf8aea3f289f7a81dc7a811",
".git/objects/df/a843b02bef42849037df4a1a9a3db7f6ac77d2": "b954a4a09cf6e56e8ce926d34e890e3d",
".git/objects/da/28cf12596c0f4933dedbfdbdaba24b4079fdf0": "804f938b7d65ecb4f80e9c6168eb7bca",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/8d15298a2d13a7b103e846c1d75de8f6ae0722": "badb1ccc5c88284b1f8c226ea590f35f",
".git/objects/d6/5b3b86bf2c2baaed6f3a0b19099eee1c14a00e": "7c65546ad7fabdaaf221aa96b6749808",
".git/objects/bc/f57dd4417deb2e9e4590a8fbb23ccf9afccb59": "3187bfa2904b472853f951a728f41c68",
".git/objects/ae/ed68c1909424e84df7004f2e0667b08d7ebe66": "1ca053a5df4c3faa471f4f48159da44e",
".git/objects/d8/d98f2cc44f31b55ee00ac51434267c288d6c20": "8495fac5fe14330f1a13bc1e88c1b007",
".git/objects/d8/ddd199f3897fd3f2562746360f4015cb12cdbe": "85af4734ae65c3b03af0b26a5f6ded03",
".git/objects/ab/bdfc4e60a72ebbdcf5746f151ce98db5ad5149": "0c1655d8664b47d8ee24a18135c15ad7",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/c7/eeaf4e1582dceea10db524cee33113baf0edfc": "42668b360efdf710e6c86e8e4b6089bf",
".git/objects/ee/b46e82ce2385b39da64cd13ececd6945254e10": "8395a2f2a04d980ab005c2e7aec6a3f2",
".git/objects/ee/842a0c3b3de4e73803fdc90df90e928e2d47dc": "6213c21b9cd11118792307aa10da1a0e",
".git/objects/ee/a196532740d97c749d26cb55a331d50055ed1a": "17a5d11bd0f96fbe1ae6dff2e13d96b6",
".git/objects/c9/30a63a28be0ae64a3fd4930f496db235218735": "7a771966bb91a5266c24e88057a88f90",
".git/objects/fd/a4e3f3ea3a26ffd5e710d04980acff1ba11db7": "d5bd578b3d3f18b72b0ce10f94634713",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e50050ff420be999214cd3f37b6ee9cc6568ee": "30a266deb84885171948e3bec888de76",
".git/objects/ca/69537790d70316eb0bc6bb74d27a8eea7eb752": "4ce471d4ff2fb8462b418b38e64b4508",
".git/objects/e4/f18a744d5b39d6441d7ac0884719ffb7b71496": "0e8c2e5b9b01a34ba326f3b3c54650c7",
".git/objects/fe/117caa658a4be063c86ecf619497d66ad9ff16": "bc7a07ea417193319347db200a9ae0f4",
".git/objects/c8/d48171988e85de33d634f3ff55276abebd2f7a": "96bfba526b15d1defcfd2ade4b2c6df1",
".git/objects/fb/52848d6e2de22d5812e2f49c8d2728af66107f": "a80dad4f2b1870ea4575dfde30fd7df5",
".git/objects/ec/f8bcd231d67d356e3af949c31093b869fc1f24": "954624a719a87fe7202e53a64dc63cef",
".git/objects/ec/26c58f5722ec2a97614f499ae17c4dbb17e47c": "167cd74357b0c0654121d1f3923b0e4e",
".git/objects/4e/a0d482f1d010f97c0282513627dfc9d1a7cdc3": "1a36a819257774d37df2197264e7a0d2",
".git/objects/11/673e56b51d2738f764aaf336bf77a14bbbd98a": "41353a9a33ff2a26a4a0076e900ea5c3",
".git/objects/11/c4b1db59fe4591a88abe5bd86915b14654db1c": "4a2102cb26d4a11afc1eb31acd884f99",
".git/objects/87/1b31b42d1cdddb6ec922d4d7b4efc75880ce8e": "7747f02b67fbc4a6a69a1e2268b5fdd1",
".git/objects/28/3303bc921a83417d22e583298f68e3de69ebe9": "d496f00b6f34f40d505277644cf4ed7e",
".git/objects/8f/feca1fb8eeac90c9b74a5bd091f9684100c900": "9c2b6f56614231c0184d72e5fa16e9da",
".git/objects/8a/3309f448809e4b6968f72d0435f2f027c36048": "9ec092748a0620ca38de2a255e9097b8",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/10/8d4c695fd27f78ea2caceea1d5c4f72f0df36d": "473e3c7dcdcdab13824aea6f379cb5ea",
".git/objects/19/8e7c5bda50280a4cfc72d9be3e88da043dc0bf": "d16ab821334b474052553b5c49353850",
".git/objects/26/41d05ba3684a8ff021e33c88f3aa031b75be8d": "d98a2bcbc7b551dc498c7d97dcc87e1a",
".git/objects/75/54dac0d1db9b3d889c8b8bab99a1832c0f86e5": "89ec388158f2a44de5606d8d4769acfc",
".git/objects/86/26835246f9eaad41c34c270f62be9d618cec90": "03138d199757359c6fa349cf2fec3abe",
".git/objects/72/8505939fbf6682e0dbe7de166f2c92ef2755f1": "5a72f3f74e8eee3927c6ff7f475c0410",
".git/objects/2a/b1903bd1b0f0e45008faf81c3bc1e544c8a673": "8b54c9fe328147871024b448d4fa387e",
".git/objects/2a/10956fd5d271d5851d1ef5d396915f92011974": "b1b4a6c126899ed757660d89bace3ad1",
".git/objects/2f/8ac59339bf2ae4aac07a0493f86ed4084b42c7": "18131f335a4424a630b015722d220e37",
".git/objects/2f/567a01b753bacde8cba0832fa744967dafcab9": "91462a4a5a9de5a8a9008c917c0dd2cb",
".git/objects/9f/aa1a279de2c0d9693a5ab9b4fa007d375e3ff4": "ebd57fb5642fe82d93a7595adb1d4277",
".git/objects/07/07c16af46f5acc2dd0b3cefa2fd66e5e774df2": "06e37bca634978f527f9b0aebcbc52ac",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/36/d8998f599143c813a9eacdd6dae71d60c0cd26": "6f4530f2eefd51e759416ee0e96ebc93",
".git/objects/5d/72d71b42f2cdb99645d51d6335a2a738247bdd": "23ef433a3be647919b1e3bf10b591c8b",
".git/objects/5d/2d3aa3116d558e4aa99fc94433c5a7e924397f": "8bb6d082dad791faff5b269f0da14918",
".git/objects/91/ac9065701d4615e24fee27016f4cf642fea170": "d998d400bac5adc7e4c9821e2baa16e6",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/adaebf1603f99c9af476d827708e6401a96191": "ca54cda297e97375c86426761c56a8c4",
".git/objects/65/c23e59a344d29bd3c0c23ccb0d8dd26a7581a9": "10ac223cf67fea7f94b4997faa8fd9e6",
".git/objects/3f/89f45dedd398ad355649bed9870a5adf306a5c": "b201da9d6103d9d92f63535db78d90c6",
".git/objects/01/da2f236b430a7c3e4542d0e300f691585cc214": "804704b2588f41b979014821a0c7cf6a",
".git/objects/01/e301fe1a10cf9af44fa1908ad0f900ee74291e": "f83815548eaec5a83e6c7d7465f6f894",
".git/objects/6c/bc4fb11336990daf9dcf0d8f42fc0ac2a3c309": "29a8a92541538bf0a58c5817d8e9f8a9",
".git/objects/39/455992a3ae293a61090c69e4a2c67691a1018e": "31c16daf70478a202d6e1503e3531732",
".git/objects/52/fd11e64c371c8965b0806bb25febc4dc1a41cc": "08b80727cbece6014a62d8e2d914792d",
".git/objects/52/b5298cf2e94534594077954319628e22be0c1b": "e20dd57f76facaf56405f1ab85ffd91e",
".git/objects/0f/1024529c86807b2c62b4d7bd5f29a7f33d1cf9": "400e6eeca9aaa760e86367f6d9c788c7",
".git/objects/0a/3a02223b50dbc425a5844dff3122cce78e4042": "c1f8a333c2ae3a7f656e50ac64538fbe",
".git/objects/d3/0da0ca0b8c4f04849751c7dd4cbaeb305a44f4": "bd41587b86584316b955bc8b6430d6e0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/2aab402575a35c79b4ded0a7ce886204cac498": "692ffa2d71490a91f5a464e567939fa3",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/a63dbb738d72bff631d023f68cf57648bddc21": "9aa9936496d23a787da68101bdea805a",
".git/objects/d5/d986b0ef2d92cb53d4094fa5ce10dac133ebcc": "e5dca71db6987ec88c0490f95df8f75d",
".git/objects/d5/0cae5b9ab141227b94f7c6ec07af26b07be3e5": "b1669a6f8d9b83eea7ec8135d4af4b32",
".git/objects/d2/1bef2f234f3c782e15117a4955d0de3c9a7dc6": "fcc17ab1c18e00f2f5d59e1c430dfe02",
".git/objects/aa/fdf31c2696fc61973ed3e7b7a5c6e7092d8f7a": "f86ce7169474107adbc5188b5575c393",
".git/objects/af/38b2f72a7e7005a93aa7d16091abce5a675f6b": "815aaa4716c714aacb390358f8d57cbb",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/c619467b89c4922b1e849273e7fab8914edddf": "cb6bf069c3120fb7801acadce8ede2b0",
".git/objects/de/2c4a398c4e793ee1511ad15f5e68e6fe5df84b": "ae6920c2e422dfd495991aa936abb8db",
".git/objects/de/f96cb5dd8f1ed8e5b7296b2254ea8e9f822a6e": "fbe36c97a7aa285e99ed206bcd1572fc",
".git/objects/b0/5a09ef909d32902662ad52841e433dbd1bb735": "cbf75149db780ac67ff9d1bdab20eb0c",
".git/objects/a6/689fe2f9c407b77bfff08915a6b3c3b7ea9c47": "7aaa3f84f9da183efaf00cbd733abeca",
".git/objects/b9/a82b28853e4efe9798240fc293f712914e4f4c": "f69421776ba69f3356e0af827b13ee17",
".git/objects/a1/002e016706eedc9ba164e1d86d28a776b69680": "f0cc9911dff1c3c6178196af0eab2594",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/d4e630bf0eca30f523e856e89c41cb080400c9": "fb78c27ed3e7cbc8ee86135cba818787",
".git/objects/c4/d425eefa250625a4a24df2f7814e1a1540adea": "4259c008dc7725dd54d090aae6ded841",
".git/objects/c4/d474feffcdac0c07bde238afabe02a36f5fe03": "14769935c00887d52424c4a764816bf1",
".git/objects/ea/2ad65d818313fe34934a726edfb5cc6b388a4e": "e1bea00f52912d45da45783dcc9c2d42",
".git/objects/ea/d1f199921b6e372df086997c24ee8deda02087": "b7b6f72605682082497218295d132d26",
".git/objects/e6/8436e7a88949f79f555ba31f71c5d929584c06": "3188bc8c464a3f4c6bb8eed6903fe5e8",
".git/objects/e6/9d896426d818b58b6314943a5493b683ca117e": "adc092a8c4a281361bb6120dcf16b995",
".git/objects/f9/faafd551282660666a98ac9e545225528d134d": "53072060fef37c8145904e9ec0fbbd96",
".git/objects/f0/56a7f98c953f2cef86a6b32ce1acba62cf7cf0": "02cfe40130925c20d3656dfc2bb5a42e",
".git/objects/e8/fc44ccddfd15a96c50654fdebaaccfafbc1e5b": "fa98ffc8539fb5f3e020dc75a5f8771b",
".git/objects/c2/a9560ced90b436192b3302ac1fa805a7544692": "3f587e034bf27db6f8500a8aa862d48b",
".git/objects/f1/e694702324c72669ed41a25b4afa96afc0d511": "438f71db10aa5a9f66e7b601f88f9e62",
".git/objects/e7/7163f9b9435b3641e12f78bd21a2395a0c288f": "bc2ce336c0a3db2cdda396daf1ec03ce",
".git/objects/cb/baa10bfcdcf103fbf7a30c172c8fb345cd2ba6": "dfc4f06d279e8f8daf620ffb7894cac0",
".git/objects/f8/eb55d6b57806d8b88c566403127e52e4b60ab9": "99737c05ca9a0c2eacbf36b13e06c0f7",
".git/objects/ce/af189b56f1ffe66aacc277983d277d66936a62": "6bf24e7f73e948152b0eaf5b966ada9d",
".git/objects/2d/a86ef7f0ff9f910ebf39ca8063916410e50b71": "e9d170f4778ab0aed7b3fc53a1ea7615",
".git/objects/2d/9d98b7892dba1c2edbe4d507b93627a153a04b": "fbd63766085ce16f45a87d6ef026cb5d",
".git/objects/1e/7e29510a81db6a6ed2282fd719ea2c85656d77": "257eca5561b385058ffe8b2e9cf11e51",
".git/objects/1e/bf9b66227d19c4e9aeca2aedd710c277ed9c42": "c6f188b230d2ab7f8ccfa243b44fa0d4",
".git/objects/84/d88dcd9629f07c72642a000e66108fa4268fc0": "549e4f0b753f1ca34c9d6e4382d4633a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/62a0fa92800ce9e4004954e598dedb32952d6c": "35d633ed90e86929949739d64d392431",
".git/objects/8c/b3ff8fe97547c70fa318b16f15e5c4864f08e9": "03021456f4535ac9d4d89e06a1ad5b12",
".git/objects/1d/7605e7a3ab07becfbcde215f718c040092715a": "79fe18f0f16775db3eb26ced161d70fb",
".git/objects/1d/d805873512321c2c9b33aee871c705258e06a4": "c563e1bb4b687e207368f3d15aa5ad2c",
".git/objects/82/5fab86df294d1ada3d5b0827a42bff0a7caaf3": "0d9191bb0ddf7ffec0f18168549eda13",
".git/objects/82/98b22791b4e5347fcd3114d861199c80d889a3": "c77eed5036ab3a2ec5dfd59918860c05",
".git/objects/49/b0c0090220dc914f683dacd8be8efa6ac28dfb": "3f05770f9c0be250b014a9fb59b7a229",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/37819bf284ae6f9ab4fa8c9dfe6765212ae2da": "469c59c1246160ce85c5e8307e45dc21",
".git/objects/40/696e374c61fa3d8b83d4380416d1be4d7f2d94": "21fe7a184f31b787aac8d1800f2f740f",
".git/objects/2b/70c5a526554aa9f02f45b03512a13fce5f2f3c": "20289e7f35fc334647351f58dcac1730",
".git/objects/7f/ca355e92a01c5079dbda00136073891f9f2814": "a22b8a168cb65b27f65dbbe32fc7dcc7",
".git/objects/7a/b4326d398da32e23a9d775ce41623f9e915713": "0596fbcf17a5557421bb947e70aae546",
".git/objects/14/16f0cb0459296d67180aaca35d6fc5df23fbda": "72dbd0e56a2e4dfdbaf7295e4164fa0f",
".git/objects/8e/c31f7b6195519592210c18d8d505742611c8ab": "addb5e42fefff38a2a576aa7dfaa9df8",
".git/objects/8e/e36703f0c02d07c1d7ba8b7e51d0eaedd809d1": "b185b4e9ac513c13e63fb7201884c2b8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "595f7bd36d9a4e8fd2f631e5f7123857",
".git/logs/refs/heads/main": "97e5adbdb396bf758093386298a9e63d",
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
".git/refs/heads/main": "adfc66428325be20d114fa7c27b884e6",
".git/index": "0a386ea0a91ae8e7b3dd4cf232537759",
".git/COMMIT_EDITMSG": "2708ebaf16fd5e8a13e1b3efc3e96450",
"assets/AssetManifest.json": "3620b90b965e010e18c9dc99683abce8",
"assets/NOTICES": "ace03e498075f4851dcd6ec44c1e42cd",
"assets/FontManifest.json": "ff91f58eefb0f458e137610f03a6739d",
"assets/AssetManifest.bin.json": "a342c8785178cb39177fa0e846b03782",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "77eba93dbc6e136c9475676e0c195b12",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6ff6212ab88312300a97763c75af18d7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "378f4fe4eeb52ed072a08c508c6c0a30",
"assets/fonts/MaterialIcons-Regular.otf": "ddf195f4d0cc436a715e859f33374b6d",
"assets/assets/app/splash.png": "61022dc8f01ddf50a9493688c65ac6f4",
"assets/assets/app/logo.png": "95ff749b7e29512fa9ebc56a8a004cbf",
"assets/assets/app/splash_a12.png": "7f5004c9cb724486e3865a9ace08cff2",
"assets/assets/app/icon_foreground.png": "dcedd2ea240189fa1aa911a7df6b999f",
"assets/assets/app/launch.png": "970224907d794013e8f132352b38e2aa",
"assets/assets/images/pawellak.png": "c6943ba69af0f49b471152e589268ae8",
"assets/assets/images/project_list/healthy_2.png": "24bda28efcccd173e46b58f2b575e20e",
"assets/assets/images/project_list/healthy_3.png": "9513e952ccc33f8b47df54ac193c1b12",
"assets/assets/images/project_list/concierge.png": "063587d126b63a109810bf2a859685cc",
"assets/assets/images/project_list/healthy_1.png": "9f5bba962acd48b2a92206d62f62cb56",
"assets/assets/images/project_list/enea.png": "96c7c024d32c4ec97d8bbb88016923b8",
"assets/assets/images/project_list/pam_2.png": "226f1254665913b7ce889ac5b7371570",
"assets/assets/images/project_list/quiz_1.png": "1cda83b56508a29f2ce8621f72efa0a3",
"assets/assets/images/project_list/pam_3.png": "69958de4d35581738e43eef0c01ca843",
"assets/assets/images/project_list/pam_1.png": "4d15652caf64e59dc070d7da26146abd",
"assets/assets/images/project_list/quiz_3.png": "6b091ca2e5b875dcac07a184fba22d0b",
"assets/assets/images/project_list/quiz_2.png": "eb05340cef4edbc1c3c995318e5d75fb",
"assets/assets/images/project_list/concierge_2.png": "c74017fa51dd55fbee2fa2036217439d",
"assets/assets/images/project_list/pico.png": "bb7116cf1895826c2c95ad00ea63e2c3",
"assets/assets/images/project_list/concierge_3.png": "8c1949ad17f2e27c2fa811c06608a81d",
"assets/assets/images/project_list/concierge_1.png": "f18628bbdc3ee5c37df2a573dc4c0e32",
"assets/assets/images/project_list/portfolio_2.png": "f4d1c2aa2132389f3e9245716321e6f6",
"assets/assets/images/project_list/udemy_1.png": "177ea8bfbecc4a4ea6869cfd7b86bfdc",
"assets/assets/images/project_list/portfolio_3.png": "233598e53410a47c96def76efd66a840",
"assets/assets/images/project_list/portfolio_1.png": "5b8eec6cf70ed8ad775103fa1d104e7f",
"assets/assets/images/project_list/leksykon.png": "0af1c57f425038456a8b602ee2ce5029",
"assets/assets/images/project_list/pico_1.png": "65c45976f6fb7f1b60fa5ad69bf29cc1",
"assets/assets/images/project_list/healthy.png": "3c6a9cdbca92df4940a76e484a11f3ae",
"assets/assets/images/project_list/enea_1.png": "a025243fea57c4dda5eee5a398a56dce",
"assets/assets/images/project_list/enea_3.png": "6cbb7f9bbe37a4cb194c8411a923d0e6",
"assets/assets/images/project_list/pico_2.png": "70ac3fc599f5e4452e1a0f7e22b3aa91",
"assets/assets/images/project_list/enea_2.png": "2eb04bc2a134b407cb1fd8dc09501cf1",
"assets/assets/images/project_list/portfolio.png": "a60ef9cecbe6d4364d68f22d508106dc",
"assets/assets/images/project_list/idlogistics_2.png": "4e723a4b9fb2e638d578bac25e489ecd",
"assets/assets/images/project_list/idlogistics_3.png": "b12b22c897e7bbf062428ad00c4986a1",
"assets/assets/images/project_list/idlogistics_1.png": "d42456e22d471701329babbfbc3b7d27",
"assets/assets/images/project_list/udemy.png": "77435fb6c7ac122d58ff3eeec546e1d2",
"assets/assets/images/project_list/pam.png": "dbce7d5b17ad0c5c115db12ba9fcd0e8",
"assets/assets/images/project_list/leksykon_1.png": "e041b15f6298b3461135e762098ebd54",
"assets/assets/images/project_list/maraton_2.png": "b48954dc44aea72a59555a1bad1dddd5",
"assets/assets/images/project_list/leksykon_2.png": "c2bbf42646e1ad52242367ea87055dcd",
"assets/assets/images/project_list/leksykon_3.png": "fba08e1d194af5d88608459ed48cf844",
"assets/assets/images/project_list/maraton_1.png": "4ae58305fdad4036c5b5bc73bc3c03a0",
"assets/assets/images/project_list/prototypes.png": "96c7c024d32c4ec97d8bbb88016923b8",
"assets/assets/images/project_list/idlogistics.png": "ff9f908eabcfaa5476d024bddbbdfc24",
"assets/assets/images/project_list/maraton.png": "657cff6630f0b4f279ec56a3ed26bbac",
"assets/assets/images/project_list/quiz.png": "c6d6143e103dc51770b38b495ca58e47",
"assets/assets/images/icons/github.png": "99dd5e1144fccbc8aab2a38d53b499a0",
"assets/assets/images/icons/flag_en.png": "e3220c3664c3634dfae55b28d235c2c6",
"assets/assets/images/icons/flag_pl.png": "94207a58502fc6de434d9100f8cfc17d",
"assets/assets/images/icons/portfolio.png": "78f2e025b93b558da61703aaeb7c5b52",
"assets/assets/images/icons/linkedin.png": "94282fa60f210547eb9fb20392c80d98",
"assets/assets/images/companies/3x/svantek.png": "50c932dd8a99d8ddeb8ebf369e520b0f",
"assets/assets/images/companies/3x/falcon_acoustics.png": "a96456e5a9b6f937db160e628919794c",
"assets/assets/images/companies/3x/pwr.png": "1b553ae27e24eb76597c60547c56ed18",
"assets/assets/images/companies/3x/sygnisoft.png": "bd7a7a8012ccdd0e6466ca820cacad9e",
"assets/assets/images/companies/1.5x/svantek.png": "cfe6b933266f57cf6451397409350f12",
"assets/assets/images/companies/1.5x/falcon_acoustics.png": "0e85e958d61b729eb7e85dca41fc0bc4",
"assets/assets/images/companies/1.5x/pwr.png": "6749fe91d28a6805891993c9a0b246cd",
"assets/assets/images/companies/1.5x/sygnisoft.png": "9c584820d4d26d5fca54fecf6d708148",
"assets/assets/images/companies/1.5x/ecoplan.png": "2f953f1b5613db9325522073d50034c6",
"assets/assets/images/companies/svantek.png": "4688223700c5308a2eae782777fb81f3",
"assets/assets/images/companies/falcon_acoustics.png": "d42bcf9c447c17978c71277fbd5034b3",
"assets/assets/images/companies/pwr.png": "312ac14429f2499326c0280e75978abf",
"assets/assets/images/companies/sygnisoft.png": "249b715ec768ef9121c954d7d5f9d04a",
"assets/assets/images/companies/ecoplan.png": "062f81c5c9a410b1147451cb2bf44480",
"assets/assets/images/companies/2x/svantek.png": "17008a999180d9b723e1541bfa3e9073",
"assets/assets/images/companies/2x/falcon_acoustics.png": "cb163b6c6fd43b33c1b28ea4b2358e7e",
"assets/assets/images/companies/2x/pwr.png": "a5a19bd666a6baefa2fb67bb941ea2ec",
"assets/assets/images/companies/2x/sygnisoft.png": "292a48401c41e78f57acbb4e118dc580",
"assets/assets/images/companies/2x/ecoplan.png": "830baf728b452d893c5d7cfded11b192",
"assets/assets/features/curriculum_vitae/data/pl.json": "8f504d37c5cd7d8d8dbfef00be374f03",
"assets/assets/features/curriculum_vitae/data/en.json": "a09e00a450646750f5c7455448387c9b",
"assets/assets/features/project_list/data/pl.json": "53161f9d036834a3de6b38f6baa5447d",
"assets/assets/features/project_list/data/en.json": "4e6ebc2c583ef50bcf30ddf7aec047c7",
"assets/assets/lottie/loading.json": "54c2eea997f9d6100da004950ecb75bc",
"assets/assets/fonts/FluentSystemIcons-Regular.ttf": "3aa91e570e37eb6dc6b2b751b7d09cf5",
"assets/assets/translations/pl.json": "88fd5f59e2a9bb295c413f74fe439a18",
"assets/assets/translations/en.json": "dff1c803603b1894ae9f9d1e902c44b2",
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
