import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Usar ts-jest para suporte ao TypeScript
  verbose: true, // Mostrar detalhes dos testes
  testEnvironment: "jsdom", // Ambiente para testes no navegador
  moduleNameMapper: {
    // Mapeia caminhos para imports, caso você utilize alias no TypeScript
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    // Transforma arquivos .tsx e .ts usando ts-jest
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testRegex: "(/components/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)$", // Regex para os arquivos de teste
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Extensões permitidas
};

export default config;
