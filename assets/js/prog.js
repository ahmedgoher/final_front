document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("semiContainer");
    const subjectInput = document.getElementById("studentName");
    const subjectButtons = document.querySelectorAll(".dropdown-item");

    // إنشاء البروجريس
    var bar = new ProgressBar.SemiCircle(container, {
        strokeWidth: 8,
        color: "#092c4c",
        trailColor: "#eee",
        trailWidth: 8,
        easing: "easeInOut",
        duration: 1500,
        text: {
            value: "0%",
            style: {
                color: "#333",
                position: "absolute",
                left: "50%",
                top: "60%",
                padding: 0,
                margin: 0,
                transform: "translate(-50%, -50%)",
                "font-size": "20px",
                "font-weight": "bold",
            },
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + "%");
        },
    });

    // القيم الخاصة بكل مادة
    const subjectProgress = {
        arabic: 0.9, // 90%
        english: 0.65, // 65%
        chemistry: 0.88, // 88%
    };

    // النسبة المبدئية (عربي)
    bar.animate(subjectProgress["arabic"]);

    // لما المستخدم يختار مادة
    subjectButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const subject = btn.getAttribute("data-subject");
            const name = btn.textContent.trim();

            // نغيّر اسم المادة في الحقل
            subjectInput.value = name;

            // نغير نسبة التقدم
            if (subjectProgress[subject] !== undefined) {
                bar.animate(subjectProgress[subject]);
            }
        });
    });
});
