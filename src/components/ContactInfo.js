import React from 'react';
import { FaVk, FaFacebook, FaYoutube, FaLink } from 'react-icons/fa'; // Импортируем иконки

function ContactInfo() {
  return (
    <div>
      {/* Заголовок убираем, так как он уже есть на странице Contacts.js */}
      {/* <h2>Контактная информация</h2> */}

      <p>
        Контактные телефоны:
        <br />
        <a href="tel:+79253762326">+7(925) 376-23-26</a>
        <br />
        <a href="tel:+79160550742">+7(916) 055-07-42</a>
      </p>

      <p>
        Email:
        <br />
        <a href="mailto:mail@zaboronok.ru">mail@zaboronok.ru</a>
      </p>

      <p>
        Страничка ВКонтакте:
        <br />
        <a href="https://vk.com/ekaterinazaboronok" target="_blank" rel="noopener noreferrer">
          <FaVk className="me-1" /> vk.com/ekaterinazaboronok
        </a>
      </p>

      <p>
        Страничка в Facebook:
        <br />
        <a href="https://www.facebook.com/ekaterinazaboronok" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="me-1" /> facebook.com/ekaterinazaboronok
        </a>
      </p>

      <p>
        Мой канал Youtube:
        <br />
        <a href="https://www.youtube.com/channel/UCGoiHn2pq7kbDIAvq9JiRqg" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="me-1" /> youtube.com/channel/UCGoiHn2pq7kbDIAvq9JiRqg
        </a>
      </p>

      <p>
        Сайт школы:
        <br />
        <a href="http://musicschool.moscow" target="_blank" rel="noopener noreferrer">
          <FaLink className="me-1" /> musicschool.moscow
        </a>
      </p>

      <p>
        Сайт ФХВИ:
        <br />
        <a href="https://fcva.ru" target="_blank" rel="noopener noreferrer">
          <FaLink className="me-1" /> fcva.ru
        </a>
      </p>
    </div>
  );
}

export default ContactInfo;