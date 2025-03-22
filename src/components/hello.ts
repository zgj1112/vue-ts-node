let a: string = "a";
let b: number = 1;
let c: boolean = false;
//  所有类型：
//  js: string、number、boolean、null、undefined、bigint（大数字 很大 es11加入）、symbol(独一无二的数据雷类型)、object(array、function、......)
//  ts:any、unknow、never、void、tuple(就是特殊的数组)、enum 自定义类型的方式：type、interface

//string和String 是有区别的 大写的为包装对象 小写的是基础数据类型
//自动装箱过程
let str = "hello";
//当访问str.length时，Javascript引擎做了以下工作:
let size = (function () {
  //1.自动装箱:创建一个临时的string对象包装原始字符串
  let tempstringobject = new String(str);
  //2.访问string对象的length属性
  let lengthValue = tempstringobject.length;
  //3.销毁临时对象，返回长度值
  //(avascript引擎自动处理对象销毁，开发者无感知)
  return lengthValue;
})();
console.log(size); //输出:5

//any会破坏原有ts unknow可以处理这个问题
let x: string = "222";
let y: any;
x = y;

//断言
let a1; //
a1 as number;
let a2: string = <string>a1;

//never用于限制函数 never是ts主动推断出来的 如果一个值显示never了 基本不会走到这里
function test1(): never {
  throw new Error("永不结束的函数，因为报错");
}

// 方法返回也需要类型
function test(a: number, b: string): boolean {
  return a && b ? true : false;
}

//对象
let person: {
  name: string;
  age?: number;
  [key: string]: string | number;
};

//数组
let arr: string[];
let arr1: number[];
let arr2: Array<string>;

//枚举 下面四个对应0123 美剧是递增的 如果down是3开始 则left=4
enum fangxiang {
  up,
  down = 3,
  left,
  right,
}
//调用的方式
// console.log(fangxiang[0], fangxiang.down);
function testfx(data: fangxiang) {
  if (data == fangxiang.down) {
    //....
  }
  if ((data = fangxiang.up)) {
    //...
  }
}
testfx(fangxiang.down);
//注释代码的开始和结束 #region  #endregion

//type 1.联合类型
type lianhe = string | number;

//交叉类型
type jiaocha = {
  x: string;
  y: number;
};
type jiaocha2 = {
  w: string;
  z: number;
};
type jiaocha3 = jiaocha & jiaocha2;
let testjx: jiaocha3 = {
  x: "1",
  y: 1,
  w: "1",
  z: 1,
};

//类 原始
class Person {
  name: string;
  age: number;
  // 构造器语法是必要的
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(1111);
  }
}
const zs = new Person("zs", 18); //构造实例对象
zs.speak();

// 继承
class Student extends Person {
  study() {
    console.log(2222);
  }
  // 如果继承类有相同的方法 要写override 标准语法
  override speak() {
    console.log(4444);
  }
}
const ls = new Student("ls", 20);
ls.study();

//简写形式
class Person1 {
  // 构造器语法是必要的
  constructor(name: string, age: number) {
    console.log(name, age);
  }
  speak() {
    console.log(1111);
  }
}

//抽象类的使用 关键字abstract 通用类
// 不能直接实例化：抽象类不能被直接实例化，只能被继承后使用。
// 可以包含属性和方法：抽象类中可以定义属性和方法，可以有具体实现的方法和抽象方法。
// 可以包含抽象方法：抽象类中可以定义抽象方法，这些方法只有方法的声明而没有具体实现，需要在具体的子类中实现。
// 子类必须实现抽象方法：当一个类继承了抽象类时，它必须实现抽象类中的所有抽象方法。
abstract class Product {
  constructor(protected name: string, protected price: number) {
    this.name = name;
    this.price = price;
  }
  //定义抽象方法
  abstract getDescription(): string;
}

class Electronics extends Product {
  constructor(name: string, price: number, protected brand: string) {
    //super 关键字使得在子类中能够访问和操作父类的属性和方法，从而实现继承和方法重用。
    super(name, price);
    this.brand = brand;
  }

  getDescription(): string {
    return `This ${this.brand} ${this.name} costs $${this.price}`;
  }
}

class Clothing extends Product {
  constructor(name: string, price: number, protected size: string) {
    super(name, price);
    this.size = size;
  }

  getDescription(): string {
    return `This ${this.size} ${this.name} costs $${this.price}`;
  }
}

class Food extends Product {
  constructor(name: string, price: number, protected expirationDate: string) {
    super(name, price);
    this.expirationDate = expirationDate;
  }

  getDescription(): string {
    return `This ${this.name} expires on ${this.expirationDate}`;
  }
}

//调用
const iphone = new Electronics("iPhone", 999, "Apple");
console.log(iphone.getDescription()); // 输出: This Apple iPhone costs $999

const shirt = new Clothing("T-Shirt", 29, "M");
console.log(shirt.getDescription()); // 输出: This M T-Shirt costs $29

const milk = new Food("Milk", 2.99, "2022-01-31");
console.log(milk.getDescription()); // 输出: This Milk expires on 2022-01-31

// 导出类 项目中使用需要导出
// export { Electronics, Clothing, Food };

//interface 接口
interface interfacetype {
  name: string;
  age: number;
  speak(): void;
}

interface interfacetype1 {
  phone: string;
  address?: string;
}

// 给类限制类型 实现（implements） 一个类可以实现多个接口
class Intercalss implements interfacetype, interfacetype1 {
  constructor(public name: string, public age: number, public phone: string) {}
  speak() {}
}

//泛型 当定义时不知道类型可在使用时传递
function testfun<T, U>(data: T, data2: U) {
  console.log(data, data2);
  return false
}

testfun<string, number>("aaa", 333);
testfun<number, string>(111, "bbbb");


//装饰器
function decorator(target: Function) {
  target.prototype.toString = function () {
    return JSON.stringify(this);
  };
}

//简写形式 这里的@decorator  等价于执行 decorator(Person1) 类是function 装饰器中返回的类会覆盖原有的类
// @decorator
class Person3 {
  // 构造器语法是必要的
  constructor(name: string, age: number) {
    console.log(name, age);
  }
  speak() {
    console.log(1111);
  }
}

let p1 = new Person3("zs", 10);
// 此处的装饰器由于原型身上的已经变化则被改动 toString的本质是
p1.toString();

//构造函数类型
// type Isfunction = {
//   new (...args: any[]): {};
//   age: number;//绑定person2中的static
// };
type Isfunction = new (...args: any[]) => {};
function getFun<T extends Isfunction>(target: T) {
  return class extends target {
    createdTime: Date;
    constructor(...args: any[]) {
      super(...args);
      this.createdTime = new Date();
    }
  };
}

@getFun
class Person2 {
  //static是静态 Person2本身的类型
  //static age: number;
  //实例对象中的age不是类型
  constructor(public age: number) {}
  getfun1() {
    console.log(111);
  }
}

// getfun(Person2);