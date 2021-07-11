export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    addItem(item) {
        var _a, _b;
        const itemText = (_b = (_a = item.firstChild) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim();
        if (itemText) {
            this.container.appendChild(item);
            localStorage.setItem(item.id, itemText);
        }
    }
    addItems(items) {
        items.forEach(item => {
            this.container.appendChild(item);
        });
    }
    removeItem(item) {
        this.container.removeChild(item);
        localStorage.removeItem(item.id);
    }
}
