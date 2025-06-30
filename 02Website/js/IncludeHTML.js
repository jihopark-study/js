export const IncludeHTML = async (location, target) => {
  try {
    const response = await fetch(location);
    const result = await response.text();

    document.querySelector(target).innerHTML = result;
    // text 메소드는 html코드를 문자화 한다
    // 예) 아래와 같이
    // innerHTML = `
    //   <html></html>
    // `
  } catch (error) {
    console.log(error);
  }
};
