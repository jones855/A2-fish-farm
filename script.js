// Typing Effect
      const typingText = "A2 Fish Farm";
      const span = document.querySelector(".typing");
      let i = 0;
      setInterval(() => {
        if (i < typingText.length) {
          span.textContent += typingText[i++];
        }
      }, 150);

      // Scroll to Section
      function scrollToSection(id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }

      // Show Back to Top button
      window.onscroll = function () {
        document.getElementById("backToTop").style.display =
          window.scrollY > 200 ? "block" : "none";
      };

      // Search
      function handleSearch() {
        const input = document
          .getElementById("searchInput")
          .value.toLowerCase();
        const output = document.getElementById("searchResults");
        output.style.display = "block";

        if (input.includes("catfish")) {
          output.innerHTML =
            "<p>Searching for catfish? See <a href='#products'>Our Products</a>.</p>";
        } else if (input.includes("contact") || input.includes("whatsapp")) {
          output.innerHTML =
            "<p>Need help? Visit the <a href='#contact'>Contact section</a>.</p>";
        } else if (input.includes("about")) {
          output.innerHTML =
            "<p>Learn more in the <a href='#about'>About Us section</a>.</p>";
        } else {
          output.innerHTML =
            "<p>No match found. Try 'catfish', 'contact', or 'about'.</p>";
        }

        // Hide after 5 seconds
        setTimeout(() => {
          output.style.display = "none";
        }, 5000);
      }