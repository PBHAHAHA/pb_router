interface ViteEnv {
  VITE_SOME_KEY: number;
  VITE_ROUTER_AUTOLOAD: boolean;
  VITE_API_URL: string;
}

// ImportMetaEnv 是vite自有的interface 
interface ImportMetaEnv extends ViteEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
