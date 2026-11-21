// Модуль завантаження навчальних тем із захистом від збоїв (Lab 9)
import { state } from "./state.js";

export const FALLBACK_TOPICS = [
  {
    "id": "variables",
    "title": "Змінні let, const та типи даних",
    "desc": "Оголошення змінних у стандарті ES6, блочна область видимості та примітивні типи.",
    "theory": {
      "summary": "У сучасному JavaScript ключове слово const використовується для незмінних значень, а let — для змінних із блочною областю видимості. Використання застарілого var не рекомендується через hoisting та функціональну область.",
      "codeExample": "const PI = 3.14159;   // константа, не можна переприсвоїти\nlet score = 100;      // блочна область видимості\nlet name = 'JavaScript'; // тип string\nlet isActive = true;  // тип boolean"
    },
    "questions": [
      {
        "id": "q1",
        "question": "Яка головна відмінність let від const при оголошенні змінних?",
        "code": "let a = 10; a = 20;\nconst b = 30; b = 40; // ???",
        "options": [
          "Змінну let можна переприсвоїти, а const викликає помилку TypeError",
          "const має глобальну область, а let блочну",
          "let використовується тільки для чисел, а const для рядків",
          "Відмінностей немає, це повні синоніми"
        ],
        "correctAnswer": "Змінну let можна переприсвоїти, а const викликає помилку TypeError",
        "explanation": "Спроба повторного присвоєння значення константі const генерує виняток TypeError."
      },
      {
        "id": "q2",
        "question": "Який тип даних повертає оператор typeof для значення null?",
        "code": "console.log(typeof null);",
        "options": [
          "'object'",
          "'null'",
          "'undefined'",
          "'boolean'"
        ],
        "correctAnswer": "'object'",
        "explanation": "Це історична особливість мови JavaScript: typeof null повертає рядок 'object'."
      },
      {
        "id": "q3",
        "question": "Чому дорівнює результат виразу: '5' + 3?",
        "code": "let res = '5' + 3;",
        "options": [
          "'53'",
          "8",
          "NaN",
          "TypeError"
        ],
        "correctAnswer": "'53'",
        "explanation": "Оператор '+' при наявності хоча б одного рядка виконує конкатенацію (зчеплення), повертаючи '53'."
      },
      {
        "id": "q4",
        "question": "Який результат поверне суворе порівняння: 5 === '5'?",
        "code": "console.log(5 === '5');",
        "options": [
          "false",
          "true",
          "undefined",
          "NaN"
        ],
        "correctAnswer": "false",
        "explanation": "Оператор суворої рівності '===' перевіряє значення без неявного приведення типів (число не дорівнює рядку)."
      }
    ]
  },
  {
    "id": "functions",
    "title": "Стрілкові функції (Arrow Functions)",
    "desc": "Лаконічний синтаксис стрілкових функцій, параметри за замовчуванням та контекст this.",
    "theory": {
      "summary": "Стрілкові функції () => {} мають компактніший синтаксис та не мають власного контексту this (лексичний this). Якщо тіло функції складається з одного виразу, return можна опустити.",
      "codeExample": "// Традиційна функція\nfunction add(a, b) {\n    return a + b;\n}\n\n// Стрілкова функція з неявним поверненням\nconst multiply = (x, y = 2) => x * y;"
    },
    "questions": [
      {
        "id": "q5",
        "question": "Як компактно записати функцію, що підносить число до квадрата?",
        "code": "const square = (x) => [???];",
        "options": [
          "x * x",
          "return { x * x }",
          "def x * x",
          "=> x ** 2"
        ],
        "correctAnswer": "x * x",
        "explanation": "Якщо тіло стрілкової функції містить один вираз без фігурних дужок, воно повертається неявно."
      },
      {
        "id": "q6",
        "question": "Яке значення поверне функція з параметром за замовчуванням: greet()?",
        "code": "const greet = (name = 'Гість') => `Привіт, ${name}!`;\nconsole.log(greet());",
        "options": [
          "'Привіт, Гість!'",
          "'Привіт, undefined!'",
          "'Привіт, null!'",
          "ReferenceError"
        ],
        "correctAnswer": "'Привіт, Гість!'",
        "explanation": "Якщо аргумент не передано або він дорівнює undefined, використовується значення за замовчуванням."
      },
      {
        "id": "q7",
        "question": "Чим відрізняється контекст this у стрілкових функціях?",
        "code": "const obj = {\n    val: 42,\n    getVal: () => this.val\n};",
        "options": [
          "Стрілкові функції не створюють власний this, а беруть його з зовнішнього лексичного оточення",
          "this завжди дорівнює самому об'єкту obj",
          "this завжди викликає фатальну помилку",
          "this вказує на аргументи функції"
        ],
        "correctAnswer": "Стрілкові функції не створюють власний this, а беруть його з зовнішнього лексичного оточення",
        "explanation": "Стрілкові функції успадковують this із місця свого визначення (лексична область видимості)."
      },
      {
        "id": "q8",
        "question": "Чому дорівнює результат виклику: ((x, y) => x - y)(10, 4)?",
        "code": "console.log(((x, y) => x - y)(10, 4));",
        "options": [
          "6",
          "14",
          "NaN",
          "undefined"
        ],
        "correctAnswer": "6",
        "explanation": "Це самовикликувана анонімна функція (IIFE), яка повертає різницю: 10 - 4 = 6."
      }
    ]
  },
  {
    "id": "arrays",
    "title": "Методи масивів (map, filter, reduce)",
    "desc": "Функціональні методи ітерації масивів, незмінні перетворення даних та пошук.",
    "theory": {
      "summary": "Метод .map() створює новий масив, трансформуючи кожен елемент. Метод .filter() повертає лише елементи, що задовольняють умову. Жоден із них не мутує вихідний масив.",
      "codeExample": "const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);      // [2, 4, 6, 8, 10]\nconst evens = numbers.filter(n => n % 2 === 0); // [2, 4]"
    },
    "questions": [
      {
        "id": "q9",
        "question": "Який масив поверне вираз: [1, 2, 3].map(n => n * 3)?",
        "code": "const res = [1, 2, 3].map(n => n * 3);",
        "options": [
          "[3, 6, 9]",
          "[1, 2, 3]",
          "9",
          "[3, 3, 3]"
        ],
        "correctAnswer": "[3, 6, 9]",
        "explanation": "Метод map застосовує множення на 3 до кожного елемента масиву."
      },
      {
        "id": "q10",
        "question": "Скільки елементів залишиться в результаті: [10, 15, 20, 25].filter(x => x > 15)?",
        "code": "const filtered = [10, 15, 20, 25].filter(x => x > 15);",
        "options": [
          "2 елементи ([20, 25])",
          "3 елементи ([15, 20, 25])",
          "1 елемент ([25])",
          "0 елементів"
        ],
        "correctAnswer": "2 елементи ([20, 25])",
        "explanation": "Умова строгої нерівності x > 15 виконується тільки для чисел 20 та 25."
      },
      {
        "id": "q11",
        "question": "Який метод повертає перший знайдений елемент, що відповідає умові?",
        "code": "const user = users.[???](u => u.id === 5);",
        "options": [
          "find()",
          "filter()",
          "some()",
          "indexOf()"
        ],
        "correctAnswer": "find()",
        "explanation": "Метод .find() зупиняє пошук на першому співпадінні та повертає знайдений об'єкт."
      },
      {
        "id": "q12",
        "question": "Чи змінює метод .filter() вихідний масив?",
        "code": "const arr = [1, 2, 3];\narr.filter(x => x > 1);",
        "options": [
          "Ні, він повертає новий масив без зміни вихідного",
          "Так, він видаляє непотрібні елементи з вихідного масиву",
          "Так, тільки якщо оголошений через let",
          "Залежить від режиму 'use strict'"
        ],
        "correctAnswer": "Ні, він повертає новий масив без зміни вихідного",
        "explanation": "Методи map, filter, slice є 'чистими' та не мутують початковий масив."
      }
    ]
  },
  {
    "id": "async_dom",
    "title": "DOM-дерево та асинхронність (async/await)",
    "desc": "Маніпуляції з елементами веб-сторінки, події кліку, проміси та запити через fetch.",
    "theory": {
      "summary": "DOM дозволяє змінювати вміст та стилі сторінки через document.querySelector(). Асинхронні операції (запити до сервера, таймери) виконуються через конструкцію async/await з перехопленням помилок у try...catch.",
      "codeExample": "async function loadData() {\n    try {\n        const res = await fetch('https://api.example.com/data');\n        const data = await res.json();\n        return data;\n    } catch (err) {\n        console.error('Збій запиту:', err);\n    }\n}"
    },
    "questions": [
      {
        "id": "q13",
        "question": "Який метод знаходить перший елемент за CSS-селектором у DOM?",
        "code": "const btn = document.[???]('.btn-primary');",
        "options": [
          "querySelector()",
          "getElementById()",
          "getElementsByClassName()",
          "findAll()"
        ],
        "correctAnswer": "querySelector()",
        "explanation": "document.querySelector() приймає будь-який валідний CSS-селектор і повертає перший знайдений вузол."
      },
      {
        "id": "q14",
        "question": "Яке ключове слово дозволяє чекати завершення Promise без блокування інтерфейсу?",
        "code": "const response = [???] fetch(url);",
        "options": [
          "await",
          "wait",
          "yield",
          "defer"
        ],
        "correctAnswer": "await",
        "explanation": "Оператор await призупиняє виконання async-функції до резолву проміса, не заморожуючи UI-потік."
      },
      {
        "id": "q15",
        "question": "Який блок використовується для перехоплення помилок при роботі з async/await?",
        "code": "try { ... } [???] (e) { ... }",
        "options": [
          "catch",
          "except",
          "onerror",
          "rescue"
        ],
        "correctAnswer": "catch",
        "explanation": "Конструкція try...catch у JavaScript забезпечує безпечну обробку винятків."
      },
      {
        "id": "q16",
        "question": "Яка подія виникає при кліку користувача лівою кнопкою миші?",
        "code": "button.addEventListener('[???]', handleClick);",
        "options": [
          "'click'",
          "'mouseclick'",
          "'press'",
          "'tap'"
        ],
        "correctAnswer": "'click'",
        "explanation": "Стандартна назва події кліку миші в браузерному DOM — 'click'."
      }
    ]
  }
];

export async function loadTopics() {
    try {
        const res = await fetch("./data/topics.json");
        if (!res.ok) throw new Error("HTTP error " + res.status);
        state.topicsData = await res.json();
    } catch (e) {
        console.warn("Використовуємо автономний fallback тем:", e.message);
        state.topicsData = FALLBACK_TOPICS;
    }
    return state.topicsData;
}
