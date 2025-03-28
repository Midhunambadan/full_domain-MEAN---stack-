
class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(value){
        this.head=null
        this.size=0
    }

    prepend(value){
        let node=new Node(value)
        if(!this.head){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    append(value){
        let node=new Node(value)
        if(!this.head){
            node.next=this.head
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }

    insertByIndex(value,index){

        if(index<0||index>this.size){
            return 
        }
        if(this.size==0){
            this.prepend(value)
        }else{
            let node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
        }
        this.size++
    }

    removeByIndex(index){

        if(index<0 || index>this.size) return null

        let removeNode
        if(index==0){
            removeNode=this.head
            this.head=removeNode.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next
        }
        this.size--
    }


    removeByValue(value){
        if(!this.head){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
        }else{
            let prev=this.head
            while(prev.next && prev.next.value!==value){
                prev=prev.next
            }

            if(prev.next){
                let removeNode=prev.next
                prev.next=removeNode.next
                this.size--
            }
        }

        return 'pls enter valid number'
    }

    print(){
        if(!this.head){
            console.log('List is empty')
        }else{
            let str=''
            let curr=this.head
            while(curr){
                str+=`${curr.value}`+ ' '
                curr=curr.next
            }
            console.log(str)
        }
    }
}

let list=new LinkedList()

list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
// list.print()


list.append(5)
list.append(6)
list.append(7)
list.print()


list.insertByIndex(11,2)
list.print()


list.removeByIndex(2)
list.print()


console.log(list.removeByValue(2))
list.print()

