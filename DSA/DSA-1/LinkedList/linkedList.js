
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
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

    display(){
        if(!this.head){
            console.log('No value found');
            
        }else{
            let curr=this.head
            let str=''
            while(curr){
                str+=`${curr.value}` + ' '
                curr=curr.next
            }
            console.log(str);
            
        }
    }
}

let list=new LinkedList()
list.prepend(20)
list.prepend(50)
list.prepend(80)
list.prepend(10)
list.display()