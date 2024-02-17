import image1 from '../../../components/images/aboutMe/image1.png'
import image2 from '../../../components/images/aboutMe/image2.png'
import image3 from '../../../components/images/aboutMe/image3.png'
import photo from '../../../components/images/aboutMe/about_photo.png'
import './AboutMe.scss'

export function AboutMe() {
  return (
    <div className="about">
      <div className="about__separator"></div>
      <div className='about__title'>ОБО МНЕ</div>

      <div className="about__container _container">

        <div className="about__body">
          <div className="about__column-left column-left">
            <div className="column-left__title">Здравствуйте!<br /> я ваш домашний <br /><span>кондитер Ольга!</span></div>

            <div className="column-left__separator-top _separator-about"></div>

            <div className="column-left__subtitle _subtitle-about">В 2012 году закончила БНТУ по специальности инженер-строитель автомобильных дорог. Пройдя все ступени карьерной лестницы, поняла, что это не то о чём я мечтала! Проработав 9 лет по специальности, вот так, с легким сердцем я уволилась с должности начальника.</div>
            <div className="column-left__images">
              <div className="column-left__image">
                <img src={image1} alt="" />
              </div>
              <div className="column-left__image">
                <img src={image2} alt="" />
              </div>
              <div className="column-left__image">
                <img src={image3} alt="" />
              </div>
            </div>

            <div className="column-left__text-row">
              <div className="column-left__text-col">
                <h4>Поскольку меня всегда привлекало <span>кондитерское дело,</span> я решила приобрести знания и опыт в данной профессии. И уже в 2020 году закончила свои первые курсы! Влюбившись в своё дело окончательно, начала развивать страничку в социальных сетях. С тех пор я ничуть не пожалела о том что так круто всё поменяла! Меня часто называют <span>«Богиня медовиков»</span>. И вовсе не зря, ведь я очень люблю эту начинку.  Она, для меня, связана с воспоминаниями из детства.</h4>
              </div>
              <div className="column-left__text-col">
                <h4>На данный момент в моём арсенале <span>более 20 отработанных начинок</span>.
                  Я всегда помогу Вам определиться с их выбором, а так же и с выбором декора. Ко мне обращаются люди за <span>вкусными и красивыми тортами</span> на любое ваше торжество.
                  Результатом моей работы являются счастливые люди, улыбающиеся детишки и положительные отзывы от моих клиентов.</h4>
                <div className="column-left__separator"></div>
              </div>
            </div>
          </div>

          <div className="about__column-right column-right">
          <div className="column-right__separator _separator-about"></div>
            <div className="column-right__subtitle _subtitle-about">В 2012 году закончила БНТУ по специальности инженер-строитель автомобильных дорог. Пройдя все ступени карьерной лестницы, поняла, что это не то о чём я мечтала! Проработав 9 лет по специальности, вот так, с легким сердцем я уволилась с должности начальника.</div>
            <div className="column-right__image">
              <img src={photo} alt="" />
            </div>
            <div className="column-right__text">
              <h4>Я делаю жизнь немного слаще, а людей – добрее!<br /> Доказательством моего профессионализма является то, что мои контакты передают по сарафанному радио, а клиенты возвращаться вновь за заказом!</h4>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
