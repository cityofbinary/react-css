import React, { Component, createContext, useContext, useEffect } from 'react';

let styles = {};

const CSSContext = createContext();

export const CSSProvider = CSSContext.Provider;

const injectCss = (cssModules) => {
    cssModules.map(cssModule => {
        let id = `${cssModule['0']['0']}`;
        if (!styles[id]) {
            let css = document.getElementById('css');
            if (!css) {
                css = document.createElement('style');
                document.head.appendChild(css);
            }
            if (css && css.innerHTML.indexOf(cssModule['0']['1']) == -1) {
                css.innerHTML = css.innerHTML + cssModule['0']['1'];
            }
        }

        styles[id] = (styles[id] || 0) + 1;
    })
}

const removeCss = (cssModules) => {
    cssModules.map(cssModule => {
        let id = `${cssModule['0']['0']}`;
        styles[id] = (styles[id] || 0) - 1;
        if (styles[id] < 1) {
            let css = document.getElementById('css');
            css.innerHTML = css.innerHTML.replace(cssModule['0']['1'], '');
        }
    })
}

const serverCss = (cssModules, cssSet) => {
    cssModules.map(cssModule=>{
        cssSet.add(cssModule['0']['1']);
    })
}

export default function withCss(...cssModule) {
    return function (Com) {

        return class WithCSS extends Component {
            componentDidMount() {
                injectCss(cssModule);
            }

            componentWillUnmount() {
                removeCss(cssModule);
            }
            render() {
                if (typeof window != 'undefined') return <Com {...this.props} />;
                return (
                    <CSSContext.Consumer>
                        {
                            (cssSet) => {
                                serverCss(cssModule, cssSet)
                                return <Com {...this.props} />
                            }
                        }
                    </CSSContext.Consumer>
                )
            }
        }
    }

}

export function useCss(...cssModule) {
    const cssSet = useContext(CSSContext);
    useEffect(() => {
        injectCss(cssModule);

        return () => {
            removeCss(cssModule);
        }
    }, [])

    if (typeof window != 'undefined') return cssModule;

    serverCss(cssModule, cssSet);

    return cssModule;

}