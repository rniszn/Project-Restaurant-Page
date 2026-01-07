const heading = document.createElement("h1");
heading.classList.add("heading");
heading.textContent = "welcome to rniszn's Restaurant";

const para = document.createElement("p");
para.classList.add("description");
para.textContent = "At rniszn's Restaurant, we believe dining is an art form. Nestled in the heart of New York, our kitchen celebrates the harmony of seasonal ingredients and elevated techniques. From the first pour of a vintage label to the final bite of our signature Hyderabadi Biryani, every detail is curated to create an unforgettable evening of elegance and flavor";

const content = document.querySelector("#content");

export { heading, para,content }