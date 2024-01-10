let a = 6;
let result = ++a + a + a++ + ++a + a;
console.log(result);
console.log(a);
// toán tử a++ sử dụng giá trị biến a rồi mới tăng lên 1 đơn vị.
// toán tủ ++a tăng biến a lên 1 đơn vị rồi mới sử dụng giá trị đó.