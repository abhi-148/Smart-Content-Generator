document.getElementById("content-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user inputs
    const theme = document.getElementById("theme").value;
    const tone = document.getElementById("tone").value;

    // Content database
    const contentDatabase = {
        Business: {
            Professional: "Welcome to our professional business platform. We provide solutions tailored to your corporate needs.",
            Casual: "Hey there! Ready to take your business to the next level? We've got your back!",
            Creative: "Step into a world where business meets creativity. Let’s make magic happen!"
        },
        Portfolio: {
            Professional: "Showcase your expertise with our clean and structured portfolio layout.",
            Casual: "Your portfolio, your vibe. Let’s make it uniquely YOU!",
            Creative: "Unleash your creativity with a portfolio that speaks volumes about your talents."
        },
        commerce: {
            Professional: "Discover the ultimate shopping experience with our streamlined platform.",
            Casual: "Shop till you drop! We've got everything you need right here.",
            Creative: "Transform your shopping journey into an adventure with our imaginative store."
        }
    };

    // Generate content
    const generatedContent = contentDatabase[theme][tone];

    // Display output
    const outputArea = document.getElementById("content-area");
    outputArea.innerHTML = `<p>${generatedContent}</p>`;
    document.getElementById("output").style.display = "block";
});