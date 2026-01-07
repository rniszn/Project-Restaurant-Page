 export function about(){
    const container = document.createElement("div");
    container.classList.add("container")
    const descrip = document.createElement("div");
    descrip.classList.add("contact1", "box");
    descrip.innerHTML = `<h4>Owner</h4>
          Contact : 555-555-555
          Address: 328 East 9th Street, New York, NY 10003`;
    const timings = document.createElement("div");
    timings.classList.add("contact2", "box");
    timings.innerHTML = `<h4>Bar tendor</h4>
          Contact : 555-555-555
          Address: 328 East 9th Street, New York, NY 10003`;
    const location = document.createElement("div");
    location.classList.add("contact3", "box");
    location.innerHTML = `<h4>Waiter</h4>
          Contact : 555-555-555
          Address: 328 East 9th Street, New York, NY 10003`;
    container.appendChild(descrip);
    container.appendChild(timings);
    container.appendChild(location);
    const main = document.querySelector(".main");
    main.appendChild(container);      
}
