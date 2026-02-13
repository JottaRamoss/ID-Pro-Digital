/**
 * WebCert Pro - Advanced Business Logic
 */

$(document).ready(function() {
    "use strict";

    // 1. Configurações de Animação (AOS)
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out'
    });

    // 2. Navbar Intelligence
    // Adiciona sombra e reduz o tamanho ao scrollar
    const mainNav = $('.navbar');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 30) {
            mainNav.addClass('navbar-scrolled shadow-sm py-2');
        } else {
            mainNav.removeClass('navbar-scrolled shadow-sm py-2');
        }
    });

    // 3. Smooth Scroll Pro
    // Navegação suave com compensação de altura da navbar
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            const navHeight = $('.navbar').outerHeight();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - navHeight
            }, 1000, 'easeInOutExpo');
        }
    });

    // 4. Filtro de Produtos (Diferencial Full Stack)
    // Se você tiver botões de filtro na página de certificados
    $('.filter-btn').on('click', function() {
        const value = $(this).attr('data-filter');
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        if (value === "all") {
            $('.product-card').show('1000');
        } else {
            $('.product-card').not('.' + value).hide('3000');
            $('.product-card').filter('.' + value).show('3000');
        }
    });

    // 5. Validação de Formulário e Feedback Visual
    const contactForm = $('form');
    contactForm.on('submit', function(e) {
        const btn = $(this).find('button[type="submit"]');
        
        // Simples validação de campos vazios
        let valid = true;
        $(this).find('input[required], textarea[required]').each(function() {
            if ($(this).val() === "") {
                $(this).addClass('is-invalid');
                valid = false;
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        if (!valid) {
            e.preventDefault();
            return false;
        }

        // Se for válido, mostra o carregamento
        btn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm"></span> PROCESSANDO...');
        
        // Simulação de envio (AQUI você conectaria com seu PHP ou Node.js futuramente)
        setTimeout(() => {
            $(this).html('<div class="alert alert-success mt-3"><h4>Sucesso!</h4>Sua mensagem foi enviada. Entraremos em contato em breve.</div>');
        }, 2000);
        
        return false; // Impede o refresh da página para o teste
    });

    // 6. WhatsApp Tracker
    // Log de conversão (bom para saber quantos clientes clicaram no Whats)
    $('.btn-whatsapp, .whatsapp-float').on('click', function() {
        console.log("Conversão: O usuário clicou para falar no WhatsApp.");
        // Aqui você pode inserir o código do Pixel do Facebook ou Google Analytics
    });

});

/** * Plugin Easing necessário para o efeito Expo 
 * Adicione este link no seu HTML antes do script.js:
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
 */