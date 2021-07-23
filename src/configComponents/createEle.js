import Vue from 'vue';

export default {
    createEle(nodeName){
        var TagClass = Vue.extend({
            render (createElement) {
                return createElement(nodeName);
            }
        });
        var tag = new TagClass;
        tag.$mount();
        return tag;
    }
}  