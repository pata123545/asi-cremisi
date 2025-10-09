
document.addEventListener('DOMContentLoaded', function() {
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
});