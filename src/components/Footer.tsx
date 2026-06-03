import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Diamond</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Запчасти для спецтехники любых марок. Работаем с 2010 года, более 10 000 позиций в каталоге.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Гидравлика</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Двигатели и ЗИП</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Ходовая часть</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Трансмиссия</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Электрооборудование</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Партнёрам</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Отзывы</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Как подобрать запчасть</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Возврат и гарантия</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Связаться с нами</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Diamond. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
