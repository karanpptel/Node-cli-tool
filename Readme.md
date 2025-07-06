axios	To fetch data from external APIs (weather, jokes)
chalk	To print colorful, styled messages in the terminal
dotenv	To load configuration from .env files

npm start	Runs node ./src/index.js directly; works locally while coding.
npm link	Registers mycli as a global CLI command, so you can just type mycli anywhere.

my-cli-tool/
├── src/
│   ├── commands/
│   │   ├── compress.js
│   │   ├── string.js
│   │   └── fetch.js
│   ├── menus/
│   │   ├── compressionMenu.js
│   │   ├── stringMenu.js
│   │   └── fetchMenu.js
│   └── index.js
├── .env
├── package.json
└── README.md