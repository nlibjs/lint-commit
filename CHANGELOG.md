# Changelog

## v2.0.0 (2026-10-11)

### Breaking Changes

- require Node.js 22.12.0 or newer (previously 14) ([be2277e](https://github.com/nlibjs/lint-commit/commit/be2277e93e402a7978a93b9aff73a23a001b96ac), [8407470](https://github.com/nlibjs/lint-commit/commit/8407470053c13132233c49ccba0940be4d884dff))
- reject empty or multi-line subjects, and match the Merge/Revert/version skip patterns against the subject line only ([e3dec54](https://github.com/nlibjs/lint-commit/commit/e3dec5412db2b219d9cbbce63dfeff7612e62f19))

### Bug Fixes

- close commit validation gaps and correct hook compatibility ([e3dec54](https://github.com/nlibjs/lint-commit/commit/e3dec5412db2b219d9cbbce63dfeff7612e62f19))
- call the changelog bin in the version script ([cef73fd](https://github.com/nlibjs/lint-commit/commit/cef73fd15b97f010cf03f23d5254544fe4301ed3))

### Documentation

- add a license badge ([7b08b02](https://github.com/nlibjs/lint-commit/commit/7b08b0279d0d825ee1f54e2247cdab6a49c5efda))
- point the codecov badge at main and add an npm version badge ([27741c3](https://github.com/nlibjs/lint-commit/commit/27741c337438dad831c6cf1306b57e383008efa1))
- refer developers to official Git hook documentation ([cf56d75](https://github.com/nlibjs/lint-commit/commit/cf56d7519b8c3e3eef7f8ef7f849d1e899e04684))

### Build System

- emit source maps so coverage maps back to src ([5fd7369](https://github.com/nlibjs/lint-commit/commit/5fd7369b2a5468224e9fa6bbf7f51961398bec63))

### Continuous Integration

- revalidate Codecov uploads after token configuration ([d2ce4d7](https://github.com/nlibjs/lint-commit/commit/d2ce4d75049d4ec88345e2485ecdc68ca7632734))
- authenticate Codecov uploads with action v7 ([84986e8](https://github.com/nlibjs/lint-commit/commit/84986e862fea2651dd5f8c6db6927e3ca8f065b3))
- test supported Node.js 22, 24 and 26 releases ([be2277e](https://github.com/nlibjs/lint-commit/commit/be2277e93e402a7978a93b9aff73a23a001b96ac))
- stage npm releases for maintainer approval ([78b8d18](https://github.com/nlibjs/lint-commit/commit/78b8d180bc277b398a79551aeb97a07591ab631c))
- disable dependency caching for npm trusted publishing ([0f9dab1](https://github.com/nlibjs/lint-commit/commit/0f9dab1d905d5a6e7160d6084dd9d2f55ed783b6))
- publish to npm with Trusted Publishing ([5e53f3c](https://github.com/nlibjs/lint-commit/commit/5e53f3c938cc4b685d548eb96121679375928af6))
- drop Node 16 from the test matrix and fix the lint error ([0b00ab0](https://github.com/nlibjs/lint-commit/commit/0b00ab065e2be1cbbf188750a19788beed60193e))

### Dependency Upgrades

- **renovate:** update actions/setup-node action to v7 ([b98b514](https://github.com/nlibjs/lint-commit/commit/b98b514476b9c8fcb39af5e70ad8e9ae05dcfbe2))
- **renovate:** update actions/checkout action to v7 ([1650677](https://github.com/nlibjs/lint-commit/commit/1650677b36e274002e6568f75337269123cdd1ef))
- consolidate Renovate package updates and migrate lint rules ([8407470](https://github.com/nlibjs/lint-commit/commit/8407470053c13132233c49ccba0940be4d884dff))
- **renovate:** update dependency prettier to v3.9.6 (#707) ([a9b9f2b](https://github.com/nlibjs/lint-commit/commit/a9b9f2bb8e99c033142f9d178838d4e326eb1119))
- **renovate:** update dependency prettier to v3.9.5 (#705) ([a7b1023](https://github.com/nlibjs/lint-commit/commit/a7b1023a59da60cb6e1dde796e8ab2e1c299b50e))
- **renovate:** update dependency semver to v7.8.5 (#704) ([2e86174](https://github.com/nlibjs/lint-commit/commit/2e861741fb2a9ef1b9e26394c2f54006827c085b))
- **renovate:** update dependency prettier to v3.8.4 (#700) ([baa9db7](https://github.com/nlibjs/lint-commit/commit/baa9db791af3430876aa60055805e33f43f7916c))
- **renovate:** update dependency semver to v7.8.4 (#698) ([7bfdabe](https://github.com/nlibjs/lint-commit/commit/7bfdabef973cba2d375c5c14ef54c4b520a12861))
- **renovate:** update dependency prettier to v3.8.3 (#695) ([65ad659](https://github.com/nlibjs/lint-commit/commit/65ad659617dc179c26d0474c10957a6f9e23ec5c))
- **renovate:** update dependency semver to v7.8.0 (#694) ([0aebef6](https://github.com/nlibjs/lint-commit/commit/0aebef6e220c1bb985c7275380033734b357405c))
- **renovate:** update dependency semver to v7.7.3 ([44dd826](https://github.com/nlibjs/lint-commit/commit/44dd82682863d3b9601adfd23acee46a03f72bcf))
- **renovate:** update dependency prettier to v3.7.4 ([73cbd15](https://github.com/nlibjs/lint-commit/commit/73cbd15d1ca22cf194d1b362fba7ff25a07e547d))
- **renovate:** update dependency eslint to v8.57.1 (#684) ([2e1d199](https://github.com/nlibjs/lint-commit/commit/2e1d1999deb742ee052fd5a924a27b1aa7558eb1))
- **renovate:** update dependency @nlib/changelog to v0.3.2 (#682) ([37e43ba](https://github.com/nlibjs/lint-commit/commit/37e43bae5b7d26b9b9b66881055cbb33a0d26404))
- **renovate:** update dependency @nlib/githooks to v0.2.2 (#683) ([9d38408](https://github.com/nlibjs/lint-commit/commit/9d384080c58227af91f6b43a46d5182889ff3021))
- **renovate:** update dependency typescript to v5.4.3 ([d344bfe](https://github.com/nlibjs/lint-commit/commit/d344bfe0ce6d985ffae178cebcc754f0de89ad9c))
- **renovate:** update dependency @types/node to v20.12.2 ([591e144](https://github.com/nlibjs/lint-commit/commit/591e1443bfcab112651b012dbc3548a8005a7dde))
- **renovate:** update dependency @nlib/eslint-config to v3.20.5 ([5309b63](https://github.com/nlibjs/lint-commit/commit/5309b63cdf9572f236293ae7d026772d52b1b262))
- **renovate:** update dependency @types/node to v20.11.29 ([3b8ab86](https://github.com/nlibjs/lint-commit/commit/3b8ab865648efaa998800a7a025b07f8c16d0f06))
- **renovate:** update dependency @types/node to v20.11.28 ([0903b2f](https://github.com/nlibjs/lint-commit/commit/0903b2f4010b84231209bf775071e6a24bea2336))
- **renovate:** update dependency @types/node to v20.11.27 ([f4ad185](https://github.com/nlibjs/lint-commit/commit/f4ad18544fe2bbc26258e6f03b557ec61feb4555))
- **renovate:** update dependency @types/node to v20.11.26 ([f9dec57](https://github.com/nlibjs/lint-commit/commit/f9dec5744be85c8b299279e69494f83161dd1512))
- **renovate:** update dependency typescript to v5.4.2 ([9147031](https://github.com/nlibjs/lint-commit/commit/9147031e5443f1617091c736673338c1b1a70c95))
- **renovate:** update dependency @types/node to v20.11.25 ([3be4364](https://github.com/nlibjs/lint-commit/commit/3be4364fe7fe06cda4f47f2751b286406bcbe18c))
- **renovate:** update dependency @types/node to v20.11.24 ([5120672](https://github.com/nlibjs/lint-commit/commit/512067260f6986f44c87ff4f8a206ebe4c254532))
- **renovate:** update dependency @types/node to v20.11.22 ([fbbeb1b](https://github.com/nlibjs/lint-commit/commit/fbbeb1bc91b6fee57de9472c9d986e54fe99b681))
- **renovate:** update dependency @types/node to v20.11.21 ([b1cf207](https://github.com/nlibjs/lint-commit/commit/b1cf2073f4ae9d937a9579efda38d8765b8d4668))
- **renovate:** update dependency @types/semver to v7.5.8 ([94cd8ef](https://github.com/nlibjs/lint-commit/commit/94cd8ef46332b0c24a310793b3b70825174c1ef5))
- **renovate:** update dependency eslint to v8.57.0 ([2172951](https://github.com/nlibjs/lint-commit/commit/2172951501bc2700af2c685e1a5077775c6317e7))
- **renovate:** update dependency @types/node to v20.11.20 ([93dc501](https://github.com/nlibjs/lint-commit/commit/93dc5018d1699973c768300e5e30a065c9e16126))
- **renovate:** update dependency @types/node to v20.11.19 ([6d82bba](https://github.com/nlibjs/lint-commit/commit/6d82bba10870872ad9b5ac4469116ce774759ee7))
- **renovate:** update dependency @types/node to v20.11.18 ([8c856ef](https://github.com/nlibjs/lint-commit/commit/8c856eff31d4b7f2417a4c29b581eed6536050fe))
- **renovate:** update dependency @types/semver to v7.5.7 ([5f3e74a](https://github.com/nlibjs/lint-commit/commit/5f3e74a152f24480440487f33ebee5e46c25e7d6))
- **renovate:** update dependency @types/node to v20.11.17 ([8bb881f](https://github.com/nlibjs/lint-commit/commit/8bb881fe725673f6c0cd242e73504179a8441ce6))
- **renovate:** update dependency semver to v7.6.0 ([388466f](https://github.com/nlibjs/lint-commit/commit/388466faec6b404fa298c514189cb433ff50cabd))
- **renovate:** update dependency @typescript-eslint/parser to v6.21.0 ([9e5f4fc](https://github.com/nlibjs/lint-commit/commit/9e5f4fc98aae75edf032cb4c4b2e3bbe94159ced))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.21.0 ([a542f0c](https://github.com/nlibjs/lint-commit/commit/a542f0c4712cb4137f9b3281ef5d40b64501b739))
- **renovate:** update dependency prettier to v3.2.5 ([7e9d53d](https://github.com/nlibjs/lint-commit/commit/7e9d53dd6c01973ae51428cd6c3010e2d8b8178e))
- **renovate:** update dependency @types/node to v20.11.16 ([fd984a1](https://github.com/nlibjs/lint-commit/commit/fd984a1c8dc4c23fe12160caa9a71f70bbc7115e))
- **renovate:** update dependency @types/node to v20.11.15 ([d48c55a](https://github.com/nlibjs/lint-commit/commit/d48c55a2c8712cb0bd479e957a89995cc75f6bb2))
- **renovate:** update dependency @types/node to v20.11.14 ([a8ae3b1](https://github.com/nlibjs/lint-commit/commit/a8ae3b11c5cd629ece96608f378cb0836803e577))
- **renovate:** update dependency @types/node to v20.11.13 ([70508b1](https://github.com/nlibjs/lint-commit/commit/70508b19a06c85699bfc55c911ada16f1fd95339))
- **renovate:** update dependency @types/node to v20.11.11 ([757d9c6](https://github.com/nlibjs/lint-commit/commit/757d9c6096f1f0296eb735eb2c859cdc931d8936))
- **renovate:** update dependency @typescript-eslint/parser to v6.20.0 ([1d13131](https://github.com/nlibjs/lint-commit/commit/1d131316bf2a98e2ea158934e0cb4d1b78c140e3))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.20.0 ([b4fcc9c](https://github.com/nlibjs/lint-commit/commit/b4fcc9cabe211d804979a4a83169560c195157b8))
- **renovate:** update dependency @types/node to v20.11.10 ([82fc08b](https://github.com/nlibjs/lint-commit/commit/82fc08bdb5acc04a46558ee8ed5e41bcd8d7a67a))
- **renovate:** update dependency @types/node to v20.11.9 ([e5c0a13](https://github.com/nlibjs/lint-commit/commit/e5c0a13c850dc5d36ec74790a3fc1477b493fb34))
- **renovate:** update dependency @types/node to v20.11.8 ([13ebd09](https://github.com/nlibjs/lint-commit/commit/13ebd096327eb063abf0b9f729e8b980c98bf720))
- **renovate:** update dependency @types/node to v20.11.7 ([f4b82a7](https://github.com/nlibjs/lint-commit/commit/f4b82a7c78bd530b108c026fb840b27c1474e692))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.19.1 ([cb20a54](https://github.com/nlibjs/lint-commit/commit/cb20a5453c2524f7ae981db3e28540e4b96927cd))
- **renovate:** update dependency @typescript-eslint/parser to v6.19.1 ([0b5ca4a](https://github.com/nlibjs/lint-commit/commit/0b5ca4a9f596a58b26946dadb191f2b2eb9390b6))
- **renovate:** update dependency prettier to v3.2.4 ([34d2ca0](https://github.com/nlibjs/lint-commit/commit/34d2ca0c663086778ffd9c2f106dfe1b23a20faa))
- **renovate:** update dependency @types/node to v20.11.5 ([737f0ca](https://github.com/nlibjs/lint-commit/commit/737f0ca19ce0c8d3390edcd5836c2b1a056bbd71))
- **renovate:** update dependency prettier to v3.2.3 ([327f603](https://github.com/nlibjs/lint-commit/commit/327f603db4848c8cebdce4edc3e111eecf0c5903))
- **renovate:** update dependency @typescript-eslint/parser to v6.19.0 ([1b7d8e0](https://github.com/nlibjs/lint-commit/commit/1b7d8e0891defcec20fe556c11c39ba6dc0b7311))
- **renovate:** update dependency @types/node to v20.11.3 ([1163d35](https://github.com/nlibjs/lint-commit/commit/1163d35194b6404b8b037f2f3cc711b96abea014))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.19.0 ([8849322](https://github.com/nlibjs/lint-commit/commit/884932275ee240421f98e792aa777a85f7bb7d95))
- **renovate:** update dependency @types/node to v20.11.2 ([4b4f592](https://github.com/nlibjs/lint-commit/commit/4b4f5924555c28298534b6ca81bf6465150051f9))
- **renovate:** update dependency @types/node to v20.11.1 ([3c6f2d7](https://github.com/nlibjs/lint-commit/commit/3c6f2d786848d3254e332281d64ac5c89b7b5c50))
- **renovate:** update dependency prettier to v3.2.2 ([54b4b09](https://github.com/nlibjs/lint-commit/commit/54b4b09ad2762e0a02b42a7c2dba338d1674fece))
- **renovate:** update dependency prettier to v3.2.1 ([f275bfa](https://github.com/nlibjs/lint-commit/commit/f275bfab4cfef7438fc3d12086c9905e9ce763bc))
- **renovate:** update dependency @types/node to v20.11.0 ([9cff93c](https://github.com/nlibjs/lint-commit/commit/9cff93c83a16a3f24f81911325c0ef8e5fc1e6a9))
- **renovate:** update dependency @types/node to v20.10.8 ([3a95a45](https://github.com/nlibjs/lint-commit/commit/3a95a4510a5028bd010e1e4d6d48e2e9d23c2bbb))
- **renovate:** update dependency @typescript-eslint/parser to v6.18.1 ([4cb1281](https://github.com/nlibjs/lint-commit/commit/4cb1281694651312b49167dc8a0c3f62ec4a466b))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.18.1 ([52bcd6b](https://github.com/nlibjs/lint-commit/commit/52bcd6b28fa5b88be180de77680c22b2ccd99d3b))
- **renovate:** update dependency @types/node to v20.10.7 ([340651b](https://github.com/nlibjs/lint-commit/commit/340651bd84b807019a19e50e5195e663371e4de3))
- **renovate:** update dependency @typescript-eslint/parser to v6.18.0 ([341c6dc](https://github.com/nlibjs/lint-commit/commit/341c6dc629538c3ee6684c7775613d330b9484ee))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.18.0 ([45749f3](https://github.com/nlibjs/lint-commit/commit/45749f31325be9c281e255e74e632fc10dbed625))
- **renovate:** update dependency @typescript-eslint/parser to v6.17.0 ([55a3097](https://github.com/nlibjs/lint-commit/commit/55a309787cdeba1ef04520acd9b0dc5bbf3e5eaa))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.17.0 ([c32603b](https://github.com/nlibjs/lint-commit/commit/c32603b2d0c3124edd98c08e5739c9377e09f241))
- **renovate:** update dependency @types/node to v20.10.6 ([5abf414](https://github.com/nlibjs/lint-commit/commit/5abf414ba4ba913589391111ffcc8ae2f179cb7a))
- **renovate:** update dependency @typescript-eslint/parser to v6.16.0 ([138f025](https://github.com/nlibjs/lint-commit/commit/138f025dcc1593668b2ef5b16db2e40ecd0372f8))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.16.0 ([139e273](https://github.com/nlibjs/lint-commit/commit/139e27343455561bcaaf98e9d87063db527f0ca2))
- **renovate:** update dependency @typescript-eslint/parser to v6.15.0 ([f7e1dba](https://github.com/nlibjs/lint-commit/commit/f7e1dba67cdab59e1d72018a4f373c864e5d47e7))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.15.0 ([83a987b](https://github.com/nlibjs/lint-commit/commit/83a987b5bb060b101229670d682aeaa3c09b98d3))
- **renovate:** update dependency @types/node to v20.10.5 ([56dfc44](https://github.com/nlibjs/lint-commit/commit/56dfc44ace9005dfb23510b28dc5c91abcfd0731))
- **renovate:** update dependency eslint to v8.56.0 ([192b38d](https://github.com/nlibjs/lint-commit/commit/192b38df634b6a13f50a02167c01a7a5582b599e))
- **renovate:** update dependency @typescript-eslint/parser to v6.14.0 ([3b93b51](https://github.com/nlibjs/lint-commit/commit/3b93b5195675d2ddb7cd3d23a62f6c64cc88ac85))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.14.0 ([bbbf4b5](https://github.com/nlibjs/lint-commit/commit/bbbf4b57419a57effb81ca27704bdc0a80cc9786))
- **renovate:** update dependency prettier to v3.1.1 ([e144e71](https://github.com/nlibjs/lint-commit/commit/e144e71eb0b32f8df33a1b0d671cc37511fb03c2))
- **renovate:** update dependency @types/node to v20.10.4 ([6962cea](https://github.com/nlibjs/lint-commit/commit/6962cea3f45ed5e512dbe7cf85e5710fd1dba651))
- **renovate:** update dependency typescript to v5.3.3 ([2d0cd4d](https://github.com/nlibjs/lint-commit/commit/2d0cd4dfe63efd7d73bc62b4d96290327e72326c))
- **renovate:** update dependency @typescript-eslint/parser to v6.13.2 ([ae057bc](https://github.com/nlibjs/lint-commit/commit/ae057bc34a81a47eefb7b0c1f3992efc1227704e))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.13.2 ([9a82552](https://github.com/nlibjs/lint-commit/commit/9a8255274fa92fae135670f18c3390390df86995))
- **renovate:** update dependency @types/node to v20.10.3 ([9132eef](https://github.com/nlibjs/lint-commit/commit/9132eefbf360470a6350cb055b482735ff211d11))
- **renovate:** update dependency eslint to v8.55.0 ([54acd5a](https://github.com/nlibjs/lint-commit/commit/54acd5ab78574e96691e62feeaffa1f10c4e27bd))
- **renovate:** update dependency @types/node to v20.10.2 ([5e7bcb2](https://github.com/nlibjs/lint-commit/commit/5e7bcb23a6397fcb16506220ee403fe7e022db89))
- **renovate:** update dependency @types/node to v20.10.1 ([02e8f88](https://github.com/nlibjs/lint-commit/commit/02e8f880bf41b923ab7d60e511c62e4e5e371f71))
- **renovate:** update dependency @typescript-eslint/parser to v6.13.1 ([109831f](https://github.com/nlibjs/lint-commit/commit/109831fc29eb0f716d353bd7df631a686a777c12))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.13.1 ([5a47e0f](https://github.com/nlibjs/lint-commit/commit/5a47e0fc0e0a83ecb27a1075ae31a2c6f58bc5e2))
- **renovate:** update dependency @typescript-eslint/parser to v6.13.0 ([76e1480](https://github.com/nlibjs/lint-commit/commit/76e148052735d3bdc56f682be60ef19c5ae2c992))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.13.0 ([c85bb01](https://github.com/nlibjs/lint-commit/commit/c85bb01bdf37a7f1fb299576aead0f9810256d28))
- **renovate:** update dependency @types/node to v20.10.0 ([28fa2de](https://github.com/nlibjs/lint-commit/commit/28fa2de0faccbbda92e1e5fb21103e845720bf70))
- **renovate:** update dependency @types/node to v20.9.5 ([55b69c6](https://github.com/nlibjs/lint-commit/commit/55b69c6d19cd41479f7d62762b7037500fc4b700))
- **renovate:** update dependency @types/node to v20.9.4 ([3522363](https://github.com/nlibjs/lint-commit/commit/35223630ee9f90d3fb53b804ea2b993fd196f6c3))
- **renovate:** update dependency typescript to v5.3.2 ([9364d11](https://github.com/nlibjs/lint-commit/commit/9364d114c9c376a4934d7870e2409e3f8b470119))
- **renovate:** update dependency @types/semver to v7.5.6 ([48a4332](https://github.com/nlibjs/lint-commit/commit/48a4332745dd0011b2d3c2c42ba81fa979eccec6))
- **renovate:** update dependency @types/node to v20.9.3 ([8189f9e](https://github.com/nlibjs/lint-commit/commit/8189f9e5f863607ff037ad1cff5e8b882b85ba1e))
- **renovate:** update dependency @typescript-eslint/parser to v6.12.0 ([fdc401c](https://github.com/nlibjs/lint-commit/commit/fdc401c8b6c005c4d079c3a60e9d4d5a8253bf96))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.12.0 ([2c944e6](https://github.com/nlibjs/lint-commit/commit/2c944e647d5966b66ee76ce98bcf5b20ca23a64f))
- **renovate:** update dependency @types/node to v20.9.2 ([21c4a5e](https://github.com/nlibjs/lint-commit/commit/21c4a5ed49dc55c4a984a42bde1a24055644c5fd))
- **renovate:** update dependency eslint to v8.54.0 ([32e6aa0](https://github.com/nlibjs/lint-commit/commit/32e6aa0fe38c0a366e151755704404ba76765e77))
- **renovate:** update dependency @types/node to v20.9.1 ([ac09b07](https://github.com/nlibjs/lint-commit/commit/ac09b076e514954e1568bb9b16a131086c3fe631))
- **renovate:** update dependency @typescript-eslint/parser to v6.11.0 ([ccb5781](https://github.com/nlibjs/lint-commit/commit/ccb578163e3033d725b92c79022d0d1a508fb817))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.11.0 ([0d7236c](https://github.com/nlibjs/lint-commit/commit/0d7236c24c5f450fdedaf7363a2aa125899bd715))
- **renovate:** update dependency prettier to v3.1.0 ([229f0ab](https://github.com/nlibjs/lint-commit/commit/229f0abf1dce9c8c03c75a558f38bc4fc48f304e))
- **renovate:** update dependency @types/node to v20.9.0 ([a008871](https://github.com/nlibjs/lint-commit/commit/a0088718212bed906f753dcfab59b12c6ab02022))
- **renovate:** update dependency @types/semver to v7.5.5 ([83db94f](https://github.com/nlibjs/lint-commit/commit/83db94f939e1b70edcdff6d0b8cbc326a182ef80))
- **renovate:** update dependency @typescript-eslint/parser to v6.10.0 ([80c8eb6](https://github.com/nlibjs/lint-commit/commit/80c8eb66c5f9d8c7a724ae6496e111737fedbfba))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.10.0 ([a10db08](https://github.com/nlibjs/lint-commit/commit/a10db08df79e2176844135536f8503452bf5e582))
- **renovate:** update dependency eslint to v8.53.0 ([f366b99](https://github.com/nlibjs/lint-commit/commit/f366b990e9e087b175f4dde0a3e34fef71ad5000))
- **renovate:** update dependency @types/node to v20.8.10 ([c1fb6f8](https://github.com/nlibjs/lint-commit/commit/c1fb6f8d43286e6d5dfcf3ece10faedeb75e1062))
- **renovate:** update dependency @typescript-eslint/parser to v6.9.1 ([c72a712](https://github.com/nlibjs/lint-commit/commit/c72a71252883f004df0fa58a54a0c3ca987eed3c))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.9.1 ([b92a76a](https://github.com/nlibjs/lint-commit/commit/b92a76a1dbe6a27c75d41f4368550666f02bc7e1))
- **renovate:** update dependency @types/node to v20.8.9 ([b764246](https://github.com/nlibjs/lint-commit/commit/b7642463e3800968d66edb40beb6fc7544e8d094))
- **renovate:** update dependency @types/node to v20.8.8 ([41b4e1c](https://github.com/nlibjs/lint-commit/commit/41b4e1c1d863be0baea14475d127259d9bb9c749))
- **renovate:** update dependency @typescript-eslint/parser to v6.9.0 ([3ef778d](https://github.com/nlibjs/lint-commit/commit/3ef778d6fb2dc2a68d1453a156eaeb4f09b13263))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.9.0 ([9714582](https://github.com/nlibjs/lint-commit/commit/9714582a50e5ae0fe6daa7cd1905219746d4e6da))
- **renovate:** update dependency eslint to v8.52.0 ([15fa438](https://github.com/nlibjs/lint-commit/commit/15fa438bca5ad05ebad65f800f4601934e876762))
- **renovate:** update dependency @types/semver to v7.5.4 ([5e53ef3](https://github.com/nlibjs/lint-commit/commit/5e53ef3f5d3e14ba338ac44a729103ad2d493392))
- **renovate:** update dependency @types/node to v20.8.7 ([4c32378](https://github.com/nlibjs/lint-commit/commit/4c32378cca9382cf3e2fa0efff0352e456046012))
- **renovate:** update dependency @typescript-eslint/parser to v6.8.0 ([816be16](https://github.com/nlibjs/lint-commit/commit/816be164cc7ac9b4096df44547504502e9599568))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.8.0 ([036d2d9](https://github.com/nlibjs/lint-commit/commit/036d2d9c7659b1fa54ae3f2359000e3279bab1a7))
- **renovate:** update dependency @types/node to v20.8.6 ([10ca8ff](https://github.com/nlibjs/lint-commit/commit/10ca8ffeccc460654e0c543ca1b573de80a6298f))
- **renovate:** update dependency commander to v11.1.0 ([d7eee8b](https://github.com/nlibjs/lint-commit/commit/d7eee8bb28350121182f7f9efdf666d777939e1a))
- **renovate:** update dependency @types/node to v20.8.5 ([b29823f](https://github.com/nlibjs/lint-commit/commit/b29823f36b1f71167df36d4e0421ccf08cfa19c7))
- **renovate:** update dependency @typescript-eslint/parser to v6.7.5 ([e2e8abb](https://github.com/nlibjs/lint-commit/commit/e2e8abb50c01d72a6b2d52801136d2dcd86fed54))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.7.5 ([36cf837](https://github.com/nlibjs/lint-commit/commit/36cf83726006fb07deb9c438b1d29fe067a2f8b8))
- **renovate:** update dependency @types/node to v20.8.4 ([14d1cb1](https://github.com/nlibjs/lint-commit/commit/14d1cb148be7233ea4d12b2109879eb6ad9eaed8))
- **renovate:** update dependency @types/node to v20.8.3 ([41f3aa8](https://github.com/nlibjs/lint-commit/commit/41f3aa8a84608e6d0a536b591846512dbc270d4a))
- **renovate:** update dependency eslint to v8.51.0 ([8869d68](https://github.com/nlibjs/lint-commit/commit/8869d68a9bba066bb704175e2f57ae049e691870))
- **renovate:** update dependency @types/node to v20.8.2 ([5c9d328](https://github.com/nlibjs/lint-commit/commit/5c9d32877093f28971e61cd51af1d181bb8a0276))
- **renovate:** update dependency @typescript-eslint/parser to v6.7.4 ([4831f5a](https://github.com/nlibjs/lint-commit/commit/4831f5a630e0d641e66eee8ee5042aafe8ee40e5))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.7.4 ([c935a51](https://github.com/nlibjs/lint-commit/commit/c935a51800092d243f11d5d79193ce6c7994cb28))
- **renovate:** update dependency @types/node to v20.8.0 ([763afa8](https://github.com/nlibjs/lint-commit/commit/763afa8de517eaa4ee9d561aa43ac229797e8033))
- **renovate:** update dependency @types/node to v20.7.2 ([4c6f0af](https://github.com/nlibjs/lint-commit/commit/4c6f0af6c267245b660d3bac487e6b677f2c8024))
- **renovate:** update dependency @types/node to v20.7.1 ([247b73d](https://github.com/nlibjs/lint-commit/commit/247b73ddd6a228640c74ad3211c35412f2473bf1))
- **renovate:** update dependency @types/node to v20.7.0 ([10d0e42](https://github.com/nlibjs/lint-commit/commit/10d0e421534b61b3fa7bbc90d8acc594e822bf35))
- **renovate:** update dependency @typescript-eslint/parser to v6.7.3 ([178d5f9](https://github.com/nlibjs/lint-commit/commit/178d5f959bf0f7340ba757816590ee1a7f9c5c49))
- **renovate:** update dependency @types/semver to v7.5.3 ([7e27f44](https://github.com/nlibjs/lint-commit/commit/7e27f44d12c4a97802059e7214e4f53dc3474501))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.7.3 ([2920c37](https://github.com/nlibjs/lint-commit/commit/2920c373f1490706e373ccdcb41cbaadca66fd05))
- **renovate:** update dependency @types/node to v20.6.5 ([659f36a](https://github.com/nlibjs/lint-commit/commit/659f36a6ecc982b0bd6af372fd0f6419d27d692a))
- **renovate:** update dependency @types/node to v20.6.4 ([0e0e880](https://github.com/nlibjs/lint-commit/commit/0e0e880f6f5f98534b1a5e638028210bf6a8c2d0))
- **renovate:** update dependency eslint to v8.50.0 ([8fb1903](https://github.com/nlibjs/lint-commit/commit/8fb1903951506a0afa4cb4b9d125dde845944d0b))
- **renovate:** update dependency @types/node to v20.6.3 ([54f15ff](https://github.com/nlibjs/lint-commit/commit/54f15ff6c2694e9b72636f1040e629086e57431d))
- **renovate:** update dependency @typescript-eslint/parser to v6.7.2 ([49f333b](https://github.com/nlibjs/lint-commit/commit/49f333b47fba205c7563915a2ae1962c42a5aa3f))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.7.2 ([a2c2d4b](https://github.com/nlibjs/lint-commit/commit/a2c2d4bf9b548f56d50cf5ebab607dfe7db75384))
- **renovate:** update dependency @types/node to v20.6.2 ([d957c80](https://github.com/nlibjs/lint-commit/commit/d957c805b328d3659c49c3ff402626ecae3177a0))
- **renovate:** update dependency @types/node to v20.6.1 ([b3666bf](https://github.com/nlibjs/lint-commit/commit/b3666bf06037b6feef9e2c2055204c2888c462f6))
- **renovate:** update dependency @types/semver to v7.5.2 ([a6041c3](https://github.com/nlibjs/lint-commit/commit/a6041c3c1d11e90c328a2334f74ba76d339883da))
- **renovate:** update dependency @typescript-eslint/parser to v6.7.0 ([f368a91](https://github.com/nlibjs/lint-commit/commit/f368a91237363844186fdee2ec3e7d3adf1bb80b))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.7.0 ([f7bb56e](https://github.com/nlibjs/lint-commit/commit/f7bb56e146ddd47e72ab985affe845b8042d8cb4))
- **renovate:** update dependency eslint to v8.49.0 ([50d05b3](https://github.com/nlibjs/lint-commit/commit/50d05b3eeb48b8e7df7cdb8a6a2192f4f7f68e88))
- **renovate:** update dependency @types/node to v20.6.0 ([c200eb5](https://github.com/nlibjs/lint-commit/commit/c200eb535b1a6275834ca0534474e780892c8057))
- **renovate:** update dependency @typescript-eslint/parser to v6.6.0 ([1f5cc93](https://github.com/nlibjs/lint-commit/commit/1f5cc9397756626c8103c7241f26ad3e4652f06c))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.6.0 ([1490469](https://github.com/nlibjs/lint-commit/commit/1490469702039c1c7d8f98b0ee6e71c5f68c90d1))
- **renovate:** update dependency @types/node to v20.5.9 ([a17e14c](https://github.com/nlibjs/lint-commit/commit/a17e14cc2ddab18439091b9ed5d87b11df2ebff3))
- **renovate:** update dependency @types/node to v20.5.8 ([f03e3f5](https://github.com/nlibjs/lint-commit/commit/f03e3f5fb412abe4db7f18f014915cfe92a09622))
- **renovate:** update dependency @nlib/eslint-config to v3.20.2 ([f6b241b](https://github.com/nlibjs/lint-commit/commit/f6b241bffe705d5c49756d2370249d43da2f355b))
- **renovate:** update dependency @nlib/changelog to v0.3.1 ([ee6bc27](https://github.com/nlibjs/lint-commit/commit/ee6bc27915df1507cea4cc296eb3e17cdd88518c))
- **renovate:** update dependency prettier to v3.0.3 (#524) ([dcc4421](https://github.com/nlibjs/lint-commit/commit/dcc442147b0807101becde6ba8d6b56a86bc3470))
- **renovate:** update dependency prettier to v3.0.3 ([2140beb](https://github.com/nlibjs/lint-commit/commit/2140beb9dc042b39e92eb5782dd164aaba7a3fc9))
- **renovate:** update dependency @typescript-eslint/parser to v6.5.0 ([25a913d](https://github.com/nlibjs/lint-commit/commit/25a913d27cd231f1e46ebb40522d89cc2cd8c745))
- **renovate:** update dependency @types/semver to v7.5.1 ([dda895b](https://github.com/nlibjs/lint-commit/commit/dda895b7afcab86521b47a3cd0fbf691a682bb98))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.5.0 ([35c45e6](https://github.com/nlibjs/lint-commit/commit/35c45e63e3327c90915f06aa579a5f45e2e41456))
- **renovate:** update dependency @types/node to v20.5.7 ([6cf651d](https://github.com/nlibjs/lint-commit/commit/6cf651d7cf9921d3f569e9a57e6c80ca29af7a4e))
- **renovate:** update dependency eslint to v8.48.0 ([09080a6](https://github.com/nlibjs/lint-commit/commit/09080a627e8f921cbd1b032a4b8f9618f0009cd8))
- **renovate:** update dependency @types/node to v20.5.6 ([ecee657](https://github.com/nlibjs/lint-commit/commit/ecee657abe72f4374be11a9a73fb9ff42942f156))
- **renovate:** update dependency typescript to v5.2.2 ([8efca14](https://github.com/nlibjs/lint-commit/commit/8efca14df36aea46f470bd20e73e334eb12c1234))
- **renovate:** update dependency @types/node to v20.5.4 ([0c6656b](https://github.com/nlibjs/lint-commit/commit/0c6656b93f26b9070e6c0ec7acb17230ef001069))
- **renovate:** update dependency @types/node to v20.5.3 ([99c719c](https://github.com/nlibjs/lint-commit/commit/99c719c752400c20f9537c7ebad8b1496fed67d6))
- **renovate:** update dependency @types/node to v20.5.2 ([dc36b12](https://github.com/nlibjs/lint-commit/commit/dc36b12f9f57e6acf68e2ad087303ea4af234689))
- **renovate:** update dependency @nlib/githooks to v0.2.0 ([e0338d8](https://github.com/nlibjs/lint-commit/commit/e0338d88096e770baddbfdff518890432f5c375b))
- **renovate:** update dependency @typescript-eslint/parser to v6.4.1 ([fb65e03](https://github.com/nlibjs/lint-commit/commit/fb65e0318448fcb27fe06bade14f827b53a8ed5b))
- **renovate:** update dependency @typescript-eslint/eslint-plugin to v6.4.1 ([bf693d8](https://github.com/nlibjs/lint-commit/commit/bf693d873d6b2360aa3bee4e9d935515b8b140b8))
- **renovate:** update dependency lint-staged to v14.0.1 ([1418911](https://github.com/nlibjs/lint-commit/commit/1418911b5f71a72a09bb67648ef552b8a6688064))
- **renovate:** update dependency @types/node to v20.5.1 ([96ac902](https://github.com/nlibjs/lint-commit/commit/96ac90264dbf23e3c4e034e5ffdb0177f7581f30))

## v1.0.1 (2023-08-16)

### Styles

- rename .ts → .mts ([53fa04f](https://github.com/nlibjs/lint-commit/commit/53fa04f84deace64adf502db597847d0f0723e4b))
- add prettier ([740f4ad](https://github.com/nlibjs/lint-commit/commit/740f4ad5fa6e21efc50dec7c26605847462e9233))

### Dependency Upgrades

- @nlib/eslint-config:3.20.0→3.20.1 ([03b9bea](https://github.com/nlibjs/lint-commit/commit/03b9beaf420fa95789ed0f4cc2190838e29c3350))
- @nlib/eslint-config:3.19.7→3.20.0 ([44bd49a](https://github.com/nlibjs/lint-commit/commit/44bd49abaa467a2ee04a9e62bc1c9df229b073d1))
- @nlib/changelog:0.2.4→0.3.0 ([be2dd92](https://github.com/nlibjs/lint-commit/commit/be2dd92778dad33bf7c9423d5c1242abb96e7b01))

## v1.0.0 (2023-08-16)

### Breaking Changes

- remove index to export nothing from this module ([392319d](https://github.com/nlibjs/lint-commit/commit/392319d13eaf5856b21d0166d60a9f14cc90f382))

### Bug Fixes

- author.url ([640f44a](https://github.com/nlibjs/lint-commit/commit/640f44ac106899106ffa43cf4fbf5ec84a72bd92))

### Styles

- fix some eslint errors ([492e85c](https://github.com/nlibjs/lint-commit/commit/492e85cc77f242a8bdb88b3b62fa1e2fabd85eeb))

### Continuous Integration

- v2 → v3 ([99a5e0f](https://github.com/nlibjs/lint-commit/commit/99a5e0f1d130092a77ece71f0b6b39e2843ca137))

### Dependency Upgrades

- upgrade some dependencies ([8b73372](https://github.com/nlibjs/lint-commit/commit/8b73372869fd5a07ff029871c01b957b7cf47bc3))

## v0.2.0 (2022-06-19)

### Code Refactoring

- use commander ([22a815a](https://github.com/nlibjs/lint-commit/commit/22a815af37400268bb400ee13acc5e8fcd6bcd18))

### Continuous Integration

- add node 18 and delete node 12 ([79a2be2](https://github.com/nlibjs/lint-commit/commit/79a2be2bc6557254552361dd677f688d69f5e845))

### Dependency Upgrades

- add @nlib/changelog ([3c6142d](https://github.com/nlibjs/lint-commit/commit/3c6142d9583e595ea98f3b6dd2cb99e7d45c0b22))
- delete @nlib/typing ([c472ba2](https://github.com/nlibjs/lint-commit/commit/c472ba2a0cb66469cd3c1608ad7c6365df5e3db0))

## v0.1.8 (2021-09-09)

### Code Refactoring

- remove @nlib/global from src/readNonCommentLine.ts ([828f96d](https://github.com/nlibjs/lint-commit/commit/828f96d4528c508b0418c1206051e1fb3dd2d8d0))
- remove ParseMessageError ([122b067](https://github.com/nlibjs/lint-commit/commit/122b0677a28b6278e880d6ad3b48edd81a2f1ae7))
- rewrite parseSubjectLine ([07c4701](https://github.com/nlibjs/lint-commit/commit/07c4701b697ed91a98932882c42deca35a5d5fcc))

### Build System

- fix build:index ([e4ff30e](https://github.com/nlibjs/lint-commit/commit/e4ff30e9fba0c1e28e2f3e8fea3bd606ed489435))

### Continuous Integration

- call cleanup-package-json directly ([59c3410](https://github.com/nlibjs/lint-commit/commit/59c3410043cc3c4a6f3e052695de5e1406138524))

### Dependency Upgrades

- remove @nlib/global ([6bf15d3](https://github.com/nlibjs/lint-commit/commit/6bf15d32059a2d9ed13d32fb8bd5915b5e6f07ce))
- @nlib/githooks:0.0.5→0.1.0 @nlib/nodetool:0.3.0→0.4.1 @nlib/test:3.18.7→4.0.0 @nlib/typing:0.2.0→0.2.2 @types/node:16.7.10→16.9.0 @typescript-eslint/eslint-plugin:4.30.0→4.31.0 @typescript-eslint/parser:4.30.0→4.31.0 ([aa676d2](https://github.com/nlibjs/lint-commit/commit/aa676d2bb3b7078c686a043a0f30377e7294bb0a))

## v0.1.7 (2021-09-04)

### Continuous Integration

- fix release script ([c16263d](https://github.com/nlibjs/lint-commit/commit/c16263d5c36c8a77183589f0ff393549e1830722))

## v0.1.6 (2021-09-04)

### Documentation

- update usage and a badge ([18ebf35](https://github.com/nlibjs/lint-commit/commit/18ebf35abdd01e62a1dea894684369f47928a8d3))

### Continuous Integration

- fix release script ([d5b7f26](https://github.com/nlibjs/lint-commit/commit/d5b7f26cb32eb29df04f7b5ad97a3132ab52f3dd))

## v0.1.5 (2021-09-04)

### Continuous Integration

- update workflows ([829c383](https://github.com/nlibjs/lint-commit/commit/829c3834d3304929c22d10a24218178bf6c07889))

### Dependency Upgrades

- @types/node:15.14.9→16.7.10 lint-staged:10.5.4→11.1.2 ts-node:9.1.1→10.2.1 ([eafbc69](https://github.com/nlibjs/lint-commit/commit/eafbc69306ecdf4514a3b6b840d4ec0f63efb019))

## v0.1.4 (2021-03-27)

### Dependency Upgrades

- @nlib/eslint-config:3.17.16→3.17.21 @nlib/nodetool:0.1.11→0.1.1… (#102) ([ce945a2](https://github.com/nlibjs/lint-commit/commit/ce945a2fecd0d3146aed3b29c8edd459f8fe2b47))

## v0.1.3 (2020-10-03)

### Documentation

- align badges ([c790ae4](https://github.com/nlibjs/lint-commit/commit/c790ae4f73ec0408d26ba551d529371b0e5515c1))
- add a badge ([be489c2](https://github.com/nlibjs/lint-commit/commit/be489c238c0110a0ad1fa01a16bfc31c6134bbfc))

### Continuous Integration

- fix cleanup-package-json command ([1d060d5](https://github.com/nlibjs/lint-commit/commit/1d060d54fae9315db999acf286678456d71a0700))

## v0.1.2 (2020-10-03)

### Tests

- set timeout ([17593a4](https://github.com/nlibjs/lint-commit/commit/17593a4d3f134e635f05c792593a13578136c1b7))

## v0.1.1 (2020-10-03)

### Features

- output results ([979722c](https://github.com/nlibjs/lint-commit/commit/979722c1afba9f941be26c01cd5c2dd4ec0aeae9))
- initial version ([2f98519](https://github.com/nlibjs/lint-commit/commit/2f98519fc05e7344403087e3c3aeb4b906284c95))

### Bug Fixes

- ignore specific patterns ([1bc1302](https://github.com/nlibjs/lint-commit/commit/1bc13022c6982fd6ca2b2e29ba51a6d9e9588c68))

### Build System

- setup @nlib/changelog ([c5cabed](https://github.com/nlibjs/lint-commit/commit/c5cabed4ebf0fc1954622d261b2be2d042e7b05f))
