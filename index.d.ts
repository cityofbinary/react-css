import { Provider, ComponentClass } from "react";

interface cssModule {
    0: string[],
    locals?: {},
    i: (...args: any[]) => any,
    toString?: () => string
}

interface module {
    cssModule: cssModule;
}

export const useCss: (cssModule: cssModule) => module;

export const CSSProvider: Provider<Set<string>>;

declare const withCss: (cssModule: cssModule) => (Component: ComponentClass) => ComponentClass;
export default withCss;