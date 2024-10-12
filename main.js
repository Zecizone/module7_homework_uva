import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Задачи из модуля 7 Skillfactory</h1>
     <p class="read-the-docs">Результаты задач можно увидеть в консоли. Все функции необходимо запускать отдельно, страница создана для описания задач.</p>

    <h2>Задание 7.7.1</h2>
    <p>Создайте функцию&nbsp;<code>printInfo</code>, которая будет выводить информацию о человеке в формате&nbsp;<code>"Name: &lt;имя&gt;, Age: &lt;возраст&gt;"</code>. Создайте объект&nbsp;<code>person</code>&nbsp;с двумя свойствами:&nbsp;<code>name</code>&nbsp;и&nbsp;<code>age</code>. Используйте метод&nbsp;<code>call</code>, чтобы вызвать функцию&nbsp;<code>printInfo</code>&nbsp;от имени объекта&nbsp;<code>person</code>.</p>

    <h2>Задание 7.7.2</h2>
    <p>Создайте функцию&nbsp;<code>calculate</code>, которая будет принимать три параметра:&nbsp;<code>a</code>,&nbsp;<code>b</code>&nbsp;и&nbsp;<code>operator</code>. Функция должна производить математическую операцию между&nbsp;<code>a</code>&nbsp;и&nbsp;<code>b</code>&nbsp;в зависимости от значения&nbsp;<code>operator</code>&nbsp;(может быть "+", "-", "*" или "/") и возвращать результат операции. Используйте метод&nbsp;<code>apply</code>, чтобы вызвать функцию&nbsp;<code>calculate</code>&nbsp;с передачей объекта со значениями&nbsp;<code>a</code>,&nbsp;<code>b</code>&nbsp;и&nbsp;<code>operator</code>&nbsp;в качестве первого аргумента и массива с тремя значениями [2, 3, "+"] в качестве второго аргумента.</p>

    <h2>Задание 7.7.3</h2>
    <p>Есть массив объектов, представляющих собой пользователей, каждый из которых имеет свойство&nbsp;<code>age</code>&nbsp;(возраст). Создайте новый массив, содержащий только тех пользователей, чей возраст больше или равен 18. Затем создайте новый массив, содержащий только свойства&nbsp;<code>name</code>&nbsp;(имя) каждого пользователя.</p>

    <h2>Задание 7.7.4</h2>
    <p>Создайте функцию&nbsp;<code>setFullName</code>, которая будет устанавливать свойство&nbsp;<code>fullName</code>&nbsp;у переданного ей объекта. Используйте метод&nbsp;<code>bind</code>, чтобы создать новую функцию&nbsp;<code>setPersonFullName</code>, которая будет устанавливать&nbsp;<code>fullName</code>&nbsp;для объекта&nbsp;<code>person</code>&nbsp;из предыдущего примера. Вызовите&nbsp;<code>setPersonFullName</code>&nbsp;с параметром "John Smith" и убедитесь, что свойство&nbsp;<code>fullName</code>&nbsp;объекта&nbsp;<code>person</code>&nbsp;было изменено соответствующим образом.</p>

    <h2>Задание 7.7.5</h2>
    <p>Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа, отсортированные в порядке возрастания.</p>

    <p class="read-the-docs">
      Спасибо что проверили ^_^
    </p>
  </div>
`

