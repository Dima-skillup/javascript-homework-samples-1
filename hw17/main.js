/* eslint-disable prefer-reflect */
/* eslint-disable prefer-spread */
/* eslint-disable array-bracket-newline */
/* eslint-disable array-element-newline */
/* eslint-disable capitalized-comments */
/* eslint-disable require-jsdoc */
/* eslint-disable func-style */
/* eslint-disable sort-keys */
/* eslint-disable no-param-reassign */

/*
 * #1
 *
 * Создайте функцию counter(), которая должна реализовать счетчик с помощью замыкания:
 * функция может принимать число в качестве аргумента counter(n)
 * если число передано в функцию – счет начинается с указанного числа
 * если нет – то счет продолжается
 */

// console.log(counter()); // 0

// console.log(counter()); // 1

// console.log(counter(100)); // 100

// console.log(counter(0)); // 101

// console.log(counter(500)); // 500

// console.log(counter()); // 501

// console.log(counter(0)); // 0

// console.log(counter()); // 1

/*
 * #2
 *
 * Создайте функцию counting, которая должна реализовать три метода с помощью замыкания:
 * первоначальное значение счетчика – 0
 * counting.value() – возвращает значение счетчика
 * counting.value(n) – устанавливает значение счетчика, возвращает новое значение
 * counting.increment() – увеличивает значение счетчика на 1
 * counting.decrement() – уменьшает значение счетчика на 1
 */

// console.log(counting.value()); // 0

// counting.increment();

// counting.increment();

// counting.increment();

// console.log(counting.value()); // 3

// counting.decrement();

// counting.decrement();

// console.log(counting.value()); // 1

// console.log(counting.value(100)); // 100

// counting.decrement();

// console.log(counting.value()); // 99

// console.log(counting.value(200)); // 200

// counting.increment();

// console.log(counting.value()); // 201

/*
 * #3
 *
 * Создайте функцию myPow(a, b, myPrint). Внутри реализуйте рекурсию для подсчета результата возведения числа a в степень b.
 * функция myPrint(a, b, res) – глобальная функция, которая должна генерировать из параметров a, b, res строку вида 'a^b=res' и возвращать ее
 * myPrint() должна быть передана в myPow() как параметр и вызвана внутри как callback-функция
 * функция myPow() в качестве возвращаемого значения принимает результат myPrint()
 * Например:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 */

//  console.log(myPow(3, 4, myPrint)); // 3^4=81

// console.log(myPow(2, 3, myPrint)); // 2^3=8

/*
 * #4
 *
 * Создайте несколько однотипных объектов для описания автомобиля. Соблюдайте следующие правила, используйте следующие поля:
 * имя объекта car – обязательно и необходимое для тестирования, дальнейшее именование объектов – на ваше усмотрение
 * car.engine – объем двигателя, числовое поле
 * car.model – модель авто, строка
 * car.name – бренд авто, строка
 * car.year – год выпуска, число
 *
 * #5
 *
 * Для созданных ранее объектов определите метод info(), используя ключевое слово this.
 * данный метод должен формировать и возвращать строку с полной информацией об автомобиле, например:
 * Chevrolet Lacetti, 2010cc, year 2010
 * Infinite FX50 AWD, 2018cc, year 2018
 * пробелы, запятые, символы cc и текст – имеют значение и проверяются при тестировании кода
 *
 * #6
 *
 * Для созданных ранее объектов добавьте новое свойство used, используя аксессоры (геттер и сеттер).
 * сохраните текущий год (например, 2019) в глобальной переменной с именем yearNow
 * если год выпуска автомобиля отличается от текущего года, геттер used должен выводить текст 'used'
 * если год выпуска автомобиля совпадает с текущим годом, геттер used должен выводить текст 'new'
 * если сеттеру used присвоено значение 'new', при этом года выпуска автомобиля отличается от текущего года,
 * необходимо изменить год выпуска автомобиля, установив в качестве значения текущий год
 * если сеттеру used присвоено значение 'used', ничего делать не нужно
 */

// let yearNow = new Date().getFullYear(); // получить текущий год как число

/*
 * #7
 * Создайте функцию myMax(arr), которая в качестве параметра принимает
 * произвольный числовой массив и возвращает максимальное число из переданного ей массива.
 * В реализации функции должен быть применен метод Math.max() и apply().
 */

// let list = [12, 23, 100, 34, 56, 9, 233];

// console.log(myMax(list)); // 233

/*
 * #8
 *
 * Создайте функцию myMul(a, b), которая будет умножать числа а и b, возвращая результат.
 */

/*
 * Создайте функции myDouble(n), которая принимает один параметр и  удваивает его.
 * Использовать умножение или другие математические операции внутри функции – запрещено, только bind() и myMul().
 * Функция возвращает результат вычисления.
 */

// console.log(myDouble(3)); // = myMul(2, 3) = 6

// console.log(myDouble(4)); // = myMul(2, 4) = 8

// console.log(myDouble(5)); // = myMul(2, 5) = 10

// Аналогичным образом создайте функцию myTriple(n), которая утраивает принимающий параметр, возвращая результат.

// console.log(myTriple(3)); // = myMul(3, 3) = 9

// console.log(myTriple(4)); // = myMul(3, 4) = 12

// console.log(myTriple(5)); // = myMul(3, 5) = 15

/*
 * #9
 *
 * Постройте функцию myUniq(arr), которая будет принимать произвольный массив
 * повторяющихся примитивных значений (например, имена пользователей или числа ).
 * Функция должна вернуть коллекцию уникальных значений.
 * В реализации разрешено использование set.
 * Любые условные операторы – запрещены и объекты.
 */

// let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

// let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

// console.log(myUniq(notUniqNums));

// console.log(myUniq(notUniqStrings));
