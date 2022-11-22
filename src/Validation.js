class Validation {
  static bridgeLength(number) {
    if (Validation.isEmpty(number)) throw new Error('[ERROR] 값을 입력해주세요.'); 
    if (!Validation.isNumber(number)) throw new Error('[ERROR] 숫자를 입력해주세요.')
    if (!Validation.numberNet(number)) throw new Error('[ERROR] 3과 20사이의 값을 입력해주세요.');
  }

  static nextStep(value) {
    if (Validation.isStringEmpty(value)) throw new Error('\n[ERROR] 값을 입력해주세요.');
    if (!Validation.oneValue(value)) throw new Error('\n[ERROR] 1개의 값을 입력해주세요.');
    if (Validation.nextStepLowerCase(value)) throw new Error('\n[ERROR] 소문자로 입력하셨습니다. 대문자로 입력해주세요.')
    if (!Validation.nextStepValue(value)) throw new Error('\n[ERROR] U 또는 D를 입력해주세요.');
  }

  static retry(value) {
    if (Validation.isStringEmpty(value)) throw new Error('\n[ERROR] 값을 입력해주세요.');
    if (!Validation.oneValue(value)) throw new Error('\n[ERROR] 1개의 값을 입력해주세요.');
    if (Validation.retryLowerCase(value)) throw new Error('\n[ERROR] 소문자로 입력하셨습니다. 대문자로 입력해주세요.')
    if (!Validation.retryOrNotValue(value)) throw new Error('\n[ERROR] R 또는 Q를 입력해주세요.');
  }

  static nextStepLowerCase(value) {
    return value === 'u' || value === 'd'
  }

  static retryLowerCase(value) {
    return value === 'r' || value === 'q'
  }

  static retryOrNotValue(value) {
    return value === 'R' || value === 'Q'
  }

  static nextStepValue(value) {
    return value === 'U' || value === 'D'
  }

  static oneValue(value) {
    return value.length === 1;
  }

  static isStringEmpty(value) {
    return value.length === 0;
  }

  static isEmpty(number) {
    return number.toString().length === 0;
  }

  static numberNet(number) {
    return number > 2 && number < 21;
  }

  static isNumber(number) {
    const RegExp = /^[0-9]+$/;
    return RegExp.test(number);
  }
}

module.exports = Validation;
