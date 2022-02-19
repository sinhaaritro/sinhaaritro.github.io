const openLinkInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus();
};
export default openLinkInNewTab;
