module.exports = function (src) {
    return `
    if(typeof window != 'undefined'){
        const head = document.getElementsByTagName('head');
        
        if(head && head[0]){
            let style = document.getElementById(module.id);
            if(style) style.innerHTML = \`${src}\`;
            else {
                style = document.createElement('style');
                style.id = module.id;
                style.innerHTML = \`${src}\`;
                head[0].appendChild(style);
            }
        }
    }
    `;
}