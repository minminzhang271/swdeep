
/**
 * js 观察者模式
 * clietList  发布者的缓存列表
 * listen  订阅者
 * trigger  发布者
 *  
 *  */
var event = (function() {
    var clietList = []; //发布者的缓存列表（应聘者列表）

    var listen = function(key, fn) { //增加订阅者函数
        if (!this.clietList[key]) {
            this.clietList[key] = [];
        }
      
        this.clietList[key].push(fn);
        
    };

    var trigger = function() { //发布消息函数
        var key = Array.prototype.shift.call(arguments),
            fns = this.clietList[key];
        for (var i = 0; i < fns.length; i++) {
            var fn = fns[i];
            fn.apply(this, arguments);
        }
    };

    var remove = function(key, fn) {
        var fns = this.clietList[key];
        if (!fns) {
            return false;
        }
        if (!fn) { //如果没有传入fn回调函数，直接取消key对应消息的所有订阅
            this.clietList[key] = [];
        } else {
            for (var i = 0; i < fns.length; i++) { //遍历回调函数列表
                var _fn = fns[i];
                if (_fn === fn) {
                    fns.splice(i, 1); //删除订阅者的回调函数
                }
            }
        }
    };
    
    return{
        clietList: clietList,
        listen:listen,
        trigger:trigger,
        remove:remove
    }
})(); 
export default event;