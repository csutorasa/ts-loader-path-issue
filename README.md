### Expected Behaviour

ts-loader works if the path contains `#` character.

### Actual Behaviour

Webpack build fails with ERROR:

```
../../a#/ts-loader-path-issue/src/index.ts 39 bytes [not cacheable] [built] [code generated] [1 error]

ERROR in ../../a#/ts-loader-path-issue/src/index.ts
Module build failed (from ../../a#/ts-loader-path-issue/node_modules/ts-loader/index.js):
Error: Cannot find module 'C:\a#\ts-loader-path-issue\node_modules\ts-loader\index.js'
Require stack:
- C:\a#\ts-loader-path-issue\node_modules\loader-runner\lib\loadLoader.js
- C:\a#\ts-loader-path-issue\node_modules\loader-runner\lib\LoaderRunner.js
- C:\a#\ts-loader-path-issue\node_modules\webpack\lib\NormalModule.js
- C:\a#\ts-loader-path-issue\node_modules\webpack\lib\NormalModuleFactory.js
- C:\a#\ts-loader-path-issue\node_modules\webpack\lib\Compiler.js
- C:\a#\ts-loader-path-issue\node_modules\webpack\lib\webpack.js
- C:\a#\ts-loader-path-issue\node_modules\webpack\lib\index.js
- C:\a#\ts-loader-path-issue\node_modules\webpack-cli\lib\webpack-cli.js
- C:\a#\ts-loader-path-issue\node_modules\webpack-cli\lib\bootstrap.js
- C:\a#\ts-loader-path-issue\node_modules\webpack-cli\bin\cli.js
- C:\a#\ts-loader-path-issue\node_modules\webpack\bin\webpack.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (C:\a#\ts-loader-path-issue\node_modules\v8-compile-cache\v8-compile-cache.js:159:20)
    at loadLoader (C:\a#\ts-loader-path-issue\node_modules\loader-runner\lib\loadLoader.js:19:17)
    at iteratePitchingLoaders (C:\a#\ts-loader-path-issue\node_modules\loader-runner\lib\LoaderRunner.js:182:2)
    at runLoaders (C:\a#\ts-loader-path-issue\node_modules\loader-runner\lib\LoaderRunner.js:395:2)
    at NormalModule.doBuild (C:\a#\ts-loader-path-issue\node_modules\webpack\lib\NormalModule.js:631:3)
    at NormalModule.build (C:\a#\ts-loader-path-issue\node_modules\webpack\lib\NormalModule.js:775:15)
    at C:\a#\ts-loader-path-issue\node_modules\webpack\lib\Compilation.js:1236:12

```

### Steps to Reproduce the Problem

On Windows 10 with run these commands in PowerShell (tested with 5.1):

```powershell
mkdir C:\a#
cd C:\a#
git clone https://github.com/csutorasa/ts-loader-path-issue.git
cd ts-loader-path-issue
npm install
.\node_modules\.bin\webpack
# if webpack fails set execution policy and run the last command again
# Set-ExecutionPolicy Bypass -Scope Process -Force
```

On Linux run these commands in bash (tested with 5.0.17):

```shell
mkdir -p ~/a#
cd ~/a#
git clone https://github.com/csutorasa/ts-loader-path-issue.git
cd ts-loader-path-issue
npm install
node_modules/.bin/webpack
```
