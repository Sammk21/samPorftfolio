const { useEffect } = require('react');

useEffect(() => {
  gsap.set('.img', { y: 500 });
  gsap.set('.loader-img', { x: 500 });
  gsap.set('.hero-title', { y: 300 });
  gsap.set('.hero-para', { y: 100 });
  gsap.set('.nav', { y: -100 });
  gsap.set('#hero', { scale: 0.8 });

  const tl = gsap.timeline({ delay: 1 });

  tl.to('.img', {
    y: 0,
    duration: 1.5,
    stagger: 0.5,
    ease: 'power3.inOut',
  })
    .to(
      '.loader-img',
      {
        x: 0,
        duration: 3,
        ease: 'power3.inOut',
      },
      '-=2.5'
    )
    .to(
      '.img:not(#loader-logo)',
      {
        clipPath: 'polygon(0% 0%,100% 0%,100% 0%,0% 0%)',
        duration: 0.4,
        stagger: 0.1,
        ease: 'power3.inOut',
      },
      '-=1'
    )
    .to(
      '.loader',
      {
        clipPath: 'polygon(0% 0%,100% 0%,100% 0%,0% 0%)',
        duration: 1,
        ease: 'power3.inOut',
      },
      '-=0.5'
    )
    .to(
      '.hero-title',
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.inOut',
      },
      '-=1'
    )
    .to(
      '.hero-para',
      {
        y: 0,
        duration: 1,
        stagger: 0.02,
        ease: 'power4.inOut',
      },
      '-=1'
    )
    .to(
      '.nav',
      {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.inOut',
      },
      '-=1'
    )
    .to(
      '#hero',
      {
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.inOut',
      },
      '-=1'
    );
}, []);
