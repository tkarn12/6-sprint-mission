// In JS, the class recommended in seperate js files.
//JS에서는 클래스를 각각 다른 파일에 저장해서 사용하길 권장한다.
/* 18:40 각기 다른 파일에서 클래스 상속하려면 export & import 필수라고 한다.
 * 따라서 export & import 사용
 * I was curious about if the inheritance in different files available,
 * I searched on the internet.
 * It said I must need export and import, 
 * so I add those code in Product.js and E-Product.js.
 * https://stackoverflow.com/questions/59325349/how-can-i-inherit-a-js-class-from-another-js-class-which-are-separate-files
 */
import { Product } from "./Product.js";
/** Conditions:
 * ElectronicProduct 클래스는 Product를 상속하며, 
 * 추가로 manufacturer(제조사) 프로퍼티를 가집니다. 
 * The class ElectronicProduct inherit class Product,
 * and has a manufacturer property. */
export class ElectronicProducts extends Product {
  constructor(
    name, description, price, tags, images, favoriteCount, manufacturer
  ){
    //ElectronicProducts class가 Product class를 상속했고 
    //추가 프로퍼티 manufacturer가 있기 때문에
    //super를 통해 부모 생성자를 호출하는 과정이 필요하다.
    // Since the ElectronicProducts class inheritants Product,
    // and it has new property named 'manufacturer',
    // this class should call the parents constructor with super().
    super(name, description, price, tags, images, favoriteCount);
    this.manufacturer=manufacturer;
  }
}
