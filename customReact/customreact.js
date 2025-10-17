function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    for(p in reactElement.props){
        if(p==='children') continue;
        domElement.setAttribute(p,reactElement.props.p);
    }
    container.appendChild(domElement);
}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
const mainContainer=document.getElementById("root");
customRender(reactElement,mainContainer);