export class LiItem{
    constructor(private detail: string, private liKey: string){ }

    getLiItem(){
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.id = this.liKey
        li.appendChild(document.createTextNode(this.detail));
        const del = document.createElement("button");
        del.className = "btn btn-danger btn-sm float-end delete";
        del.appendChild(document.createTextNode("X"));
        li.appendChild(del);
        return li;
    }
}