<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brew Haven - 3D Coffee Shop</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">☕ Brew Haven</div>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#menu" class="nav-link">Menu</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section with 3D Canvas -->
    <section id="home" class="hero">
        <div id="canvas-container"></div>
        <div class="hero-content">
            <h1 class="hero-title">Welcome to Brew Haven</h1>
            <p class="hero-subtitle">Experience Coffee Like Never Before</p>
            <button class="cta-button">Explore Now</button>
        </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="menu-section">
        <div class="section-title">Our Menu</div>
        <div class="menu-grid">
            <div class="menu-item">
                <div class="menu-icon">☕</div>
                <h3>Espresso</h3>
                <p>Rich, bold, and pure coffee experience</p>
                <span class="price">$2.50</span>
            </div>
            <div class="menu-item">
                <div class="menu-icon">🥛</div>
                <h3>Cappuccino</h3>
                <p>Smooth blend of espresso and steamed milk</p>
                <span class="price">$4.00</span>
            </div>
            <div class="menu-item">
                <div class="menu-icon">🎂</div>
                <h3>Latte</h3>
                <p>Creamy, smooth, and perfectly balanced</p>
                <span class="price">$4.50</span>
            </div>
            <div class="menu-item">
                <div class="menu-icon">🍫</div>
                <h3>Mocha</h3>
                <p>Coffee meets chocolate bliss</p>
                <span class="price">$5.00</span>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="about-content">
            <h2>About Brew Haven</h2>
            <p>We're passionate about coffee. Every cup is crafted with precision, using only the finest beans sourced from sustainable farms around the world.</p>
            <div class="features">
                <div class="feature">
                    <span class="feature-icon">🌍</span>
                    <h3>Sustainably Sourced</h3>
                </div>
                <div class="feature">
                    <span class="feature-icon">👨‍🍳</span>
                    <h3>Expert Baristas</h3>
                </div>
                <div class="feature">
                    <span class="feature-icon">✨</span>
                    <h3>Premium Quality</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <h2>Get in Touch</h2>
        <div class="contact-content">
            <div class="contact-info">
                <div class="info-item">
                    <h3>📍 Location</h3>
                    <p>123 Coffee Lane, Downtown, City 12345</p>
                </div>
                <div class="info-item">
                    <h3>📞 Phone</h3>
                    <p>+1 (555) 123-4567</p>
                </div>
                <div class="info-item">
                    <h3>⏰ Hours</h3>
                    <p>Mon-Fri: 7AM - 8PM<br>Sat-Sun: 8AM - 9PM</p>
                </div>
            </div>
            <form class="contact-form">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2024 Brew Haven. All rights reserved. ☕</p>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
