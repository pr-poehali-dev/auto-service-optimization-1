import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tag, ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Гидравлика",
    type: "Насосы, цилиндры, распределители",
    image: "https://cdn.poehali.dev/projects/b3cf7a81-e363-4a65-8404-740d7730b8b2/files/9ec4f553-071e-4823-8fd1-ebf7d3bba638.jpg",
    description: "Гидравлические насосы, цилиндры, шланги и фитинги для экскаваторов и кранов",
    price: "от 2 500 ₽",
  },
  {
    name: "Двигатели и ЗИП",
    type: "Двигатели Cummins, Deutz, Perkins",
    image: "https://cdn.poehali.dev/projects/b3cf7a81-e363-4a65-8404-740d7730b8b2/files/df1007f1-ac81-4f0e-9f4f-c53b466e46f8.jpg",
    description: "Запчасти для двигателей, фильтры, прокладки, поршневые группы и турбины",
    price: "от 1 800 ₽",
  },
  {
    name: "Ходовая часть",
    type: "Гусеницы, катки, звёздочки",
    image: "https://cdn.poehali.dev/projects/b3cf7a81-e363-4a65-8404-742d7730b8b2/files/14eab542-a27a-40eb-b08d-69553da7d9af.jpg",
    description: "Гусеничные ленты, опорные и поддерживающие катки, направляющие колёса",
    price: "от 4 200 ₽",
  },
  {
    name: "Трансмиссия",
    type: "КПП, редукторы, муфты",
    image: "https://cdn.poehali.dev/projects/b3cf7a81-e363-4a65-8404-740d7730b8b2/files/14eab542-a27a-40eb-b08d-69553da7d9af.jpg",
    description: "Коробки передач, бортовые редукторы, муфты сцепления для бульдозеров и погрузчиков",
    price: "от 8 900 ₽",
  },
  {
    name: "Электрооборудование",
    type: "Стартеры, генераторы, датчики",
    image: "https://cdn.poehali.dev/projects/b3cf7a81-e363-4a65-8404-742d7730b8b2/files/9ec4f553-071e-4823-8fd1-ebf7d3bba638.jpg",
    description: "Стартеры, генераторы, жгуты проводов и электронные блоки управления",
    price: "от 3 100 ₽",
  },
  {
    name: "Рабочее оборудование",
    type: "Ковши, зубья, стрелы",
    image: "https://cdn.poehali.dev/projects/b3cf7a81-e363-4a65-8404-740d7730b8b2/files/86d0277f-9f73-434b-ad1d-ba5eaa4ae807.jpg",
    description: "Ковши экскаваторов, зубья, режущие кромки и навесное оборудование",
    price: "от 5 600 ₽",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Категории <span className="font-semibold">запчастей</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Широкий ассортимент для всех популярных марок спецтехники — Komatsu, Caterpillar, Hitachi, JCB и других
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Tag className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium">{category.type}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{category.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Смотреть
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            Весь каталог
          </Button>
        </div>
      </div>
    </section>
  )
}
