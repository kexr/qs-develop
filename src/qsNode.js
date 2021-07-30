class qsNode {
    constructor(ele,atiObj){
        this.arrtributeObj = atiObj;
        this.ele = ele;
        this.childNode = [];
    }
    addChildNode(qsNode){
        this.childNode.push(qsNode);
    }
}

function a(qsNodeRoot,ele){
    var a = [1,2,3];
    var b = [1,1,1];
    var c = [2,2,2];
    var d = [3,3,3];
    // 取到根节点所有子节点
    // 循环子节点
    // 将子节点插入前一节点上
    // 将自身作为根节点子调用
    var qsNodeA = new qsNode(a[0],{});
    qsNodeRoot.addChildNode(qsNodeA);
    a(qsNodeA, ele);
    return qsNodeRoot;
}