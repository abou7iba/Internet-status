// JS CODE
let title = document.querySelector('.title');

window.onload = function()
{
    if(window.navigator.onLine)
    {
        online();
    }
}

window.addEventListener('online', function(){
    online();

});
window.addEventListener('offline', function(){
    offline();
});

function online()
{
    title.innerHTML = 'شغال';
    title.style.color = 'green';
}
function offline()
{
    title.innerHTML = ' مشغالش يابوعمو';
    title.style.color = 'red';
}