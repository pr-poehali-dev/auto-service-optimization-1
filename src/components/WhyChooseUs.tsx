import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Globe",
    title: "Широкий ассортимент",
    description: "Более 10 000 позиций для всех популярных марок спецтехники — в наличии на складе и под заказ",
  },
  {
    icon: "Shield",
    title: "Гарантия качества",
    description: "Оригинальные и сертифицированные аналоги с гарантией. Работаем только с проверенными производителями",
  },
  {
    icon: "Headphones",
    title: "Техподдержка 24/7",
    description: "Поможем подобрать нужную деталь по артикулу, марке техники или фото. Консультация бесплатно",
  },
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description: "Отправка в день заказа при наличии на складе. Доставка по всей России — транспортными компаниями и курьером",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему выбирают <span className="font-semibold">Diamond</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            15 лет на рынке запчастей для спецтехники — тысячи довольных клиентов по всей России
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <Icon name={feature.icon} size={32} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
