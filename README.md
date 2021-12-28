## Requirement

- NodeJS v16

## Installation

### Prepare

- At first, contact me to provide special code called `Github access token`
- Locate your user-scoped `.npmrc` config by using this command
```shell
$ npm config ls -l | grep config
; "default" config from default values
globalconfig = "/Users/hungphongtruong/.nvm/versions/node/v16.13.1/etc/npmrc" 
userconfig = "/Users/hungphongtruong/.npmrc" // this line
; "user" config from /Users/hungphongtruong/.npmrc
; "cli" config from command line options
```
- Add these lines to your `.npmrc` file
```
@hungphongbk:registry=https://npm.pkg.github.com
```
- Run this command to login into Github npm package registry
```shell
$ npm login --registry=https://npm.pkg.github.com
Username: <enter your github user name>
Password: <paste retrieved Github access token from above>
Email: (this IS public) <your email which associated with github account>
Logged in as <github user name> on https://npm.pkg.github.com/.
```

### Install

```shell
$ npm install
```

### Run

From root of project, add a file named `env.development.local` with these lines

```shell
NEXT_PUBLIC_API_URL=https://api.showcase-dev.vaithuhay.com
NEXT_PUBLIC_UPLOAD_API_URL=https://api.showcase-dev.vaithuhay.com/upload

NEXT_PUBLIC_APP_VERSION=$npm_package_version
NEXT_PUBLIC_SEO_OFF_INDEX=true

NEXT_PUBLIC_UPLOAD_API_TOKEN=f9403fc5f537b4ab332d
```

Do the same with `env.production.local`. Those env files are ignored by `.gitignore` so nevermind.

#### For development

```shell
$ npm run dev
```

#### For production code testing

```shell
$ npm run build && npm run start
```

## Note

1. After each commit, please rerun `npm run dev` again if you're about continue to development. Because within a commit phase, husky will automatically execute `npm run build` using `env.production.local` as the way to validate code. If you see commit failed, please kindly check git logs.
2. Naming branch: please naming your branches with prefix `feature/`