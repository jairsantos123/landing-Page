document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar a visibilidade das respostas do FAQ
    function toggleFaq(element) {
        const faqItem = element.closest('.faq-item');
        if (faqItem) { // Garante que o elemento 'faq-item' existe
            faqItem.classList.toggle('active');
        }
    }

    // Adiciona o event listener para os cliques nas perguntas do FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            toggleFaq(this);
        });
    });

    // Função para o botão de CTA (Chamada para Ação) no Hero Section
    const ctaButtonHero = document.querySelector('.hero-section .cta-button');
    if (ctaButtonHero) {
        ctaButtonHero.addEventListener('click', function() {
            alert('Você clicou em "QUERO ME TORNAR FLUENTE EM 18 MESES"! Redirecionando para o formulário de contato ou agendamento...');
            // Aqui você pode adicionar o código para redirecionar o usuário
            // window.location.href = 'URL_DO_SEU_FORMULARIO_OU_AGENDAMENTO';
        });
    }

    // Função para o botão de CTA na seção de Unidades
    const ctaButtonUnits = document.querySelector('.units-section .cta-button');
    if (ctaButtonUnits) {
        ctaButtonUnits.addEventListener('click', function() {
            alert('Você clicou em "Quero Agendar uma Visita"! Redirecionando para o formulário de agendamento...');
            // Aqui você pode adicionar o código para redirecionar o usuário
            // window.location.href = 'URL_DO_SEU_FORMULARIO_DE_VISITA';
        });
    }

    // Função para o botão de chat flutuante
    const chatWidget = document.querySelector('.chat-widget');
    if (chatWidget) {
        chatWidget.addEventListener('click', function() {
            alert('Chat iniciado! Como posso te ajudar?');
            // Aqui você pode integrar um widget de chat real (ex: WhatsApp, Zendesk Chat, etc.)
            // window.open('https://api.whatsapp.com/send?phone=SEUNUMERO', '_blank');
        });
    }

    // Função para o botão de contato no Footer
    const contactButtonFooter = document.querySelector('.footer .contact-button');
    if (contactButtonFooter) {
        contactButtonFooter.addEventListener('click', function() {
            alert('Você clicou em "Fale conosco por aqui!"! Redirecionando para o contato...');
            // Exemplo: redirecionar para uma página de contato ou WhatsApp
            // window.open('https://api.whatsapp.com/send?phone=SEUNUMERO', '_blank');
        });
    }

    // Evento para o play button na seção de Benefícios (Realidade Aumentada)
    const playButton = document.querySelector('.video-placeholder .play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            alert('Simulando a reprodução do vídeo de Realidade Aumentada!');
            // Aqui você adicionaria a lógica real para reproduzir um vídeo,
            // como abrir um modal com um iframe do YouTube ou um vídeo local.
            // Ex: document.getElementById('myVideoModal').style.display = 'block';
        });
    }

    // Event listeners para as imagens da galeria de unidades (opcional: abrir em lightbox/modal)
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            alert('Você clicou na imagem da unidade: ' + this.alt + '. (Poderia abrir um modal com a imagem ampliada)');
            // Lógica para abrir um modal ou lightbox com a imagem ampliada
        });
    });
});