// Update current year in footer
document.getElementById("year").textContent = new Date().getFullYear()

// Tabs functionality
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs__button")
  const contents = document.querySelectorAll(".tabs__content")

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and contents
      tabs.forEach((t) => t.classList.remove("active"))
      contents.forEach((c) => c.classList.remove("active"))

      // Add active class to clicked tab and corresponding content
      tab.classList.add("active")
      const contentId = tab.getAttribute("data-tab")
      document.getElementById(contentId).classList.add("active")
    })
  })
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Scroll-based animations
const observerOptions = {
  threshold: 0.1,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.classList.add("fade-out")
  observer.observe(section)
})

window.onload = () => {
  for (btn of document.getElementsByClassName('btn-discord')) {
    btn.addEventListener('click', (e) => {
      window.location.href = "https://discord.com/oauth2/authorize?client_id=1105307905214910665"
    })
  }

  for (btn of document.getElementsByClassName('btn-github')) {
    btn.addEventListener('click', (e) => {
      window.location.href = "https://github.com/victorjalonzo/InviteManager"
    })
  }
}




