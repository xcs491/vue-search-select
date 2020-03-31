import { escapedRegExp } from "../utils";

/* mixin for all */
export default {
  props: {
    id: {
      default: null
    },
    name: {
      type: String,
      default: ""
    },
    isError: {
      type: Boolean,
      default: false
    },
    customAttr: {
      type: Function,
      default: () => ""
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    filterPredicate: {
      type: Function,
      default: (text, inputText) => {
        const inputTextArray = inputText.split(" ");
        let matches = 0;
        inputTextArray.map(x => {
          text.toLowerCase().includes(x.toLowerCase()) ? matches++ : null;
        });
        return inputTextArray.length === matches ? true : false;
      }
    }
  }
};
