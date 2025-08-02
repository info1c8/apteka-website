import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-blue/5 to-medical-green/5">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center">
                <Icon name="Cross" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-medical-blue">Аптека Ру</h1>
                <p className="text-sm text-medical-gray">Ваше здоровье - наша забота</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="text-medical-gray hover:text-medical-blue transition-colors">Каталог</a>
              <a href="#articles" className="text-medical-gray hover:text-medical-blue transition-colors">Статьи</a>
              <a href="#about" className="text-medical-gray hover:text-medical-blue transition-colors">О нас</a>
              <a href="#contacts" className="text-medical-gray hover:text-medical-blue transition-colors">Контакты</a>
            </nav>
            <Button className="bg-medical-blue hover:bg-medical-blue/90">
              <Icon name="Phone" size={16} className="mr-2" />
              8 (800) 555-0123
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Аптека Ру - Лекарства с доставкой по всей России
            </h1>
            <p className="text-xl text-medical-gray mb-8 leading-relaxed">
              Качественные медикаменты, профессиональные консультации фармацевтов и быстрая доставка. 
              Аптека Ру работает для вашего здоровья уже более 15 лет.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medical-gray" size={20} />
                <Input 
                  placeholder="Поиск лекарств..." 
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button size="lg" className="bg-medical-green hover:bg-medical-green/90 h-12">
                Найти в аптеке
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="catalog" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Heart", title: "Кардиология", desc: "Препараты для сердца", color: "bg-red-50 text-red-600" },
              { icon: "Brain", title: "Неврология", desc: "Лекарства для нервной системы", color: "bg-purple-50 text-purple-600" },
              { icon: "Pill", title: "Антибиотики", desc: "Противомикробные препараты", color: "bg-blue-50 text-blue-600" },
              { icon: "Thermometer", title: "Жаропонижающие", desc: "Средства от температуры", color: "bg-orange-50 text-orange-600" }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer animate-scale-in">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full ${category.color} mx-auto flex items-center justify-center mb-4`}>
                    <Icon name={category.icon} size={32} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Полезные статьи от Аптека Ру</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Как правильно принимать антибиотики",
                excerpt: "Аптека Ру объясняет важные правила приема антибактериальных препаратов для эффективного лечения.",
                tag: "Медицина",
                readTime: "5 мин"
              },
              {
                title: "Домашняя аптечка: что должно быть в каждом доме",
                excerpt: "Эксперты Аптека Ру составили список необходимых лекарств для домашней аптечки.",
                tag: "Профилактика",
                readTime: "7 мин"
              },
              {
                title: "Сезонная аллергия: как подготовиться заранее",
                excerpt: "Аптека Ру рассказывает о современных методах борьбы с аллергией и профилактике.",
                tag: "Аллергия",
                readTime: "6 мин"
              }
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.tag}</Badge>
                    <span className="text-sm text-medical-gray">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription className="text-base">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Читать статью
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О компании Аптека Ру</h2>
              <p className="text-lg text-medical-gray mb-6 leading-relaxed">
                Аптека Ру - ведущая аптечная сеть России с более чем 15-летним опытом работы. 
                Мы обеспечиваем население качественными лекарственными препаратами и медицинскими изделиями.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "MapPin", text: "500+ аптек по России" },
                  { icon: "Users", text: "2М+ довольных клиентов" },
                  { icon: "Shield", text: "100% оригинальные препараты" },
                  { icon: "Clock", text: "Работаем 24/7" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-medical-green/10 rounded-lg flex items-center justify-center">
                      <Icon name={feature.icon} className="text-medical-green" size={20} />
                    </div>
                    <span className="text-medical-gray">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-medical-blue to-medical-green rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Почему выбирают Аптека Ру?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} />
                  <span>Лицензированные фармацевты</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} />
                  <span>Доставка в день заказа</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} />
                  <span>Программа лояльности</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} />
                  <span>Консультации специалистов</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты Аптека Ру</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "Горячая линия", value: "8 (800) 555-0123" },
                  { icon: "Mail", label: "Email", value: "info@аптека-ру.рф" },
                  { icon: "MapPin", label: "Адрес", value: "Москва, ул. Медицинская, д. 15" },
                  { icon: "Clock", label: "Режим работы", value: "Круглосуточно, без выходных" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-medical-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} className="text-medical-blue" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{contact.label}</p>
                      <p className="text-medical-gray">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Написать нам</CardTitle>
                <CardDescription>Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Input placeholder="Телефон" />
                <textarea 
                  className="w-full p-3 border rounded-md resize-none h-24" 
                  placeholder="Ваше сообщение"
                ></textarea>
                <Button className="w-full bg-medical-blue hover:bg-medical-blue/90">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
                  <Icon name="Cross" className="text-white" size={16} />
                </div>
                <span className="text-xl font-bold">Аптека Ру</span>
              </div>
              <p className="text-gray-400">Надежная аптечная сеть для вашего здоровья</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Рецептурные препараты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">БАДы и витамины</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Медицинские изделия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Косметика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сервисы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бронирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Программа лояльности</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-gray-400">8 (800) 555-0123</p>
              <p className="text-gray-400">info@аптека-ру.рф</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Аптека Ру. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;