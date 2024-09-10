scripdocument.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('colorButton');
    const colorSplash = document.getElementById('colorSplash');

    const colors = ['#FF6347', '#FF4500', '#FFD700', '#ADFF2F', '#00CED1', '#FF1493'];

    colorButton.addEventListener('click', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        colorSplash.style.backgroundColor = randomColor;
    });
});
