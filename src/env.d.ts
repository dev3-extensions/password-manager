/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TESTKEY: string
  readonly VITE_SECRET_ENCRYPTION_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}