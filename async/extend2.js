var BaseClass = function() {
  this.name = "I'm BaseClass";
};
BaseClass.prototype = {
  getName:function() {
    return this.name;
  },
  setName:function(str) {
    this.name = str;
  }
};

var base = new BaseClass();
alert(base.getName());

function extend(ChildClass, ParentClass) {
  ChildClass.prototype = new ParentClass();
  ChildClass.prototype.constructor = ChildClass;
}

/* extending */
function extend(ChildClass, ParentClass) {
  ChildClass.prototype = new ParentClass();
  ChildClass.prototype.constructor = ChildClass;
}
/* base class */
var BaseClass = function() {
  this.name = "I'm BaseClass";
};
BaseClass.prototype = {
  getName:function() {
    return this.name;
  },
  setName:function(str) {
    this.name = str;
  }
};
/* sub class 1 */
var SubClass1 = function() {
  this.setName("I'm SubClass1");
}
/* sub class 2 */
var SubClass2 = function() {
  this.setName("I'm SubClass2");
}
extend(SubClass1, BaseClass);
extend(SubClass2, BaseClass);
var base = new BaseClass();
var sub1 = new SubClass1();
var sub2 = new SubClass2();
alert(base.getName());
alert(sub1.getName());
alert(sub2.getName());