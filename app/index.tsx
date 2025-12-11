import React from 'react';
import { createRoot } from 'react-dom/client';

const GiftIcon = () => (
  <svg viewBox="0 0 24 24" className="gift-icon">
    <path d="M20,6H16V5c0-1.65-1.35-3-3-3h-2c-1.65,0-3,1.35-3,3v1H4C2.9,6,2,6.9,2,8v3c0,0.55,0.45,1,1,1h1v9c0,1.1,0.9,2,2,2h12 c1.1,0,2-0.9,2-2v-9h1c0.55,0,1-0.45,1-1V8C22,6.9,21.1,6,20,6z M10,5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v1h-4V5z M10,20H6 v-9h4V20z M20,20h-4v-9h4V20z M20,10H4V8h16V10z"/>
  </svg>
);

const CheckIcon = () => <span style={{fontSize: '1.2rem', color: '#1E6F43'}}>✅</span>;
const CrossIcon = () => <span style={{fontSize: '1.2rem', color: '#D61A1A'}}>❌</span>;

const App = () => {
  return (
    <div>
      <div className="sticky-bar">
         <span><span className="pulsing-dot"></span> OFERTA DE NATAL: 89% DAS VAGAS PREENCHIDAS</span>
         <span style={{color: '#FFD700', marginLeft: '10px'}}>⏳ EXPIRA EM POUCAS HORAS</span>
      </div>

      <header>
        <div className="container">
          <div className="tag-top">⚠ Natal tá aí, acorda!</div>
          <h1>Vai passar o Natal chorando o preço do Peru ou <br/><span className="gold-text">LUCRANDO COM ELES?</span></h1>
          
          <p className="sub">Pare de ser a "coitada" que só gasta em dezembro. Descubra como usar a preguiça dos outros para bancar o seu 2026 inteiro com o <strong>Código da Ceia Lucrativa.</strong></p>
          
          <a href="#oferta" className="btn-cta">QUERO PARAR DE SER LISA</a>
          <p style={{marginTop: '20px', fontSize: '0.85rem', opacity: 0.9, fontFamily: 'Montserrat', fontWeight: 600}}>
            <span style={{color: '#FFD700'}}>🔒</span> Compra segura (seu dinheiro vale mais aqui do que na blusinha da Shein)
          </p>
        </div>
      </header>

      <div className="container">
        <div className="objections-wrapper">
          <div className="objection-item">
            <div className="obj-title">🙄 "Ai, mas eu não sou MasterChef"</div>
            <div className="obj-desc">Não precisa, a receita é passo a passo.</div>
          </div>
          <div className="objection-item">
            <div className="obj-title">💸 "Ai, mas eu tô sem dinheiro"</div>
            <div className="obj-desc">Exatamente por isso que você precisa vender.</div>
          </div>
          <div className="objection-item">
            <div className="obj-title">💅 "Ai, mas dá trabalho"</div>
            <div className="obj-desc">Trabalho dá pegar ônibus lotado. Cozinhar ganhando pix é lazer.</div>
          </div>
        </div>
      </div>

      <section className="section-reality">
        <div className="container">
          <h2>Vamos falar a verdade?</h2>
          <div style={{fontSize: '2rem', color: '#C90B0B', margin: '15px 0'}}>❄️</div>
          <p style={{fontSize: '1.2rem', color: '#555'}}>Todo ano é a mesma palhaçada:</p>
          
          <div className="reality-box">
            Você se mata na cozinha, fica com cheiro de cebola, o cabelo todo desgrenhado, gasta o que não tem no mercado e, no final, sua cunhada ainda reclama que a farofa tá seca. 🤡
          </div>
          
          <h2 className="red-text" style={{marginTop: '60px', fontSize: '2.5rem'}}>VIRA A CHAVE, MULHER!</h2>
          <p style={{maxWidth: '700px', margin: '20px auto', fontSize: '1.2rem', lineHeight: '1.8', color: '#444'}}>
            Tem gente IMPLORANDO pra não cozinhar no Natal. Gente com dinheiro e preguiça. O <strong>Código da Ceia Lucrativa</strong> é a sua ferramenta pra tirar esse dinheiro do bolso deles e colocar na sua carteira.
          </p>
        </div>
      </section>

      <section className="section-bonus text-center">
        <div className="container">
          <h2>Bônus Exclusivos de Natal</h2>
          <p style={{color: '#C5A059', marginBottom: '50px', fontFamily: 'Montserrat', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700}}>Presentes que valem mais que as receitas</p>
          
          <div className="cards-grid">
            <div className="feature-card">
              <div className="gift-icon-container"><GiftIcon /></div>
              <h3>Manual de Fotos Que Vendem</h3>
              <p>Aprenda a tirar fotos irresistíveis dos pratos usando apenas o celular. Sem precisar de câmera profissional.</p>
              <div className="price-tag-bonus">Vendido por: R$ 37,00</div>
            </div>
            
            <div className="feature-card">
              <div className="gift-icon-container"><GiftIcon /></div>
              <h3>Guia de Embalagens</h3>
              <p>Lista de fornecedores e como montar embalagens que valorizam seu produto 3x mais.</p>
              <div className="price-tag-bonus">Vendido por: R$ 19,90</div>
            </div>
            
            <div className="feature-card">
              <div className="gift-icon-container"><GiftIcon /></div>
              <h3>Precificação + Bônus Fit</h3>
              <p>Planilha automática e receitas FIT para vender pra prima que tá de dieta no Natal.</p>
              <div className="price-tag-bonus">Vendido por: R$ 29,90</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-offer" id="oferta">
        <div className="container text-center">
          <h2 style={{marginBottom: '40px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>OFERTA "LIMPA NOME" DE NATAL</h2>
          <div className="pricing-card">
            <div className="pricing-header">
                <h3 style={{margin:0, fontSize: '1.8rem', color: '#C90B0B'}}>KIT COMPLETO</h3>
                <p style={{fontSize: '0.9rem', marginTop: '5px', color: '#666'}}>Acesso Imediato + Garantia</p>
            </div>
            <div className="pricing-body">
                <div className="price-list">
                <div className="price-item">
                    <span>📚 E-book Receitas Lucrativas</span>
                    <strong>R$ 97,00</strong>
                </div>
                <div className="price-item">
                    <span>🎁 Manual de Fotos (Bônus)</span>
                    <strong style={{color: '#1E6F43'}}>R$ 0,00</strong> 
                </div>
                <div className="price-item">
                    <span>🎁 Guia Embalagens (Bônus)</span>
                    <strong style={{color: '#1E6F43'}}>R$ 0,00</strong> 
                </div>
                <div className="price-item">
                    <span>🎁 Precificação + Fit (Bônus)</span>
                    <strong style={{color: '#1E6F43'}}>R$ 0,00</strong>
                </div>
                <div className="price-item" style={{color: '#999', marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '10px', justifyContent: 'center', gap: '10px'}}>
                    <span>Valor Total Real:</span>
                    <span style={{textDecoration: 'line-through'}}>R$ 183,80</span>
                </div>
                </div>
                <div className="big-price-box">
                <p className="red-text" style={{fontWeight: 700, letterSpacing: '1px', fontSize: '0.9rem', textTransform:'uppercase'}}>Só hoje por apenas:</p>
                <div className="big-price">R$ 29,90</div>
                <p style={{fontSize: '0.85rem', color: '#555'}}>(Menos que um X-Tudo)</p>
                </div>
                
                <div style={{color: '#C90B0B', fontWeight: 'bold', fontSize: '0.95rem', margin: '20px 0', background: '#FFF0F0', padding: '10px', borderRadius: '5px'}}>
                   🔥 Restam apenas 4 vagas com todos os bônus
                </div>

                <div style={{marginTop: '20px'}}>
                <a href="SEU_LINK_AQUI" className="btn-cta btn-red">QUERO LUCRAR MUITO AGORA</a>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-compare">
        <div className="container">
          <h2>Qual lado você escolhe?</h2>
          <p style={{color: '#666', marginTop: '10px'}}>O Natal chega para todas, mas o saldo bancário dia 26 é opcional.</p>
          
          <div className="compare-grid">
            <div className="compare-col col-red">
              <h3>Sem o Kit</h3>
              <ul>
                <li><CrossIcon /> Gasta o 13º todo no mercado</li>
                <li><CrossIcon /> Não vende porque não sabe tirar fotos</li>
                <li><CrossIcon /> Perde dinheiro por não saber precificar</li>
                <li><CrossIcon /> Começa Janeiro no vermelho</li>
              </ul>
            </div>
            <div className="compare-col col-green">
              <h3>Com o Kit (A Patroa)</h3>
              <ul>
                <li><CheckIcon /> Lucra muito com as festas de fim de ano</li>
                <li><CheckIcon /> Sabe tirar fotos profissionais só com o celular</li>
                <li><CheckIcon /> Ideias do que comprar baratinho pra vender</li>
                <li><CheckIcon /> Janeiro com as contas pagas e sobrando</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{background: 'var(--bg-cream)', paddingBottom: '60px'}}>
        <div className="container">
          <div className="guarantee-box">
            {/* Selo Dourado com 7 Dias */}
            <img src="https://cdn-icons-png.flaticon.com/512/9368/9368266.png" alt="Selo Garantia Dourado" className="seal-img" />
            <h3 style={{color: '#333', fontSize: '2rem', marginBottom: '10px'}}>Garantia Blindada de 7 Dias</h3>
            <p style={{fontSize: '1.1rem', marginBottom: '30px', color: '#555'}}>
                O risco é todo meu. Se você não gostar, eu devolvo 100% do seu dinheiro. Sem letras miúdas.
            </p>
            
            <a href="#oferta" className="btn-cta" style={{fontSize: '1rem', padding: '18px 36px', animation: 'none', background: '#222', borderColor: '#222', boxShadow: 'none'}}>
                GARANTIR MINHA VAGA SEM RISCO
            </a>
          </div>
        </div>
      </section>

      <section className="section-faq">
        <div className="container" style={{maxWidth: '800px'}}>
          <h2 className="text-center" style={{marginBottom: '50px', color: 'var(--primary-red)'}}>Perguntas Frequentes</h2>
          
          <details>
            <summary>Sou iniciante, funciona pra mim?</summary>
            <div className="faq-answer" style={{padding: '20px', color: '#555'}}>Com certeza. O método é passo a passo, justamente para quem nunca vendeu nada antes.</div>
          </details>
          <details>
            <summary>Preciso de conhecimento técnico?</summary>
            <div className="faq-answer" style={{padding: '20px', color: '#555'}}>Zero. Se você sabe mexer no WhatsApp e tem um fogão, você já tem técnica suficiente.</div>
          </details>
          <details>
            <summary>O acesso é vitalício?</summary>
            <div className="faq-answer" style={{padding: '20px', color: '#555'}}>Sim! Comprou é seu para sempre. Pode consultar todo Natal.</div>
          </details>
          <details>
            <summary>Funciona no celular?</summary>
            <div className="faq-answer" style={{padding: '20px', color: '#555'}}>Sim, todo o material (E-book e Planilha) abre perfeitamente no celular.</div>
          </details>
          <details>
            <summary>Como recebo o acesso?</summary>
            <div className="faq-answer" style={{padding: '20px', color: '#555'}}>Chega no seu e-mail imediatamente após a confirmação do pagamento.</div>
          </details>
        </div>
      </section>

      <div className="footer-callout">
        <div className="container">
          <h3 style={{marginBottom: '30px', fontSize: '1.8rem', color: '#C5A059'}}>Se você leu até aqui e não comprou,<br/>boa sorte lavando louça dia 25 de graça.</h3>
          
          <a href="#oferta" className="btn-cta" style={{fontSize: '1rem', padding: '15px 40px'}}>TÁ BOM, EU QUERO COMPRAR</a>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="legal-text" style={{maxWidth: '800px', margin: '0 auto', fontSize: '0.75rem', color: '#666'}}>
            <p>Código da Ceia Lucrativa © 2025. Todos os direitos reservados.</p>
            <p style={{marginTop: '10px'}}>Aviso Legal: “Nenhuma informação contida neste produto deve ser interpretada como uma afirmação da obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia abordada no conteúdo não é, e não deve ser interpretada como uma recomendação ou como garantia de qualquer resultado específico.”</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
