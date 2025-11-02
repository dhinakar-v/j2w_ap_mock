// Navigation
document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    const pageId = button.dataset.page

    // Remove active from all nav items
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active")
    })

    // Add active to clicked nav item
    button.classList.add("active")

    // Hide all pages
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.remove("active")
    })

    // Show selected page
    document.getElementById(pageId).classList.add("active")
  })
})

// Knowledge Base Tabs
document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.dataset.tab + "-content"

    // Remove active from all tabs
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.remove("active")
    })

    // Add active to clicked tab
    button.classList.add("active")

    // Hide all tab content
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active")
    })

    // Show selected tab content
    document.getElementById(tabId).classList.add("active")
  })
})

// Chat functionality
document.querySelectorAll(".send-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling
    const messageText = input.value.trim()

    if (messageText) {
      const chatMessages = input.parentElement.previousElementSibling

      // Add user message
      const userMessage = document.createElement("div")
      userMessage.className = "message user"
      userMessage.innerHTML = `<div class="message-content">${messageText}</div>`
      chatMessages.appendChild(userMessage)

      // Simulate bot response
      setTimeout(() => {
        const botMessage = document.createElement("div")
        botMessage.className = "message bot"
        botMessage.innerHTML = `<div class="message-content">I've processed your request and updated the configuration accordingly.</div>`
        chatMessages.appendChild(botMessage)
        chatMessages.scrollTop = chatMessages.scrollHeight
      }, 500)

      input.value = ""
      chatMessages.scrollTop = chatMessages.scrollHeight
    }
  })
})

// Run test button
document.querySelector(".run-test-btn")?.addEventListener("click", () => {
  const input = document.querySelector(".test-panel textarea").value
  if (input.trim()) {
    alert("Test executed successfully! Check the Results panel.")
  }
})

// Tool configuration buttons
document.querySelectorAll(".tool-card .btn-secondary").forEach((button) => {
  button.addEventListener("click", () => {
    const toolName = button.closest(".tool-card").querySelector(".tool-name").textContent
    alert(`Configure ${toolName} tool`)
  })
})

// Account menu dropdown toggle functionality
document.querySelector(".account-btn")?.addEventListener("click", () => {
  const menu = document.querySelector(".dropdown-menu")
  menu.classList.toggle("active")
})

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  const accountWrapper = document.querySelector(".account-menu-wrapper")
  if (accountWrapper && !accountWrapper.contains(e.target)) {
    document.querySelector(".dropdown-menu")?.classList.remove("active")
  }
})

// Logout functionality
document.querySelector(".menu-item.logout")?.addEventListener("click", () => {
  if (confirm("Are you sure you want to logout?")) {
    alert("Logged out successfully!")
    // Redirect to login page or perform logout action
  }
})
