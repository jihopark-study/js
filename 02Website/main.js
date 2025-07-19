import { data } from "./data/main_data.js";
import { HeaderAnimation } from "./js/HeaderAnimation.js";

export const GNB = (option = {}) => {
  const config = {
    parent: "아무거나",
    depthClassName: "depth2",
    ...option,
  };
  const gnb = document.querySelector(config.parent);

  if (!gnb) {
    return;
  }

  const Depth2 = (arry) => {
    return arry
      .map((item) => {
        return `
      <li><a href="${item.depth1Link}">${item.depth2Title}</a></li>
    `;
      })
      .join("");
  };

  const GNBBind = () => {
    const result = data
      .map((item) => {
        // console.log(item);

        return `
          <li>
            <a href="${item.depth1Link}">${item.depth1Title}</a>
  
          ${
            item.depth2
              ? `
                <div class="depth2">
                  <ul>
                  ${Depth2(item.depth2)}
                  </ul>
                </div>
              `
              : ""
          }
          </li>
        `;
      })
      .join("");

    gnb.innerHTML = result;
    // hadleGNB();
  };
  GNBBind();
  HeaderAnimation();
};

//  ${
//     item.depth2
//       ? `<button type="button>${item.depth1Title}</button>`
//       : `<a href="${item.depth1Link}">${item.depth1Title}</a>`
//   }
