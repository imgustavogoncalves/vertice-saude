import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, ChartNoAxesCombined, HeartHandshake, Workflow, Menu, X, Check, MoveUpRight } from 'lucide-react';
import './styles.css';

const services = [
  { icon: ChartNoAxesCombined, number: '01', title: 'Gestão que enxerga o todo.', text: 'Transforme dados em decisões. Conectamos estratégia, indicadores e sustentabilidade financeira à realidade da sua operação.', tags: ['Planejamento estratégico', 'Indicadores de gestão'] },
  { icon: Workflow, number: '02', title: 'Mais fluidez. Menos desperdício.', text: 'Redesenhamos processos e jornadas para que sua equipe tenha mais tempo para o que realmente importa: cuidar.', tags: ['Eficiência operacional', 'Redesenho de processos'] },
  { icon: HeartHandshake, number: '03', title: 'O paciente no centro. De verdade.', text: 'Escuta, acolhimento e continuidade. Ajudamos a construir experiências melhores em cada ponto de contato.', tags: ['Experiência do paciente', 'Desenvolvimento de equipes'] },
];

const cases = [
  { category: 'EFICIÊNCIA OPERACIONAL', name: 'Clínica Horizonte', metric: '−28%', label: 'no tempo de espera', detail: 'Uma agenda mais inteligente, do primeiro contato à consulta.', text: 'Neste cenário ilustrativo, o mapeamento da jornada e a reorganização das agendas reduzem gargalos na recepção e melhoram o fluxo de atendimento.' },
  { category: 'EXPERIÊNCIA DO PACIENTE', name: 'Hospital Aurora', metric: '+22', label: 'pontos no NPS', detail: 'A escuta do paciente transformada em ações práticas.', text: 'Neste cenário ilustrativo, rotinas de escuta e capacitação em acolhimento ajudam a equipe a responder melhor às necessidades de pacientes e familiares.' },
  { category: 'GESTÃO E ESTRATÉGIA', name: 'Rede Essencial', metric: '−18%', label: 'em custos operacionais', detail: 'Integração entre unidades, com decisões orientadas por dados.', text: 'Neste cenário ilustrativo, a padronização de compras e um painel de indicadores por unidade permitem identificar desperdícios e organizar prioridades.' },
];

