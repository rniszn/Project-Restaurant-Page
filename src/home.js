 export function home(){
    const container = document.createElement("div");
    container.classList.add("container")
    const descrip = document.createElement("div");
    descrip.classList.add("descrip", "box");
    descrip.textContent = `"Indian flavors, New York energy. Rniszn’s Restaurant is redefining the curry house for a new generation. We’ve brought the bold, unapologetic heat of Indian street food to a sleek, industrial-chic space in NYC. Whether it’s our small-plate 'tapas' style starters or our signature slow-cooked classics, Rniszn’s is where spice meets style. Come for the butter chicken, stay for the vibe."`;
    const timings = document.createElement("div");
    timings.classList.add("timings", "box");
    timings.textContent = `Mon to Thu 11:00 AM – 2:30 PM, 5:00 PM – 9:00 PM
          <br>
          Friday 11:00 AM – 10:00 PM (Open all day) 
          <br>
          Saturday 10:00 AM – 10:00 PM 
          <br>
          Sunday 10:00 AM – 8:00 PM`;
    const location = document.createElement("div");
    location.classList.add("location", "box");
    location.textContent = ` The Location: 214 North 6th Street, Williamsburg, Brooklyn`;
    container.appendChild(descrip);
    container.appendChild(timings);
    container.appendChild(location);
    const main = document.querySelector(".main");
    main.appendChild(container);      
}
