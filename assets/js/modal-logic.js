
document.addEventListener('DOMContentLoaded',() => {
    
    // נאתר את הפופ-אפ עצמו
    const modal = document.getElementById('contact-modal');
    
    // אם הפופ-אפ לא קיים בדף (לדוגמה, אם זה דף ללא CTA), נעצור.
    if (!modal) {
        return; 
    }

    // נאתר את כפתורי הסגירה והפתיחה
    const closeBtn = modal.querySelector('.close-btn');
    const openPopupButtons = document.querySelectorAll('a[href="#contact-modal"]'); 

    // פונקציה לפתיחת הפופ-אפ
    function openModal(e) {
        e.preventDefault(); // מונע מעבר אוטומטי לעוגן
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    }

    // פונקציה לסגירת הפופ-אפ
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }

    // הוספת מאזינים לכפתורי הפתיחה
    openPopupButtons.forEach(button => {
        // נוודא שכל כפתור CTA שיש לו href="#contact-modal" פותח את המודאל
        button.addEventListener('click', openModal);
    });

    // סגירת הפופ-אפ בלחיצה על X 
    closeBtn.addEventListener('click', closeModal);

    // סגירת הפופ-אפ בלחיצה מחוץ לתיבה (רקע שחור)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // סגירת הפופ-אפ בלחיצה על מקש ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });
});



document.querySelector("#page-block-1 > section")



//
// קובץ JavaScript: script.js
// כולל את הלוגיקה המעודכנת לעדכון הנקודות
//

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. תפיסת האלמנטים
    const items = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    let currentIndex = 0;
    const intervalTime = 5000; // 5 שניות למעבר אוטומטי

    // בדיקה קריטית
    if (items.length === 0 || !prevBtn || !nextBtn || dots.length === 0) {
        console.error("קרוסלת ההמלצות לא עובדת: חסרים אלמנטים.");
        return; 
    }

    // 2. פונקציה להצגת האלמנט הנכון ועדכון הנקודות
    function showTestimonial(index) {
        // לולאה שתבטיח מעבר חלק 
        if (index >= items.length) {
            currentIndex = 0; 
        } else if (index < 0) {
            currentIndex = items.length - 1; 
        } else {
            currentIndex = index;
        }

        // הסתר את כל ההמלצות עם אנימציה
        items.forEach(item => {
            item.classList.add('hidden');
            item.classList.remove('opacity-100', 'transition', 'duration-500'); 
        });

        // הצג את ההמלצה הנוכחית
        const currentItem = items[currentIndex];
        currentItem.classList.remove('hidden');
        
        // אנימציית Fade-in קלה
        setTimeout(() => {
             currentItem.classList.add('opacity-100', 'transition', 'duration-500');
        }, 50);

        // *** עדכון הנקודות - ודא שקוד זה קיים ***
        dots.forEach((dot, dotIndex) => {
            if (dotIndex === currentIndex) {
                // נקודה פעילה: זהב (amber-500)
                dot.classList.remove('bg-gray-300', 'hover:bg-gray-400');
                dot.classList.add('bg-amber-500');
            } else {
                // נקודה לא פעילה: אפור (gray-300)
                dot.classList.remove('bg-amber-500');
                dot.classList.add('bg-gray-300', 'hover:bg-gray-400');
            }
        });

        resetAutoSlide(); 
    }

    // 3. לוגיקה למעבר אוטומטי
    let slideInterval;
    
    function startAutoSlide() {
        slideInterval = setInterval(() => {
            showTestimonial(currentIndex + 1); 
        }, intervalTime);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval); 
        startAutoSlide(); 
    }


    // 4. טיפול באירועי לחיצה (ידני ונקודות)
    nextBtn.addEventListener('click', () => {
        showTestimonial(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showTestimonial(currentIndex - 1);
    });
    
    // טיפול בלחיצה על הנקודות
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            showTestimonial(index);
        });
    });

    // 5. אתחול
    items.forEach((item, index) => {
        if (index !== 0) {
            item.classList.add('hidden');
            item.classList.add('opacity-0');
        }
    });
    
    showTestimonial(0);
    startAutoSlide();
});

document.getElementById('exit-popup').classList.remove('hidden')
document.addEventListener('DOMContentLoaded', function() {
    
    // ... כל שאר הקוד שלך (קרוסלת המלצות וכו') ...
    
    // הגדרת משתנים
    const popup = document.getElementById('exit-popup');
    const closeButton = document.getElementById('close-popup');
    // בדיקה האם הפופ-אפ כבר הוצג בסשן הנוכחי
    const hasShownPopup = sessionStorage.getItem('hasShownExitPopup'); 
    
    if (!popup || !closeButton) return;

    // **********************************************
    // 1. הסתרה מיידית של הפופ-אפ (קריטי!)
    // **********************************************
    // מוודאים שהפופ-אפ מוסתר מיד בטעינה, כדי למנוע הצגה מהירה מדי.
    if (!popup.classList.contains('hidden')) {
        popup.classList.add('hidden');
    }

    // **********************************************
    // 2. לוגיקת סגירת הפופ-אפ (שומרים על הפונקציונליות)
    // **********************************************
    
    function closePopup() {
        popup.classList.add('hidden');
        sessionStorage.setItem('hasShownExitPopup', 'true'); 
    }

    closeButton.addEventListener('click', closePopup);
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && !popup.classList.contains('hidden')) {
            closePopup();
        }
    });


    // **********************************************
    // 3. לוגיקת הצגה לאחר 4 דקות (Time Delay)
    // **********************************************

    const delayInMilliseconds = 4 * 60 * 1000; // 4 דקות = 240,000 מילישניות

    if (!hasShownPopup) {
        setTimeout(function() {
            
            // מציג את הפופ-אפ רק אם הוא מוסתר כרגע
            if (popup.classList.contains('hidden')) {
                popup.classList.remove('hidden');
            }
            
        }, delayInMilliseconds); // הפעלת הפונקציה לאחר 4 דקות
    }
});