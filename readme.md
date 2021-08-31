# Readme
[App de riptutorial](https://riptutorial.com/typescript/example/29207/jest--ts-jest-) de jest con ts-jest

# Instalación
  - Ejecutar `npm install --save-dev jest @types/jest ts-jest typescript`

  - Modificamos package.json (si no habilitamos `jest --init`)
  ```
  "jest": {
        "transform": {
        ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
        },
        "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
        "moduleFileExtensions": ["ts", "tsx", "js"],
        "testResultsProcessor": "<rootDir>/node_modules/ts-jest/coverageprocessor.js"
    }
  
  ```
  - Ejecutar con `npx jest` (si no se ha instalado previamente `npm i -g jest`)

### Typeorm
  - [origen - Caiu Lucas](https://dev.to/caiulucas/tests-with-jest-and-typeorm-4j1l)
  - [Ejemplo por comporobar typeorm jest](https://opensourcelibs.com/lib/typeorm-mock-unit-testing-example)
  - [Express TS jest: teoria, cli, SpyOn, faker @types/faker](https://rsbh.dev/blog/rest-api-express-typescript-jest-testing)
  - [Jest docs Mocks](https://jestjs.io/docs/manual-mocks)
  - [jest-typeorm gist Ciantic](https://gist.github.com/Ciantic/be6a8b8ca27ee15e2223f642b5e01549)
  - [profundidad jest typeorm](https://danielcorcoranssql.wordpress.com/2020/08/01/testing-typeorm-typescript-api-with-jest/)
  - [Mocking dirty](http://5.9.10.113/67509778/typeorm-jest-mocking)