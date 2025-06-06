// 應用程式狀態
let appState = {
    currentLocation: null,
    selectedLandmark: null,
    selectedCuisines: [],
    selectedDistance: null,
    filteredRestaurants: [],
    currentRestaurant: null
};

// 應用程式資料
const appData = {
    landmarks: [
        {"name": "宜蘭大學", "area": "yilan", "keywords": ["宜大", "宜蘭大學", "校舍路"]},
        {"name": "宜蘭火車站", "area": "yilan", "keywords": ["火車站", "宜蘭車站", "光復路"]},
        {"name": "羅東夜市", "area": "luodong", "keywords": ["羅東夜市", "中山公園", "興東路"]},
        {"name": "羅東運動公園", "area": "luodong", "keywords": ["運動公園", "羅東運動公園", "公正路"]},
        {"name": "礁溪溫泉", "area": "yilan", "keywords": ["礁溪", "溫泉", "中山路"]},
        {"name": "蘭陽女中", "area": "yilan", "keywords": ["蘭女", "蘭陽女中", "女中路"]},
        {"name": "羅東高中", "area": "luodong", "keywords": ["羅高", "羅東高中", "公正路"]},
        {"name": "宜蘭運動公園", "area": "yilan", "keywords": ["宜蘭運動公園", "中山路"]},
        {"name": "羅東文化工場", "area": "luodong", "keywords": ["文化工場", "純精路"]},
        {"name": "宜蘭文化中心", "area": "yilan", "keywords": ["文化中心", "復興路"]}
    ],
    restaurants: [
        {"id": 1, "name": "龍記牛肉麵", "type": "中式", "area": "yilan", "rating": 4.8, "address": "宜蘭市光復路108號", "phone": "03-932-1068", "hours": "11:00-14:00, 17:00-20:00", "price": "$$", "specialty": "藥膳牛肉麵", "landmark": "宜蘭火車站"},
        {"id": 2, "name": "阿娘給的蒜味肉羹", "type": "中式", "area": "yilan", "rating": 4.5, "address": "宜蘭市泰山路25-1號", "phone": "03-935-6799", "hours": "09:00-20:00", "price": "$", "specialty": "蒜味肉羹", "landmark": "宜蘭大學"},
        {"id": 3, "name": "火生餛飩麵店", "type": "中式", "area": "yilan", "rating": 4.6, "address": "宜蘭市農權路101號", "phone": "03-928-8998", "hours": "06:30-14:00", "price": "$", "specialty": "古早味餛飩麵", "landmark": "宜蘭大學"},
        {"id": 4, "name": "菊丹料理亭", "type": "日式", "area": "yilan", "rating": 4.8, "address": "宜蘭市農權路136號", "phone": "03-925-6328", "hours": "11:30-14:00, 17:30-21:00", "price": "$$$", "specialty": "日式定食", "landmark": "宜蘭大學"},
        {"id": 5, "name": "復興鵝肉", "type": "中式", "area": "yilan", "rating": 4.4, "address": "宜蘭市復興路三段129號", "phone": "03-938-7665", "hours": "16:00-01:00", "price": "$$", "specialty": "白切鵝肉", "landmark": "宜蘭大學"},
        {"id": 6, "name": "林場肉羹", "type": "中式", "area": "luodong", "rating": 4.5, "address": "羅東鎮中正北路109號", "phone": "03-955-2736", "hours": "07:00-17:30", "price": "$", "specialty": "古早味肉羹", "landmark": "羅東夜市"},
        {"id": 7, "name": "阿灶伯當歸羊肉湯", "type": "中式", "area": "luodong", "rating": 4.3, "address": "羅東鎮中山路三段208號", "phone": "03-954-7736", "hours": "16:00-01:00", "price": "$", "specialty": "當歸羊肉湯", "landmark": "羅東夜市"},
        {"id": 8, "name": "義豐蔥油派", "type": "中式", "area": "luodong", "rating": 4.4, "address": "羅東鎮民生路130號", "phone": "03-956-1234", "hours": "13:00-21:00", "price": "$", "specialty": "三星蔥蔥油餅", "landmark": "羅東夜市"},
        {"id": 9, "name": "魏姐包心粉圓", "type": "甜點", "area": "luodong", "rating": 4.2, "address": "羅東鎮興東路6號", "phone": "03-956-5678", "hours": "14:00-23:00", "price": "$", "specialty": "包心粉圓冰", "landmark": "羅東夜市"},
        {"id": 10, "name": "富美海鮮火鍋", "type": "火鍋", "area": "luodong", "rating": 4.2, "address": "羅東鎮公正路186號", "phone": "03-956-7799", "hours": "11:00-13:00, 17:00-19:30", "price": "$$", "specialty": "海鮮火鍋", "landmark": "羅東運動公園"},
        {"id": 11, "name": "楊胖子蔥油餅", "type": "中式", "area": "yilan", "rating": 4.7, "address": "宜蘭市農權路123號", "phone": "03-928-7766", "hours": "14:00-18:00", "price": "$", "specialty": "韭菜盒", "landmark": "宜蘭大學"},
        {"id": 12, "name": "涼心冰店", "type": "甜點", "area": "yilan", "rating": 4.3, "address": "宜蘭市神農路二段38號", "phone": "03-932-5577", "hours": "11:00-22:00", "price": "$", "specialty": "古早味剉冰", "landmark": "宜蘭大學"},
        {"id": 13, "name": "張秀雄米苔目", "type": "中式", "area": "luodong", "rating": 4.2, "address": "羅東鎮天津路5-9號", "phone": "03-954-7533", "hours": "06:00-13:00", "price": "$", "specialty": "米苔目", "landmark": "羅東夜市"},
        {"id": 14, "name": "六號糧倉精緻鍋物", "type": "火鍋", "area": "luodong", "rating": 4.5, "address": "羅東鎮倉前路14號", "phone": "03-955-0799", "hours": "11:30-22:00", "price": "$$", "specialty": "精緻火鍋", "landmark": "羅東文化工場"},
        {"id": 15, "name": "來來牛排館", "type": "西式", "area": "yilan", "rating": 4.1, "address": "宜蘭市中山路二段167號", "phone": "03-932-4455", "hours": "11:00-14:00, 17:00-21:00", "price": "$$", "specialty": "牛排套餐", "landmark": "宜蘭火車站"},
        {"id": 16, "name": "美大叔咖哩", "type": "日式", "area": "luodong", "rating": 4.6, "address": "羅東鎮中山路一段234號", "phone": "03-956-8899", "hours": "11:30-14:00, 17:00-19:30", "price": "$$", "specialty": "日式咖哩", "landmark": "羅東夜市"},
        {"id": 17, "name": "玉仁八寶冬粉", "type": "中式", "area": "yilan", "rating": 4.3, "address": "宜蘭市中山路三段130號", "phone": "03-935-7788", "hours": "11:00-20:00", "price": "$", "specialty": "八寶冬粉", "landmark": "宜蘭運動公園"},
        {"id": 18, "name": "財記臭豆腐", "type": "中式", "area": "luodong", "rating": 4.4, "address": "羅東鎮民生路78號", "phone": "03-955-6677", "hours": "15:00-23:00", "price": "$", "specialty": "起司堡臭豆腐", "landmark": "羅東夜市"},
        {"id": 19, "name": "鹿野苑蔬食", "type": "素食", "area": "yilan", "rating": 4.2, "address": "宜蘭市神農路二段67號", "phone": "03-932-1122", "hours": "11:00-14:00, 17:00-20:00", "price": "$$", "specialty": "蔬食料理", "landmark": "宜蘭大學"},
        {"id": 20, "name": "散步咖啡", "type": "甜點", "area": "yilan", "rating": 4.5, "address": "宜蘭市中山路二段45號", "phone": "03-935-9988", "hours": "09:00-18:00", "price": "$$", "specialty": "手沖咖啡", "landmark": "宜蘭文化中心"}
    ],
    cuisineTypes: [
        {"id": "chinese", "name": "中式", "icon": "🍜"},
        {"id": "western", "name": "西式", "icon": "🍔"},
        {"id": "japanese", "name": "日式", "icon": "🍣"},
        {"id": "korean", "name": "韓式", "icon": "🍲"},
        {"id": "hotpot", "name": "火鍋", "icon": "🔥"},
        {"id": "dessert", "name": "甜點", "icon": "🍰"}
    ],
    distanceOptions: [
        {"id": "walk", "name": "步行範圍", "desc": "500公尺內", "icon": "🚶"},
        {"id": "bike", "name": "騎車可達", "desc": "2公里內", "icon": "🚴"},
        {"id": "drive", "name": "開車前往", "desc": "5公里內", "icon": "🚗"},
        {"id": "unlimited", "name": "不限距離", "desc": "全區搜尋", "icon": "🌏"}
    ]
};

