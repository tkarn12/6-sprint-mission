// In JS, the class recommended in seperate js files.
//JS에서는 클래스를 각각 다른 파일에 저장해서 사용하길 권장한다.
/* Conditions:
class 키워드를 이용해서 Article 클래스를 만들어 주세요.
Article 클래스는 title(제목), content(내용), writer(작성자), likeCount(좋아요 수) 프로퍼티를 가집니다.
Article 클래스는 like method를 가집니다. like 메소드가 호출될 경우 좋아요 수가 1 증가합니다.

250927
Article 요청 함수 구현하기 (심화)
Article 클래스에 createdAt(생성일자) 프로퍼티를 만들어 주세요. (새로운 객체가 생성되어 constructor가 호출될 시 createdAt에 현재 시간을 저장합니다.)
-> class에 프로퍼티를 만들라는 게 꼭 constructor의 필드로 넣어야한다는 거는 아니구나.
강사님께 여쭤봤더니 모범 답안은 유미님이 하신대로
constructor(title, content, writer, likeCount){
  this.title=title;
  ......
  this.createdAt=new Date();
}
라고 하심.
강사님 왈 확실한 정답 하나가 있는 건 아니라고 생각,
관점이 차이일 뿐. 내가 한 방식은
constructor(title, content, writer, likeCount, createdAt){
    this.title=title;
    this.content=content;
    this.writer=writer;
    this.likeCount=likeCount;
    this.createdAt=createdAt;
  }
createdAt에 들어갈 값을 서버에 맡긴(?) 좀 더 유연한 방식이라고 하셨고
유미님이 하신 방식은 createdAt을 확정적이고 명시적으로,
수정되거나 바뀔 수 없게 만든 버전이라고 하심. 13:18
근데 조건 생각하면 유미님께 맞는 거 같아서 내 코드 수정함 251002 13:26
*/
class Article{
  constructor(title, content, writer, likeCount){
    this.title=title;
    this.content=content;
    this.writer=writer;
    this.likeCount=likeCount;
    this.createdAt=new Date();
  }
  like(){
    return this.likeCount++;
    //복합 할당 연산자(Compound assignment operators) 사용으로 코드 단순화 251010 7:13
    //return this.likeCount++ == this.likeCount +=1 == (this.likeCount = this.likeCount +1)
    /*let addLike = this.likeCount +1;
    return addLike;*/
  }
}