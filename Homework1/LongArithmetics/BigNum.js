const BASE = 1000000000;
const BASELENGTH = 9;
function ReadNumber(str) {
  let bn = [];
  for (let i = str.length, j = 1; i > 0; i-=BASELENGTH, j++) {
    if (i < 9) {
      bn.push(+str.substr(0, i));
    }
    else {
      bn.push(+str.substr(-BASELENGTH * j, BASELENGTH));
    }
  }

  return bn;
}

function Addition(bn1, bn2) {
  let sum = bn1.slice();
  for (let i = 0; i < Math.max(bn1.length, bn2.length); i++) {
    sum[i] = bn1[i] + bn2[i];
    if (sum[i] >= BASE) {
      sum[i] -= BASE;
      sum[i + 1]++;
    }
  }
  return sum.reverse().join('');
}

function Subtraction(bn1, bn2) {
  let sub = bn1.slice();
  for (let i = 0; i < Math.max(bn1.length, bn2.length); i++) {
    sub[i] = bn1[i] - bn2[i];
    if (sub[i] < 0) {
      sub[i] += BASE;
      sub[i + 1]--;
    }
  }
  return sub.reverse().join('');
}

function Multiplication(bn1, bn2) { // плохо работает из-за точности вычисления больших чисел
  let mult = [];
  for (let i = 0; i < Math.max(bn1.length, bn2.length); i++) {
    for (let j = 0; j < Math.max(bn1.length, bn2.length); j++) {
      if (mult[i + j]) {
        mult[i+j] += bn1[i] * bn2[j];
      }
      else {
        mult[i + j] = 0;
        mult[i+j] += bn1[i] * bn2[j];
      }
    }
  }
  for (let i = 0; i < Math.max(bn1.length, bn2.length); i++) {
    let extra = Math.floor(mult[i] / BASE);
    mult[i + 1] += extra;
    mult[i] %= BASE;
  }
  return mult.reverse().join('');
}

function Division(bn1, sn1) { //только большое число на маленькое (меньше BASE)
  let div = bn1.slice();
  for (let i = bn1.length; i >= 0; i--) {
    if (i) {
      div[i - 1] += (div[i] % sn1) * BASE;
    }
    div[i] /= sn1;
  }
  return div.reverse().join('');
}