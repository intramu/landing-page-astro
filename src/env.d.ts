/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_DOMAIN: string;
    readonly PUBLIC_RESPONSE_TYPE: string;
    readonly PUBLIC_CLIENT_ID: string;
    readonly PUBLIC_REDIRECT_URI: string;
    readonly PUBLIC_SCOPE: string;
    readonly PUBLIC_ADDITIONAL_PARAMS: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
