const selectElement = (s) => document.querySelector(s);

selectElement('.menu').addEventListener('click', () => { 
 selectElement('.nav-list').classList.add('active');
});
 
                                           
selectElement('.menu-close').addEventListener('click', () => { selectElement('.nav-list').classList.remove('active'); 
});
                                                