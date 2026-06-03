import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Newsletter() {
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Request submitted:", phone)
    setPhone("")
  }

  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
              Нужна <span className="font-semibold">консультация?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Оставьте номер телефона — наш специалист поможет подобрать нужные запчасти и рассчитает стоимость
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="h-12 rounded-full border-2 px-6"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 shrink-0"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </form>

          <p className="text-xs text-muted-foreground">
            Отправляя номер, вы соглашаетесь с Политикой конфиденциальности и даёте согласие на обработку персональных данных
          </p>
        </div>
      </div>
    </section>
  )
}
