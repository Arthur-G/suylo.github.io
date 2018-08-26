window.sr = ScrollReveal({ reset: false });

sr.reveal('.r-top', {
    origin: 'top',
    distance: '1em',
    duration: 2500
});

// FOOTER
sr.reveal('.r-top-1',{
    origin: 'top',
    distance: '1em',
    duration: 1000
});

sr.reveal('.r-top-2',{
    origin: 'top',
    distance: '1em',
    duration: 1500
});

sr.reveal('.r-top-3',{
    origin: 'top',
    distance: '2em',
    duration: 1800
});


// **
sr.reveal('.r-bottom', {
   origin: 'bottom',
   distance: '1em',
   duration: 2000
});

sr.reveal('.r-right', {
    origin: 'left',
    duration: 2000,
    distance: '1em'
});
sr.reveal('.r', {
    duration: 2000
});

// infos
sr.reveal('.r-bottom-1', {
    origin: 'bottom',
    distance: '2em',
    duration: 1000
});
sr.reveal('.r-bottom-2', {
    origin: 'bottom',
    distance: '2em',
    duration: 1500
});
sr.reveal('.r-bottom-3', {
    origin: 'bottom',
    distance: '2em',
    duration: 2000
});
sr.reveal('.r-rotate', {
    rotate: { x: 200, y: 300, z: 0 },
    duration: 3000
});