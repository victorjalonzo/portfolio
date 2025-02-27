window.onload = () => {
  document.getElementById("year").textContent = new Date().getFullYear()

  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs__button")
    const contents = document.querySelectorAll(".tabs__content")

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"))
        contents.forEach((c) => c.classList.remove("active"))

        tab.classList.add("active")
        const contentId = tab.getAttribute("data-tab")
        document.getElementById(contentId).classList.add("active")
      })
    })
  })

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

  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("fade-out")
    observer.observe(section)
  })

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




