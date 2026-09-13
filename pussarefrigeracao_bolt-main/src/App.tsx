import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Star,
  ThermometerSnowflake,
  WashingMachine,
  Wrench,
  X,
} from 'lucide-react';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const whatsappNumber = '5581998540421';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para assistência técnica.')}`;

const services = [
  {
    icon: ThermometerSnowflake,
    number: '01',
    title: 'Conserto de geladeiras',
    description: 'Sua geladeira voltou a falhar? Identificamos o problema e devolvemos o frio para sua casa.',
    image: 'https://images.pexels.com/photos/4221389/pexels-photo-4221389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: WashingMachine,
    number: '02',
    title: 'Conserto de máquinas de lavar',
    description: 'Máquina parou de centrifugar ou não agita? Reparo completo para sua lavadora voltar a funcionar.',
    image: 'https://images.pexels.com/photos/4700400/pexels-photo-4700400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Manutenção preventiva',
    description: 'Cuidados que aumentam a vida útil dos seus eletrodomésticos e evitam surpresas na rotina.',
    image: 'https://images.pexels.com/photos/8032016/pexels-photo-8032016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

const benefits = ['Atendimento rápido e transparente', 'Profissionais experientes', 'Peças e ferramentas adequadas', 'Garantia no serviço realizado'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Clock3 size={14} /> Segunda a sábado, das 8h às 18h</span>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Fale conosco pelo WhatsApp</a>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="Pussa Refrigeração - início" onClick={closeMenu}>
            <img src="/logo_pussareffrigeracao-removebg-preview.png" alt="Pussa Refrigeração" />
          </a>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#sobre" onClick={closeMenu}>Sobre nós</a>
            <a href="#avaliacoes" onClick={closeMenu}>Avaliações</a>
            <a href="#localizacao" onClick={closeMenu}>Localização</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}><MessageCircle size={17} /> Pedir orçamento</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> Assistência técnica especializada</div>
              <h1>Seu aparelho funcionando bem é <em>tranquilidade</em> para a sua rotina.</h1>
              <p>Conserto e manutenção de geladeiras, máquinas de lavar e eletrodomésticos com agilidade, cuidado e serviço de confiança.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight size={18} /></a>
                <a className="button button-ghost" href="#servicos">Conheça nossos serviços</a>
              </div>
              <div className="hero-proof"><div className="avatar-stack"><span>R</span><span>M</span><span>P</span></div><span><strong>+ de 500 clientes</strong><br />atendidos com satisfação</span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-orb orb-one" />
              <div className="hero-orb orb-two" />
              <div className="hero-card">
                <div className="hero-photo" />
                <div className="floating-tag"><BadgeCheck size={20} /><span><strong>Serviço garantido</strong><small>feito para durar</small></span></div>
              </div>
              <div className="hero-stat"><strong>10</strong><span>anos<br />de experiência</span></div>
            </div>
          </div>
          <div className="scroll-cue"><span /> role para descobrir</div>
        </section>

        <section className="trust-strip"><div className="container trust-inner"><div><ShieldCheck size={20} /><strong>Profissionais de confiança</strong></div><div><Wrench size={20} /><strong>Diagnóstico preciso</strong></div><div><Clock3 size={20} /><strong>Atendimento ágil</strong></div><div><BadgeCheck size={20} /><strong>Garantia no serviço</strong></div></div></section>

        <section className="section services-section" id="servicos">
          <div className="container">
            <div className="section-heading"><div><div className="eyebrow dark"><span className="eyebrow-line" /> O que fazemos</div><h2>Refrigeração cuidada<br /><em>de verdade.</em></h2></div><p>Do diagnóstico ao último ajuste, cada atendimento é feito para resolver o problema e deixar você seguro.</p></div>
            <div className="service-grid">{services.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.number}><div className="service-image" style={{ backgroundImage: `url(${service.image})` }}><span className="service-number">{service.number}</span><span className="service-icon"><Icon size={22} /></span></div><div className="service-body"><h3>{service.title}</h3><p>{service.description}</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Saiba mais <ArrowRight size={16} /></a></div></article>; })}</div>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="container about-grid"><div className="about-visual"><div className="about-photo" /><div className="experience-card"><span>Desde</span><strong>2016</strong><small>cuidando do seu frio</small></div></div><div className="about-copy"><div className="eyebrow dark"><span className="eyebrow-line" /> Por que a Pussa?</div><h2>Mais que conserto.<br /><em>Cuidado em cada detalhe.</em></h2><p>A Pussa Refrigeração nasceu para tornar o atendimento técnico mais humano, claro e eficiente. A gente explica o que aconteceu, apresenta a solução mais adequada e só realiza o que realmente precisa ser feito.</p><ul>{benefits.map((benefit) => <li key={benefit}><span><Check size={14} /></span>{benefit}</li>)}</ul><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Fale com um especialista <ArrowRight size={17} /></a></div></div>
        </section>

        <section className="testimonial-section" id="avaliacoes"><div className="container testimonial-grid"><div><div className="eyebrow"><span className="eyebrow-line" /> Quem já conhece</div><h2>Confiança que<br /><em>se sente.</em></h2><p className="testimonial-intro">Nosso maior reconhecimento é saber que você pode contar com a Pussa sempre que precisar.</p><div className="rating"><strong>4.9</strong><div><div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={17} fill="currentColor" />)}</div><span>média de avaliação dos clientes</span></div></div></div><div className="quote-card"><div className="quote-mark">“</div><p>O atendimento foi rápido, o técnico explicou tudo com muita paciência e minha geladeira ficou perfeita. Dá para perceber quando o trabalho é feito com cuidado.</p><div className="quote-author"><div className="author-avatar">MC</div><div><strong>Mariana Costa</strong><span>Cliente Pussa Refrigeração</span></div><div className="quote-stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" />)}</div></div></div></div></section>

        <section className="contact-section" id="contato"><div className="container contact-grid"><div className="contact-copy"><div className="eyebrow dark"><span className="eyebrow-line" /> Vamos conversar</div><h2>Seu aparelho<br />precisa de <em>ajuda?</em></h2><p>Conte para a gente o que está acontecendo. Nossa equipe responde rápido e orienta você sobre o melhor caminho.</p><div className="contact-details"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={20} /><span><small>WhatsApp</small><strong>(81) 99854-0421</strong></span></a><div><MapPin size={20} /><span><small>Endereço</small><strong>Rua Francisco Soares Canha, 172<br />Curado II - Jaboatão dos Guararapes, PE<br />CEP: 54220-200</strong></span></div></div></div><div className="contact-form-card"><div className="form-top"><span>Solicite seu atendimento</span><div className="form-dots"><i /><i /><i /></div></div>{sent ? <div className="success-message"><div className="success-icon"><Check size={25} /></div><h3>Mensagem recebida!</h3><p>Obrigado pelo contato. Nossa equipe vai falar com você em breve.</p><button className="button button-primary" onClick={() => setSent(false)}>Enviar outra mensagem</button></div> : <form onSubmit={handleSubmit}><label>Seu nome<input type="text" placeholder="Como podemos chamar você?" required /></label><label>WhatsApp<input type="tel" placeholder="(00) 00000-0000" required /></label><label>Como podemos ajudar?<textarea placeholder="Conte brevemente o que aconteceu..." rows={3} required /></label><button className="button button-primary" type="submit">Solicitar atendimento <ArrowRight size={18} /></button></form>}</div></div></section>

        <section className="map-section" id="localizacao"><div className="container"><div className="section-heading"><div><div className="eyebrow dark"><span className="eyebrow-line" /> Onde estamos</div><h2>Nossa localização</h2></div><p>Estamos prontos para atender você em Jaboatão dos Guararapes e região.</p></div><div className="map-wrapper"><iframe title="Mapa Pussa Refrigeração" src="https://www.google.com/maps?q=Rua+Francisco+Soares+Canha+172+Curado+Jaboatão+dos+Guararapes+PE+54220-200&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-main"><div><img className="footer-logo" src="/logo_pussareffrigeracao-removebg-preview.png" alt="Pussa Refrigeração" /><p>Refrigeração cuidada para uma rotina mais tranquila.</p></div><div className="footer-links"><div><strong>Atalhos</strong><a href="#servicos">Serviços</a><a href="#sobre">Sobre nós</a><a href="#contato">Contato</a></div><div><strong>Redes sociais</strong><a href="#inicio"><Instagram size={16} /> Instagram</a><a href="#inicio"><Facebook size={16} /> Facebook</a></div></div></div><div className="container footer-bottom"><span>© 2024 Pussa Refrigeração. Todos os direitos reservados.</span><span>Feito com cuidado para você.</span></div></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle size={25} /></a>
      <button className="faq-button" aria-label="Abrir ajuda"><ChevronDown size={19} /></button>
    </div>
  );
}

export default App;
