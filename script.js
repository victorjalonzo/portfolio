document.addEventListener("DOMContentLoaded", () => {

  if (typeof particlesJS === "undefined") {
    window.particlesJS = (tagId, config) => {
      console.log("particlesJS placeholder:", tagId, config)
    }
  }

  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#00ffd5",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00ffd5",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
      },
      retina_detect: true,
    })
  } else {
    console.warn("particlesJS is not defined. Make sure the particles.js library is included.")
  }

  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px"
      cursorFollower.style.top = e.clientY + "px"
    }, 100)
  })

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "scale(0.7)"
    cursorFollower.style.transform = "scale(0.7)"
  })

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "scale(1)"
    cursorFollower.style.transform = "scale(1)"
  })

  const typingElement = document.querySelector(".typing")
  const phrases = [
    "Web Developer",
    "MERN Stack Developer",
    "MEAN Stack Developer",
    "LAMP Stack Developer",
    "Bot Developer",
  ]
  let phraseIndex = 0
  let charIndex = 0
  let isDeleting = false

  function type() {
    const currentPhrase = phrases[phraseIndex]

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1)
      charIndex--
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1)
      charIndex++
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true
      setTimeout(type, 2000)
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
      setTimeout(type, 500)
    } else {
      setTimeout(type, isDeleting ? 50 : 100)
    }
  }

  type()


  if (typeof VanillaTilt === "undefined") {
    window.VanillaTilt = {
      init: (elements, options) => {
        console.log("VanillaTilt placeholder:", elements, options)
      },
    }
  }

  if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    })
  } else {
    console.warn("VanillaTilt is not defined.")
  }

  const observeElements = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("fade-in")
      observer.observe(section)
    })
  }

  observeElements()
})


