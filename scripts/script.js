document.addEventListener("DOMContentLoaded", function() {
    const words = ["calidad", "resistencia", "durabilidad", "eficiencia"];
    let index = 0;
    
    function changeWord() {
        document.getElementById("changing-text").textContent = words[index];
        index = (index + 1) % words.length;
    }
    
    setInterval(changeWord, 2000);
});
