// In JS, the class recommended in seperate js files.
//JS에서는 클래스를 각각 다른 파일에 저장해서 사용하길 권장한다.
//따라서 Product.js, ElectronicProduct.js를 만들어서 각 파일에
// 각 클래스를 옮겨왔다.
export class Product{
    constructor(name, description, price, tags, images, favoriteCount){
        this.name= name;
        this.description=description;
        this.price= price;
        this.tags=tags;
        this.images=images;
        this.favoriteCount=favoriteCount ?? 0;
        // favoriteCount: undefined 대신 favoriteCount: 0으로 출력되면 깔끔할 것 같아서 수정함 1009 23:03
        //왜 this.favoriteCount=favoriteCount; 삭제하고 favoriteCount=0;하면
        // main.js에서 favoriteCount가 안 뜰까? 1002 16:23
    }

    /**Conditions:
     * Product class has the method 'favorite'.
     * When the favorite is called, the number of 'liked' increases by 1
     * Product 클래스는 favorite 메소드를 가집니다.
     * favorite 메소드가 호출될 경우 찜하기 수가 1 증가합니다.
     */
    // favorite이라는 이름을 가진 method 정의
    /**  매개변수가 필요할까? Will the parameter needed?
     * No.. Click 이벤트 핸들링은 필요할 거 같은데, 원시 자료형 매개변수가 필요한지는 모르겠음
     * I think the eventhandling is needed in favorite method,
     * but I'm not sure about the primitive data types.
     * -> No parameter, just put a formula.
     */
    favorite(){
      return this.favoriteCount += 1;
      //복합할당연산자 사용해서 아래 코드를 단순하게 만듦.
      /*let liked = this.favoriteCount + 1;
      return liked;*/
    }
}