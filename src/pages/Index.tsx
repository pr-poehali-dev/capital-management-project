import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-accent/20 backdrop-blur-sm sticky top-0 z-50 bg-accent">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <span className="text-black font-heading font-bold text-xl">W</span>
            </div>
            <div>
              <h1 className="font-heading font-semibold text-xl text-primary">WTF Limited</h1>
              <p className="text-xs text-primary/70">Hong Kong</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-sm text-primary hover:text-white transition-colors">About</a>
            <a href="#principles" className="text-sm text-primary hover:text-white transition-colors">Principles</a>
            <a href="#contact" className="text-sm text-primary hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/95 text-primary-foreground py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Own Capital Management
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Investment holding company focused on a diversified portfolio of funds and financial instruments
            </p>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="TrendingUp" size={18} />
                <span>Investment Funds</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Building2" size={18} />
                <span>Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="LineChart" size={18} />
                <span>Stocks & ETFs</span>
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
                <span className="text-accent font-heading text-sm font-semibold tracking-wider uppercase">About Company</span>
              </div>
              <h3 className="font-heading text-4xl font-bold text-primary mb-6">
                WTF Limited
              </h3>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  WTF Limited (Hong Kong) is an investment holding company whose sole purpose is to manage and allocate its own capital in a diversified portfolio of investment funds and financial instruments.
                </p>
                <p>
                  The company's capital is composed exclusively of contributions from its founders and shareholders. It does not accept third-party funds or engage in any client-facing or commercial operations.
                </p>
                <p>
                  All investment activity is conducted using the company's own funds. Profits are generated from the positive performance and realized gains of the underlying investment funds in which the company participates.
                </p>
                <p>
                  From the returns generated, the company deducts necessary operating and management expenses. The remaining profit is then distributed to the shareholders in accordance with their equity holdings.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Own Capital</h4>
                <p className="text-sm text-muted-foreground">Operating exclusively with funds from founders and shareholders</p>
              </Card>

              <Card className="p-6 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="PieChart" size={24} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Diversification</h4>
                <p className="text-sm text-muted-foreground">Asset allocation across funds, projects, and financial instruments</p>
              </Card>

              <Card className="p-6 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">For Shareholders</h4>
                <p className="text-sm text-muted-foreground">Profits distributed among shareholders according to their equity stakes</p>
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
                <span className="text-accent font-heading text-sm font-semibold tracking-wider uppercase">Operating Principles</span>
              </div>
              <h3 className="font-heading text-4xl font-bold text-primary">
                How We Work
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
                    <h4 className="font-heading font-semibold text-xl mb-3 text-primary">Own Funds Only</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      We do not manage third-party assets or accept external investments. All decisions are made in the interests of the company and its shareholders.
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
                    <h4 className="font-heading font-semibold text-xl mb-3 text-primary">Diversified Portfolio</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      Capital is allocated across investment funds, direct projects, stocks, and ETFs to optimize the risk-return profile.
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
                    <h4 className="font-heading font-semibold text-xl mb-3 text-primary">Transparent Profit Distribution</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      Operating expenses are deducted from returns, after which profits are distributed to shareholders proportionally to their equity holdings.
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
                    <h4 className="font-heading font-semibold text-xl mb-3 text-primary">No Client Operations</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      The company does not provide services to external clients or engage in commercial activities. Our sole purpose is managing our own capital.
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
              <span className="text-accent font-heading text-sm font-semibold tracking-wider uppercase">Contact</span>
            </div>
            <h3 className="font-heading text-4xl font-bold text-primary mb-6">
              WTF Limited
            </h3>
            <p className="text-lg text-foreground/70 mb-8">
              Investment Holding Company
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
              Investment Holding Company
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;