
class Node {
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}


class BinarySeachTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root==null
    }

    insert(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        
    }
}
