import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, CheckCircle, Star } from "lucide-react"

const packages = [
  {
    title: "Техобслуживание экскаватора",
    scope: "Полный комплект ТО",
    compatibility: "Komatsu, Hitachi, Caterpillar",
    rating: "4.9",
    reviews: "87",
    image: "https://cdn.poehali.dev/projects/b3cf7a81-e363-4a65-8404-740d7730b8b2/files/9ec4f553-071e-4823-8fd1-ebf7d3bba638.jpg",
    includes: ["Фильтры (масло, топливо, воздух)", "Прокладки и уплотнения", "Ремни и патрубки", "Рабочие жидкости"],
    price: "18 900 ₽",
  },
  {
    title: "Ходовая часть бульдозера",
    scope: "Комплект ходовой",
    compatibility: "Komatsu D65, D85, D155",
    rating: "4.8",
    reviews: "64",
    image: "https://cdn.poehali.dev/projects/b3cf7a81-e363-4a65-8404-740d7730b8b2/files/df1007f1-ac81-4f0e-9f4f-c53b466e46f8.jpg",
    includes: ["Гусеничные ленты", "Опорные катки", "Направляющие колёса", "Натяжные механизмы"],
    price: "124 000 ₽",
  },
  {
    title: "Гидравлика погрузчика",
    scope: "Гидравлическая система",
    compatibility: "JCB, Manitou, Bobcat",
    rating: "5.0",
    reviews: "42",
    image: "https://cdn.poehali.dev/projects/b3cf7a81-e363-4a65-8404-740d7730b8b2/files/14eab542-a27a-40eb-b08d-69553da7d9af.jpg",
    includes: ["Гидравлический насос", "Цилиндры подъёма", "Распределитель", "Шланги высокого давления"],
    price: "47 500 ₽",
  },
]

export function PopularPackages() {
  return (
    <section id="packages" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Готовые <span className="font-semibold">комплекты</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Подобранные наборы запчастей для типовых ремонтов и ТО — всё необходимое в одном заказе
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-xs font-semibold">{pkg.rating}</span>
                  <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Package className="h-4 w-4" />
                      <span>{pkg.scope}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">Совместимость: {pkg.compatibility}</p>

                  {/* Includes */}
                  <div className="space-y-1.5">
                    {pkg.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Цена комплекта</div>
                    <div className="text-2xl font-semibold text-primary">{pkg.price}</div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Заказать
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
