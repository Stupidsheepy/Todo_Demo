export default function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#'; for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if (color === '#FFFFFF') // if white return black
        return "#000000";
    return color;
}