export function isWebp(){
    function testWebP(callback) {

        let webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        
        testWebP(function (support) {
        
        if (support == true) {
        document.querySelector('body').classList.add('webp');
        }else{
        document.querySelector('body').classList.add('no-webp');
        }
    });
}
export function burgerMenu(burger, menu){
    toggleMenu(burger, menu);
}
export function toggleMenu(burger, menu){
    if (burger) {
        burger.addEventListener("click", (e) => {
            if(menu){
                if (menu.classList.contains('_active')) {
                    closeMenu(burger, menu);
                }else{
                    openMenu(burger, menu);
                }
            }
        });
    }
}
export function openMenu(burger, menu){
    burger.classList.add('_active');
    burger.children[0].classList.add('_active');
    menu.classList.add('_active');
    document.body.classList.add('_lock');
}
export function closeMenu(burger, menu){
    burger.classList.remove('_active');
    burger.children[0].classList.remove('_active');
    menu.classList.remove('_active');
    document.body.classList.remove('_lock');     
}