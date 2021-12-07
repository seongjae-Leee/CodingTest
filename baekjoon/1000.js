// file system 모듈을 불러온다.
const fs = require('fs');

// fs모듈의 readFileSync 함수를 통해 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
// 읽어드린 정보는 toString()함수를 통해 문자열로 변환하여야 사용할 수 있다.
// 입력 받은 문자열을 split() 함수를 통해 배열화한다. (split(' '), split('\n') 등)
// 예) 2 3 입력시, inputData = ['2', '3']
// const inputData1 = fs.readFileSync('/dev/stdin').toString().split(' ');

// options으로 인코딩을 string 자료형으로 넘기는 경우, toString을 할 필요없이 문자열 반환
// const inputData2 = fs.readFileSync(0, 'utf8').split(' ');
const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on('line', (line) => {
//   // line을 가공하여 변수에 저장

// }).on('close', () => {
//   // 저장된 변수를 이용하여 계산 후 출력
// });

const inputData = fs.readFileSync(0, 'utf8').toString().split(' ').map(value => + value);

// const A = parseInt(inputData[0]);
// const B = parseInt(inputData[1]);

const [a, b] = inputData;
console.log(a + b);