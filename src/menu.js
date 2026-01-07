 export function menu(){
    const container = document.createElement("div");
    container.classList.add("container")
    const descrip = document.createElement("div");
    descrip.classList.add("biryani1", "box");
    descrip.innerHTML = `<h4>The "Wild Mushroom & Truffle" Dum Biryani</h4>
          A forest-to-table take on the royal classic.
          <br>
          The Dish: Fragrant, long-grain Basmati rice layered with a mix of wild foraged mushrooms (Shiitake, Oyster, and Porcini) instead of the usual meat or veggies.
          <br>
          The "Rniszn" Touch: The pot is sealed with a sourdough crust (very Brooklyn!) to trap the steam. When cracked open at the table, a drizzle of white truffle oil is added for a deep, earthy aroma that fills the room.`;
    const timings = document.createElement("div");
    timings.classList.add("dosa", "box");
    timings.innerHTML = `<h4>The "Short Rib & Gruyère" Craft Dosa</h4>
          A French-American twist on South Indian street food.
          <br>
          The Dish: A massive, paper-thin, ultra-crispy fermented rice and lentil crepe.
          <br>
          The "Rniszn" Touch: Instead of the standard potato masala, this dosa is stuffed with 12-hour braised beef short rib (shredded) and melted Gruyère cheese.`;
    const location = document.createElement("div");
    location.classList.add("biryani2", "box");
    location.innerHTML = `<h4>The Nizami "Rniszn" Hyderabadi Biryani</h4>
          The Gold Standard of Indian Rice Craft.
          <br>
          "A legendary masterpiece born in the royal kitchens of the Nizams, brought to the streets of New York. Our Hyderabadi Biryani is a labor of patience, featuring prime cuts of [Lamb/Goat/Chicken] marinated overnight in a proprietary blend of 21 spices, layered with aged, long-grain Basmati rice.`;
    container.appendChild(descrip);
    container.appendChild(timings);
    container.appendChild(location);
    const main = document.querySelector(".main");
    main.appendChild(container);      
}
