// # 문제1 : 배열의 삭제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

var nums = [100, 200, 300, 400, 500];

nums.pop();
nums.pop();

console.log(nums);

// 정답
// nums.pop();
// nums.pop();

// 다른 방법
// nums.splice(nums.length-2,2)