// 頁面初始化
document.addEventListener('DOMContentLoaded', function() {
    // 渲染地標按鈕
    renderLandmarks();

    // 渲染料理類型選項
    renderCuisineTypes();

    // 渲染距離選項
    renderDistanceOptions();
});

// 顯示指定頁面
function showPage(pageId) {
    // 隱藏所有頁面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.classList.remove('prev');
    });

    // 顯示指定頁面
    document.getElementById(pageId).classList.add('active');
}

// 渲染地標按鈕
function renderLandmarks() {
    const landmarksGrid = document.getElementById('landmarks-grid');
    landmarksGrid.innerHTML = '';

    // 建立六個熱門地標按鈕
    const popularLandmarks = appData.landmarks.slice(0, 6);

    popularLandmarks.forEach(landmark => {
        const landmarkBtn = document.createElement('div');
        landmarkBtn.className = 'landmark-btn';
        landmarkBtn.textContent = landmark.name;
        landmarkBtn.addEventListener('click', function() {
            document.getElementById('location-input').value = landmark.name;
            document.querySelectorAll('.landmark-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            landmarkBtn.classList.add('selected');
            appState.selectedLandmark = landmark;
        });

        landmarksGrid.appendChild(landmarkBtn);
    });
}

// 渲染料理類型選項
function renderCuisineTypes() {
    const cuisineGrid = document.getElementById('cuisine-grid');
    cuisineGrid.innerHTML = '';

    appData.cuisineTypes.forEach(cuisine => {
        const cuisineCard = document.createElement('div');
        cuisineCard.className = 'cuisine-card';
        cuisineCard.setAttribute('data-id', cuisine.id);
        cuisineCard.innerHTML = `
            <div class="cuisine-icon">${cuisine.icon}</div>
            <div class="cuisine-name">${cuisine.name}</div>
        `;

        // 添加點擊事件
        cuisineCard.addEventListener('click', function() {
            this.classList.toggle('selected');

            const cuisineId = this.getAttribute('data-id');
            const index = appState.selectedCuisines.indexOf(cuisine.name);

            if (index === -1) {
                appState.selectedCuisines.push(cuisine.name);
            } else {
                appState.selectedCuisines.splice(index, 1);
            }
        });

        cuisineGrid.appendChild(cuisineCard);
    });
}

// 渲染距離選項
function renderDistanceOptions() {
    const distanceOptions = document.getElementById('distance-options');
    distanceOptions.innerHTML = '';

    appData.distanceOptions.forEach(option => {
        const distanceOption = document.createElement('div');
        distanceOption.className = 'distance-option';
        distanceOption.setAttribute('data-id', option.id);
        distanceOption.innerHTML = `
            <div class="distance-icon">${option.icon}</div>
            <div class="distance-info">
                <h4>${option.name}</h4>
                <p>${option.desc}</p>
            </div>
        `;

        // 添加點擊事件
        distanceOption.addEventListener('click', function() {
            document.querySelectorAll('.distance-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
            appState.selectedDistance = option.id;
        });

        distanceOptions.appendChild(distanceOption);
    });
}

// 確認位置
function selectLocation() {
    const locationInput = document.getElementById('location-input').value;

    if (!locationInput && !appState.selectedLandmark) {
        alert('請輸入地址或選擇地標');
        return;
    }

    // 如果手動輸入但未選擇地標，嘗試匹配地標
    if (locationInput && !appState.selectedLandmark) {
        let matchedLandmark = null;

        for (const landmark of appData.landmarks) {
            // 檢查名稱或關鍵字是否匹配
            if (landmark.name === locationInput || 
                landmark.keywords.some(keyword => locationInput.includes(keyword))) {
                matchedLandmark = landmark;
                break;
            }
        }

        if (matchedLandmark) {
            appState.selectedLandmark = matchedLandmark;
        } else {
            // 如果無法匹配任何地標，預設為第一個地標
            appState.selectedLandmark = appData.landmarks[0];
        }
    }

    appState.currentLocation = appState.selectedLandmark.name;

    // 進入料理類型選擇頁面
    showPage('cuisine-page');
}

// 確認料理類型選擇
function selectCuisine() {
    if (appState.selectedCuisines.length === 0) {
        // 如果未選擇任何料理類型，預設選擇所有類型
        appState.selectedCuisines = appData.cuisineTypes.map(cuisine => cuisine.name);
    }

    // 進入距離偏好頁面
    showPage('distance-page');
}

// 獲取餐廳推薦
function getRecommendations() {
    if (!appState.selectedDistance) {
        alert('請選擇距離範圍');
        return;
    }

    // 先按照區域過濾
    let filteredRestaurants = appData.restaurants.filter(restaurant => 
        restaurant.area === appState.selectedLandmark.area
    );

    // 按照料理類型過濾
    if (appState.selectedCuisines.length > 0 && 
        appState.selectedCuisines.length < appData.cuisineTypes.length) {
        filteredRestaurants = filteredRestaurants.filter(restaurant => 
            appState.selectedCuisines.includes(restaurant.type)
        );
    }

    // 按照距離過濾（模擬）
    if (appState.selectedDistance !== 'unlimited') {
        // 在實際應用中，這裡會根據實際距離計算
        // 此處只做簡單模擬
        const distanceFilters = {
            'walk': restaurant => restaurant.landmark === appState.selectedLandmark.name,
            'bike': restaurant => true, // 騎車範圍內幾乎都可達
            'drive': restaurant => true // 開車範圍內都可達
        };

        if (distanceFilters[appState.selectedDistance]) {
            filteredRestaurants = filteredRestaurants.filter(distanceFilters[appState.selectedDistance]);
        }
    }

    // 按評分排序
    filteredRestaurants.sort((a, b) => b.rating - a.rating);

    // 保存過濾後的結果
    appState.filteredRestaurants = filteredRestaurants;

    // 顯示結果
    renderResults();

    // 進入結果頁面
    showPage('results-page');
}

// 渲染推薦結果
function renderResults() {
    const resultsCount = document.getElementById('results-count');
    const resultsLocation = document.getElementById('results-location');
    const restaurantsList = document.getElementById('restaurants-list');

    resultsCount.textContent = `找到 ${appState.filteredRestaurants.length} 家餐廳`;
    resultsLocation.textContent = `在 ${appState.currentLocation} 附近`;

    restaurantsList.innerHTML = '';

    if (appState.filteredRestaurants.length === 0) {
        restaurantsList.innerHTML = `
            <div class="no-results">
                <h3>沒有符合條件的餐廳</h3>
                <p>請嘗試調整料理類型或距離範圍</p>
                <button class="btn btn--primary btn--full-width" onclick="showPage('cuisine-page')">
                    重新選擇
                </button>
            </div>
        `;
        return;
    }

    appState.filteredRestaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'restaurant-card';
        restaurantCard.innerHTML = `
            <div class="restaurant-header">
                <div>
                    <div class="restaurant-name">${restaurant.name}</div>
                    <div class="restaurant-type">${restaurant.type}</div>
                </div>
                <div class="restaurant-rating">${restaurant.rating} ⭐</div>
            </div>
            <div class="restaurant-info">
                <div>🏠 ${restaurant.address}</div>
                <div>📞 ${restaurant.phone}</div>
                <div>⏰ ${restaurant.hours}</div>
                <div>💰 ${restaurant.price}</div>
            </div>
        `;

        // 點擊餐廳卡片顯示詳情
        restaurantCard.addEventListener('click', function() {
            appState.currentRestaurant = restaurant;
            showRestaurantDetail();
        });

        restaurantsList.appendChild(restaurantCard);
    });
}

