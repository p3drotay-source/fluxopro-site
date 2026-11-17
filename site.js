(() => {
  'use strict';
  const cfg=window.FLUXOPRO_CONTATO||{};
  const email=String(cfg.email||'').trim();
  const whatsapp=String(cfg.whatsapp||'').replace(/\D/g,'');
  const cta=document.getElementById('cta-contact');
  const soon=document.getElementById('contact-soon');
  const title='Quero conhecer o piloto FluxoPro';
  const message='Olá! Vi a demonstração do FluxoPro e gostaria de conversar sobre uma página de orçamento para minha empresa.';
  if (whatsapp && /^55\d{10,11}$/.test(whatsapp)) {
    cta.href='https://wa.me/'+whatsapp+'?text='+encodeURIComponent(message);
    cta.target='_blank'; cta.rel='noopener noreferrer';
    cta.classList.remove('hidden'); soon.classList.add('hidden');
  } else if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    cta.href='mailto:'+encodeURIComponent(email)+'?subject='+encodeURIComponent(title)+'&body='+encodeURIComponent(message);
    cta.classList.remove('hidden'); soon.classList.add('hidden');
  }
  document.getElementById('year').textContent=new Date().getFullYear();
})();
