export class ListTemplate{
    constructor(private container: HTMLUListElement){ }
    addItem(item: HTMLLIElement){
        const itemText = item.firstChild?.textContent?.trim()
        if(itemText){
            this.container.appendChild(item)
            localStorage.setItem(item.id, itemText)
        }
    }
    addItems(items: HTMLLIElement[]){
        items.forEach(item=>{
            this.container.appendChild(item)
        })
    }
    removeItem(item: HTMLLIElement){
        this.container.removeChild(item)
        localStorage.removeItem(item.id)
    }
}