function Brand() {
  return <a className="brand" href="#inicio" aria-label="Vértice Saúde — início"><span className="brand-symbol" aria-hidden="true">v</span><span>vértice<span className="brand-subtitle">SAÚDE</span></span></a>;
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event) { event.preventDefault(); setSent(true); }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-top"><span>CONTE COM A VÉRTICE</span><ArrowUpRight size={24} aria-hidden="true" /></div>
    <h3>Vamos entender seu próximo passo.</h3>
    <div className="form-row"><label>Seu nome<input name="name" autoComplete="name" required placeholder="Como podemos chamar você?" maxLength={100} /></label><label>E-mail profissional<input name="email" type="email" autoComplete="email" required placeholder="voce@empresa.com.br" maxLength={254} /></label></div>
    <label>Clínica, hospital ou organização<input name="company" autoComplete="organization" required placeholder="Nome da sua organização" maxLength={150} /></label>
    <label>Qual é o seu principal desafio?<select name="service" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Gestão e estratégia</option><option>Eficiência operacional</option><option>Experiência do paciente</option><option>Quero entender as possibilidades</option></select></label>
    <p className="form-note">Este é um formulário demonstrativo. Nenhum dado é enviado ou armazenado. Não inclua informações de pacientes.</p>
    <button className="button button-green" type="submit">Simular contato com vendas <ArrowUpRight size={19} aria-hidden="true" /></button>
    {sent && <div className="form-success" role="status"><Check size={20} aria-hidden="true" /><p>Simulação concluída! Em uma versão real, o time comercial receberia seu contato. Nenhuma informação foi enviada.</p></div>}
  </form>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="header" id="inicio"><div className="container header-inner"><Brand /><button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button><nav id="navigation" className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Navegação principal"><a href="#servicos" onClick={() => setMenuOpen(false)}>Nossas soluções</a><a href="#cases" onClick={() => setMenuOpen(false)}>Cases de sucesso</a><a className="nav-contact" href="#contato" onClick={() => setMenuOpen(false)}>Vamos conversar <ArrowUpRight size={17} aria-hidden="true" /></a></nav></div></header>
    <main id="conteudo">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> CONSULTORIA EM SAÚDE</p><h1 id="hero-title">Uma nova<br />perspectiva<br />para <em>cuidar.</em></h1><p className="hero-description">Estratégia, gestão e pessoas conectadas para transformar o desempenho da sua organização de saúde.</p><a className="button button-green" href="#contato">Transforme sua gestão <ArrowUpRight size={20} aria-hidden="true" /></a><div className="hero-footnote"><span className="small-cross" aria-hidden="true">+</span><span>Ao lado de quem cuida.<br /><strong>Do diagnóstico à transformação.</strong></span></div></div>
        <div className="hero-visual"><img className="hero-image" src="./hero.png" alt="Ambiente de clínica contemporânea com luz natural e jardim interno" width="1536" height="1024" fetchPriority="high" /><span className="image-caption">UM NOVO OLHAR PARA A SAÚDE</span><div className="image-card"><span className="image-card-icon"><HeartHandshake size={26} strokeWidth={1.4} aria-hidden="true" /></span><div><strong>Gestão que transforma.<br />Cuidado que aproxima.</strong><span>Esse é o nosso ponto de partida.</span></div></div></div>
      </section>
      <div className="principles"><div className="container principles-inner"><p>Complexidade na saúde.<br /><strong>Clareza no caminho.</strong></p><span>Visão estratégica</span><span>Proximidade com a equipe</span><span>Foco em melhoria contínua</span></div></div>
      <section className="services section container" id="servicos" aria-labelledby="services-title"><div className="section-heading"><div><p className="eyebrow">01 / NOSSAS SOLUÇÕES</p><h2 id="services-title">Sua operação tem desafios.<br /><em>Juntos, encontramos caminhos.</em></h2></div><p>Um olhar integrado para a sua organização.<br />Uma solução construída para a sua realidade.</p></div><div className="services-grid">{services.map(({icon: Icon, ...service}) => <article className="service-card" key={service.number}><div className="service-top"><Icon size={31} strokeWidth={1.3} aria-hidden="true" /><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contato">Conversar sobre esta solução <ArrowUpRight size={18} aria-hidden="true" /></a></article>)}</div></section>
      <section className="cases section" id="cases" aria-labelledby="cases-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">02 / CASES DE SUCESSO</p><h2 id="cases-title">Mudanças que fazem sentido.<br /><em>Resultados que fazem diferença.</em></h2></div><p className="case-disclaimer">Cases e indicadores fictícios, criados para ilustrar possibilidades de atuação. Não representam resultados reais ou garantidos.</p></div><div className="cases-grid">{cases.map(item => <article className="case-card" key={item.name}><span className="case-category">{item.category}</span><h3>{item.name}</h3><div className="case-result"><strong>{item.metric}</strong><span>{item.label}</span></div><p>{item.detail}</p><details><summary>Conheça o cenário <ArrowRight size={18} aria-hidden="true" /></summary><p>{item.text}</p></details><span className="fiction-label">CENÁRIO ILUSTRATIVO</span></article>)}</div></div></section>
      <section className="contact section" id="contato" aria-labelledby="contact-title"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow">03 / VAMOS CONVERSAR</p><h2 id="contact-title">O próximo capítulo<br />da sua gestão<br /><em>começa aqui.</em></h2><p>Conte para o nosso time de vendas onde sua organização quer chegar. Vamos pensar juntos no caminho.</p><div className="contact-line" /><div className="contact-promise"><MoveUpRight size={26} strokeWidth={1.4} aria-hidden="true" /><span>Uma conversa próxima.<br />Um olhar atento para o seu negócio.</span></div></div><ContactForm /></div></section>
    </main>
    <footer><div className="container footer-top"><Brand /><p>Mais perspectiva para a gestão.<br />Mais possibilidades para o cuidado.</p><a href="#inicio">Voltar ao início <ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Vértice Saúde · Marca fictícia.</span><span>Projeto demonstrativo. Não oferece atendimento médico.</span></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
