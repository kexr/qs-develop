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

const exportQsNode = function(ele,qsNodeRoot = new qsNode(ele, {})){
    // 取到根节点所有子节点
    // 循环子节点
    // 将子节点插入前一节点上
    // 将自身作为根节点子调用
    console.log(ele.childNodes)
    var nodeArr = ele.childNodes;
    for(let i=0; nodeArr && i<nodeArr.length; i++){
        let qsNodeItem = new qsNode(nodeArr[i],{test: 'test'});
        qsNodeRoot.addChildNode(qsNodeItem);
        exportQsNode(qsNodeItem, nodeArr[i]);
    }
    return qsNodeRoot;
}

export default exportQsNode;

