const classBase = {
    create() {
        function Person(name, sex) {
            this.name = name;
            this.sex = sex;
        }
        Person.prototype.getInfo = function () {
            console.log("getInfo: [name:" + this.name + ", sex:" + this.sex + "]");
        };

        var a = new Person("jojo", "femal");
        var b = Object.create(Person.prototype);
        console.log('Object.create', b);
    }
}
const classTest = {
    //title: '传统方式：通过function关键字来定义一个对象类型',
    create() {
        function People(name) {
            console.log('People constructor', name);
            this.name = name;
        }



        People.prototype.toSay = function () {
            console.log("People.prototype.toSay" + '我的名字是' + this.name);
        }
        People.prototype.toEat = function () {
            console.log("People.prototype.toEat" + "我吃饭");
        }
        var p = new People("小明");
        p1.__proto__ === People.prototype // true
        p.toSay();

        console.log('p.__proto__', p.__proto__);
        console.log('People.prototype', People.prototype);
    }


}
const classInherit = {

    fn1: {
        getSuperType() {
            //父类型
            function SuperType(name) {
                console.log('SuperType constructor')
                this.name = name
                this.hasFoot = true
                this.color = ["orange", "black"]
            }
            SuperType.prototype = {
                constructor: SuperType,
                voice: function (word) {
                    console.info(word)
                }
            }

            return SuperType;
        },
        /*
        原型链继承  
        将父类的实例作为子类的原型 
        通过对象原型prototype继承 ,
        

        缺点：color是来自SubType.prototype，sub1和sub2共享一个prototype
        */
        prototype_() {
            //父类型
            const SuperType = classInherit.fn1.getSuperType();
            // 子类型  
            function SubType() {
                console.log('SubType constructor')
            }
            SubType.prototype = new SuperType("cat"); //  SubType.prototype.constructor是SubType
            SubType.prototype.constructor = SubType; // 我们将构造函数指定回来，因为我们可以在构造扩展其它属性
            //console.log('subType.prototype',SubType.prototype);

            var sub1 = new SubType();
            var sub2 = new SubType();
            sub1.color.push('red');
            console.log('sub1.__proto__ =  SubType.prototype', sub1.__proto__)
            console.log('sub2', sub2.color); //["orange", "black","red"]
        },

        /*
        构造函数继承
            function SubType() {
            SuperType.call(this)   
           }
        */
        constructor_() {
            //父类型
            const SuperType = classInherit.fn1.getSuperType();

            //子类型
            function SubType() {
                SuperType.call(this) // 这样就可以将原型的实例属性变成自身的实例属性
            }
       
        },

        /*
        组合继承

        缺点：调用了两次父类的构造函数
        */
        combination() {
            //父类型
            const SuperType = classInherit.fn1.getSuperType();

            //子类型
            function SubType() {
                SuperType.call(this) // 这样就可以将原型的实例属性变成自身的实例属性   第二次调用SuperType
            }
            SubType.prototype = new SuperType()  //第一次调用SuperType
            SubType.prototype.constructor = SubType
            var sub1 = new SubType();  
            var sub2 = new SubType();
            sub1.color === sub2.color // false

            // sub2.color.push('green');
            // console.log('sub1.color', sub1.color)
            // console.log('sub2.color', sub2.color)
        }
    },
    fn2: {
        /*
        原型继承   原型继承其实就是es5的object.create()的实现
        核心：因为是对父类原型的复制，所以不包含父类的构造函数，也就不会调用两次父类的构造函数造成浪费
        
        */
        inheritPrototype() {
            function object(o){
                function F(){}
                F.prototype = o;
                return new F();
            }
            function inheritPrototype(subType, superType) {
                var prototype = object(superType.prototype); // 创建了父类原型的浅复制
                prototype.constructor = subType; // 修正原型的构造函数
                subType.prototype = prototype; // 将子类的原型替换为这个原型
            }

            function SuperType(name) {
                this.name = name;
                this.colors = ["red", "blue", "green"];
            }

            SuperType.prototype.sayName = function () {
                console.log('SuperType.prototype.sayName', this.name);
            };

            function SubType(name, age) {
                SuperType.call(this, name);
                this.age = age;
            }
             
            inheritPrototype(SubType, SuperType);
            SubType.prototype.sayAge = function () {
                console.log('SubType.prototype.sayName', this.age);
            }
            var sub1 = new SubType();
            var sub2 = new SubType();
            sub2.colors.push('f0f');
            
            console.log('sub1.color',sub1.colors,sub2.colors)
        }
    }
}


export {
    classBase,
    classTest,
    
    classInherit
}