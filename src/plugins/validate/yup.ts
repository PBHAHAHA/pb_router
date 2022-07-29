import * as yup from "yup"

yup.setLocale({
  mixed: {
    required: "必填项不能为空",
  },
  string: {
    email: "邮箱格式错误，请重新输入",
  },
})

export default yup
