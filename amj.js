// Sample data for demonstration purposes
const allData = [
    {
        category: "design",
        url: './img/1.jpg'
    },
    {
        category: "design",
        url: './img/2.jpg'
    },
    {
        category: "graphic",
        url: './img/3.jpg'
    },
    {
        category: "graphic",
        url: './img/4.jpg'
    },
    {
        category: "brand",
        url: './img/5.jpg'
    },
    // Add more data as needed
];

// Function to display data based on category
function displayData(category) {
    const filteredData = category === "all" ? allData : allData.filter(item => item.category === category);
    const dataDisplay = document.getElementById("dataDisplay");
    dataDisplay.innerHTML = ""; // Clear previous data

    filteredData.forEach(item => {

        const itemElement = document.createElement("div");

        if (item.url === './img/4.jpg') {
            if (category === "all") {
                itemElement.classList.add('col-lg-8', 'col-md-12','mt');
                itemElement.innerHTML = ` <div class=".works item-img">
            <img src=${item.url} alt="">
            <div class="item-img-overlay valign">
                <div class="full-width">
                    <a href="">
                        <p>Logo & Branding</p>
                        <h6>Crearive Design</h6>
                    </a>
                </div>
            </div>
        </div>`
            }
            else {
                itemElement.classList.add('col-lg-8', 'col-md-12');
                itemElement.innerHTML = ` <div class=".works item-img">
                <img src=${item.url} alt="">
                <div class="item-img-overlay valign">
                    <div class="full-width">
                        <a href="">
                            <p>Logo & Branding</p>
                            <h6>Crearive Design</h6>
                        </a>
                    </div>
                </div>
            </div>`
            }
        }
        else {
            itemElement.classList.add('col-lg-4', 'col-md-6');
            itemElement.innerHTML = ` <div class=".works item-img">
            <img src=${item.url} alt="">
            <div class="item-img-overlay valign">
                <div class="full-width">
                    <a href="">
                        <p>Logo & Branding</p>
                        <h6>Crearive Design</h6>
                    </a>
                </div>
            </div>
        </div>`
        }

        dataDisplay.appendChild(itemElement);
    });
}


displayData("all");

// Event listeners for button clicks
document.getElementById("allBtn").addEventListener("click", () => {
    displayData("all");
});

document.getElementById("brandBtn").addEventListener("click", () => {
    displayData("brand");
});

document.getElementById("designBtn").addEventListener("click", () => {
    displayData("design");
});

document.getElementById("graphicBtn").addEventListener("click", () => {
    displayData("graphic");
});
