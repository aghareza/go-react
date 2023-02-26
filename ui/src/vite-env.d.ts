/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_STUB_API: number
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}