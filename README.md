<h2>Motivation</h2>
Setup node to work with typescript using tsc and tsconfig.json

<h2>Installation</h2>

<h4>Create package.json</h4>

```
 npm init -y
```

<h4>Install typescript</h4>

```
npm i -D typescript
```

<h4>Compile one file</h4>

```
tsc index.ts
```

<h4>Create tsconfig.json file</h4>
Done in project root once per project. The created tsconfig.json tell typescript that this project is a typescript project

```
tsc --init
```

Now you can do the following and it will compile all typescript files in the project

```
tsc
```

You can combine this with watch mode (it will be relevant for all typescript files)

```
tsc -w
```

<h4>compiler options</h4>

<h5>target</h5>
<p>Which js version to compile the ts files to</p>
changed to es2020

<h5>sourceMap</h5>
<p>Helps with debugging. Set to true you can see in chrome dev tools----> sources also typescript files</p>
uncomment

<h5>outDir</h5>
<p>Compiled js files will be placed here</p>
uncomment and changed to ./dist

<h5>rootDir</h5>
<p>The compiler look only here (and in sub directories) for ts files</p>
uncomment and changed to ./src

<h4>Install others</h4> 
The following is needed e.g. when using node modules

```
npm i @types/node
```

<h4>Add scripts to package.json</h4>

```
"start": "node ./dist/index.js",
"dev": "nodemon ./dist/index.js"
```

make sure nodemon is installed globally if you want to use it

<h2>Usage</h2> 

Use watch mode from one terminal

```
tsc -w
```

Use from another terminal the scripts start \ dev e.g.

```
npm run dev
```

<h2>Limitations</h2> 
<ul>
<li>You will not get error compiling the code with out import \ export sum function - which is not what i am expecting</li>
<li>usage may be cumbersome: you need to compile from one terminal e.g. using tsc -w and run from another terminal e.g. using node or nodemon. You are in big trouble If you forget to compile, use old compilation and run node or nodemon</li>
<li>you get an error using require in index.ts instead of import in case there are no other import in index.ts. This is strange and not clear</li>
</ul>

<h2>Points of interest</h2> 
use import to use node module e.g.

```
import process from 'process';

```

