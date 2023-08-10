//@ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}

//ts-check ts에게 이 js도 확인하라는 뜻
//ts가 코멘을 읽고 확인! JS자체는 오류나지 않음
