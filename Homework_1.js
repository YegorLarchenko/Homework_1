// Задание № 1
// var a = prompt ("Введите число №1", "");
// var b = prompt ("Введите число №2", "");
// var c = prompt ("Введите число №3", "");
// alert (Math.min (a, b, c));

// Задание № 2
var a = prompt ("Введите число №1", "");
var b = prompt ("Введите число №2", "");
var c = prompt ("Введите число №3", "");
if (a == b && a == c) {
    alert (3);
}
else (a == b || a == c || b == c) {
    alert (2);
}
else {
    alert (0);
}