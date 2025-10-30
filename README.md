🍽️ Nearby Restaurant Finder App
🌍 Overview
The Restaurant Finder App helps users quickly locate nearby restaurants using real-time geolocation.
It shows the distance from the user’s current location to each restaurant and includes a simple mobile OTP login system with toast notifications.
🧩 Features
✅ Login via Mobile Number
Enter a 10-digit mobile number.
Automatically shows OTP (123456) via a toast message.
Full-screen layout on desktop and compact on mobile.
✅ OTP Verification
Enter the demo OTP 123456 to log in.
Displays toast messages for errors and success.
✅ Geolocation Access
Automatically detects user’s live location.
Displays restaurants sorted by nearest distance.
✅ Distance Display
Each restaurant card shows the distance in kilometers from the user.
✅ Real Images
Each restaurant has a real representative image.
✅ Responsive Design
Mobile-friendly layout.
Full-screen login on desktop devices.
⚙️ Tech Stack
Layer	Technology
Frontend	React + Vite
Styling	Tailwind CSS
Location Services	Browser Geolocation API
UI Components	React Hooks + Responsive Layouts
Notifications	React Toastify
🚀 Installation & Setup
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/restaurant-finder.git

# 2️⃣ Navigate into the project
cd restaurant-finder

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run the app
npm run dev
📱 Usage
Login Page
Enter your 10-digit mobile number.
You’ll get a toast message: Top 123456.
Enter the OTP 123456 to log in.
Location Access
Allow browser location permission.
App automatically detects your position.
Restaurant List
View all restaurants sorted by nearest distance.
Each card shows:
Restaurant Name
Address
Distance (km)
Real Image
🔒 Permissions Required
Location Access — To calculate and display nearby restaurants.
(The app won’t store or share your location.)
💡 Future Enhancements
🔍 Add search by restaurant name or cuisine
⭐ Add user ratings and reviews
🗺️ Integrate with Google Maps for directions
📸 Allow users to upload restaurant images
🧑‍💻 Developer
👤 Shivam Thakur
Frontend Developer
📧 shivamthakur9632@gmail.com
🪪 License
This project is open source and available under the MIT License