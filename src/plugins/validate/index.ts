import { configure, Form, defineRule } from "vee-validate";
import rules from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";

// 配置中文包
configure({
  generateMessage: localize('zh_CN', zh_CN)
})

function defineRules(nameArr: ['a' | 'b']) {
  console.log(rules)
  Object.keys(rules).forEach((key) => {
    defineRule(key, rules[key])
  })
}

export {defineRules};