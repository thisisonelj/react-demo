/**
 * 封装一个crud动态表单的reducer
 */
// 生成随机数
function getRandomString(length = 8) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function formCrudReducer(state, actions) {
  switch (actions.type) {
    case "add": {
      return [
        ...state,
        {
          inputText: "",
          id: getRandomString(),
        },
      ];
    }
    case "delete": {
      return state.filter((m) => {
        return m.id !== actions.id;
      });
    }
    default: {
      throw Error("未知 action: " + actions.type);
    }
  }
}