// 顯示餐廳詳情
function showRestaurantDetail() {
    const restaurant = appState.currentRestaurant;
    const restaurantDetail = document.getElementById('restaurant-detail');

    restaurantDetail.innerHTML = `
        <div class="restaurant-detail-card">
            <div class="restaurant-detail-header">
                <div class="restaurant-detail-name">${restaurant.name}</div>
                <div class="restaurant-detail-type">${restaurant.type}</div>
                <div class="restaurant-detail-rating">${restaurant.rating} ⭐</div>
            </div>
            <div class="restaurant-detail-body">
                <div class="detail-section">
                    <h4>地址</h4>
                    <p>${restaurant.address}</p>
                </div>
                <div class="detail-section">
                    <h4>營業時間</h4>
                    <p>${restaurant.hours}</p>
                </div>
                <div class="detail-section">
                    <h4>推薦菜品</h4>
                    <p>${restaurant.specialty}</p>
                </div>
                <div class="detail-section">
                    <h4>價位</h4>
                    <p>${restaurant.price}</p>
                </div>
                <div class="contact-buttons">
                    <a href="tel:${restaurant.phone}" class="contact-btn contact-btn--phone">📞 撥打電話</a>
                    <a href="https://maps.google.com/?q=${restaurant.address}" target="_blank" class="contact-btn contact-btn--map">🗺️ 導航</a>
                </div>
            </div>
        </div>
    `;

    // 顯示詳情頁面
    showPage('detail-page');
}