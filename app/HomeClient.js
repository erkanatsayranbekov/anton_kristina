"use client";
import { alethianext, mak, hello_january } from "./ui/fonts";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { YMaps, Map, Placemark, Button } from "@pbe/react-yandex-maps";
import CountDown from "./components/CountDown";

export default function HomeClient() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main>
      <section className="header max-[800px]:h-[calc(100vh-70px)] bg-white">
        <div className="relative text-black gap-[20vh] pt-[15vh] h-[calc(100vh-70px) flex flex-col justify-center items-center">
          <div className=" flex flex-col">
            <div
              className={`text-[140px] ${mak.className} m-0 flex justify-center items-center`}
            >
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-once="true"
              >
                A
              </div>
              <div
                className="mt-[60px] mb-[80px] mx-5"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <Image
                  src="/heart-black-01.svg"
                  height={15}
                  width={15}
                  alt="Heart"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="true"
              >
                K
              </div>
            </div>
            <div
              className={` w-full ${hello_january.className} text-5xl`}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
            >
              Антон + Кристина
            </div>
          </div>
          <div
            className={`${alethianext.className} text-lg`}
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
          >
            26 АВГУСТА 2026 ГОДА
          </div>
        </div>
      </section>
      <section className="bg-[url(/background.jpg)] bg-cover bg-center min-h-[800px]">
        <div className=" flex flex-col gap-[5vh] h-full bg-[rgba(0,0,0,0.4)] pt-[270px]">
          <div
            className="w-[90%] mx-auto"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h2 className={`${hello_january.className} text-5xl mb-4`}>
              Дорогие гости!
            </h2>
            <p
              id="welcome-text"
              className={`${alethianext.className}`}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              Один день в этом году будет для нас особенным, и мы хотим
              разделить его с вами.
              <br />
              <br />
              Ждем вас на празднике по случаю нашей свадьбы
            </p>
          </div>

          <div
            className="w-[90%] mx-auto "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <h3 className={`${mak.className} text-4xl text-right w-full`}>
              Август, 2026
            </h3>
            <div
              className={`${alethianext.className} flex justify-end uppercase mb-8`}
            >
              <table className=" caption-bottom border-collapse ">
                <thead>
                  <tr>
                    <th>Пн</th>
                    <th>Вт</th>
                    <th>Ср</th>
                    <th>Чт</th>
                    <th>Пт</th>
                    <th>Сб</th>
                    <th>Вс</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>25</td>
                    <td className=" wedding-day ">26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-white p-[50px] text-black">
        <div
          className=" w-full text-right justify-end gap-4 flex items-center mb-8"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <h2 className={`${hello_january.className} text-7xl`}>Локация</h2>
          <div className=" h-[1px] bg-black max-w-[120px] grow-1 mt-6"></div>
        </div>
        <div className="w-full text-right flex-col items-end justify-end flex ">
          <p
            className={` ${alethianext.className} text-2xl mb-2`}
            data-aos="fade-right"
            data-aos-once="true"
          >
            Торжественная церемония
          </p>
          <div
            className={` ${alethianext.className} text-[16px]`}
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <p>Центральный отдел управления ЗАГС</p>
            <p>г. Омск, ул. Иртышская Набережная, д. 9</p>
            <p>Начало в 15:00</p>
          </div>
        </div>

        <div
          className=" opacity-100 transform-none relative grayscale-100 p-[10px] my-12"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <div className="z-20 border-[1px]">
            <YMaps
              query={{
                lang: "ru_RU",
                apikey: "536168cc-8dbb-4923-a06f-9a6bd5a9cf15",
              }}
            >
              <Map
                defaultState={{ center: [54.979097, 73.374248], zoom: 17 }}
                width="100%"
                height="250px"
              >
                <Placemark
                  geometry={[54.979097, 73.374248]}
                  options={{ fillColor: "#00000" }}
                />
              </Map>
            </YMaps>
          </div>
          <div className=" z-[-1] absolute border-[1px] top-[10px] left-[10px] w-full h-full"></div>
          <div className=" z-[-1] absolute border-[1px] bottom-[10px] right-[10px] w-full h-full"></div>
        </div>

        <div
          className=" w-full flex justify-center items-center mb-8"
          data-aos="pulse"
          data-aos-once="true"
        >
          <Image
            src="/heart-black-01.svg"
            height={20}
            width={20}
            alt="Heart"
            className="animate-pulseCustom"
          />
        </div>

        <div className="w-full text-left flex-col items-start justify-start flex ">
          <p
            className={` ${alethianext.className} text-2xl mb-2`}
            data-aos="fade-right"
            data-aos-once="true"
          >
            Праздничный банкет
          </p>
          <div
            className={` ${alethianext.className} text-[16px]`}
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <p>Ресторан «Малибу», банкетный зал «Жемчуг»</p>
            <p>г. Омск, Фрунзе, 47</p>
            <p>Сбор гостей 16:30, начало 17:00</p>
          </div>
        </div>

        <div
          className=" opacity-100 transform-none relative grayscale-100 p-[10px] mt-12"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <div className="z-20 border-[1px]">
          <YMaps
            query={{
              lang: "ru_RU",
              apikey: "536168cc-8dbb-4923-a06f-9a6bd5a9cf15",
            }}
            className="z-20"
          >
            <Map
              defaultState={{ center: [54.994946, 73.365584], zoom: 17 }}
              width="100%"
              height="250px"
            >
              <Placemark
                geometry={[54.994946, 73.365584]}
                options={{ fillColor: "#00000" }}
              />
            </Map>
          </YMaps>
          </div>
          <div className=" z-[-1] absolute border-[1px] top-[10px] left-[10px] w-full h-full"></div>
          <div className=" z-[-1] absolute border-[1px] bottom-[10px] right-[10px] w-full h-full"></div>
        </div>
      </section>
      <section className="bg-[url(/background_2.jpg)] bg-cover bg-center min-h-[800px]">
        <div className=" flex flex-col gap-[5vh] h-full bg-[rgba(0,0,0,0.4)] p-2.5">
          <div
            className=" w-full text-right justify-end gap-4 flex items-center mb-8"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h2 className={`${hello_january.className} text-7xl`}>План дня</h2>
            <div className=" h-[1px] bg-white max-w-[120px] grow-1 mt-6"></div>
          </div>

          <div
            className=" flex flex-col items-end text-right px-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div>
              <div className={`${mak.className} text-2xl`}>Welcome</div>
              <div className={`${alethianext.className} text-[16px]`}>
                Не&nbsp;забудьте взять хорошее настроение и&nbsp;улыбки
              </div>
              <div className={`${mak.className} text-[20px]`}>14:45</div>
            </div>
            <div className="h-[30px] border-r-[1px] border-solid border-white my-[5px]"></div>
            <div>
              <div className={`${mak.className} text-2xl`}>Церемония:</div>
              <div className={`${alethianext.className} text-[16px]`}>
                Не&nbsp;исключено, что&nbsp;вам&nbsp;потребуются платочки
                для&nbsp;этого трогательного момента
              </div>
              <div className={`${mak.className} text-[20px]`}>15.00</div>
            </div>
            <div className="h-[30px] border-r-[1px] border-solid border-white my-[5px]"></div>
            <div>
              <div className={`${mak.className} text-2xl`}>Свадебный ужин</div>
              <div className={`${alethianext.className} text-[16px]`}>
                Вкусные блюда и&nbsp;весёлая программа от&nbsp;нашего крутого
                ведущего
              </div>
              <div className={`${mak.className} text-[20px]`}>17.00</div>
            </div>
            <div className="h-[30px] border-r-[1px] border-solid border-white my-[5px]"></div>
            <div>
              <div className={`${mak.className} text-2xl`}>Свадебный торт</div>
              <div className={`${alethianext.className} text-[16px]`}>
                Обещаем, торт продавать мы&nbsp;не&nbsp;будем
              </div>
              <div className={`${mak.className} text-[20px]`}>21.30</div>
            </div>
            <div className="h-[30px] border-r-[1px] border-solid border-white my-[5px]"></div>
            <div>
              <div className={`${mak.className} text-2xl`}>
                Окончание вечера
              </div>
              <div className={`${alethianext.className} text-[16px]`}>
                Даже&nbsp;такая вечеринка может закончиться,
                но&nbsp;мы&nbsp;придумаем ещё&nbsp;поводы собраться вместе
              </div>
              <div className={`${mak.className} text-[20px]`}>23.30</div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-white text-black  py-[50px]">
        <div
          className=" w-full text-right justify-end gap-4 flex items-center mb-8"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <h2 className={`${hello_january.className} text-7xl`}>Дресс код</h2>
          <div className=" h-[1px] bg-black max-w-[120px] grow-1 mt-6"></div>
        </div>
        <p
          className={`${alethianext.className} text-[16px] text-right px-[50px]`}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          Пожалуйста, приходите в красивой одежде, которая соответствует
          торжественному настроению.
          <br />
          <br />
          Мы будем рады, если вы поддержите цветовую палитру нашей свадьбы:
        </p>
        <div
          className="flex gap-4 md:gap-1 justify-between my-2.5 w-[80%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <div className="rounded-full bg-[#1A1C18] w-[50px] h-[50px]  sm:w-[30px] sm:h-[30px]" />
          <div className="rounded-full bg-[#363C2F] w-[50px] h-[50px]  sm:w-[30px] sm:h-[30px]" />
          <div className="rounded-full bg-[#646A56] w-[50px] h-[50px]  sm:w-[30px] sm:h-[30px]" />
          <div className="rounded-full bg-[#97928C] w-[50px] h-[50px]  sm:w-[30px] sm:h-[30px]" />
          <div className="rounded-full bg-[#F1F1F1] w-[50px] h-[50px]  sm:w-[30px] sm:h-[30px]" />
        </div>
      </section>
      <section className="bg-[url(/background_3.jpg)] bg-cover bg-center min-h-[800px]">
        <div className=" flex flex-col gap-[5vh] h-full bg-[rgba(0,0,0,0.4)] p-8">
          <div
            className=" w-full text-right justify-end gap-4 flex items-center mb-36"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h2 className={`${hello_january.className} text-7xl`}>Детали</h2>
            <div className=" h-[1px] bg-white max-w-[120px] grow-1 mt-6 "></div>
          </div>

          <p className={`${alethianext.className} text-[16px] text-right`}>
            Обратите внимание, что формат мероприятия не предполагают детской
            площадки и аниматоров. Пожалуйста, позаботьтесь о том, чтобы
            провести этот вечер без детей.
          </p>

          <div
            className=" w-full flex justify-end items-center"
            data-aos="pulse"
            data-aos-once="true"
          >
            <Image
              src="/heart-white-01.svg"
              height={20}
              width={20}
              alt="Heart"
              className="animate-pulseCustom"
            />
          </div>

          <p className={`${alethianext.className} text-[16px] text-right`}>
            Мы будем рады, если вместо цветов вы подарите нам вашу любимую книгу
            для нашей семейной библиотеки
          </p>

          <div
            className=" w-full flex justify-end items-center"
            data-aos="pulse"
            data-aos-once="true"
          >
            <Image
              src="/heart-white-01.svg"
              height={20}
              width={20}
              alt="Heart"
              className="animate-pulseCustom"
            />
          </div>

          <p className={`${alethianext.className} text-[16px] text-right`}>
            От всего сердца просим вас воздержаться от криков Горько! и
            сохранить атмосферу уютного семейного праздника.
          </p>
        </div>
      </section>
      <section className=" bg-white text-black  p-[50px]">
        <div
          className=" w-full text-right justify-end gap-4 flex items-center mb-8"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <h2 className={`${hello_january.className} text-7xl`}>Присутствие</h2>
          <div className=" h-[1px] bg-black max-w-[120px] grow-1 mt-6"></div>
        </div>
        <p className={`${alethianext.className} text-[16px] text-right`}>
          Пожалуйста, подтвердите ваше присутствие на нашем празднике до 1 июня 2026 года, перейдя в общий чат гостей в What’s App
        </p>
        <div className="flex justify-center items-center p-10">
          <a href="https://chat.whatsapp.com/KDEczjBkiFwCQeT1RShsOr?mode=wwt" className={`${alethianext.className} text-black underline`}>
            <Image
              src="/whatsapp-icon.png"
              height={20}
              width={20}
              alt="WhatsApp"
              className="inline-block mr-2"
            />
            Присоединиться к чату гостей
          </a>
        </div>
        
      </section>

      <section className="bg-[url(/background_4.jpg)] bg-cover bg-center p-8">
          <CountDown />
      </section>
    </main>
  );
}
