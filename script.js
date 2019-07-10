var vue = new Vue({
    el: '#app', // присвоили элемент app
    data: {
      result: '',// строка, которая хранится в поле ввода
      numbers: [1,2,3,4,5,6,7,8,9,0], //создаем массив с цифрами
      operations: ['+','-','*','/'],//создаем массив с основными матем. операциями 
    },
    methods: { // создаем обьект методы
      input: function(char) { // для того, чтобы вводить наши в текстовое поле с помощью нажатия кнопки
        this.result = this.result.toString();
        this.result+=char;
      },
      reset: function() { // фукция для очищения поля ввода
        this.result = '';
      },
      calc: function() { // функиция для подсчета результата
        this.result = eval(this.result);
      }
    }
  })
