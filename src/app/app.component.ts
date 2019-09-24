import { Component, AfterViewInit } from '@angular/core';
//AfterViewInit: 앵귤러가 제공하는 생명 주기 인터페이스 중 컴포넌트의 뷰가 초기화된 후 최초 1회 발생



//@Component를 통해 앵귤러에 전달하는 컴포넌트를 구성하는 정보 : 메타데이터 (컴포넌트와 연결된 뷰 정보인 템플릿, 스타일 정보 등)
@Component({
  selector: 'app-root',   //템플릿에서 컴포넌트를 나타내기 위한 요소명(태그)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  //AppComponent는 애플리케이션의 루트 컨테이너 역할
  
}
