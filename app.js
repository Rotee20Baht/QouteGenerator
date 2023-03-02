const random_btn = document.querySelector(".btn-random");
const qoute = document.getElementById("qoute");
const writer = document.getElementById("writer");
const wirter_con = document.querySelector(".qoute-writer");
const copy = document.getElementById("copy");

const qoutes = [
    {qoute: "Act as if what you do makes a difference. It does.", writer: "William James"},
    {qoute: "Believe you can and you're halfway there.", writer: "Theodore Roosevelt"},
    {qoute: "Life is like riding a bicycle. To keep your balance, you must keep moving.", writer: "Albert Einstein"},
    {qoute: "You are never too old to set another goal or to dream a new dream.", writer: "C.S. Lewis"},
    {qoute: "It is never too late to be what you might have been.", writer: "George Eliot"},
    {qoute: "Some people look for a beautiful place. Others make a place beautiful.", writer: "Hazrat Inayat Khan"},
    {qoute: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.", writer: "Joseph Campbell"},
    {qoute: "Happiness is not by chance, but by choice.", writer: " Jim Rohn"},
    {qoute: "If I cannot do great things, I can do small things in a great way.", writer: "Martin Luther King, Jr."},
    {qoute: "My mission in life is not merely to survive, but to thrive.", writer: "Maya Angelou"},
    {qoute: "You are enough just as you are.", writer: "Meghan Markle"},
    {qoute: "The bad news is time flies. The good news is you're the pilot.", writer: "Michael Altshuler"},
    {qoute: "Each of us is more than the worst thing we've ever done.", writer: "Bryan Stevenson, Just Mercy"},
]

random_btn.addEventListener("click", () => {
    random_btn.classList.add("active");
    qoute.classList.add("active");
    wirter_con.classList.add("active");
    setTimeout(()=>{
        random_btn.classList.remove("active")
        qoute.classList.remove("active")
        wirter_con.classList.remove("active")
    }, 300)
    let random = Math.floor(Math.random() * qoutes.length);
    qoute.innerText = qoutes[random].qoute
    writer.innerText = qoutes[random].writer
})

copy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(qoute.innerText);
    let text = document.querySelector("#copy span");
    text.innerText = "Copied"
    setTimeout(()=> text.innerText = "Copy", 1500);
})