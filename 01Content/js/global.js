import { SNB } from "../list11.js";
import { Select } from "./Select.js";
import { Tab } from "./Tab.js";
import { Tab2 } from "./Tab2.js";
import { Dialog } from "./Dialog.js";
Tab2("tab");
Dialog("popup", true);

SNB();
// SNB({
//   parent: ".gnb",
// });

// Select((value) => {
//   console.log(value);
// });
Select("1dkl");
// 함수 형태가 안될 때 콘솔에러

// 파일명과 함수명을 맞춰주는 것이 좋다.
// 웹프로젝트 진행 시 global.js (style.css처럼 하나만)

// global -> import -> ctrl+click 파일 생성
Tab(".tab", ".tab-contents");
Tab(".tab2", ".tab-contents2");
