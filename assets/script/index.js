projects = [
    {
        name: "SplitScan",
        desc: "In-browser, local image processing tool for dividing flat-bed scans into separate image files to make scanning sets of smaller images faster.",
        href: "https://jpaoad31.github.io/SplitScan/",
        site: "Webpage"
    },
    {
        name: "Stream DeX",
        desc: "Make $\\LaTeX$ icons for your Stream Deck. Uses MathJax and the canvas element to render mathematics into padded square images. Started as a Swift command line tool I made adding padding to and inverting png images of symbols.",
        href: "",
        site: "coming soon"
    },
    {
        name: "9-Bit CPU",
        desc: "9-bit CPU written from scratch using SystemVerilog in 4 weeks for a class project. It was inspired by the 6502 and I have written 3 different programs for it: two for creating and reading error correcting codes, one for counting bit patterns in a stream of data.",
        href: "https://github.com/jpaoad31/9-Bit_CPU",
        site: "GitHub Repo"
    },
    {
        name: "2D/3D Renderer",
        desc: "A simple 2D shape renderer and 3D rasterizer built in C++ for a class project. It uses software rendering for 2D shapes as the 3D pipeline has support for both software and OpenGL rendering.",
        href: "https://github.com/jpaoad31/2D_3D-Renderer",
        site: "GitHub Repo"
    },
    {
        name: "This Website",
        desc: "This website was made from scratch using HTML, CSS, and JS. It also includes support for MathJax $\\text{for all my math needs}$.",
        href: "https://jpaoad31.github.io/",
        site: "here"
    },
    {
        name: "Catch-up",
        desc: "A SwiftUI application for reminding you to keep in touch; built in 48 hours with a good friend of mine, <a href='https://github.com/katherinemwong'>Katherine Wong</a>, for SD Hacks. We won 1st place in Health and Wellbeing.",
        href: "https://devpost.com/software/catch-up-pzlmji",
        site: "DevPost"
    }
]


window.onload = function() {

    const container = document.getElementById("project-container")

    for (i = 0; i < projects.length; i++) {
        var art = document.createElement("article")
        art.classList.add("enclosed")
        art.innerHTML = `
            <h3>${projects[i].name}</h3>
            <p class="subtitle"><a href="${projects[i].href}">${projects[i].site}</a></p>
            <p>${projects[i].desc}</p>
        `
        container.appendChild(art)
    }

    MathJax.typeset()
}