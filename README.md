<h2>Motivation</h2>
Setup node to work with typescript

<h2>Create package.json</h2>

```
 npm init -y      
```

<h2>Install typescript</h2>

```
npm i -D typescript
```


<h2>Compile one file</h2>

```
tsc index.ts
```


<h2>Watch mode</h2>

```
tsc index.ts --watch
```

or

```
tsc index.ts -w
```

using the above with the following in another terminal is perfect 

```
nodemon index.js
```

<h2>Create tsconfig.json file</h2>
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

<h2>compiler options</h2>

<h4>target</h4>
<p>Which js version to compile the ts files to</p>
changed to es2020



<h4>sourceMap</h4>
<p>Helps with debugging. Set to true you can see in chrome dev tools----> sources also typescript files</p>
uncomment


<h4>outDir</h4>
<p>Compiled js files will be placed here</p>
uncomment and changed to ./dist 

<h4>rootDir</h4>
<p>The compiler look only here (and in sub directories) for ts files</p>
uncomment and changed to ./src 


<h2>Install others</h2> 
The following is needed e.g. when using require

```
npm i @types/node
```

<h2>Add scripts to package.json</h2>

```
"start": "node ./dist/index.js",
"dev": "nodemon ./dist/index.js"
```

make sure nodemon is installed globally if you want to use it
