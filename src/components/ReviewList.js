import React from 'react';
import ReviewItem from './ReviewItem';
import {Row, Col} from 'react-bootstrap';

function ReviewList() {
  // Заглушки для отзывов
  const reviews = [
    {
      author: 'Галя Семеновская',
      text: 'Заказала обработку для своего ансамбля у Екатерины Заборонок.\nМне понравилось, как работает Екатерина. Спрашивала про диапазоны участников ансамбля, про возможности их голосов (у меня любители). Явно человек занимается своим делом. Обработку написала за три дня. Тональность оказалась удобной, хотя Екатерина сказала, что тональность может поменять в редакторе, если при исполнении возникнут сложности.\nМы довольны. Спасибо Екатерине за отличную работу.'
    },
    {
      author: 'Эдуард',
      text: 'Екатерина, спасибо Вам за чудесную обработку для мужского состава "Ходют кони".'
    },
    {
      author: 'Элла Динева',
      text: 'Екатерина Заборонок - человек безусловно талантливый. Гармонии потрясающие, ритм, чувство формы и стиля. Молодец. Мы заказывали Love me tender кавер для группы и Love of my life тоже кавер. Прозрачно, не перегружено, а в тоже время, весь обертонный спектр присутствует. Круто! Уже опробовали на публике. Качает!\nРаньше сами писали - время тратили, а сейчас, благодаря Екатерине, сильно сэкономили время и сосредоточились только на исполнительстве и на подаче. Будем еще обращаться.'
    },
    {
      author: 'Дмитрий Карпов',
      text: 'Хорошие, свежие, современные обработки. Мало клише. Стиль собственный прослеживается.'
    },
    {
      author: 'Анна Соболева',
      text: 'Удивительная Екатерина! Спасибо за несравненную обработку "Верни мне музыку"! Учим и наслаждаемся! Одно удовольствие петь такую музыку! Голосоведение потрясающее! Гармонии! Форма! Слияние голосов! Екатерина - вы вдохнули струю свежего воздуха в хоровую музыку! Очень вам благодарны!'
    },
    {
      author: 'Алексей Егоров',
      text: 'Я знаю Екатерину уже лет 6. Хоровик, который решил писать хоровую музыку - это просто находка. Композиторы мало поют и зачастую имеют небольшое представление о том, с какой сложностью столкнутся хоровые артисты при исполнении их музыки. Их задача написать, а уж как петь другие будут - не их проблема. Екатерина при создании своих каверов или обработок совершенно явно поёт все голоса и заботится об удобстве исполнения. Именно поэтому её обработки, что называется, "сразу звучат". Она отталкивается от природы самого голоса. При таком подходе нет искусственности, натужности и излишних трудностей для исполнения, связанных, например, с завышенным диапазоном, неестественными слогами или неудобным ритмом.'
    },
    {
      author: 'Александр Циплянов',
      text: 'Заказал (и) ансамблем обработку. Что ж, неделя, опус готов, и тьфу-тьфу-тьфу, результат нас вдохновил.\nКонечно, впереди работа, но Екатерина оставила нам максимально возможное время для разучивания (до фестиваля ещё три месяца), а также каким-то образом считала часть "приколов", которые мы хотели внести позже сами.\nЭто резко упрощает дело (не надо их продумывать и записывать).\nВ общем, текущим результатом работы довольны весьма, и воодушевлены. А это дорогого стОит👍\nСпасибо, Катя!'
    },
    {
      author: 'Янина Зотова',
      text: 'Спасибо Екатерине за качественную и оперативную работу, нужно было срочно снять ноты 3-х голосного ансамбля, один день и готово!'
    },
    {
      author: 'Елена Садыкова',
      text: 'Наконец-то появился хороший, качественный аранжировщик! Екатерина хоровик, и это сразу видно и понятно. Сколько к композиторам не обращалась - всё нет то. Не мыслят вокально. Форму знают, мелодию выводят, а петь не удобно. Петь аранжировки Катерины одно удовольствие. Хорошее, плавное голосоведение. Даже сложную музыку петь удобно. Супер! Молодец, Катерина. Спасибо.'
    },
    {
      author: 'Илья Ижогин',
      text: 'Илья Ижогин:\nЗаказал у Екатерины кавер на песню группы Queen "Love of my life" для мужского хора. Очень доволен заказом.\nБыстро, оперативно и, главное, профессионально. 8 марта предъявим на суд лучшей половины человечества!\nЕкатерина, спасибо БОЛЬШОЕ!!!'
    },
    {
      author: 'Токарева Валентина',
      text: 'Обработки у Екатерины оркестровые. Оркестровое мышление. Густые краски. Насыщенное звучание, будто звучит не хор, а целый оркестр. Обертонное заполнение потрясающее! Просто браво! Молодец! Талант от Бога! И трудоголик невероятный!'
    },
    {
      author: 'Ирина Копцева',
      text: 'Сборник Русские народные песни Екатерины Заборонок просто чудо! Потрясающие песни веселые, заводные. Редкая по красоте подборка "Девка по саду" просто великолепна. В.Калистратов гордился бы своей ученицей.\nДетки мои с большим удовольствием учат перкуссию. Хлопаем, топаем, поём. Хор просто ожил. Екатерина - спасибо. Ждём новых сборников для хора!!!'
    },
    {
      author: 'Ольга Веснина',
      text: 'Спасибо Виктору Вадимовичу! Была несколько раз на его семинарах и каждый раз информация преподносится удобно для восприятия, разъяснения очень подробные и всегда он опирается на научные труды и исследования. А для того, чтобы передать знания детям, прежде всего надо понять эти знания самой, "пропустить через себя", что называется. Очень благодарна Виктору Вадимовичу, что поддержал меня в период кризиса. Спасибо огромное!!!'
    },
    {
      author: 'Светлана Политаева',
      text: 'Екатерина, спасибо большое за организацию и проведение семинара с Надеждой Авериной. Очень много интересного и полезного. Радуйте нас пожалуйста ещё встречами и семинарами. Успехов Вам и процветания.'
    },
    {
      author: 'Лада Иванова(Жжонова)',
      text: 'Спасибо огромное за проведение семинара с Надеждой Авериной. Восхищаюсь чистым , прозрачным звучанием хора, профессионализмом Надежды Владимировны.Творческих успехов и процветания Вам!'
    },
    {
      author: 'Наталья Зверева',
      text: 'Каждый раз с нетерпением ждала начала семинара и убеждалась в том, какая же замечательная профессия - хормейстер! Спасибо Вам, Екатерина за организацию, за единение нашего хорового братства! Общение с Надеждой Авериной вдохновляет и окрыляет, а Весна всегда будет жить в моём сердце!'
    },
    {
      author: 'Любовь Пасечник',
      text: 'Сегодня была на мастер классе Екатерины Заборонок.Прекрасно,доступчиво,понятно.С первого момента ведущая распологает к себе,обоянием,улыбкой.Сразу начинаешь следить за каждым словом.Мне всё понравилось,отличные подобраны примеры,образы.Дл меня много полезной информации.Продолжайте нас радовать своими мастер классами.Верной удачи и вдохновения.'
    },
    {
      author: 'Марина Иванова',
      text: 'Добрый день!Екатерина Игоревна,огромное спасибо за мастер-класс,который проходил вчера,27 июня. Мне потребовалось немного времени,чтобы стабилизировать свои мысли, чувства. Вы подняли актуальную тему,которую до вас никто не решался озвучивать!Я в своей практике неоднократно сталкивалась с пикантными ситуациями,но зная наш коллектив,коллег,как-то не могла решиться на откровенный разговор.После нашей с вами встрече,беседы,все как-то встало на свои места,стало ясно и понятно как это можно сделать в сдержанной и удобоваримой форме. В сентябре,на первом же заседании отдела я постараюсь эту тему реализовать! Еще раз - спасибо,было интересно с вами общаться, интересный материал,наглядные пособия в виде фото и видеосюжетов. Все таки современные компьютерные технологии- это здорово! Успехов вам, неиссякаемого творческого вдохновения, море идей,находок и их воплощение!!!'
    },
    {
      author: 'Дарья Фещенко',
      text: 'Екатерина, здравствуйте!\nВчера уже вечером досмотрела запись первой части Вашего мастер-класса, хочу сказать Вам огромнейшее спасибо за то, что говорите на такие, на мой взгляд, острые темы. Это действительно необходимо, особенно в реалиях современной жизни.\nОт Вас исходит такой поток энергии (даже через зум, даже через запись!!), что даже если у кого-то было не очень хорошее настроение, Вы в миг сделаете так, что все вокруг будут улыбаться!! Благодарю бесконечно! Жду вторую часть!'
    },
    {
      author: 'Любовь Пасечник',
      text: 'Спасибо вам огромное! Я столько много для себя подчеркнула,Я благодарю вас за самое сокровенное,за ваши правильные мысли.Мне так не хватало этого " толчка", т.к.устала от ханжества людей,мерконтильности,наглости администрации.Теперь есть,что можно применить,для своей любимой работы.Екатерина,очень хотелось бы поговорить с вами и предательстве в творческих коллективах.Особенно когда возникают завистливые отношения,других коллег.Спасибо,и успехов вам,творческого вдохновения и огромной радости от творчества.'
    },
    {
      author: 'Татьяна Анисимова',
      text: 'Екатерина, огромное вам спасибо за сегодняшний мастер-класс. Всё очень доступно. Благодаря вам, освежились мысли и появились новые идеи😁👍. Спасибо вам за замечательные распевки и советы!!! Было очень познавательно, а главное, полезно! Продолжайте нас тормошить!!! Удачи вам и терпения, а главное здоровья, чтобы вы могли нас ещё долго радовать своими идеями и знаниями!!!'
    },
    {
      author: 'Марина Вахрушева',
      text: 'Огромное спасибо!'
    },
    {
      author: 'Светлана Политаева',
      text: 'Екатерина, и Аня, спасибо вам большое за интересный мастер класс. Сборник отличный. Хочу обязательно приобрести. Столько интересного, хотя, я давно работаю и с хором и с вокалистами. Но всегда слух, глаз как говорится, "замыливается". Так нужны такие интересные встречи. Пожалуйста, сделайте ещё с учениками мастер класс.\nСпасибо огромное. И желаю вам новых идей, творчества, новых сборников, и конечно, здоровья.\nСпасибо'
    },
    {
      author: 'Татьяна Акимова',
      text: 'Впервые стала участником вашего мастер класса. Эмоции переполняют. Получила огромный заряд и вдохновение. Спасибо огромное. Желаю вам творческих успехов, здоровья и процветания. Жду новых встреч. 🌺'
    },
    {
      author: 'Татьяна Анисимова',
      text: 'Екатерина, огромное спасибо за всё, что вы для нас делаете. Я уже не в первый раз являюсь слушателем семинаров и мастер-классов, которые вы организуете и с каждым разом всё больше удивляюсь, где вы находите таких замечательных людей? Очень переживала , что не пойму какие-то специфические термины из области работы с детками с ОВЗ. Но всё настолько доступно и понятно, что 3 часа пролетают, как одно мгновение. Низкий поклон Вам, за ваше трудолюбие и не равнодушие!!! Огромная БЛАГОДАРНОСТЬ всем выступавшим за эти 3 дня. Здорово, что ещё впереди несколько встреч. Не знаю, как для других, а для меня это новый глоток свежего воздуха. Благодаря Вашей неуёмной энергии, снова хочется творить!!! ❤❤❤'
    },
    {
      author: 'Людмила Морозова',
      text: 'Добрый вечер! Спасибо вам огромное! Дай Бог вам здоровья! На Многая и благая лета!!!'
    },
    {
      author: 'Светлана Костина',
      text: 'Екатерина, благодарю вас за организацию 6-ти дневного семинара по работе с особенными детьми. Это что- то невероятное. Столько интересных людей, профессионалов своего дела поделились опытом. Это бесценно!!! Спасибо вам за проделанную работу!'
    },
    {
      author: 'Надежда Журавлева',
      text: 'Огромная благодарность за ваш титанический труд, за возможность познакомиться с не обыкновенными людьми,научиться новому, интересному. Здоровья, удачи, успехов!!!!'
    },
    {
      author: 'Светлана Политаева',
      text: 'Екатерина, спасибо Вам огромное за Ваш труд. Как много сделано в поиске таких интересных спикеров. Эти 7 дней открыли целые миры, до селе неизвестных совсем. Общение с такими потрясающими людьми, которые живут рядом с нами, но не всегда мы их замечаем. Потрясающие мастера педагоги, которые под час работают на своем энтузиазме, настоящие подвижники . Какие сильные духом родители. И талантливые дети.\nСпасибо Вам, Вы открыли новый мир.'
    },
    {
      author: 'Людмила Морозова',
      text: 'Добрый вечер! Спасибо вам огромное! Это большое дело! Тема очень актуальная! Очень важная! Успехов вам во всех начинаниях! Доброго вам здравия и благополучия! До новых плодотворных встреч! С уваж. Людмила Игоревна.'
    },
    {
      author: 'Светлана Варламова',
      text: 'Екатерина, присоединяюсь ко многим благодарностям за 6 великолепных семинаров, которые Вы организовали! Ещё раз низкий Вам поклон за Ваш труд!'
    },
    {
      author: 'Ирина Некрасова',
      text: 'Екатерина, большое спасибо за сборник распевок. Особенно хорошо, что есть модуляции в удобные для детского хора тональности. Всё по делу, очень интересные распевки. Особенно понравилась распева ритм с ускорением. Дети обожают игры.'
    },
    {
      author: 'Ольга Вершина',
      text: 'Екатерина, потрясающий сборник! Спасибо за видео-презентацию к нему и за полезные комментарии к каждой распевке. Буду пользоваться.'
    },
    {
      author: 'Елена Иршина',
      text: 'Дорогая Екатерина, вы, как всегда, на высоте. Уникальный сборник. Распевки неизбитые, интересные, на все виды развития музыкальных способностей. Презентация - супер!'
    },
    {
      author: 'Екатерина Нерзная',
      text: 'Катенька, благодрю. Большое спасибо вам за курсы повышения квалификации, которые вы проводите. Была на курсах Надежды Авериной, Анастасии Беляевой. Восторг. Курс "Особенные дети" - просто чудо!!!\nПо поводу сборника: ничего подобного не видела, в одном сборнике собрано всё необходимое для распевания хора любого уровня и возраста. Здорово! Молодец!'
    },
    {
      author: 'Анна Клименкова',
      text: 'Екатерина! Хочу выразить благодарность за предоставленную возможность пройти курс повышения квалификации «Работа с дошкольным хором»! Это отличная возможность получить новые знания без отрыва от дома и работы. Я первый раз проходила у Вас КПК, но с уверенностью могу сказать что не последний. Желаю дальнейшего развития и процветания!'
    },
    {
      author: 'Анна Синева',
      text: 'Дорогая Екатерина!\nОгромное спасибо Вам за все курсы, которые всегда прекрасно организованы и в них можно почерпнуть столько всего интересного, нужного и полезного! Огромное спасибо за ноты и сборники, где можно найти прекрасные песни!\nНизкий Вам поклон!!!!!!!'
    },
    {
      author: 'Елена Лавкова',
      text: 'Екатерина, большое спасибо за Ваш труд! Семинар отличный , насыщенный! Для регионов - это возможность присоединиться к работе ведущих хормейстеров и по новому взглянуть на свою. Буду, по возможности, участвовать в семинарах и рекомендовать коллегам! Спасибо! 👍👏👏👏'
    },
    {
      author: 'Наталия Яковлева',
      text: 'Рада была попасть на семинар. Давно смотрю Ваши видео по вокальной работе с детским хором в Ютюбе, многое стала применять. А сегодня было приятно увидеть Вас почти вживую))) Благодарю за интересных спикеров!'
    },
    {
      author: 'Ольга Бурыкина',
      text: 'Екатерина, спасибо огромное за организованный Вами семинар "Дыхательная гимнастика". Очень важная и интересная тема, волнующая многих хормейстеров. Почерпнула для себя много интересного!'
    },
    {
      author: 'Ольга Скоробогатова',
      text: 'Екатерина! Благодарю Вас за организацию семинара Виктора Вадимовича!!! ❤☀🙌🏻👍🏻🌹🌹🌹\nЖелаю, чтобы Ваши отснятые материалы мы увидели в скором времени!!!\n\nВ ноябре 2018 я впервые приехала на семинар Виктора Вадимовича в Новосибирске. Никто из коллег, с кем общалась, меня не поддерживали, некоторые говорили :"ФМРГ - это старьё"... А я чувствовала, что раз так говорят, значит, это ценное! Так и было, информации получила вагон и маленькую тележку.... Поняла, почему многие вокалисты - педагоги отвергают ФМРГ, потому что надо напрягаться - разбираться, учиться!!!\nЧерез год снова приехала на семинар, и со второго захода, начала внедрять в свою практику упражнения!\nПотом самоизоляция, марафоны ФМРГ...(Светлана Абсатарова-красотка, героиня, очень вдохновила! 🌺)\nДа, не просто все выучить, надо время. И какое благо для голоса, я перестала искать и петь "ля - ля, му-му", а благодаря тренингу, справляюсь с ежедневными нагрузками!\n\nВторой год работаю, дети на втором уровне. Результаты видны на новеньких через 3 месяца! От себя не ожидала, что могу звучать в малой октаве! На днях с учеником свистковую зону тренировали, я думала, что мой голос уже не такой подвижный, оказалось кайф петь в третьей октаве😁\nУчусь дальше сама, учу детей, вникаю, по мере возможности!\nА на семинаре, от Виктора Вадимовича каждый раз слышу что - то новое, что не воспринимала ранее!\nБлагодарю учИтеля! Здоровья, добра, новизны, много сил и энергии Виктору Вадимовичу!!! 💪🏻🙌🏻❤\n\nКоллеги! Всем новеньким - удачи в освоении материала!\nВсем "ветеранам партии" (особенно Алине Азариной🌺) - низкий поклон, за веру, силу убеждения, поддержку, искренность и воспитание людей с красивыми, здоровыми голосами.'
    }
  ];

  return (
    <Row>
        <h1>Отзывы</h1>
      {reviews.map((review) => (
        <Col md={4} key={review.id}>
            <ReviewItem author={review.author} text={review.text} />
        </Col>
      ))}
    </Row>
  );
}

export default ReviewList;