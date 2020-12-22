// Финальный файл где рендерится приложение
import React from 'react'; // сама библиотека из зависимости react
import ReactDOM from 'react-dom'; // тот сервис который необходим для работы с объектной моделью документа
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'; // css-файл импортируем и реакт все равно сможет собрать приложение
import App from './components/app/'; // само наше приложение


ReactDOM.render( // размещает приложение на нашу страницу именно в тот блок root
  <App/>,
  document.getElementById('root')
);

