import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
              <span className="text-primary font-heading font-bold text-xl">W</span>
            </div>
            <div>
              <h1 className="font-heading font-semibold text-xl text-primary">WTF Limited</h1>
              <p className="text-xs text-muted-foreground">Hong Kong</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-sm text-foreground hover:text-accent transition-colors">О компании</a>
            <a href="#principles" className="text-sm text-foreground hover:text-accent transition-colors">Принципы</a>
            <a href="#contact" className="text-sm text-foreground hover:text-accent transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/95 text-primary-foreground py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Управление собственным капиталом
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Инвестиционная холдинговая компания с фокусом на диверсифицированный портфель фондов и финансовых инструментов
            </p>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="TrendingUp" size={18} />
                <span>Инвестиционные фонды</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Building2" size={18} />
                <span>Проекты</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="LineChart" size={18} />
                <span>Акции & ETF</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent"></div>
        </div>
      </section>

      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 animate-fade-in">
              <div className="inline-block mb-4">
                <span className="text-accent font-heading text-sm font-semibold tracking-wider uppercase">О компании</span>
              </div>
              <h3 className="font-heading text-4xl font-bold text-primary mb-6">
                WTF Limited
              </h3>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  WTF Limited (Hong Kong) — инвестиционная холдинговая компания, созданная исключительно для управления и размещения собственного капитала в диверсифицированном портфеле инвестиционных фондов и финансовых инструментов.
                </p>
                <p>
                  Капитал компании формируется исключительно из вкладов учредителей и акционеров. Мы не принимаем средства третьих лиц и не ведем клиентской или коммерческой деятельности.
                </p>
                <p>
                  Вся инвестиционная деятельность осуществляется с использованием собственных средств компании. Прибыль генерируется за счет положительной динамики и реализованных доходов базовых инвестиционных фондов, в которых участвует компания.
                </p>
                <p>
                  Из полученных доходов вычитаются необходимые операционные и управленческие расходы. Оставшаяся прибыль распределяется между акционерами в соответствии с их долями участия.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Собственный капитал</h4>
                <p className="text-sm text-muted-foreground">Работаем исключительно с собственными средствами учредителей и акционеров</p>
              </Card>

              <Card className="p-6 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="PieChart" size={24} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Диверсификация</h4>
                <p className="text-sm text-muted-foreground">Распределение активов в портфеле фондов, проектов и финансовых инструментов</p>
              </Card>

              <Card className="p-6 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Для акционеров</h4>
                <p className="text-sm text-muted-foreground">Прибыль распределяется между акционерами согласно их долям участия</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="principles" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block mb-4">
                <span className="text-accent font-heading text-sm font-semibold tracking-wider uppercase">Принципы работы</span>
              </div>
              <h3 className="font-heading text-4xl font-bold text-primary">
                Как мы работаем
              </h3>
            </div>

            <div className="space-y-6">
              <Card className="p-8 border-l-4 border-l-accent bg-card hover:shadow-lg transition-shadow">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-heading font-bold text-xl">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl mb-3 text-primary">Инвестиции только собственных средств</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      Мы не управляем чужими деньгами и не привлекаем инвестиции от третьих лиц. Все решения принимаются в интересах самой компании и её акционеров.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-accent bg-card hover:shadow-lg transition-shadow">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-heading font-bold text-xl">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl mb-3 text-primary">Диверсифицированный портфель</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      Капитал распределен между инвестиционными фондами, прямыми проектами, акциями и ETF для оптимизации соотношения доходности и риска.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-accent bg-card hover:shadow-lg transition-shadow">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-heading font-bold text-xl">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl mb-3 text-primary">Прозрачное распределение прибыли</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      Из доходов вычитаются операционные расходы, после чего прибыль распределяется между акционерами пропорционально их долям.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-accent bg-card hover:shadow-lg transition-shadow">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-heading font-bold text-xl">4</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl mb-3 text-primary">Отсутствие клиентской деятельности</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      Компания не оказывает услуги внешним клиентам и не ведет коммерческих операций. Наша единственная задача — управление собственным капиталом.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-accent font-heading text-sm font-semibold tracking-wider uppercase">Контакты</span>
            </div>
            <h3 className="font-heading text-4xl font-bold text-primary mb-6">
              WTF Limited
            </h3>
            <p className="text-lg text-foreground/70 mb-8">
              Инвестиционная холдинговая компания
            </p>
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <Icon name="MapPin" size={18} />
              <span>Hong Kong</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-primary font-heading font-bold">W</span>
              </div>
              <span className="text-sm text-muted-foreground">© 2024 WTF Limited. Hong Kong</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Investment holding company
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
