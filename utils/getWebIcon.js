function get_web_icon(dom, childs) {
    // 一般获取的dom元素为 ul 类名，故传参 li
    // let D = dom.children;
    if(!dom.length){
        dom = dom.children;
    }
    let size = dom.length || 0;
    console.log("图片个数：",size);
    let arr = [];
    for (let i = 0; i < size; i++) {
        let D = dom[i];
        new Promise( (resolve , reject) => {
            while (childs) {
                D = D.children[0];
                if(!childs-1){
                    console.log(D);
                    resolve(D);
                }
                --childs;
            }
        }).then( res => {
            let s = res.children.length;
            console.log(res , s);
            while (s) {
                // console.log(res);
                if (res.children[s-1].nodeName == "IMG" && res.children[s-1].src){
                    arr.push(res.children[s-1].src);
                    break;
                }
                --s;
            }
            console.log(i);
        })
    }
    return arr;
}
function down(href) {
    let name = (Math.random() * 100000).toFixed();
    let a = document.createElement("a");
    a.href = href;
    a.download = "";
    a.click();
}
function get_dom(attr) {
    if (document.getElementById(attr)) {
        return document.getElementById(attr);
    }
    else if (document.getElementsByClassName(attr)[0]) {
        return document.getElementsByClassName(attr)[0];
    }
    else
        return null;
}