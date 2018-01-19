export function getWindowScrollingElement(){
    const windowScrollingElement = window.document.scrollingElement ||
        window.document.documentElement;

    if (!windowScrollingElement) {
        throw new Error("Window scrolling element is not found");
    }

    return windowScrollingElement;
}

export function getWindowPosition(){
    return getWindowScrollingElement().scrollTop;
}

export function setWindowPosition(position){
    getWindowScrollingElement().scrollTop = position;
}