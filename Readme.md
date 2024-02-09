Опис Домашки
Створіть функцію `trackObjects`, яка використовує `WeakSet` для відстеження об'єктів, які вже були оброблені у вашій програмі. Ця функція повинна приймати об'єкт як аргумент і додавати його до `WeakSet`, якщо він ще не був там доданий. Якщо об'єкт вже присутній у `WeakSet`, функція повинна повертати `true`, щоб вказати, що об'єкт вже оброблявся. В іншому випадку, після додавання об'єкта до `WeakSet`, функція повинна повертати `false`. Це дозволить уникнути повторної обробки тих самих об'єктів і забезпечити ефективніше управління пам'яттю, оскільки `WeakSet` автоматично видаляє елементи, до яких більше немає посилань.
