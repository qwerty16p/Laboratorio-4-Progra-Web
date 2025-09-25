¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?
En JavaScript a veces los operadores hacen cosas raras porque el lenguaje cambia los tipos automáticamente.
Por ejemplo:
Si sumo número + número, me da la suma normal.
Si sumo número + texto, convierte el número en texto y los junta (concatenación).
Si resto texto − número, convierte el texto a número y hace la resta.
JS me permite esto porque es un lenguaje flexible y no exige que declaremos tipos de manera estricta.

¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?
Sí, es bastante parecido. El if, else, for, while funcionan igual que en lenguajes como C o Java.
La diferencia es que en JavaScript puedo usar variables directamente en las condiciones, y si son “verdaderas” o “falsas” según su valor, ya funciona (ejemplo: 0 o "" se toman como falso).
