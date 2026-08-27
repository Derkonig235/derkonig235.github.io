const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-menu');

if(menu){
    menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',open)})
}
document.querySelectorAll('.nav-menu a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
    const progress=document.querySelector('.progress');
    addEventListener('scroll',()=>{
        const max=document.documentElement.scrollHeight-innerHeight;
        progress.style.width=(max?scrollY/max*100:0)+'%'
    },{passive:true});
        const io=new IntersectionObserver(es=>es.forEach(e=>{
            if(e.isIntersecting){e.target.classList.add('visible');
            io.unobserve(e.target)}
        }),{threshold:.1});
        document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
        document.getElementById('year').textContent=new Date().getFullYear();
        emailjs.init({
    publicKey: "ZIajN7WxwnMSdaGA7"
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const button = this.querySelector('button[type="submit"]');
    const originalText = button.textContent;

    button.textContent = 'Envoi en cours...';
    button.disabled = true;

    emailjs.sendForm(
        'service_fegvg3c',
        'template_nem3wr7',
        this
    )
    .then(() => {
        alert('Message envoyé avec succès !');
        this.reset();
    })
    .catch((error) => {
        console.error('Erreur EmailJS :', error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    })
    .finally(() => {
        button.textContent = originalText;
        button.disabled = false;
    });
});