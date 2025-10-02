import { useOutletContext } from "react-router-dom"
import { Card } from "../components/card/Card"

export const Home = () => {
  const { products } = useOutletContext();
  return (
    <section className="content">
      <div className="container">
        <div className="content-box">
          <div className="content-main">
            <h2 className="content-main__title">Рекомендации для вас</h2>
            <div className="content-main__list">
              {
                products.map(card => (
                  <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    price={card.price}
                    address={card.address}
                    date={card.date}
                    img={card.img}
                  />
                ))
              }

            </div>
          </div>
          <div className="content-side">
            <h3 className="content-side__title">
              Сервисы и услуги
            </h3>
            <div className="content-side__box">
              <div className="content-side__list">
                <div className="content-side__list-item">
                  <img src="/img/side-info-1.svg" alt="img" className="content-side__list-item--img">
                  </img>
                  <h3 className="content-side__list-item--title">
                    Доставка
                  </h3>
                  <p className="content-side__list-item--text">
                    Проверка при получении и возможность бесплатно вернуть товар
                  </p>
                </div>
                <div className="content-side__list-item">
                  <img src="/img/side-info-2.svg" alt="img" className="content-side__list-item--img">
                  </img>
                  <h3 className="content-side__list-item--title">
                    Автотека
                  </h3>
                  <p className="content-side__list-item--text">
                    Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                  </p>
                </div>
                <div className="content-side__list-item">
                  <img src="/img/side-info-1.svg" alt="img" className="content-side__list-item--img">
                  </img>
                  <h3 className="content-side__list-item--title">
                    Онлайн-бронирование жилья
                  </h3>
                  <p className="content-side__list-item--text">
                    Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                  </p>
                </div>
              </div>
              <div className="content-side__footer">
                <p className="content-side__footer--item">
                  © ООО «Абито», 2011–2021
                </p>
                <a className="content-side__footer--item" href="#!">
                  Политика конфиденциальности
                </a>
                <a className="content-side__footer--item" href="#!">
                  Обработка данных
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}