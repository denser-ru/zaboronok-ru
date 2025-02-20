// ./src/components/NewsSection.js
import React from 'react';
import NewsItem from './NewsItem';
import { Row, Col } from 'react-bootstrap';

function NewsSection() {
  // Массив новостей (заменил заглушки на реальные данные)
    const news = [
        {
            id: 18780528926, // ID из ссылки
            date: '2025-01-22',
            title: 'Приглашение к участию в создании кантаты',
            text: `Дорогие друзья!
            Сейчас я погружена в написание кантаты для детского хора, оркестра и солистов, посвященной 80-летию Победы.
            По мере её рождения, я поняла, что в основу кантаты должны лечь именно детские стихи на военные темы: о неизвестном солдате, о потерях, о мужестве, о подвигах, о патриотизме и любви к Родине, о чувствах и переживаниях детей, о героизме, о единстве наших народов.
            Это может быть история одного воина, героя или общие, собирательные образы.
            Большая просьба к вам, присылайте стихи ваших детей, если вы родитель, ваших воспитанников, учеников, если вы педагог.
            Лучшие из детских стихов лягут в основу кантаты.
            Творчество детей бесценно!
            Сроки ограничены: стихи нужны не позднее конца января 2025 года.
            Заранее благодарю вас за отзывчивость и вовлеченность в творческий процесс!`,
            link: 'https://vk.com/ekaterinazaboronok?w=wall1878052_8926',
            image: 'https://sun9-76.userapi.com/impg/ltM_zJKonK3hfceiuwO9y9cHquthNzgO3vAxBg/MdAX2BXMXvU.jpg?size=910x1024&quality=95&sign=0c0656c32e25138f97904ece5a9a550b&type=album'
        },
        {
            id: 18780528900, // ID из ссылки
            date: '2024-12-03',
            title: 'Приглашение в хор для исполнения Реквиема Моцарта',
            text: `❗Приглашаем всех желающих петь в хор! Новое знакомство и прослушивание!

            Запишись и приходи!

            😃ТОЛЬКО У НАС!
            ⚡ занятия с новичками
            ⚡ занятия с любителями
            ⚡ занятия в небольших группах
            ⚡ любители и новички поют вместе с профессионалами
            ⚡ комплексный подход к развитию артиста хора:
            нотная грамота, постановка дыхания, постановка голоса, развитие музыкального слуха, развитие музыкальной памяти, развитие координации между слухом и голосом, участие в интересных проектах с оркестрами, солистами
            ⚡ концерты на самых известных музыкальных площадках
            ⚡ поездки и гастроли с проживанием за счет принимающей стороны
            ⚡ участие в благотворительных концертах
            ✨В 2025 году наш хор едет в Дубай и Калининград! Успей присоединиться!`,
            link: 'https://vk.com/federationchoir',
            image: 'https://sun9-39.userapi.com/impg/X2JHd8RjU6JKBv9ATq-TXCB7EUaOoBaQMuPliA/iHIWP9tBFW8.jpg?size=1280x960&quality=95&sign=c230ad037fa6ef7c7587e3c0f2de0e5b&type=album'
        },
        {
            id: 18780528871, // ID из ссылки
            date: '2024-11-26',
            title: 'Гала-концерт XIII Всероссийского хорового фестиваля «Осеннее многоголосие»',
            text: `🎉25 ноября в Зале Церковных Соборов состоялся Гала-концерт XIII Всероссийского хорового фестиваля «Осеннее многоголосие»
            Сводный фестивальный хор численностью в 1300 человек!
            Впервые Зал Церковных Соборов вместил такое большое количество участников со всей России и Белоруссии!
            Почётные гости фестиваля:
            Митрополит Григорий - управляющий делами Московской Патриархии
            Архиепископ Киприан - епископ Русской православной Церкви, архиепископ Берлинский и Среднеевропейский
            Орлова Людмила Владимировна - Президент Некоммерческого Партнерства «Национальное движение сберегающего земледелия»
            Шереметьев Сергей Иванович - советник Постоянного Комитета Союзного государства
            Председатель фестиваля - Витебский и Оршанский Димитрий - настоятель Патриаршего подворья Храма святой великомученицы Ирины с представительством Белорусского экзархата в Москве.
            Художественный руководитель фестиваля - Екатерина Игоревна Заборонок
            В исполнении Большого сводного фестивального хора прозвучали: С.В.Рахманинов "Богородице Дево", "Вера вечна" А.Молев, солисты Протодиакон Андрей Железняков, Спартак Басов, Даниил Хачатуров, "Патриаршее многолетие" в честь дня рождения Святейшего Патриарха Московского и всея Руси Кирилла.
            Поистине грандиозное событие!
            🎉В ГАЛА-КОНЦЕРТЕ приняли участие:
            Детский хор «Сириус» ДШИ им Н.Г.Рубинштейна
            Молодёжный хор «Лик», Звенигородское благочиние
            Вокальный ансамбль «Откровение» КЦ "Братеево"
            Старший хор Православной школы имени св.вмч. Димитрия Солунского (ПШДС)
            Детско-юношеский хор «Благовест», «Гармония»
            Детско-юношеский хор «Ключ»
            Хор девочек Детской церковной музыкальной школы при Успенском храме г. Красногорска
            Детский хор «Начало» при камерном хоре имени С.Рахманинова, г. Тамбов
            Хор «Вдохновение» ДК «Тепловозостроитель»
            Концертный хор Кантабиле ДШИ им. В.Андреева
            Вокальный ансамбль «Элегия» ДШИ им В.Андреева
            Детско-юношеский хор Свято-Елисаветинского монастыря г. Минск
            Старший хор «Камертон»
            Молодёжный вокальный ансамбль «Капель»
            Камерный хор Московского педагогического государственного университета (МПГУ)
            Камерный хор МИРЭА - Российского технологического университета (РТУ МИРЭА)
            Академический хор Первого МГМУ им. И. М. Сеченова
            Хор «Янтарь» ДМШ No2 городского округа Люберцы
            Женский хор «Весна» Московского педагогического государственного университета.
            Молодежный хор Сретенского монастыря
            Вокальный ансамбль «Апрель» вокально-хоровой студии «Апрель» г. Домодедово
            Камерный Хор ПСТГУ
            Академический концертный хор «Апрель» вокально- хоровой студии «Апрель» г. Домодедово
            Вокальный ансамбль «Нега» Храма Покрова Пресвятой Богородицы села Кудиново
            Хор «Покровский Благовест» Покровского храма с. Сосновка Озерского благочиния Коломенской епархии
            Камерный хор Семейной вокально-музыкальной школы для детей и взрослых «Нова воче»
            Вокально-хоровой ансамбль Cantate (Москва)
            Молодёжный хор «Богородская Капелла»
            Академический хор «Кантилена» ТКС «Солнцево»
            Молодежный ансамбль «Андреевский звон» при храме преподобного Андрея Рублева в Раменках.
            Хор Финансового университета при Правительстве Российской Федерации
            Молодёжный межвузовский хор «МАДРИГАЛ»
            Хор Российского экономического университета им. Г.В. Плеханова.
            Хор «Одигитрия» Новодевичий ставропигиальный монастырь.
            «Песчанский хор» Любительский церковный хор храма Казанской Песчанской иконы Божией Матери в Измайлово.
            Студенческий хор «Perpetuum mobile» МГТУ им. Н.Э. Баумана
            Камерный женский хор «Консонанс»
            Молодежный хор Центрального викариатства
            Архиерейский хор Подольской епархии
            Солисты:
            Протодиакон Андрей Железняков
            Спартак Басов Спартак Басов
            Даниил Хачатуров Даниил Хачатуров
            ❤От души благодарю всех и каждого!

            #митрополитгригорий #архиепископкиприан #детскиехоровыеколлективы #осеннеемногоголосие #хоровойфестиваль #архиепископдимитрий #орловалюдмилавладимировна #союзноегосударство #шереметьевсергейиванович #екатериназаборонок #студенческиехоровыеколлективы #детиимолодежь #годсемьи`,
            link: 'https://vk.com/wall-108421714_749',
            image: 'https://sun9-77.userapi.com/impg/F0amCM1I6UVbM1-QfNuyR1I9dWFH4-mASeX26g/w5l5MzX1eN4.jpg?size=1956x1096&quality=95&sign=384582b814d3425da357dd5430e7d3ed&type=album'
        }
    ];

  // Сортируем новости по дате (от новых к старым)
  const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Берем только последние 3 новости
  const latestNews = sortedNews.slice(0, 3);

  return (
    <Row>
      <h2 className="mb-4 mb-custom-news-section-title">Новости</h2>
      {latestNews.map((item) => (
        <Col md={4} key={item.id}>
          <NewsItem title={item.title} text={item.text} date={item.date} link={item.link} /> {/* Передаем link в NewsItem */}
        </Col>
      ))}
    </Row>
  );
}

export default NewsSection;