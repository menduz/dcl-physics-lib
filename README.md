# Example of decentraland library

It uses a [modified version of `build-ecs`](https://github.com/decentraland/explorer/pull/1229) to build and import the assets. It does not work with @next or @latest yet.

For the demonstration, all compiled assets are committed to this repository. ([dist folder](dist))

## What is the value in decentraland libraries?

Without this change, creating libraries has several limitations and corner cases.
1. Libraries can only exist if the [original sources are commited](https://unpkg.com/decentraland-crypto-utils@1.0.0/index.ts). Then it is necessary to "fool" typescript to include the sources from relative paths because CommonsJS is missing in our AMD context.
2. Bunding and reusing libraries is very difficult or dangerous. It can be made embeding a .js file with proper typings .d.ts. [But it is a horrible hack](https://github.com/decentraland/eth-connect/blob/master/static/esm.ts). 
3. To reuse the ECS capabilities to create i.e. Systems or Components, nowadays packages need to either build in a special way to not embed the ECS itself (there is no tooling for it yet) or commit the raw `.ts` sources.
4. As mentioned in (1), there is no module resolution schemas for this kind of builds. There are only files, and to include something installed in node_modules, you must use relative paths `import { .. } from '../../../../node_modules/eth-connect/eth-connect.esm'` which is obviously, far from being the ideal case.