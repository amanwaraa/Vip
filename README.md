<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لوحة إدارة المستخدمين</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400..800&family=Lalezar&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: 'Baloo Bhaijaan 2', 'Lalezar', Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
            direction: rtl;
            text-align: right;
        }
        input, button, select {
            display: block;
            margin: 10px 0;
            padding: 10px;
            width: calc(100% - 20px);
            border: 1px solid #ccc;
            border-radius: 4px;
            font-family: 'Baloo Bhaijaan 2', 'Lalezar', Arial, sans-serif;
        }
        button {
            background-color: #007bff;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-size: 16px;
        }
        button:hover {
            background-color: #0056b3;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: right;
            font-size: 14px;
        }
        th {
            background-color: #f4f4f4;
        }
        .success-message {
            margin-top: 5px;
            color: green;
            font-size: 14px;
            font-weight: bold;
        }
        .error-message {
            margin-top: 5px;
            color: red;
            font-size: 14px;
            font-weight: bold;
        }
        .actions-container {
            margin: 10px 0;
        }
        .duration-container {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .duration-container input, .duration-container select {
            flex: 1;
        }
        .user-count, .active-user-count {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            color: white;
        }
        .user-count {
            background-color: #ff9800;
        }
        .active-user-count {
            background-color: #4caf50;
        }
        .user-count h2, .active-user-count h2 {
            margin: 0;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            flex-direction: row-reverse;
        }
        .user-count p, .active-user-count p {
            margin: 10px 0 0;
            font-size: 32px;
            font-weight: bold;
        }
    </style>
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
        import { getDatabase, ref, set, onValue, get, remove } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCnLAY7zQyBy7gUuL9wszt9aEhiJgvRmxI",
            authDomain: "shop-d52dc.firebaseapp.com",
            databaseURL: "https://shop-d52dc-default-rtdb.firebaseio.com",
            projectId: "shop-d52dc",
            storageBucket: "shop-d52dc.appspot.com",
            messagingSenderId: "97580537866",
            appId: "1:97580537866:web:41f90905df6438a400a7f3",
            measurementId: "G-96MYZ847JD"
        };

        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

        window.addUser = function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const durationValue = document.getElementById('durationValue').value;
            const durationType = document.getElementById('durationType').value;

            if (!username || !durationValue || !durationType) {
                displayMessage('يرجى ملء جميع الحقول.', 'error');
                return;
            }

            const usersRef = ref(database, 'users');
            get(usersRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const users = snapshot.val();
                    const isTaken = Object.values(users).some(user => user.username === username);

                    if (isTaken) {
                        displayMessage('اسم المستخدم موجود بالفعل. يرجى اختيار اسم آخر.', 'error');
                    } else {
                        saveUser(username, durationValue, durationType);
                    }
                } else {
                    saveUser(username, durationValue, durationType);
                }
            }).catch((error) => {
                displayMessage('حدث خطأ أثناء التحقق: ' + error.message, 'error');
            });
        };

        function saveUser(username, durationValue, durationType) {
            const today = new Date();
            let expiryDate = new Date(today);

            if (durationType === 'minutes') {
                expiryDate.setMinutes(today.getMinutes() + parseInt(durationValue));
            } else if (durationType === 'hours') {
                expiryDate.setHours(today.getHours() + parseInt(durationValue));
            } else if (durationType === 'days') {
                expiryDate.setDate(today.getDate() + parseInt(durationValue));
            } else if (durationType === 'months') {
                expiryDate.setMonth(today.getMonth() + parseInt(durationValue));
            } else if (durationType === 'years') {
                expiryDate.setFullYear(today.getFullYear() + parseInt(durationValue));
            }

            const userId = Date.now().toString();
            set(ref(database, 'users/' + userId), {
                username: username,
                expiryDate: expiryDate.toISOString(),
                creationDate: today.toISOString()
            }).then(() => {
                displayMessage('تم إنشاء المستخدم بنجاح!', 'success');
                document.getElementById('userForm').reset();
                loadUsers();
            }).catch((error) => {
                displayMessage('حدث خطأ: ' + error.message, 'error');
            });
        }

        function loadUsers() {
            const usersRef = ref(database, 'users');
            onValue(usersRef, (snapshot) => {
                const userTableBody = document.getElementById('userTableBody');
                userTableBody.innerHTML = '';
                const users = snapshot.val();
                let userCount = 0;
                let activeCount = 0;

                if (users) {
                    userCount = Object.keys(users).length;
                    activeCount = Object.values(users).filter(user => new Date(user.expiryDate) > new Date()).length;

                    Object.keys(users).forEach((userId) => {
                        const user = users[userId];
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${user.username}</td>
                            <td>${new Date(user.expiryDate).toLocaleString()}</td>
                            <td><button onclick="deleteUser('${userId}')">حذف</button></td>
                        `;
                        userTableBody.appendChild(row);
                    });
                }
                document.getElementById('userCount').textContent = userCount;
                document.getElementById('activeUserCount').textContent = activeCount;
            });
        }

        window.deleteUser = function(userId) {
            remove(ref(database, 'users/' + userId)).then(() => {
                displayMessage('تم حذف المستخدم بنجاح!', 'success');
                loadUsers();
            }).catch((error) => {
                displayMessage('حدث خطأ أثناء الحذف: ' + error.message, 'error');
            });
        };

        function displayMessage(message, type) {
            const messageDiv = document.getElementById('message');
            messageDiv.textContent = message;
            messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
        }

        loadUsers();
    </script>
</head>
<body>
    <h1>لوحة إدارة المستخدمين</h1>

    <div class="user-count">
        <h2>
            <i class="fa fa-users" aria-hidden="true"></i> عدد المستخدمين الكلي
        </h2>
        <p id="userCount">0</p>
    </div>

    <div class="active-user-count">
        <h2>
            <i class="fa fa-user" aria-hidden="true"></i> عدد المستخدمين النشطين
        </h2>
        <p id="activeUserCount">0</p>
    </div>
    
    <!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إحصائيات عدد المستخدمين لهذا الشهر</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
        import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCnLAY7zQyBy7gUuL9wszt9aEhiJgvRmxI",
            authDomain: "shop-d52dc.firebaseapp.com",
            databaseURL: "https://shop-d52dc-default-rtdb.firebaseio.com",
            projectId: "shop-d52dc",
            storageBucket: "shop-d52dc.appspot.com",
            messagingSenderId: "97580537866",
            appId: "1:97580537866:web:41f90905df6438a400a7f3",
            measurementId: "G-96MYZ847JD"
        };

        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

        // تحميل بيانات المستخدمين وعرضها في الرسم البياني
        function loadUserStatistics() {
            const usersRef = ref(database, 'users');
            const userCounts = Array(31).fill(0); // مصفوفة لـ 31 يومًا (شهر كامل)

            onValue(usersRef, (snapshot) => {
                const users = snapshot.val();
                const currentDate = new Date();
                const currentMonth = currentDate.getMonth(); // الشهر الحالي
                const currentYear = currentDate.getFullYear(); // السنة الحالية

                if (users) {
                    Object.values(users).forEach((user) => {
                        const creationDate = new Date(user.creationDate || user.expiryDate);
                        const userMonth = creationDate.getMonth();
                        const userYear = creationDate.getFullYear();
                        const userDay = creationDate.getDate(); // استخراج اليوم

                        // إذا كان المستخدم تم إضافته في نفس الشهر والسنة
                        if (userMonth === currentMonth && userYear === currentYear) {
                            userCounts[userDay - 1] += 1; // إضافة المستخدم في اليوم المناسب
                        }
                    });

                    renderChart(userCounts);
                }
            });
        }

        // رسم الرسم البياني
        function renderChart(userCounts) {
            const ctx = document.getElementById('userChart').getContext('2d');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: Array.from({ length: 31 }, (_, i) => `${i + 1}`), // الأرقام تبدأ من 1 إلى 31
                    datasets: [{
                        data: userCounts,
                        borderColor: 'black', // لون الخط أسود
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        pointRadius: (ctx, index) => (index === userCounts.length - 1 ? 6 : 0), // نقطة حمراء فقط في النهاية
                        pointBackgroundColor: (ctx, index) => (index === userCounts.length - 1 ? 'red' : 'transparent'),
                        tension: 0.4 // لجعل الخط منحني قليلاً
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false // إخفاء المربع وكلمة "عدد المستخدمين"
                        },
                        title: {
                            display: true, // إظهار العنوان الكبير
                            text: 'إحصائيات عدد المستخدمين خلال هذا الشهر',
                            font: {
                                size: 18,
                                family: 'Baloo Bhaijaan 2, Lalezar, Arial, sans-serif' // الخط المستخدم هنا
                            },
                            padding: {
                                top: 10,
                                bottom: 20
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                callback: (value) => `${value}`, // الأرقام فقط
                                maxRotation: 0, // جعل الأرقام مستقيمة
                                minRotation: 0
                            }
                        },
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
        }

        // تحميل البيانات عند تشغيل الصفحة
        window.onload = loadUserStatistics;
    </script>

    <!-- إضافة رابط الخطوط -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400..800&family=Lalezar&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Baloo Bhaijaan 2', 'Lalezar', Arial, sans-serif; /* تحديث الخط هنا */
            direction: rtl;
            text-align: center;
            margin: 20px;
        }
        canvas {
            max-width: 100%;
            margin: 20px auto;
        }
    </style>
</head>
<body>
    <canvas id="userChart" width="400" height="200"></canvas>
</body>
</html>

    <form id="userForm">
        <input type="text" id="username" placeholder="اسم المستخدم" required>
        <div style="display: flex; gap: 10px;">
            <input type="number" id="durationValue" placeholder="المدة" min="1" required style="flex: 1;">
            <select id="durationType" required style="flex: 1;">
                <option value="" disabled selected>اختر المدة</option>
                <option value="minutes">دقيقة</option>
                <option value="hours">ساعة</option>
                <option value="days">يوم</option>
                <option value="months">شهر</option>
                <option value="years">سنة</option>
            </select>
        </div>
    </form>

    <div class="actions-container">
        <button onclick="addUser(event)">
            إضافة مستخدم +
        </button>
    </div>

    <div id="message"></div>

    <table>
        <thead>
            <tr>
                <th>اسم المستخدم</th>
                <th>تاريخ الانتهاء</th>
                <th>الإجراءات</th>
            </tr>
        </thead>
        <tbody id="userTableBody"></tbody>
    </table>
</body>
</html>
